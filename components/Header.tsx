"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

import { getCategories } from "@/actions/categoryActions";
import { signOut, useSession } from "next-auth/react";

type Props = {};

type Category = {
  id: string;
  name: string;
  slug: string;
};

const Header = (props: Props) => {
  const session = useSession();
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
      <div className="text-2xl font-bold">
        <Link href={"/"}>WOBLOG</Link>
      </div>

      <div className="ml-auto mr-4 flex items-center">
        {session.status === "authenticated" && (
          <div className="flex items-center gap-2">
            <Link href={"/admin"}>Admin</Link>
            <Button variant={"ghost"} onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((category: Category) => (
              <Link
                href={`/${category.slug}`}
                key={category.id}
                className="cursor-pointer"
              >
                <DropdownMenuItem>{category.name}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
