import React from "react";
import CategoriesTable from "../../_components/CategoriesTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import CategoryDialog from "../../_components/CategoryDialog";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h2 className="text-3xl">All Categories</h2>
        <CategoryDialog />
      </div>
      <CategoriesTable />
    </div>
  );
};

export default Categories;
