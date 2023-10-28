import React from "react";
import BlogsTable from "@/app/(admin)/_components/BlogsTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h2 className="text-3xl">All Posts</h2>
        <Button asChild>
          <Link href="/admin/posts/new">
            <Plus size={14} className="mr-2" />
            Add New Post
          </Link>
        </Button>
      </div>
      <BlogsTable />
    </div>
  );
};

export default Posts;
