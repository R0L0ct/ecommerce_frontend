"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  image: string;
  title: string;
}

export const CartCard = ({ image, title }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center w-4/5 min-h-28 border-2 rounded shadow-lg py-2 px-10">
      <div className="relative w-20 h-20">
        <Image
          src={"/carousel/auri.jpg"}
          alt={title}
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-lg">Auriculares + Microfono</p>
        <p>Precio: $2000</p>
      </div>
      <div className="flex gap-3 justify-between items-center">
        <Button
          onClick={() => {
            if (count < 1) {
              setCount(0);
            } else {
              setCount(count - 1);
            }
          }}
        >
          -
        </Button>
        <p className="font-bold w-4 flex justify-center">{count}</p>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
    </div>
  );
};
