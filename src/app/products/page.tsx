import React from "react";
import { AllProducts } from "../components/Products/AllProducts";

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <div className="w-full border-t border-b flex justify-center py-3 mb-5">
        <h1 className="font-bold text-2xl 2xs:text-sm xs:text-base sm:text-xl">
          Products
        </h1>
      </div>
      <AllProducts />
    </div>
  );
}
