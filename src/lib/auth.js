/** @format */

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { genericOAuth } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

const mongoUri = process.env.MONGODB_URI || process.env.MONGODB_URL || "";
const hasMongo = Boolean(mongoUri);

let client = null;
let db = null;
if (hasMongo) {
  client = new MongoClient(mongoUri);
  db = client.db();
} else {
  // Avoid throwing at import time so builds on platforms without env vars (e.g. Vercel) don't fail.
  // At runtime, ensure MONGODB_URI (preferred) or MONGODB_URL is provided in the deployment environment.
  console.info(
    "MongoDB URI not set; running Better Auth without MongoDB adapter.",
  );
}

export const auth = betterAuth({
  database: hasMongo
    ? mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client,
      })
    : undefined,
  plugins: [
    nextCookies(),
    genericOAuth({
      config: process.env.GOOGLE_CLIENT_ID
        ? [
            {
              providerId: "google",
              clientId: process.env.GOOGLE_CLIENT_ID,
              clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
              scopes: ["openid", "email", "profile"],
              responseType: "code",
              pkce: true,
              authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth",
              tokenUrl: "https://oauth2.googleapis.com/token",
              userInfoUrl: "https://openidconnect.googleapis.com/v1/userinfo",
              issuer: "https://accounts.google.com",
            },
          ]
        : [],
    }),
  ],
  emailAndPassword: {
    enabled: true,
  },
});
