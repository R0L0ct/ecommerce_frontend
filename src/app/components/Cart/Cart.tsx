"use client";
import React, { useEffect, useState } from "react";
import { CartCard } from "./CartCard";
import { GiShoppingCart } from "react-icons/gi";
import { useAlertStore } from "@/store/alertdialog-store";
import { useCartStore } from "@/store/cart-store";

interface ProductData {
  price: number;
  amount: number;
  title: string;
  image: string;
}
export const Cart = () => {
  const confirm = useAlertStore((state) => state.confirm);
  const { cartItems } = useCartStore();

  useEffect(() => {}, []);

  return (
    <div className="flex items-center flex-col py-10 w-4/5 gap-5">
      <div className="flex justify-around items-center w-full">
        <h1 className="font-bold text-2xl">Your Shopping Cart</h1>
        <GiShoppingCart className="text-3xl" />
      </div>
      {cartItems.length
        ? cartItems.map((item) => <CartCard {...item} key={item.productId} />)
        : ""}
    </div>
  );
};
