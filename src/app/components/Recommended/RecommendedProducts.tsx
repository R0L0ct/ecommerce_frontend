"use client";
import React, { useEffect, useState } from "react";
import { RecommendedProduct } from "./RecommendedProduct";

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
export const RecommendedProducts = () => {
  const [product, setProduct] = useState<ProductsData[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const productos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=12"
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
    <div className="grid grid-cols-[300px_350px_300px_350px] gap-4 place-items-center p-1 xl:grid-cols-[200px_250px_200px_250px] lg:grid-cols-[100px_150px_100px_150px]">
      {!isLoading ? (
        product.map((prod) => <RecommendedProduct key={prod.id} {...prod} />)
      ) : (
        <h2>No hay productos en oferta</h2>
      )}
    </div>
  );
};
