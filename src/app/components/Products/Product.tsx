import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  image: string;
  title: string;
  price: number;
  id: number;
  //   category: string;
}

export const Product = ({ image, title, price, id }: ProductProps) => {
  return (
    <Link
      href={`/products/${id}`}
      className="shadow-lg rounded-md border-2 w-full h-[350px] flex justify-center items-center relative hover:cursor-pointer"
    >
      <Image alt={title} src={image} width={200} height={200} />
      <div className="flex justify-center flex-col items-center absolute rounded bg-white text-black w-full h-[40px] bottom-0">
        <p className="font-bold">$ {price}</p>
        <p className="font-bold text-xs text-center overflow-hidden">{title}</p>
      </div>
    </Link>
  );
};
