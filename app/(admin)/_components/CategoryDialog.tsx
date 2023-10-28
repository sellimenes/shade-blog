import React from "react";

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
  return (
    <Sheet>
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
            />
          </div>
          <Button className="mt-3">Add</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CategoryDialog;
