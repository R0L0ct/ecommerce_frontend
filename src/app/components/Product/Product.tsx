import Image from "next/image";
import React from "react";

interface ProductProps {
  image: string;
  title: string;
  category: string;
}

export const Product = ({ image, title, category }: ProductProps) => {
  return (
    <div className="shadow-lg rounded-md border-2 w-full h-full flex justify-center items-center relative">
      <Image alt={title} src={image} width={200} height={200} />
      <div className="flex justify-center items-center absolute rounded bg-blue-600 text-white w-48 h-8 bottom-12">
        <p className="font-bold">{category}</p>
      </div>
    </div>
  );
};
