import AddBlogForm from "@/app/(admin)/_components/AddBlogForm";

type Props = {
  params: {
    id: string;
  };
};

// TODO: Quill value ve görsel datası gelmiyor henüz.

const page = async ({ params }: Props) => {
  return <AddBlogForm id={params.id} />;
};

export default page;
