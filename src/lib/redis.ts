const restUrl = () => process.env.UPSTASH_REDIS_REST_URL!;
const restToken = () => process.env.UPSTASH_REDIS_REST_TOKEN!;

export const redis = {
  async hincrby(key: string, field: string, increment: number): Promise<number | null> {
    try {
      const res = await fetch(`${restUrl()}/hincrby/${key}/${field}/${increment}`, {
        headers: { Authorization: `Bearer ${restToken()}` },
      });
      const data = (await res.json()) as { result?: unknown };
      return typeof data.result === "number" ? data.result : null;
    } catch (err) {
      console.error("Redis hincrby error:", err);
      return null;
    }
  },

  async hget(key: string, field: string): Promise<number | null> {
    try {
      const res = await fetch(`${restUrl()}/hget/${key}/${field}`, {
        headers: { Authorization: `Bearer ${restToken()}` },
      });
      const data = (await res.json()) as { result?: unknown };
      return typeof data.result === "number" ? data.result : null;
    } catch (err) {
      console.error("Redis hget error:", err);
      return null;
    }
  },
};
