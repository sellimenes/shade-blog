"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  onClick: () => void;
};

const HamburgerButton = ({ onClick }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-card-foreground transition ease transform duration-300`;

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };
  return (
    <button
      className={cn(
        "flex flex-col h-12 w-12 justify-center items-center group max-w-max absolute scale-[65%] cursor-pointer",
        !isOpen
          ? "right-1/2 transform translate-x-1/2 duration-300 "
          : "right-1"
      )}
      onClick={handleClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3 " : ""
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3 " : ""
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
