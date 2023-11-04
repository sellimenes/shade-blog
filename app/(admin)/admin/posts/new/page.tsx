import AddBlogForm from "@/app/(admin)/_components/AddBlogForm";
import React from "react";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

type Props = {};

const NewPostPage = (props: Props) => {
  return (
    <>
      <AddBlogForm />
      <div className="mt-10">
        <TextEditor />
      </div>
    </>
  );
};

export default NewPostPage;
