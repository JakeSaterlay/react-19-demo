import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await db.select().from(usersTable).all();
  if (!users)
    return NextResponse.json({ error: "Users not found" }, { status: 404 });
  return NextResponse.json(users);
}
