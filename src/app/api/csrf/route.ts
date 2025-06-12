import { NextResponse } from "next/server";
import { generateCsrfSecret, generateCsrfToken } from "@/lib/csrf";
import { cookies } from "next/headers";

export async function GET() {
  const secret = generateCsrfSecret();
  const token = generateCsrfToken(secret);

  console.log(`secret in csrf route: ${secret}`);
  console.log(`token in csrf route: ${token}`);

  const response = NextResponse.json({ csrfToken: token });
  const cookieStore = await cookies();
  cookieStore.set("csrfSecret", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 2,
  });
  return response;
}
