import { cn } from "@/lib/utils";
import { Clock, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const NewBlogs = ({ className }: Props) => {
  return (
    <section className={cn("", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <SingleBlogCard key={i} />
        ))}
      </div>
    </section>
  );
};

const SingleBlogCard = () => {
  return (
    <Link href={"/asd"} className="p-3 border rounded-lg">
      <div className="relative aspect-video">
        <Image
          src="/finance-demo-2.png"
          sizes="100%"
          alt="blog title"
          fill
          className="aspect-video cover rounded "
          loading="lazy"
          quality={70}
        />
        <p className="absolute z-50 bottom-5 lg:bottom-8 left-0 p-2 bg-green-500 text-white lg:text-md text-sm rounded-r">
          Finance
        </p>
      </div>
      <h3 className="mt-4 mb-1 leading-5 line-clamp-2 hover:text-orange-700">
        Health Tips and Benefits of Healthy Lifestyle You Should Consider
      </h3>
      <p className="text-xs opacity-75 flex lg:items-center lg:gap-4 whitespace-nowrap flex-col lg:flex-row">
        Selim Enes Erdogan{" "}
        <span className="flex items-center gap-1 mt-[2px]">
          <Clock size={12} className="mb-[2px]" /> 18.03.2021
        </span>
      </p>
    </Link>
  );
};

export default NewBlogs;
