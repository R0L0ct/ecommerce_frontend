import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { PFooter } from "../ui/PFooter";

export const Footer = () => {
  return (
    <div className="min-h-28 py-10 flex justify-around border-t-2">
      <div>
        <h1 className="text-3xl font-extrabold sm:text-base">THE MARKET</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 font-bold text-lg">
          <PFooter>About us</PFooter>
          <PFooter>Contact</PFooter>
          <PFooter>Help</PFooter>
        </div>
        <div className="flex justify-evenly">
          <a href="#">
            <FaFacebook className="hover:cursor-pointer sm:text-xs" />
          </a>
          <a href="#">
            <GrInstagram className="hover:cursor-pointer sm:text-xs" />
          </a>
          <a href="#">
            <BsTwitterX className="hover:cursor-pointer sm:text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
};
