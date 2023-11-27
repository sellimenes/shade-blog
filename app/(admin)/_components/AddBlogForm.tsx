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

import { createPost, getSinglePost } from "@/actions/postActions";

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
    tags: "",
  });

  function addAltAttribute(content: string) {
    let contentAlt = content.replaceAll(
      "<img ",
      '<img alt="' + postData.title + '" '
    );
    return contentAlt;
  }

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!imageFile) return;
    const formData = new FormData();
    formData.append("file", imageFile);
    try {
      const responseImage = await axios.post("/api/s3-upload", formData);
      const coverImage = responseImage.data.fileName;

      const { title, content, categoryId, tags } = postData;
      const contentWithAltTagImages = addAltAttribute(content);
      const res = await createPost(
        title,
        contentWithAltTagImages,
        categoryId,
        coverImage,
        tags
      );
      router.push("/admin/posts");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getEditPost = async ({ id }: Props) => {
    if (!id) return;
    const post = await axios.get(`/api/post/${id}`);
    const { data } = post;
    if (!post) return;
    const { title, content, categoryId, tags } = data;
    if (content && title && categoryId) {
      setPostData({
        title,
        content,
        categoryId,
        tags,
      });
    }
  };

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  useEffect(() => {
    getEditPost({ id });
  }, []);
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
            value={postData.title}
          />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <Label htmlFor="editor" className="text-xl">
            Content
          </Label>
          <TextEditor
            onChange={(content) => setPostData({ ...postData, content })}
            value={postData.content}
          />
        </div>
        <div className="mt-4 grid w-full items-center gap-1.5">
          <Label htmlFor="tags" className="text-xl">
            Tags
          </Label>
          <Input
            type="tags"
            id="tags"
            placeholder="Tags"
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            value={postData.tags}
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
              valueProp={postData?.categoryId}
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
