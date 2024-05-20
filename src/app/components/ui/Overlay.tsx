"use client";
import { useBarMenuStore } from "@/store/barmenu-store";
import React from "react";

export const Overlay = () => {
  const { clicked, toggle } = useBarMenuStore();
  return (
    clicked && (
      <div
        className="fixed top-0 bg-black bg-opacity-70 h-screen w-screen z-30"
        onClick={() => toggle()}
      ></div>
    )
  );
};
