import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request, { id }: { id: string }) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.log("POST GET", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.log("POST DELETE", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, content, categoryId, published } = body;
    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        categoryId,
        published,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.log("POST PUT", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
