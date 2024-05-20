"use client";
import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import { CategoriesMenu } from "../Categories/CategoriesMenu";
import Link from "next/link";
import { useUserStore } from "@/store/user-store";
import { logout } from "@/api/data.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCartStore } from "@/store/cart-store";
import { FaRegUserCircle } from "react-icons/fa";
import { GrUserAdd } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { useBarMenuStore } from "@/store/barmenu-store";
import { TiHomeOutline } from "react-icons/ti";
import { CategoriesSideMenu } from "../Categories/CategoriesSideMenu";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const userState = useUserStore((state) => state.username);
  const updateUserState = useUserStore((state) => state.updateUsername);
  const { clicked, toggle } = useBarMenuStore();

  return (
    clicked && (
      <div className="fixed bg-white top-0 h-screen left-0 w-56 z-40">
        {/* Bars Menu */}
        <div className="h-36 bg-red-700 flex justify-end flex-col pl-4 mb-3 pb-3 ">
          <div className="hover:cursor-pointer font-medium flex">
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
              <Link
                href={"/login"}
                className="flex justify-center items-center gap-3 text-white"
                onClick={() => toggle()}
              >
                <FaRegUserCircle />
                <p className="hover:text-black">Login</p>
              </Link>
            )}
          </div>
          <div className=" hover:cursor-pointer hover:text-black font-medium flex text-white">
            {userState ? (
              ""
            ) : (
              <Link
                href={"/register"}
                className="flex justify-center items-center gap-3"
                onClick={() => toggle()}
              >
                <GrUserAdd />
                <p>Register</p>
              </Link>
            )}
          </div>
        </div>
        {/* Bars Menu */}
        <nav className="flex gap-3  text-black flex-col items-start pl-4">
          <div className="hover:cursor-pointer hover:text-black font-medium">
            <Link
              href={"/"}
              className="flex justify-center items-center gap-3"
              onClick={() => toggle()}
            >
              <TiHomeOutline className=" flex" />
              <p>Home</p>
            </Link>
          </div>
          <div className="hover:cursor-pointer hover:text-black font-medium">
            <div className="flex  items-center gap-3">
              <BiCategory className="flex" />
              <p onClick={() => setIsOpen(!isOpen)}>
                Categories<span className="text-xs">▼</span>
              </p>
            </div>
            {isOpen && <CategoriesSideMenu />}
          </div>
          <div className="hover:cursor-pointer hover:text-black font-medium">
            <Link
              href={"/products"}
              className="flex justify-center items-center gap-3"
              onClick={() => toggle()}
            >
              <FiShoppingBag className="flex" />
              <p>Products</p>
            </Link>
          </div>
        </nav>
      </div>
    )
  );
}
