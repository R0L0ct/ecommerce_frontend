"use client";
import Link from "next/link";
import React from "react";

const categorias = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
interface CategoriesMenuProps {
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export const CategoriesMenu = ({
  onMouseEnter,
  onMouseLeave,
}: CategoriesMenuProps) => {
  //   const isHover = useCategoryStore((state) => state.hover);
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className=" w-40 min-h-24 bg-black absolute z-20 text-white p-2 rounded opacity-90"
    >
      {categorias.map((category) => {
        return (
          <Link href={`/categories/${category}`} key={category}>
            <p className="hover:bg-red-900 p-1 rounded" key={category}>
              {category}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
