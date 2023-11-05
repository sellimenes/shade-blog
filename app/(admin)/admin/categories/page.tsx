"use client";

import React from "react";

import CategoriesTable from "../../_components/CategoriesTable";
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
