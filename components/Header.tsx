"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";

import { getCategories } from "@/actions/categoryActions";

type Props = {};

type Category = {
  id: string;
  name: string;
  slug: string;
};

const Header = (props: Props) => {
  const [categories, setCategories] = useState([]);

  const handleGetCategories = async () => {
    const fetchedCategories = await getCategories();
    setCategories(fetchedCategories);
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <header className="container my-2 h-16 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link href={"/"}>WOBLOG</Link>
      </h1>

      <div className="ml-auto mr-4">
        <DropdownMenu>
          <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((category: Category) => (
              <DropdownMenuItem key={category.id}>
                <Link href={category.slug}>{category.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
