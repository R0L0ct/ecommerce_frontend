import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  id: number;
  category: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductCard = ({
  title,
  image,
  id,
  category,
  price,
  description,
  rating,
}: Props) => {
  return (
    <div className="flex items-center justify-evenly w-full border-2">
      <div className="flex justify-center items-center p-10">
        <div className="relative w-96 h-96">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      </div>
      <div className="flex justify-evenly flex-col border-l-2 h-full p-10">
        <p className="max-w-96 font-bold text-2xl flex flex-wrap">{title}</p>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Detalles del producto:</h3>
          <p>Rate: {rating.rate}</p>
          <p>Count: {rating.count}</p>
          <p>{description}</p>
          <p>Categoria: {category}</p>
          <p>Precio: ${price}</p>
        </div>
        <Button>Agregar al carrito</Button>
      </div>
    </div>
  );
};
