import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {};

const AddBlogForm = (props: Props) => {
  return (
    <div>
      <h2 className="text-3xl">All Posts</h2>
      <form action="" className="mt-10">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title" className="text-xl">
            Title
          </Label>
          <Input type="title" id="title" placeholder="Title" />
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
