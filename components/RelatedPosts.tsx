import Image from "next/image";
import Link from "next/link";
import React from "react";

import prisma from "@/lib/prismadb";

type Props = {
  categoryId: string;
  postId: string;
};

const getRelatedPosts = async (categoryId: string, postId: string) => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      categoryId,
      NOT: {
        id: postId,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return posts;
};

const RelatedPosts = async ({ categoryId, postId }: Props) => {
  const posts = await getRelatedPosts(categoryId, postId);
  return (
    <section className="lg:ml-10">
      <div className="text-xl opacity-80 font-semibold mb-3">
        You May Also Like
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

const SinglePost = ({ post }: any) => {
  return (
    <Link href={post.slug} className="p-2 rounded-lg border">
      <div className="relative w-full aspect-video rounded overflow-hidden mb-2">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          loading="lazy"
          quality={70}
        />
      </div>
      <p className="md:text-sm line-clamp-2 opacity-90">{post.title}</p>
    </Link>
  );
};

export default RelatedPosts;
