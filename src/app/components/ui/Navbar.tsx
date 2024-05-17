"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CategoriesMenu } from "../Categories/CategoriesMenu";
import Link from "next/link";
import { useUserStore } from "@/store/user-store";
import { logout } from "@/api/data.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCartStore } from "@/store/cart-store";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const userState = useUserStore((state) => state.username);
  const updateUserState = useUserStore((state) => state.updateUsername);
  const { cartItems } = useCartStore();
  const [totalQuantity, setTotalQuantity] = useState(0);

  let timer: string | number | NodeJS.Timeout | undefined;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleMenuMouseEnter = () => {
    clearTimeout(timer);
    setIsOpen(true);
  };

  const handleMenuMouseLeave = () => {
    timer = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.amount, 0);
    setTotalQuantity(total);
  }, [cartItems]);

  return (
    <div>
      <nav className="flex gap-3 items-center text-white">
        <div className="hover:cursor-pointer hover:text-black font-medium relative">
          <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Categories<span className="text-xs">▼</span>
          </p>
          {isOpen && (
            <CategoriesMenu
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
            />
          )}
        </div>
        <div className="hover:cursor-pointer hover:text-black font-medium">
          <Link href={"/products"}>
            <p>Products</p>
          </Link>
        </div>
        <div>
          <p>|</p>
        </div>
        <div className="hover:cursor-pointer  font-medium">
          {userState ? (
            <div className="flex items-center justify-center gap-1">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  {userState.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p className="hover:text-black">{userState}</p>
              <p
                className="hover:text-black"
                onClick={() => {
                  logout();
                  updateUserState("");
                }}
              >
                <MdLogout />
              </p>
            </div>
          ) : (
            <Link href={"/login"}>
              <p className="hover:text-black">Login</p>
            </Link>
          )}
        </div>
        <div className="hover:cursor-pointer hover:text-black font-medium">
          {userState ? (
            ""
          ) : (
            <Link href={"/register"}>
              <p>Register</p>
            </Link>
          )}
        </div>
        <div className="relative">
          {totalQuantity !== 0 && (
            <p className="bg-red-950 flex justify-center items-center rounded-[50%] w-[15px] h-[15px] absolute font-bold text-xs top-[-15px] right-[-2px] p-[1px]">
              {totalQuantity}
            </p>
          )}
          <Link href={"/cart"}>
            <FaShoppingCart className="hover:cursor-pointer hover:text-black" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
