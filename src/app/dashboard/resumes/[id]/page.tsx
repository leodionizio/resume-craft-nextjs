import { ResumePage } from "@/components/pages/dashboard/resume";
import { getResumeById } from "@/db/queries";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

type DashboardResumePageProps = {
  params: Promise<{ id: string }>;
};

export default async function DashboardResumePage({
  params,
}: DashboardResumePageProps) {
  const { id } = await params;
  const resume = await getResumeById(id);

  if (!resume) return notFound();

  const initialData = resume.data as ResumeData;
  const session = await auth();

  return (
    <ResumePage
      title={resume.title}
      initialData={initialData}
      user={session?.user}
    />
  );
}
