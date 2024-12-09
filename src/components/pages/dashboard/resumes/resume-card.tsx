import Link from "next/link";
import { ResumeCardButton } from "./resume-card-button";

export const ResumeCard = () => {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumeCardButton
        title="Meu currículo"
        description="Ultima atualização há 22 min"
      />
    </Link>
  );
};
