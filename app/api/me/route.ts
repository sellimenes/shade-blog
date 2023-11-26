import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (!email) {
    return new NextResponse("Email is required", { status: 400 });
  }
  try {
    const me = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return NextResponse.json(me);
  } catch (error) {
    console.log("ME GET", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
