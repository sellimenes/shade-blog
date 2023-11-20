import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import RelatedPosts from "@/components/RelatedPosts";

import { getSinglePost } from "@/actions/postActions";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = (post: any): Metadata => {
  return {
    title: `${post.title}`,
  };
};

const BlogDetail = async ({ params }: Props) => {
  const post = await getSinglePost(params.slug);

  if (!post) {
    return notFound();
  }

  const metadata = generateMetadata(post);
  return (
    <div className="container flex flex-col-reverse lg:flex-row gap-10">
      <div className="flex-1">
        <article className="mb-8">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="opacity-70 mt-2 mb-4">
            Geçtiğimiz saatlerde sert bir yükseliş gösteren Bitcoin (BTC), 35
            bin dolara iğne attı. Bu seviye, en son Mayıs 2022&apos;de
            görülmüştü. BTC&apos;deki yükseliş, altcoin&apos;leri de
            canlandırdı.
          </p>
          <div className="relative w-full aspect-video mb-6">
            <Image
              src={post.coverImage}
              alt="blog title"
              fill
              loading="lazy"
              quality={70}
            />
          </div>
          {post.content && (
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="postWrapper"
            />
          )}
        </article>
        <RelatedPosts categoryId={post.categoryId} postId={post.id} />
      </div>
      <div className="w-[300px] h-[250px] bg-red-500 lg:mt-11 lg:sticky top-5"></div>
    </div>
  );
};

export default BlogDetail;
