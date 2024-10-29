import { db } from "@/db";
import { usersTable } from "@/db/schema";

export default async function Home() {
  const users = await db.select().from(usersTable).all();
  console.log(users);
  return (
    <div>Test 1</div>
  );
}
