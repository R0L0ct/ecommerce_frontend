"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialogComponent } from "@/components/AlertDialog";
import { useCartStore } from "@/store/cart-store";

interface Props {
  image: string;
  title: string;
  price: number;
  amount: number;
  productId: number;
}

export const CartCard = ({ image, title, price, amount, productId }: Props) => {
  const [count, setCount] = useState(amount);
  const { removeItemFromCart, updateItemQuantity } = useCartStore();

  return (
    <div className="flex justify-between items-center w-4/5 min-h-28 border-2 rounded shadow-lg py-2 px-10">
      <div className="relative w-20 h-20">
        <Image src={image} alt={title} fill className="object-cover rounded" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-lg">{title}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="flex gap-3 justify-between items-center">
        {count === 0 ? (
          <AlertDialogComponent
            onContinue={() => removeItemFromCart(productId)}
          />
        ) : (
          <>
            <Button
              onClick={() => {
                if (count < 1) {
                  setCount(0);
                } else {
                  setCount(count - 1);
                  updateItemQuantity(productId, count - 1);
                }
              }}
            >
              -
            </Button>
            <p className="font-bold w-4 flex justify-center">{count}</p>
          </>
        )}
        <Button
          onClick={() => {
            setCount(count + 1);
            updateItemQuantity(productId, count + 1);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};
