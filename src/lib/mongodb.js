/** @format */

import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI || "";

if (!mongoUri) {
  console.info("MONGODB_URI not set; MongoDB client will not be initialized.");
}

const globalForMongo = globalThis;

if (!globalForMongo.__mongoClient) {
  globalForMongo.__mongoClient = mongoUri ? new MongoClient(mongoUri) : null;
}

export const clientPromise = Promise.resolve(globalForMongo.__mongoClient);

export const dbPromise = clientPromise.then((client) => client?.db() ?? null);
