import { MongoClient } from "mongodb";

let MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

const uri = MONGODB_URI;
const client = new MongoClient(uri, {
  minPoolSize: 1,
  maxPoolSize: 20
});

async function connectDB() {
  try {
    await client.connect();
  } catch (e) {
    console.error("MongoDB connection error:", e)
  }
}

connectDB();

export const db = client.db("test")
