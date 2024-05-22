import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  image: string;
  title: string;
  category: string;
  className: string;
}
export const ProductOfertas = ({
  image,
  title,
  category,
  className,
}: ProductProps) => {
  return (
    <Link
      href={`/categories/${category}`}
      className={`shadow-lg rounded-md border-2 w-full h-full 2xs:shadow-none flex justify-center items-center relative ${className}`}
    >
      <div className="lg:w-[100px] lg:p-1">
        <Image alt={title} src={image} width={200} height={200} />
      </div>
      <div className="flex justify-center items-center absolute rounded bg-blue-600 text-white w-48 h-8 bottom-12 xl:w-full lg:bottom-0 lg:h-5">
        <p className="font-bold lg:text-xs">{category}</p>
      </div>
    </Link>
  );
};
