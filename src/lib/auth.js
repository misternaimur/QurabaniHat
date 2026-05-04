/** @format */

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { clientPromise, dbPromise } from "@/lib/mongodb";

const [client, db] = await Promise.all([clientPromise, dbPromise]);
const hasMongo = Boolean(client && db);

const authSecret = process.env.BETTER_AUTH_SECRET;
const isDevelopment = process.env.NODE_ENV !== "production";
const authBaseURL = isDevelopment
  ? "http://localhost:3000"
  : process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
    "http://localhost:3000";

if (!authSecret) {
  console.info(
    "BETTER_AUTH_SECRET not set; auth sessions may not work in production.",
  );
}

export const auth = betterAuth({
  secret: authSecret,
  baseURL: authBaseURL,
  database: hasMongo
    ? mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client,
      })
    : undefined,
  plugins: [nextCookies()],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      scope: ["openid", "email", "profile"],
      prompt: "select_account",
      accessType: "offline",
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
