"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { Pencil, X } from "lucide-react";

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
import { Switch } from "@/components/ui/switch";

import { deletePost, getPosts, togglePublishPost } from "@/actions/postActions";
import Link from "next/link";

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

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSwitch = async (id: string, published: boolean) => {
    await togglePublishPost(id, published);
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    await deletePost(id);
    fetchPosts();
  };

  console.log("test");

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
                <X
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDelete(post.id)}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogsTable;
