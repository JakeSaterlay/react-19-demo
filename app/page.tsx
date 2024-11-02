import { db } from "@/db";
import { usersTable } from "@/db/schema";

export default async function Home() {
  const users = await db.select().from(usersTable).all();
  return <div className="text-blue-500">{users.map((user) => user.name)}</div>;
}
