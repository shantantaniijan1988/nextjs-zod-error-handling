import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { username, password } = body;

    const validetedField = SignupSchema.safeParse({ username, password });

    if (!validetedField.success) {
      return new NextResponse(
        JSON.stringify({ errors: validetedField.error.flatten().fieldErrors }),
        { status: 400 }
      );
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "サーバーエラーです" }), {
      status: 500,
    });
  }
};
