"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import SelectCategoryCombobox from "@/app/(admin)/_components/SelectCategoryCombobox";
import UploadImage from "@/app/(admin)/_components/UploadImage";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

import { createPost } from "@/actions/postActions";

type Props = {};

const AddBlogForm = (props: Props) => {
  const router = useRouter();
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    categoryId: "",
    // image: "",
  });

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, content, categoryId } = postData;
    const res = await createPost(title, content, categoryId);
    router.push("/admin/posts");
  };
  return (
    <div>
      <h2 className="text-3xl">All Posts</h2>
      <form action="" className="mt-10">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title" className="text-xl">
            Title
          </Label>
          <Input
            type="title"
            id="title"
            placeholder="Title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <Label htmlFor="editor" className="text-xl">
            Content
          </Label>
          <TextEditor
            onChange={(content) => setPostData({ ...postData, content })}
          />
        </div>
        <div className="mt-4 relative">
          <div className="flex flex-col gap-1">
            <Label htmlFor="category" className="text-xl">
              Category
            </Label>
            <SelectCategoryCombobox
              onChange={(categoryId) =>
                setPostData({ ...postData, categoryId })
              }
            />
          </div>
          <UploadImage className="absolute top-0 right-0" />
        </div>
        <Button className="mt-4" onClick={handleCreatePost}>
          Publish
        </Button>
      </form>
    </div>
  );
};

export default AddBlogForm;
