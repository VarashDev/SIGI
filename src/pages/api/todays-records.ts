import type { APIRoute } from "astro";
import { db, Record } from "../../db"; // adjust path to your db/schema

export const GET: APIRoute = async () => {
  // Start and end of today in UTC
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  // Query records between todayStart and todayEnd
  const records = await db.select(Record)
    .where(r => r.recorded >= todayStart.toISOString() && r.recorded <= todayEnd.toISOString());

  return new Response(JSON.stringify(records), {
    headers: { "Content-Type": "application/json" },
  });
};
