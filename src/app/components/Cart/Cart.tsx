import React from "react";
import { CartCard } from "./CartCard";
import { GiShoppingCart } from "react-icons/gi";
export const Cart = () => {
  return (
    <div className="flex items-center flex-col py-10 w-4/5 gap-5">
      <div className="flex justify-around items-center w-full">
        <h1 className="font-bold text-2xl">Tu carrito de compras:</h1>
        <GiShoppingCart className="text-3xl" />
      </div>
      <CartCard />
    </div>
  );
};
