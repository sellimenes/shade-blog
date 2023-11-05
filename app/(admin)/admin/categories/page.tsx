"use client";

import React from "react";
import type { RootState } from "@/store/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/counterSlice";

import CategoriesTable from "../../_components/CategoriesTable";
import CategoryDialog from "../../_components/CategoryDialog";

type Props = {};

const Categories = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h2 className="text-3xl">All Categories</h2>
        <CategoryDialog />
      </div>
      <CategoriesTable />
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
