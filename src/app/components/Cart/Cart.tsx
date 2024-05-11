"use client";
import { CartCard } from "./CartCard";
import { GiShoppingCart } from "react-icons/gi";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductData {
  price: number;
  amount: number;
  title: string;
  image: string;
}
export const Cart = () => {
  const { cartItems } = useCartStore();

  return (
    <div className="flex items-center flex-col py-10 w-4/5 gap-5">
      <div className="flex justify-around items-center w-full">
        <h1 className="font-bold text-2xl">Your Shopping Cart</h1>
        <GiShoppingCart className="text-3xl" />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-5">
          {cartItems.length
            ? cartItems.map((item) => (
                <CartCard {...item} key={item.productId} />
              ))
            : ""}
        </div>
        <div className="p-5">
          <Link href={"/order"}>
            <Button>Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
