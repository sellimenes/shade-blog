"use client";

import React, { useEffect } from "react";
import { AppDispatch, type RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";

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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoadingSpinner from "@/components/LoadingSpinner";

import { getCategoriesThunk } from "@/store/categorySlice";
import { deleteCategory } from "@/actions/categoryActions";

type Props = {};

const CategoriesTable = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      await dispatch(getCategoriesThunk());
    } catch (error) {
      console.log(error);
    }
  };

  if (categories?.length < 1) {
    return <LoadingSpinner />;
  }

  return (
    <Table className="mt-2">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Blogs</TableHead>
          <TableHead className="w-full">Name</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.map((category: any) => (
          <TableRow key={category.id}>
            <TableCell>12</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell className="w-[24px] p-0">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoriesTable;
