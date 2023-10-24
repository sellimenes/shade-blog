"use client";

import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  Group,
  LayoutDashboard,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "@/components/ui/hamburger-button";
import { Separator } from "@/components/ui/separator";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <aside
      className={cn(
        "h-screen relative shadow-xl z-[10000] transition-all duration-300 overflow-hidden",
        open ? "w-64" : "w-12"
      )}
    >
      <HamburgerButton onClick={toggleSidebar} />
      <div className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap mt-12 px-5">
        <Link
          href="/"
          className="font-extrabold text-2xl flex items-center gap-3 text-card-foreground mt-2"
        >
          <CircleDollarSign
            className={cn(
              "w-6 h-6 cursor-pointer z-50 transition-all duration-300",
              open ? "mb-0" : "mt-2 ml-[-8px]"
            )}
          />
          WOBLOG
        </Link>
      </div>
      <Separator className="my-3 bg-card-foreground opacity-50" />
      <ul>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer bg-[#666cff] text-white">
          <Link href="#" className="flex items-center gap-3 px-5">
            <LayoutDashboard
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Dashboard
          </Link>
        </li>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]">
          <Link href="#" className="flex items-center gap-3 px-5">
            <Newspaper
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Posts
          </Link>
        </li>
        <li className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]">
          <Link href="#" className="flex items-center gap-3 px-5">
            <Group
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Categories
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
