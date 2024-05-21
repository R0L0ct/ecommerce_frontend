import React from "react";
import { ProductsOfertas } from "./ProductsOfertas";

export default function Ofertas() {
  return (
    <div className="py-10">
      <div className="h-12 flex justify-center items-center bg-white border-y-2 border-gray-100">
        <h2 className="font-bold text-2xl lg:text-xl sm:text-base 2xs:text-sm">
          Offers
        </h2>
      </div>
      <div className="flex justify-center pt-5">
        <ProductsOfertas />
      </div>
    </div>
  );
}
