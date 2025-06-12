"use server";

import { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const REFILL_RATE = 5;
const INTERVAL = "1 h";
const MAX_TOKENS = 5;

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.tokenBucket(REFILL_RATE, INTERVAL, MAX_TOKENS),
  analytics: true,
});

export async function rateLimit(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null;
  if (!ip) {
    return { success: false, message: "Missing IP address", status: 400 };
  }
  const { success } = await rateLimiter.limit(ip);
  const message = success ? "Rate limit not exceeded" : "Rate limit exceeded";
  return { success, message, status: success ? 200 : 429 };
}
