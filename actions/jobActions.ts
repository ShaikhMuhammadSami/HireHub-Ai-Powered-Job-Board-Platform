"use server"

import { db } from "@/lib/db"
import { jobs, NewJob, NewUser, users } from "@/lib/schema"
import { and, desc ,eq} from "drizzle-orm"
import { auth,currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { calculateMatchScore } from "@/lib/matchScore";
import { jobFormSchema, JobFormValues } from "@/lib/validators"

export async function getJobs(){
    try{
        const jobsData = await db
        .select()
        .from(jobs)
        .orderBy(desc(jobs.createdAt))

        return jobsData
    }catch(err){
        console.log(err)
        return []
    }
}

// Isse imports mein add kar lena (and eq to already hai hi)
export async function deleteJob(jobId: string) {
    const { userId } = await auth();

    if (!userId) {
        return { success: false, error: "User not logged in" };
    }

    try {
        // Hum check karenge ke job delete karne wala wahi user hai jisne post ki thi
        await db.delete(jobs).where(
            and(
                eq(jobs.id, jobId),
                eq(jobs.userId, userId)
            )
        );

        revalidatePath("/jobs");
        revalidatePath("/dashboard/my-posted-jobs"); // Apne actual path ke mutabiq change karlein
        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false, error: "Failed to delete the job" };
    }
}

export async function getJobsForHomePage(){
    try{
        const jobsData = await db
        .select()
        .from(jobs)
        .orderBy(desc(jobs.createdAt)).limit(6)

        return jobsData
    }catch(err){
        console.log(err)
        return []
    }
}

export async function postJobs(jobsData: JobFormValues) {
  const { userId } = await auth();
  const clerkUser = await currentUser();
  
  if (!userId || !clerkUser) {
    return { success: false, error: "User not found or not logged in" };
  }

  const validation = jobFormSchema.safeParse(jobsData);
  if (!validation.success) {
    return { success: false, error: "Invalid job data provided" };
  }

  try {
    const data = validation.data;

    await db.insert(users)
      .values({
        id: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: clerkUser.fullName || `${clerkUser.firstName} ${clerkUser.lastName}` || "User",
        image: clerkUser.imageUrl,
        role: "EMPLOYER", 
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          email: clerkUser.emailAddresses[0].emailAddress,
          name: clerkUser.fullName || `${clerkUser.firstName} ${clerkUser.lastName}` || "User",
          image: clerkUser.imageUrl,
        },
      });
    // --- UPSERT LOGIC END ---

    // Ab Job insert karein (Foreign key error nahi aayega kyunke user upar confirm ho gaya)
    await db.insert(jobs).values({
      title: data.title,
      company: data.company,
      location: data.location,
      jobType: data.jobType as any,
      experienceLevel: data.experienceLevel as any,
      salary: data.salary,
      description: data.description,
      applicationUrl: data.applicationUrl,
      userId: userId,
      skills: data.skills.split(",").map((s) => s.trim()),
    });

    revalidatePath("/jobs");
    return { success: true };
    
  } catch (error: any) {
    console.log("Full Error:", error);
    // Dost ko exact error dikhane ke liye error.message return kar rahe hain
    return { 
      success: false, 
      error: error.message || "Failed to create the job" 
    };
  }
}

export async function updateProfile(profileData : NewUser){
    const {userId} = await auth()
    if (!userId) {
        return { success: false, error: "User not found or not logged in" };
    }

        try {
    await db.update(users).set({
        role: profileData.role,
        image: profileData.image,
        name: profileData.name,
        email: profileData.email,
        resume: profileData.resume,
        skills: profileData.skills,
    }).where(eq(users.id, userId));
    revalidatePath("/Profile/profilePage");
    return { success: true };
} catch (error) {
    console.log(error);
    return { success: false, error: "Failed to update the profile" };
}
}



export async function getJobsWithMatchScore() {
  const { userId } = await auth();
  if (!userId) return [];

  // User ki skills lao
  const userArr = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const userSkills = userArr[0]?.skills ?? [];

  // Saari jobs lao
  const allJobs = await db
    .select()
    .from(jobs)
    .orderBy(desc(jobs.createdAt));

  // Har job pe match score calculate karo
  const jobsWithScore = allJobs.map((job) => ({
    ...job,
    matchScore: calculateMatchScore(userSkills, job.skills ?? []),
  }));

  // Score ke hisaab se sort karo — highest pehle
  return jobsWithScore.sort((a, b) => b.matchScore - a.matchScore);
}
   