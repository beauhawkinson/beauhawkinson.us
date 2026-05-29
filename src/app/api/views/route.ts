import { NextResponse } from "next/server";

import { redis } from "@/lib/redis";

import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for");
  const blocked = process.env.BLOCKED_IPS?.split(",") ?? [];
  const isDev = process.env.NODE_ENV === "development";
  const isMe = isDev || blocked.includes(ip ?? "");

  if (!isMe) {
    await redis.hincrby("pageviews", "website", 1);
  }

  const count = await redis.hget("pageviews", "website");
  return NextResponse.json({ count });
}
