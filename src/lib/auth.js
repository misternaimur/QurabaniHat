/** @format */

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { genericOAuth } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is required");
}

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
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
