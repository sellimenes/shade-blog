import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const RelatedPosts = (props: Props) => {
  return (
    <section className="">
      <div className="text-xl opacity-80 font-semibold mb-3">
        You May Also Like
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[1, 2, 3].map((item) => (
          <SinglePost key={item} />
        ))}
      </div>
    </section>
  );
};

const SinglePost = () => {
  return (
    <Link href={"#"} className="p-2 rounded-lg border">
      <div className="relative w-full aspect-video rounded overflow-hidden mb-2">
        <Image
          src={"/finance-demo-3.jpeg"}
          alt="blog title"
          fill
          loading="lazy"
          quality={70}
        />
      </div>
      <h5 className="md:text-sm line-clamp-2 opacity-90">
        Health Tips and Benefits of Healthy Lifestyle You Should Consider
      </h5>
    </Link>
  );
};

export default RelatedPosts;
