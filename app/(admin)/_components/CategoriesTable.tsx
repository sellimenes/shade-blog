"use client";

import React, { useEffect, useState } from "react";

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

type Props = {};

const CategoriesTable = (props: Props) => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteCategory = async (categoryId: String) => {
    try {
      await deleteCategory(categoryId);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  if (categories.length < 1) {
    // Yükleme dönencesi göster
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
        {categories.map((category: any) => (
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
