"use client";
import { useBarMenuStore } from "@/store/barmenu-store";
import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";

export const BarMenu = () => {
  const { toggle, clicked } = useBarMenuStore();

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [clicked]);

  return (
    <FaBars
      className="hidden text-white text-xl sm:flex sm:z-50"
      onClick={() => toggle()}
    />
  );
};
