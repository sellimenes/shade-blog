"use client";

import React, { useState } from "react";
import { createCategory } from "@/actions/categoryActions";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Props = {};

const CategoryDialog = (props: Props) => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateCategory = async (name: string) => {
    try {
      await createCategory(name);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="px-3 py-2 rounded bg-primary text-primary-foreground hover:opacity-90">
        New Category
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Category</SheetTitle>
        </SheetHeader>
        <div className="mt-10">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button
            className="mt-3"
            onClick={() => {
              handleCreateCategory(name);
            }}
          >
            Add
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CategoryDialog;
