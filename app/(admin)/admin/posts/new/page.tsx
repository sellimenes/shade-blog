"use client";

import React from "react";
import dynamic from "next/dynamic";
import axios from "axios";

import { Label } from "@/components/ui/label";
import AddBlogForm from "@/app/(admin)/_components/AddBlogForm";
import SelectCategoryCombobox from "@/app/(admin)/_components/SelectCategoryCombobox";
import UploadImage from "@/app/(admin)/_components/UploadImage";
import { Button } from "@/components/ui/button";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

type Props = {};

const NewPostPage = (props: Props) => {
  return (
    <>
      <AddBlogForm />
      <div className="mt-4">
        <Label htmlFor="editor" className="text-xl">
          Content
        </Label>
        <TextEditor />
      </div>
      <div className="mt-4 relative">
        <div className="flex flex-col">
          <Label htmlFor="category" className="text-xl">
            Category
          </Label>
          <SelectCategoryCombobox />
        </div>
        <UploadImage className="absolute top-0 right-0" />
      </div>
      <Button className="mt-4" onClick={() => {}}>
        Publish
      </Button>
    </>
  );
};

export default NewPostPage;
