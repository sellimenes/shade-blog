import axios from "axios";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export const createPost = async (
  title: String,
  content: String,
  categoryId: String
) => {
  try {
    axios.post("/api/post", {
      title,
      content,
      categoryId,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export async function getPosts() {
//   try {
//     const posts = await prisma.post.findMany({
//       include: {
//         category: true,
//       },
//     });

//     // Her post için sadece kategori ismini al
//     const postsWithCategoryName = posts.map((post) => ({
//       ...post,
//       category: post.category ? post.category.name : null,
//     }));

//     return postsWithCategoryName;
//   } catch (error) {
//     console.log("POST GET", error);
//     throw new Error("Something went wrong");
//   }
// }

export async function getPosts() {
  try {
    const response = await axios.get("/api/post");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

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
    axios.delete(`/api/post/${id}`);
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
