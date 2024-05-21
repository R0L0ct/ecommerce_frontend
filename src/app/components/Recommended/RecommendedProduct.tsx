import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
}

export const RecommendedProduct = ({
  image,
  title,
  price,
  id,
}: ProductProps) => {
  return (
    <Link
      href={`/products/${id}`}
      className="shadow-lg rounded-md border-2 w-full h-full flex justify-center items-center relative 2xs:shadow-none"
    >
      <div className="lg:w-[100px] lg:p-1">
        <Image alt={title} src={image} width={200} height={200} />
      </div>
      <div className="flex justify-center items-center absolute rounded bg-red-500 text-white w-48 h-8 bottom-12 xl:w-full lg:bottom-0 lg:h-5">
        <p className="font-bold lg:text-xs">${price}</p>
      </div>
    </Link>
  );
};
