import axios from "axios";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export const createPost = async (
  title: string,
  content: string,
  categoryId: string,
  coverImage: string
) => {
  try {
    await axios.post("/api/post", {
      title,
      content,
      categoryId,
      coverImage,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export async function getPosts(isHero: boolean = false) {
  try {
    const response = await axios.get("/api/post", {
      data: {
        isHero,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Not used yet
export const getPost = async (id: String) => {
  try {
    const response = await axios.get(`/api/post/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deletePost = async (id: String) => {
  try {
    await axios.delete(`/api/post/${id}`, {
      data: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSinglePost = async (slug: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: {
        category: true,
      },
    });
    if (!post) {
      return null;
    }
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const togglePublishPost = async (id: string, published: boolean) => {
  try {
    const post = await axios.put(`/api/post/${id}`, {
      id,
      published,
    });
    return post.data;
  } catch (error) {
    console.log("POST PUBLISH", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
};
