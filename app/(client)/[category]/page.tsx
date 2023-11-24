import React from "react";
import prisma from "@/lib/prismadb";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Clock } from "lucide-react";

type Props = {
  params: {
    category: string;
  };
};

const getCategoryPosts = async (categorySlug: any) => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      category: {
        slug: categorySlug,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
    },
  });

  return posts;
};

const CategoryPage = async ({ params }: Props) => {
  const posts = await getCategoryPosts(params.category);
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-3">
      {posts.map((post: any) => (
        <SingleBlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CategoryPage;

const SingleBlogCard = ({ post }: any) => {
  return (
    <Link
      href={`${post.category?.slug}/${post.slug}`}
      className="p-3 border rounded-lg"
    >
      <div className="relative aspect-video">
        <Image
          src={post.coverImage}
          sizes="100%"
          alt="blog title"
          fill
          className="aspect-video cover rounded "
          loading="lazy"
          quality={70}
        />
        <p className="absolute z-50 bottom-5 lg:bottom-8 left-0 p-2 bg-green-700 text-white lg:text-md text-sm rounded-r">
          {post.category?.name}
        </p>
      </div>
      <h3 className="mt-4 mb-1 leading-5 line-clamp-2 hover:text-orange-700">
        {post.title}
      </h3>
      <p className="text-xs opacity-75 flex lg:items-center lg:gap-4 whitespace-nowrap flex-col lg:flex-row">
        Cedric{" "}
        <span className="flex items-center gap-1 mt-[2px]">
          <Clock size={12} /> {moment(post.createdAt).format("DD.MM.YYYY")}
        </span>
      </p>
    </Link>
  );
};
