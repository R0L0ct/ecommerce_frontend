"use client";
import React, { useEffect, useState } from "react";
import { Product } from "./Product";

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

export const AllProducts = () => {
  const [product, setProduct] = useState<ProductsData[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const products = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    products();
  }, []);

  return (
    <div className="w-full justify-center grid grid-cols-[240px_240px_240px_240px] gap-4 place-items-center p-1 xl:grid-cols-[200px_200px_200px_200px] lg:grid-cols-[250px_250px] xs:grid-cols-2">
      {!isLoading ? (
        product.map((prod) => <Product key={prod.id} {...prod} />)
      ) : (
        <h2>There are no products he he</h2>
      )}
    </div>
  );
};
