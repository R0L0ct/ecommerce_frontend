"use client";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CategoriesMenu } from "../Categories/CategoriesMenu";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div>
      <nav className="flex gap-3 items-center text-white">
        <div className="hover:cursor-pointer hover:text-black font-medium relative">
          <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Categorias<span className="text-xs">▼</span>
          </p>
          {isOpen && (
            <CategoriesMenu
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
            />
          )}
        </div>
        <div className="hover:cursor-pointer hover:text-black font-medium">
          <p>Productos</p>
        </div>
        <div>
          <p>|</p>
        </div>
        <div className="hover:cursor-pointer hover:text-black font-medium">
          <p>Login</p>
        </div>
        <div className="hover:cursor-pointer hover:text-black font-medium">
          <p>Register</p>
        </div>
        <div>
          <Link href={"/cart"}>
            <FaShoppingCart className="hover:cursor-pointer hover:text-black" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
