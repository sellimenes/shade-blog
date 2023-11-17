import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, categoryId, coverImage } = body;

    const turkishToEnglish: { [key: string]: string } = {
      ç: "c",
      Ç: "C",
      ğ: "g",
      Ğ: "G",
      ı: "i",
      İ: "I",
      ö: "o",
      Ö: "O",
      ş: "s",
      Ş: "S",
      ü: "u",
      Ü: "U",
    };

    let slug = title.toLowerCase();

    for (let char in turkishToEnglish) {
      slug = slug.replace(new RegExp(char, "g"), turkishToEnglish[char]);
    }

    slug = slug.replace(/ +/g, "-");

    if (!title || !content || !categoryId) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    // if slug exists, return error
    const existingPost = await prisma.post.findUnique({
      where: {
        slug,
      },
    });

    if (existingPost) {
      return new NextResponse("Post with exact this title already exists", {
        status: 400,
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        slug,
        coverImage,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("POST POST", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log("POST GET", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
