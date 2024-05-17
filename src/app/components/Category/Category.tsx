"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../Products/Product";

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

interface Props {
  category: string;
}

export const Category = ({ category }: Props) => {
  const [product, setProduct] = useState<ProductsData[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const product = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        console.log(response);
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    product();
  }, [category]);
  return (
    <div className="grid grid-cols-[240px_240px_240px_240px] gap-4 place-items-center p-1">
      {!isLoading ? (
        product.map((prod) => <Product key={prod.id} {...prod} />)
      ) : (
        <h2>There are no products he he</h2>
      )}
    </div>
  );
};
