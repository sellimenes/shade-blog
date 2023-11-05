"use client";

import React, { useEffect, useState } from "react";
import type { RootState } from "@/store/configureStore";
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

import { getCategories, deleteCategory } from "@/actions/categoryActions";
import { setCategories as setCategoriesRedux } from "@/store/categoryReducer";

type Props = {};

const CategoriesTable = (props: Props) => {
  const dispatch = useDispatch();
  const categoriesfromRedux = useSelector(
    (state: RootState) => state.categories
  );

  const fetchData = async () => {
    try {
      const categoriesData = await getCategories();
      // Fetch data and send to categoryReducer
      dispatch(setCategoriesRedux(categoriesData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(categoriesfromRedux);
  }, [categoriesfromRedux]);

  const handleDeleteCategory = async (categoryId: String) => {
    try {
      await deleteCategory(categoryId);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  if (categoriesfromRedux.length < 1) {
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
        {categoriesfromRedux.map((category: any) => (
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
