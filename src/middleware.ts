import { NextRequest, NextResponse } from "next/server";

const BLOCKED_USER_AGENTS = [
  /ahrefsbot/i,
  /mj12bot/i,
  /dotbot/i,
  /petalbot/i,
  /semrush/i,
  /python-requests/i,
  /curl\//i,
  /go-http-client/i,
  /node-fetch/i,
  /postman/i,
  /insomnia/i,
  /curl/i,
  /wget/i,
  /httpie/i,
  /httpie/i,
  /driftnet-crawler/i,
  /zgrab/i,
];

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

  console.log(`UA: ${ua} | IP: ${ip} | Path: ${request.nextUrl.pathname}`);

  if (BLOCKED_USER_AGENTS.some((pattern) => pattern.test(ua))) {
    return new Response("Blocked bot", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
