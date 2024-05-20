import React from "react";
import Browser from "../ui/Browser";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import Link from "next/link";
import { Cart } from "../ui/Cart";
import { BarMenu } from "../ui/BarMenu";

export default function Header() {
  return (
    <div className="flex flex-col justify-center  h-24 bg-red-500">
      <div className="flex justify-between px-5 items-center ">
        <BarMenu />
        <Link href={"/"} className="sm:hidden">
          <Logo />
        </Link>
        <Browser />
        <Cart />
      </div>
      <Navbar />
    </div>
  );
}
