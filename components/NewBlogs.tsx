import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export const revalidate = 60;

type Props = {
  className?: string;
};

const fetchLatestBlogs = async () => {
  const posts = await fetch("http://localhost:3000/api/post?isLatest=true", {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  return posts.json();
};

const NewBlogs = async ({ className }: Props) => {
  const posts = await fetchLatestBlogs();
  return (
    <section className={cn("", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {posts.map((post: any) => (
          <SingleBlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

const SingleBlogCard = ({ post }: any) => {
  return (
    <Link href={post.slug} className="p-3 border rounded-lg">
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
        Selim Enes Erdogan{" "}
        <span className="flex items-center gap-1 mt-[2px]">
          <Clock size={12} /> {moment(post.createdAt).format("DD.MM.YYYY")}
        </span>
      </p>
    </Link>
  );
};

export default NewBlogs;
