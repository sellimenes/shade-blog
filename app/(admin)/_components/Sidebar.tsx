"use client";

import { cn } from "@/lib/utils";
import {
  ArrowDownLeftFromCircle,
  CircleDollarSign,
  Group,
  Image,
  LayoutDashboard,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "@/components/ui/hamburger-button";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

type Props = {};

const Sidebar = (props: Props) => {
  const session = useSession();
  const url = usePathname();
  const [open, setOpen] = useState(true);

  const handleLogout = () => {
    signOut();
  };

  const toggleSidebar = () => {
    setOpen(!open);
    console.log(session);
  };
  return (
    <aside
      className={cn(
        "h-screen relative shadow-xl z-[10] transition-all duration-300 overflow-hidden flex flex-col",
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
        <Link
          href="/"
          className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]"
        >
          <li className="flex items-center gap-3 px-5">
            <ArrowDownLeftFromCircle
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Go to site
          </li>
        </Link>
        <Link
          href="/admin"
          className={cn(
            "flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer",
            url === "/admin"
              ? "bg-[#666cff] text-white"
              : "hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]"
          )}
        >
          <li className="flex items-center gap-3 px-5">
            <LayoutDashboard
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Dashboard
          </li>
        </Link>
        <Link
          href="/admin/posts"
          className={cn(
            "flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer",
            url === "/admin/posts"
              ? "bg-[#666cff] text-white"
              : "hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]"
          )}
        >
          <li className="flex items-center gap-3 px-5">
            <Newspaper
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Posts
          </li>
        </Link>
        <Link
          href="/admin/categories"
          className={cn(
            "flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer",
            url === "/admin/categories"
              ? "bg-[#666cff] text-white"
              : "hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]"
          )}
        >
          <li className="flex items-center gap-3 px-5">
            <Group
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Categories
          </li>
        </Link>
        <Link
          href="/gallery"
          className={cn(
            "flex items-center justify-between w-full overflow-hidden whitespace-nowrap leading-10 cursor-pointer",
            url === "/gallery"
              ? "bg-[#666cff] text-white"
              : "hover:bg-[#4c4e6414] dark:hover:bg-[#eaeaff14]"
          )}
        >
          <li className="flex items-center gap-3 px-5">
            <Image
              className={cn(
                "cursor-pointer transition-all duration-300",
                open ? "w-5 h-5" : "w-6 h-6 ml-[-8px]"
              )}
            />
            Media Gallery
          </li>
        </Link>
      </ul>
      <ThemeToggle
        className={cn(
          "mt-auto p-5 pb-2 transition-all duration-300",
          !open ? "-ml-[1.07rem]" : ""
        )}
      />
      <Button
        variant="outline"
        className={cn(
          "mb-2 ml-5 max-w-max transition-all duration-300",
          !open ? "ml-[2px]" : ""
        )}
        onClick={handleLogout}
      >
        {open ? "Logout" : "L"}
      </Button>
    </aside>
  );
};

export default Sidebar;
