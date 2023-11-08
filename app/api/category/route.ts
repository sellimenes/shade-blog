import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug: name.toLowerCase().replace(" ", "-"),
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("CATEGORY POST", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.log("CATEGORY GET", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log("CATEGORY DELETE", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
