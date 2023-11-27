import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postId } = body;

    const reaction = await prisma.reactions.create({
      data: {
        postId,
      },
    });

    return NextResponse.json(reaction);
  } catch (error) {
    console.log("REACTION POST", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { reactionName, postId } = body;
    const reaction = await prisma.reactions.update({
      where: { postId },
      data: {
        [reactionName]: { increment: 1 },
      },
    });
    return NextResponse.json(reaction);
  } catch (error) {
    console.log("REACTION UPDATE", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");
  if (!postId) {
    return new NextResponse("postId is required", { status: 400 });
  }
  try {
    const reactions = await prisma.reactions.findUnique({
      where: {
        postId,
      },
    });
    return NextResponse.json(reactions);
  } catch (error) {
    console.log("REACTION GET", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
