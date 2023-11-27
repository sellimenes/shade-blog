import dynamic from "next/dynamic";

const AddBlogForm = dynamic(
  () => import("@/app/(admin)/_components/AddBlogForm"),
  {
    ssr: false,
  }
);

type Props = {};

const NewPostPage = (props: Props) => {
  return (
    <>
      <AddBlogForm />
    </>
  );
};

export default NewPostPage;
