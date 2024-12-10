import Link from "next/link";
import { ResumeCardButton } from "./resume-card-button";
import { ResumeDto } from "@/db/types";
import { formatDistanceToNow } from "date-fns";

type ResumeCardProps = {
  resume: ResumeDto;
};

export const ResumeCard = ({ resume }: ResumeCardProps) => {
  const formattedLastUpdated = formatDistanceToNow(new Date(resume.updatedAt), {
    addSuffix: true,
  });

  return (
    <Link href={`/dashboard/resumes/${resume.id}`} className="block w-full">
      <ResumeCardButton
        title={resume.title}
        description={`Ultima atualização ${formattedLastUpdated}`}
      />
    </Link>
  );
};
