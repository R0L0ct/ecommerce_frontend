import React from "react";
import { RecommendedProducts } from "./RecommendedProducts";

export const Recommended = () => {
  return (
    <div className="pb-10">
      <div className="bg-red-500 flex justify-center items-center h-12 text-white">
        <h2 className="font-bold text-2xl">Recommended Products</h2>
      </div>
      <div className="flex justify-center mt-10">
        <RecommendedProducts />
      </div>
    </div>
  );
};
