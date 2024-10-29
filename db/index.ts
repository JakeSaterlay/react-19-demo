import { config } from 'dotenv';
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// FOR SOME REASON WE NEED TO USE PNPM AND NOT NPM, OTHERWISE INSTALLATION FAILS
config({ path: '.env' });
 
 const client = createClient({
    url: process.env.TURSO_DATABASE_URL || "",
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
export const db = drizzle(client);