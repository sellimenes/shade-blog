import React from "react";
import BlogsTable from "@/app/(admin)/_components/BlogsTable";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div>
      <h2 className="text-3xl">All Blogs</h2>
      <BlogsTable />
    </div>
  );
};

export default Posts;
