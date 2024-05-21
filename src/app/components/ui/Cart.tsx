"use client";

import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export const Cart = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { cartItems } = useCartStore();

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.amount, 0);
    setTotalQuantity(total);
  }, [cartItems]);

  return (
    <div className="relative">
      {totalQuantity !== 0 && (
        <p className="bg-red-950 flex justify-center items-center rounded-[50%] w-[15px] h-[15px] absolute font-bold text-xs top-[-15px] right-[-2px] p-[1px] text-white">
          {totalQuantity}
        </p>
      )}
      <Link href={"/cart"}>
        <FaShoppingCart className="hover:cursor-pointer hover:text-black text-white" />
      </Link>
    </div>
  );
};
