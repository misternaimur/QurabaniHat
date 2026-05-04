/** @format */

import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const env = {
    MONGODB_URI: Boolean(process.env.MONGODB_URI),
    GOOGLE_CLIENT_ID: Boolean(process.env.GOOGLE_CLIENT_ID),
    GOOGLE_CLIENT_SECRET: Boolean(process.env.GOOGLE_CLIENT_SECRET),
    BETTER_AUTH_URL: Boolean(
      process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    ),
    BETTER_AUTH_SECRET: Boolean(process.env.BETTER_AUTH_SECRET),
  };

  const result = { env };

  if (process.env.MONGODB_URI) {
    try {
      const client = new MongoClient(process.env.MONGODB_URI);
      // quick ping to test connectivity; will surface DNS / TLS errors in logs
      await client.db().command({ ping: 1 });
      await client.close();
      result.mongo = { ok: true };
    } catch (err) {
      result.mongo = { ok: false, error: String(err?.message || err) };
    }
  } else {
    result.mongo = { ok: false, error: "MONGODB_URI not set" };
  }

  return NextResponse.json(result);
}
