import AddBlogForm from "@/app/(admin)/_components/AddBlogForm";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return <AddBlogForm id={params.id} />;
};

export default page;
