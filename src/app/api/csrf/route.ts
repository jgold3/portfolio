import { NextResponse } from "next/server";
import { generateCsrfSecret, generateCsrfToken } from "@/lib/csrf";

export async function GET() {
  const secret = generateCsrfSecret();
  const token = generateCsrfToken(secret);

  const response = NextResponse.json({ csrfToken: token });
  response.cookies.set("csrfSecret", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 2,
  });

  return response;
}
