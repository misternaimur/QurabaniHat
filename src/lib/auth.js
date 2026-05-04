/** @format */

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { genericOAuth } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { clientPromise, dbPromise } from "@/lib/mongodb";

const [client, db] = await Promise.all([clientPromise, dbPromise]);
const hasMongo = Boolean(client && db);

const authSecret = process.env.BETTER_AUTH_SECRET;

if (!authSecret) {
  console.info(
    "BETTER_AUTH_SECRET not set; auth sessions may not work in production.",
  );
}

export const auth = betterAuth({
  secret: authSecret,
  baseURL:
    process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
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
