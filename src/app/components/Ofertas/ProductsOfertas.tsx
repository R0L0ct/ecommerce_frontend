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
    <div className="grid grid-cols-[240px_240px_240px] gap-4 place-items-center p-1">
      {!isLoading ? (
        product.map((prod) => <ProductOfertas key={prod.id} {...prod} />)
      ) : (
        <h2>No hay productos en oferta</h2>
      )}
    </div>
  );
};
