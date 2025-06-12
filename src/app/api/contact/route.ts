import { NextRequest, NextResponse } from "next/server";
import { verifyCsrfToken } from "@/lib/csrf";
import { rateLimit } from "@/lib/rateLimit";
import nodemailer from "nodemailer";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const csrfToken = request.headers.get("X-CSRF-Token");
  const { name, email, message } = await request.json();
  console.log("Incoming cookies:", (await cookies()).getAll());
  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }
  console.log(`csrfToken in contact route: ${csrfToken}`);
  if (!csrfToken) {
    return NextResponse.json({ message: "Missing CSRF token" }, { status: 403 });
  }
  const isCsrfValid = await verifyCsrfToken(csrfToken);
  if (!isCsrfValid) {
    return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
  }

  const rateLimitResult = await rateLimit(request);
  if (!rateLimitResult.success) {
    return NextResponse.json({ message: rateLimitResult.message }, { status: rateLimitResult.status });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Message from ${name}`,
    text: `
      You received a new message from your contact form:
      
      Name: ${name}
      Email: ${email}
      Message Below: 
      
      ${message}
    `,
  };

  const { accepted } = await transporter.sendMail(mailOptions);
  if (!accepted.length) {
    return NextResponse.json({ message: "Message not sent" }, { status: 500 });
  }
  return NextResponse.json({ message: "Message sent" });
}

export async function GET() {
  return NextResponse.redirect(new URL("/404", process.env.NEXT_PUBLIC_URL));
}
