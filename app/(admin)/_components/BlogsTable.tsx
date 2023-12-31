"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { Pencil, X } from "lucide-react";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Switch } from "@/components/ui/switch";

import { deletePost, getPosts, togglePublishPost } from "@/actions/postActions";
import LoadingSpinner from "@/components/LoadingSpinner";

type Props = {};

type Post = {
  id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  content: string | null;
  coverImage: string | null;
  slug: string;
  published: boolean;
  categoryId: string | null;
  category: {
    id: any;
    createdAt: any;
    updatedAt: any;
    name: string;
    slug: string;
  } | null;
};

const BlogsTable = (props: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPosts = async () => {
    setLoading(true);
    const posts = await getPosts();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSwitch = async (id: string, published: boolean) => {
    await togglePublishPost(id, published);
    await fetchPosts();
    // revalidatePath("/", "page");
  };

  const handleDelete = async (id: string) => {
    await deletePost(id);
    await fetchPosts();
    // revalidatePath("/", "page");
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Table className="mt-2">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts?.map((post: Post) => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">
              {moment(post.createdAt).format("DD.MM.YYYY")}
            </TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.category?.name}</TableCell>
            <TableCell className="p-4 flex items-center justify-end gap-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Switch
                      checked={post.published}
                      onCheckedChange={() =>
                        handleSwitch(post.id, !post.published)
                      }
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Draft/Publish Post</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="flex items-center gap-2">
                <Link href={`/admin/posts/edit/${post.id}`}>
                  <Pencil className="cursor-pointer w-5 h-5" />
                </Link>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <X className="cursor-pointer text-red-500" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the post and remove data from the server.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(post.id)}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogsTable;
