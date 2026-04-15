
"use client";

import { getJobsWithMatchScore } from "../../../actions/jobActions";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const AiMatchScore = ({ jobDetails }: { jobDetails: any }) => {
  const [matchScore, setMatchScore] = useState<number | null>(null);

  useEffect(() => {
    getJobsWithMatchScore().then((jobs) => {
      const score = jobs.find((job) => job.id === jobDetails.id)?.matchScore ?? 0;
      setMatchScore(score);
    });
  }, [jobDetails.id]);

  return (
    <div className="flex items-center gap-2 text-md">
      <p>AI Match Score:</p>
      <Badge
        variant="success"
        className="font-medium flex gap-2 cursor-pointer active:scale-95"
      >
        {matchScore === null ? (
          <span className="animate-pulse">...</span>
        ) : (
          `${matchScore}% Match`
        )}
      </Badge>
    </div>
  );
};

export default AiMatchScore;