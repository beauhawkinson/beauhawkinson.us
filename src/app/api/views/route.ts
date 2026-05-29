import { NextResponse } from "next/server";

import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function POST() {
  const count = await redis.hincrby("pageviews", "website", 1);
  return NextResponse.json({ count });
}
