"use server";

import { z } from "zod";
import prisma from "@/app/lib/prisma";

interface CreateAccount {
  username: string;
  password: string;
}

const SignupSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, { message: "ユーザーネームを入力して下さい。" })
    .max(12, { message: "ユーザネームは最大12文字までです。" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "パスワードを入力して下さい。" })
    .min(4, { message: "パスワードは4文字以上が必要です。" })
    .max(12, { message: "パスワードは最大12文字までです。" }),
});

export const createAccount = async (data: CreateAccount) => {
  const validatedFields = SignupSchema.safeParse({
    username: data.username,
    password: data.password,
  });

  if (!validatedFields.success) {
    const errors = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields, Falled to Create User.",
    };

    return errors;
  }

  const response = await prisma.user.create({
    data: {
      username: validatedFields.data.username,
      password: validatedFields.data.password,
    },
  });

  return response;
};
