"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import SelectCategoryCombobox from "@/app/(admin)/_components/SelectCategoryCombobox";
import UploadImage from "@/app/(admin)/_components/UploadImage";

// const TextEditor = dynamic(() => import("@/components/TextEditor"), {
//   ssr: false,
// });

import { createPost, getSinglePost } from "@/actions/postActions";

type Props = {
  id?: string;
};

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [{ align: "center" }, { align: "right" }, { align: "justify" }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
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

  // Find all <img> tags and add alt attribute in the postData.content
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
    setLoading(true);
    const post = await axios.get(`/api/post/${id}`);
    if (!post) return;

    setPostData({
      title: post.data.title,
      categoryId: post.data.categoryId,
      tags: post.data.tags,
      content: post.data.content,
    });

    setLoading(false);
  };

  const handleChangeContent = (content: string) => {
    setPostData({ ...postData, content: content });
  };

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
          <ReactQuill
            theme="snow"
            style={{ color: "white" }}
            modules={quillModules}
            placeholder="Write something awesome..."
            value={postData.content}
            onChange={handleChangeContent}
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
          {loading ? "Loading..." : "Edit Post"}
        </Button>
      </form>
    </div>
  );
};

export default AddBlogForm;
