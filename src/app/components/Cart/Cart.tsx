"use client";
import { CartCard } from "./CartCard";
import { GiShoppingCart } from "react-icons/gi";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie } from "@/app/actions";
import { getOneUser } from "@/api/data.api";
// import { Circles } from "react-loader-spinner";

interface ProductData {
  price: number;
  amount: number;
  title: string;
  image: string;
}
export const Cart = () => {
  const { cartItems } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        useCartStore.setState({ cartItems: JSON.parse(savedCartItems) });
      }
    }
    const verifyUser = async () => {
      const cookie = await getCookie();
      const user = await getOneUser(cookie.username);
      if (user?.data === "") {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    };
    verifyUser();
  }, []);

  if (!isClient) {
    // Render a loading state or null while waiting for client-side rendering
    return null;
  }

  return (
    <div className="flex items-center justify-center flex-col  w-4/5 gap-5">
      <div className="flex justify-around items-center w-full">
        <h1 className="font-bold text-2xl">Your Shopping Cart</h1>
        <GiShoppingCart className="text-3xl" />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-5">
          {cartItems.length ? (
            cartItems.map((item) => <CartCard {...item} key={item.productId} />)
          ) : (
            <div className="w-full h-[500px] flex items-center justify-center">
              <p>There are no items in your cart</p>
            </div>
          )}
        </div>
        <div className="p-5">
          {typeof window !== "undefined" && cartItems.length ? (
            isAuth ? (
              <Link href={"/order"}>
                <Button>Continue</Button>
              </Link>
            ) : (
              <Button
                onClick={() => alert("You must be authenticated to proceed")}
              >
                Continue
              </Button>
            )
          ) : (
            <Button disabled>Continue</Button>
          )}
        </div>
      </div>
    </div>
  );
};
