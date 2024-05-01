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
      className="shadow-lg rounded-md border-2 w-full h-full flex justify-center items-center relative"
    >
      <Image alt={title} src={image} width={200} height={200} />
      <div className="flex justify-center items-center absolute rounded bg-red-500 text-white w-48 h-8 bottom-12">
        <p className="font-bold">${price}</p>
      </div>
    </Link>
  );
};
