import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  console.log(name, email, message);
  return NextResponse.json({ message: "Message sent" });
}

export async function GET() {
  return NextResponse.redirect(new URL("/404", process.env.NEXT_PUBLIC_URL));
}
