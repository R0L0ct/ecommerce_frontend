"use client";
import React from "react";

const categorias = ["men's clothing", "jewelery", "electronics"];
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
          <p className="hover:bg-blue-600 p-1 rounded" key={category}>
            {category}
          </p>
        );
      })}
    </div>
  );
};
