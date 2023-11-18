"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import SelectCategoryCombobox from "@/app/(admin)/_components/SelectCategoryCombobox";
import UploadImage from "@/app/(admin)/_components/UploadImage";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

import { createPost } from "@/actions/postActions";

type Props = {
  id?: string;
};

const AddBlogForm = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<any | undefined>(undefined);
  const router = useRouter();
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  useEffect(() => {
    console.log(postData);
    console.log(imageFile);
  }, [postData, imageFile]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!imageFile) return;
    const formData = new FormData();
    formData.append("file", imageFile);
    try {
      const responseImage = await axios.post("/api/s3-upload", formData);
      const coverImage = responseImage.data.fileName;

      const { title, content, categoryId } = postData;
      const res = await createPost(title, content, categoryId, coverImage);
      router.push("/admin/posts");
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
          <UploadImage
            onImageChange={setImageFile}
            className="absolute top-0 right-0"
          />
        </div>
        <Button className="mt-4" onClick={handleCreatePost} disabled={loading}>
          {loading ? "Loading..." : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default AddBlogForm;
