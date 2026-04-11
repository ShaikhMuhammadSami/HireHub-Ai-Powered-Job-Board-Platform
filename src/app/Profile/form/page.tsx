// "use client";

// import { useState } from "react";

// type Role = "SEEKER" | "EMPLOYER";

// interface ProfileFormData {
//   name: string;
//   email: string;
//   image: string;
//   role: Role;
//   resume: string;
//   skills: string[];
// }

// export default function form() {
//   const [form, setForm] = useState<ProfileFormData>({
//     name: "",
//     email: "",
//     image: "",
//     role: "SEEKER",
//     resume: "",
//     skills: [],
//   });

//   const [skillInput, setSkillInput] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
//   const [saving, setSaving] = useState(false);
//   const [saved, setSaved] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setAvatarPreview(url);
//       setForm((prev) => ({ ...prev, image: file.name }));
//     }
//   };

//   const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setForm((prev) => ({ ...prev, resume: file.name }));
//     }
//   };

//   const addSkill = () => {
//     const trimmed = skillInput.trim();
//     if (trimmed && !form.skills.includes(trimmed)) {
//       setForm((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
//       setSkillInput("");
//     }
//   };

//   const removeSkill = (skill: string) => {
//     setForm((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((s) => s !== skill),
//     }));
//   };

//   const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" || e.key === ",") {
//       e.preventDefault();
//       addSkill();
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);
//     // TODO: Replace with your actual API call
//     // await updateProfile(form);
//     await new Promise((r) => setTimeout(r, 1200));
//     setSaving(false);
//     setSaved(true);
//     setTimeout(() => setSaved(false), 2500);
//   };

//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-white font-(family-name:--font-body)">
//       {/* Top accent line */}
//       <div className="h-0.75 bg-linear-to-r from-[#ff6b35] via-[#ffd23f] to-[#ff6b35]" />

//       <div className="max-w-2xl mx-auto px-6 py-14">
//         {/* Header */}
//         <div className="mb-12">
//           <p className="text-[#ff6b35] text-xs font-bold tracking-[0.3em] uppercase mb-2">
//             Account
//           </p>
//           <h1 className="text-4xl font-black tracking-tight text-white leading-none">
//             Your Profile
//           </h1>
//           <p className="text-[#888] text-sm mt-3">
//             Keep your information up to date for the best experience.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Avatar Upload */}
//           <div className="flex items-center gap-6">
//             <div className="relative">
//               <div className="w-20 h-20 rounded-2xl bg-[#1a1a1a] border-2 border-[#2a2a2a] overflow-hidden flex items-center justify-center">
//                 {avatarPreview ? (
//                   <img
//                     src={avatarPreview}
//                     alt="Avatar"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <svg
//                     className="w-8 h-8 text-[#444]"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1.5}
//                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                     />
//                   </svg>
//                 )}
//               </div>
//               <label
//                 htmlFor="image"
//                 className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#ff6b35] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#ff8555] transition-colors"
//               >
//                 <svg
//                   className="w-3.5 h-3.5 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2.5}
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//               </label>
//               <input
//                 id="image"
//                 name="image"
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageChange}
//               />
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-white">Profile Photo</p>
//               <p className="text-xs text-[#666] mt-0.5">
//                 JPG, PNG or GIF · Max 2MB
//               </p>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="h-px bg-[#1e1e1e]" />

//           {/* Name + Email */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             <div>
//               <label className="block text-xs font-bold text-[#888] uppercase tracking-widest mb-2">
//                 Full Name
//               </label>
//               <input
//                 name="name"
//                 type="text"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Ahmed Khan"
//                 required
//                 className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/30 transition-all"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-[#888] uppercase tracking-widest mb-2">
//                 Email Address
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="ahmed@example.com"
//                 required
//                 className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35]/30 transition-all"
//               />
//             </div>
//           </div>

//           {/* Role */}
//           <div>
//             <label className="block text-xs font-bold text-[#888] uppercase tracking-widest mb-2">
//               I am a...
//             </label>
//             <div className="grid grid-cols-2 gap-3">
//               {(["SEEKER", "EMPLOYER"] as Role[]).map((r) => (
//                 <button
//                   key={r}
//                   type="button"
//                   onClick={() => setForm((prev) => ({ ...prev, role: r }))}
//                   className={`relative py-4 rounded-xl border-2 text-sm font-bold tracking-wide transition-all duration-200 ${
//                     form.role === r
//                       ? "border-[#ff6b35] bg-[#ff6b35]/10 text-[#ff6b35]"
//                       : "border-[#2a2a2a] bg-[#161616] text-[#555] hover:border-[#3a3a3a] hover:text-[#777]"
//                   }`}
//                 >
//                   <span className="flex flex-col items-center gap-1">
//                     {r === "SEEKER" ? (
//                       <svg
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.8}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                     ) : (
//                       <svg
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.8}
//                           d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                         />
//                       </svg>
//                     )}
//                     {r === "SEEKER" ? "Job Seeker" : "Employer"}
//                   </span>
//                   {form.role === r && (
//                     <span className="absolute top-2 right-2 w-2 h-2 bg-[#ff6b35] rounded-full" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Skills */}
//           <div>
//             <label className="block text-xs font-bold text-[#888] uppercase tracking-widest mb-2">
//               Skills
//             </label>
//             <div className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-3 focus-within:border-[#ff6b35] focus-within:ring-1 focus-within:ring-[#ff6b35]/30 transition-all">
//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-2">
//                 {form.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="inline-flex items-center gap-1.5 bg-[#ff6b35]/15 text-[#ff6b35] text-xs font-semibold px-3 py-1.5 rounded-lg"
//                   >
//                     {skill}
//                     <button
//                       type="button"
//                       onClick={() => removeSkill(skill)}
//                       className="hover:text-white transition-colors"
//                     >
//                       <svg
//                         className="w-3 h-3"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2.5}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={skillInput}
//                   onChange={(e) => setSkillInput(e.target.value)}
//                   onKeyDown={handleSkillKeyDown}
//                   placeholder="e.g. React, Node.js, Figma..."
//                   className="flex-1 bg-transparent text-sm text-white placeholder-[#444] focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={addSkill}
//                   className="text-xs font-bold text-[#ff6b35] hover:text-[#ff8555] transition-colors px-1"
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//             <p className="text-xs text-[#555] mt-1.5">
//               Press Enter or comma to add a skill
//             </p>
//           </div>

//           {/* Resume Upload */}
//           <div>
//             <label className="block text-xs font-bold text-[#888] uppercase tracking-widest mb-2">
//               Resume / CV
//             </label>
//             <label
//               htmlFor="resume"
//               className={`flex items-center gap-4 p-4 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
//                 form.resume
//                   ? "border-[#ff6b35]/50 bg-[#ff6b35]/5"
//                   : "border-[#2a2a2a] bg-[#161616] hover:border-[#3a3a3a]"
//               }`}
//             >
//               <div
//                 className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
//                   form.resume ? "bg-[#ff6b35]/20" : "bg-[#1e1e1e]"
//                 }`}
//               >
//                 <svg
//                   className={`w-5 h-5 ${
//                     form.resume ? "text-[#ff6b35]" : "text-[#444]"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.8}
//                     d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                   />
//                 </svg>
//               </div>
//               <div className="flex-1 min-w-0">
//                 {form.resume ? (
//                   <>
//                     <p className="text-sm font-semibold text-[#ff6b35] truncate">
//                       {form.resume}
//                     </p>
//                     <p className="text-xs text-[#666]">Click to replace</p>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-sm font-semibold text-[#777]">
//                       Upload your resume
//                     </p>
//                     <p className="text-xs text-[#555]">PDF, DOC · Max 5MB</p>
//                   </>
//                 )}
//               </div>
//               {!form.resume && (
//                 <span className="text-xs font-bold text-[#555] border border-[#2a2a2a] rounded-lg px-3 py-1.5 shrink-0">
//                   Browse
//                 </span>
//               )}
//             </label>
//             <input
//               id="resume"
//               name="resume"
//               type="file"
//               accept=".pdf,.doc,.docx"
//               className="hidden"
//               onChange={handleResumeChange}
//             />
//           </div>

//           {/* Submit */}
//           <div className="pt-2">
//             <button
//               type="submit"
//               disabled={saving}
//               className="w-full py-4 rounded-xl font-black text-sm tracking-widest uppercase bg-[#ff6b35] hover:bg-[#ff8555] disabled:opacity-60 text-white transition-all duration-200 relative overflow-hidden group"
//             >
//               <span
//                 className={`transition-all duration-200 ${saving ? "opacity-0" : "opacity-100"}`}
//               >
//                 {saved ? "✓ Saved!" : "Save Profile"}
//               </span>
//               {saving && (
//                 <span className="absolute inset-0 flex items-center justify-center">
//                   <svg
//                     className="w-5 h-5 animate-spin"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v8H4z"
//                     />
//                   </svg>
//                 </span>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

type Role = "SEEKER" | "EMPLOYER";

interface ProfileFormData {
  name: string;
  email: string;
  image: string;
  role: Role;
  resume: string;
  skills: string[];
}

export default function Form() {
  const [form, setForm] = useState<ProfileFormData>({
    name: "",
    email: "",
    image: "",
    role: "SEEKER",
    resume: "",
    skills: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      setForm((prev) => ({ ...prev, image: file.name }));
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, resume: file.name }));
    }
  };

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !form.skills.includes(trimmed)) {
      setForm((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top hero-style header — matches home page */}
      <div
        className="relative text-white px-6 py-14 text-center overflow-hidden"
        style={{
          backgroundImage: "url('/img1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Same overlay as hero */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/40" />

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
            <span className="text-white/85 text-xs font-medium tracking-wide">
              Step 1 of getting hired
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Profile
            </span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto">
            Keep your information up to date for the best experience.
          </p>
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-2xl mx-auto px-4 -mt-8 pb-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Blue top accent line */}
          <div className="h-1 bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600" />

          <div className="px-6 md:px-10 py-10">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Avatar Upload */}
              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 border-2 border-blue-100 overflow-hidden flex items-center justify-center">
                    {avatarPreview ? (
                      <img
                        src={avatarPreview}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        className="w-8 h-8 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                  <label
                    htmlFor="image"
                    className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors shadow-md"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </label>
                  <input id="image" name="image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Profile Photo</p>
                  <p className="text-xs text-gray-400 mt-0.5">JPG, PNG or GIF · Max 2MB</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ahmed Khan"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ahmed@example.com"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(["SEEKER", "EMPLOYER"] as Role[]).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, role: r }))}
                      className={`relative py-4 rounded-xl border-2 text-sm font-bold tracking-wide transition-all duration-200 ${
                        form.role === r
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-gray-200 bg-gray-50 text-gray-400 hover:border-gray-300 hover:text-gray-500"
                      }`}
                    >
                      <span className="flex flex-col items-center gap-1.5">
                        {r === "SEEKER" ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {r === "SEEKER" ? "Job Seeker" : "Employer"}
                      </span>
                      {form.role === r && (
                        <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Skills
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {form.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-100"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="hover:text-blue-900 transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={handleSkillKeyDown}
                      placeholder="e.g. React, Node.js, Figma..."
                      className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-300 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="text-xs font-bold text-blue-500 hover:text-blue-700 transition-colors px-1"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Press Enter or comma to add a skill</p>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Resume / CV
                </label>
                <label
                  htmlFor="resume"
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
                    form.resume
                      ? "border-blue-400/60 bg-blue-50"
                      : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/40"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${form.resume ? "bg-blue-100" : "bg-gray-100"}`}>
                    <svg className={`w-5 h-5 ${form.resume ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    {form.resume ? (
                      <>
                        <p className="text-sm font-semibold text-blue-600 truncate">{form.resume}</p>
                        <p className="text-xs text-gray-400">Click to replace</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-semibold text-gray-500">Upload your resume</p>
                        <p className="text-xs text-gray-400">PDF, DOC · Max 5MB</p>
                      </>
                    )}
                  </div>
                  {!form.resume && (
                    <span className="text-xs font-bold text-gray-400 border border-gray-200 bg-white rounded-lg px-3 py-1.5 shrink-0">
                      Browse
                    </span>
                  )}
                </label>
                <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleResumeChange} />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full py-4 rounded-xl font-black text-sm tracking-widest uppercase bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white transition-all duration-200 relative overflow-hidden shadow-lg shadow-blue-200"
                >
                  <span className={`transition-all duration-200 ${saving ? "opacity-0" : "opacity-100"}`}>
                    {saved ? "✓ Profile Saved!" : "Save Profile"}
                  </span>
                  {saving && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}