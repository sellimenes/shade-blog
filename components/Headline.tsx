import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import moment from "moment";
import { cache } from "react";

import prisma from "@/lib/prismadb";

export const revalidate = 10;

type Props = {};

const getPosts = cache(async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
    include: {
      category: true,
    },
  });
  return posts;
});

const Headline = async (props: Props) => {
  const posts = await getPosts();
  return (
    <section className="flex flex-col md:flex-row gap-4 container">
      {posts.slice(0, 1).map((post) => (
        <Link
          href={post.slug}
          className="flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
          key={post.slug}
        >
          <article className="relative w-full h-auto aspect-video">
            <Image
              fill
              priority
              src={post.coverImage}
              alt={post.title}
              sizes="100%"
              className="cover"
              quality={70}
            />
            <div className="absolute z-50 bottom-3 left-5 max-w-[75%] text-white flex flex-col gap-1">
              <h2 className="xl:text-4xl lg:text-3xl line-clamp-2">
                {post.title}
              </h2>
              <p className="text-xs opacity-75 flex items-center gap-4 whitespace-nowrap">
                Selim Enes Erdogan{" "}
                <span className="flex items-center gap-1 mt-[2px]">
                  <Clock size={12} />
                  {moment(post.createdAt).format("DD.MM.YYYY")}
                </span>
              </p>
            </div>
            <p className="absolute z-50 top-5 lg:top-8 left-0 p-2 bg-green-700 text-white lg:text-md text-sm rounded-r">
              {post.category?.name}
            </p>
          </article>
        </Link>
      ))}
      <div className="flex-[2] flex flex-col gap-4">
        {posts.slice(1).map((post) => (
          <Link
            href={post.slug}
            className="flex-[4] relative rounded-2xl overflow-hidden headlineAfter"
            key={post.slug}
          >
            <article className="relative w-full h-auto aspect-video">
              <Image
                fill
                priority
                sizes="100%"
                src={post.coverImage}
                alt={post.title}
                className="cover"
                quality={70}
              />
              <div className="absolute z-50 bottom-2 left-5 max-w-[75%] text-white flex flex-col">
                <h2 className="xl:text-2xl lg:text-xl md:text-sm lg:leading-7 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-xs opacity-75 flex items-center gap-4 whitespace-nowrap">
                  Selim Enes Erdogan{" "}
                  <span className="flex items-center gap-1 mt-[2px]">
                    <Clock size={12} />
                    {moment(post.createdAt).format("DD.MM.YYYY")}
                  </span>
                </p>
              </div>
              <p className="absolute z-50 top-4 lg:top-8 left-0 p-2 bg-green-700 text-white lg:text-md text-xs rounded-r">
                {post.category?.name}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Headline;
