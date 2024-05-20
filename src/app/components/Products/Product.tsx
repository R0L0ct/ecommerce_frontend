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
      className="shadow-lg rounded-md border-2 w-full h-[350px] sm:h-[200px] flex justify-center items-center relative hover:cursor-pointer 2xs:h-[100px]"
    >
      <div>
        <Image
          alt={title}
          src={image}
          fill
          style={{ objectFit: "contain", padding: "30px" }}
        />
      </div>
      <div className="flex justify-center flex-col items-center absolute rounded bg-white text-black w-full h-[40px] bottom-0">
        <p className="font-bold 2xs:text-xs">$ {price}</p>
        <p className="font-bold text-xs text-center overflow-auto 2xs:text-[10px]">
          {title}
        </p>
      </div>
    </Link>
  );
};
