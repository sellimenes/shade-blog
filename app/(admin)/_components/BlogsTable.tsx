import moment from "moment";
import { MoreVertical } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getPosts } from "@/actions/postActions";

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
  category: string | null;
};

const BlogsTable = async (props: Props) => {
  const posts = await getPosts();
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
            <TableCell>{post.category}</TableCell>
            <TableCell className="w-[24px] p-0">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogsTable;
