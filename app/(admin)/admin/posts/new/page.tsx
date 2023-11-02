import AddBlogForm from "@/app/(admin)/_components/AddBlogForm";
import QuillEditor from "@/components/QuillEditor";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";

type Props = {};

const NewPostPage = (props: Props) => {
  return (
    <>
      <AddBlogForm />
      <div className="mt-4">
        <QuillEditor />
      </div>
    </>
  );
};

export default NewPostPage;
