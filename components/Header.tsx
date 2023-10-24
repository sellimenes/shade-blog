import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="container my-2 h-16 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link href={"/"}>WOBLOG</Link>
      </h1>

      <div className="ml-auto mr-4">
        <DropdownMenu>
          <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <Link href={"/finance"}>Finance</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/tech"}>Tech</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/Health"}>Health</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/life"}>Life</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
