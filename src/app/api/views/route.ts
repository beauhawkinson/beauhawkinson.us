import { NextResponse } from "next/server";

import { redis } from "@/lib/redis";

import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for");
  const blocked = process.env.BLOCKED_IPS?.split(",") ?? [];
  const isDev = process.env.NODE_ENV === "development";
  if (isDev || blocked.includes(ip ?? "")) return NextResponse.json({ ok: true });
  const count = await redis.hincrby("pageviews", "website", 1);
  return NextResponse.json({ count });
}
