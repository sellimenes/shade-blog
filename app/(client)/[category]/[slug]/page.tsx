import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import RelatedPosts from "@/components/RelatedPosts";

import { getSinglePost } from "@/actions/postActions";
import Reactions from "@/components/Reactions";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getSinglePost(params.slug);

  return {
    title: `${post?.title} | WOblog`,
    description: post?.content?.slice(0, 100),
    openGraph: {
      title: `${post?.title} | WOblog`,
      description: post?.content?.slice(0, 100),
      images: [
        {
          url: `${post?.coverImage}`,
          width: 1280,
          height: 720,
          alt: post?.title,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `${post?.coverImage}`,
          width: 1280,
          height: 720,
          alt: post?.title,
        },
      ],
      card: "summary",
      title: `${post?.title} | WOblog`,
      description: post?.content?.slice(0, 100),
    },
    robots: "index, follow",
    creator: "WOblog",
    publisher: "WOblog",
    keywords: post?.tags,
    alternates: {
      canonical: `https://woblog.net/${post?.category?.slug}/${post?.slug}`,
    },
  };
}

const BlogDetail = async ({ params }: Props) => {
  const post = await getSinglePost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="container flex flex-col-reverse lg:flex-row gap-8">
      <Reactions postId={post.id} />
      <div className="flex-1">
        <article className="mb-8">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="relative w-full aspect-video mb-6">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              quality={70}
              priority
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
      <div className="w-[300px] h-[250px] bg-red-500 lg:mt-12 lg:sticky top-5 flex justify-center items-center text-white text-2xl font-bold">
        AD Space
      </div>
    </div>
  );
};

export default BlogDetail;
