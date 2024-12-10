"use server";

import { auth } from "@/lib/auth";
import { db } from "./drizzle";
import { resumes } from "./schema";
import { revalidatePath } from "next/cache";

const getUserIdOrThrow = async () => {
  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error("Usuário não encontrado.");

  return userId;
};

export const createResume = async (title: string) => {
  const userId = await getUserIdOrThrow();

  const newResume = await db
    .insert(resumes)
    .values({ title, userId })
    .returning();

  revalidatePath("/dashboard/resumes");

  return newResume[0];
};
