export function calculateMatchScore(
  userSkills: string[] | string | undefined | null,
  jobSkills: string[] | string | undefined | null
): number {
  if (!userSkills || !jobSkills) return 0;

  const uSkillsArr = Array.isArray(userSkills) ? userSkills : [userSkills];
  const jSkillsArr = Array.isArray(jobSkills) ? jobSkills : [jobSkills];

  if (jSkillsArr.length === 0) return 0;

  const normalize = (s: string) => 
    s.toLowerCase().trim().replace(/[.\-\s]/g, "");

  const normalizedUser = uSkillsArr.map(normalize);
  const normalizedJob = jSkillsArr.map(normalize);

  const matches = normalizedJob.filter(jobSkill =>
    normalizedUser.some(userSkill => 
      userSkill === jobSkill || 
      (jobSkill.length > 3 && (userSkill.includes(jobSkill) || jobSkill.includes(userSkill)))
    )
  );

  return Math.round((matches.length / normalizedJob.length) * 100);
}