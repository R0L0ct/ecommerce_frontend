"use client";
import { useBarMenuStore } from "@/store/barmenu-store";
import Link from "next/link";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const categorias = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export const CategoriesSideMenu = () => {
  const { clicked, toggle } = useBarMenuStore();
  return (
    <div className="flex flex-col gap-1 justify-center mt-1">
      {categorias.map((category) => {
        return (
          <Link
            href={`/categories/${category}`}
            key={category}
            onClick={() => toggle()}
          >
            <p
              className="hover:bg-red-900 pl-2 flex items-center text-sm"
              key={category}
            >
              <IoMdArrowDropright /> {category}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
