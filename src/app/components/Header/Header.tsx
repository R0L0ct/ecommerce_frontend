import React from "react";
import Browser from "../ui/Browser";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-5 items-center h-24 bg-red-500">
      <Link href={"/"}>
        <Logo />
      </Link>
      <Browser />
      <Navbar />
    </div>
  );
}
