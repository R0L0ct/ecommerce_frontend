"use client";
import React, { useEffect, useState } from "react";
import { ProductOfertas } from "./ProductOfertas";

interface ProductsData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductsOfertas = () => {
  const [product, setProduct] = useState<ProductsData[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const productos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=9"
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    productos();
  }, []);

  return (
    <div className="w-full grid justify-center grid-cols-[240px_240px_240px] gap-4 place-items-center p-1 xl:grid-cols-[200px_200px_200px] lg:grid-cols-[150px_150px_150px] xs:grid-cols-2 2xs:gap-0">
      {!isLoading ? (
        product.map((prod, index) => (
          <ProductOfertas
            key={prod.id}
            className={index === product.length - 1 ? "xs:col-span-full" : ""}
            {...prod}
          />
        ))
      ) : (
        <h2>No hay productos en oferta</h2>
      )}
    </div>
  );
};
