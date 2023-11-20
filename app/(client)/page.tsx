import Headline from "@/components/Headline";
import NewBlogs from "@/components/NewBlogs";
import { MoveRight } from "lucide-react";

export const revalidate = 60;

export default function Home() {
  return (
    <div>
      <Headline />
      <div className="container flex flex-col-reverse lg:flex-row gap-10 my-10">
        <div className="flex-1">
          <span className="flex items-center gap-2 text-2xl font-semibold opacity-70 mb-3">
            <MoveRight /> Latest Blogs
          </span>
          <NewBlogs />
        </div>
        <div className="w-[300px] h-[250px] bg-red-500 mt-11 lg:sticky top-5"></div>
      </div>
    </div>
  );
}
