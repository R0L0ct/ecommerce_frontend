"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

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
  productId: string;
}

export const ProductDetail = ({ productId }: Props) => {
  const [product, setProduct] = useState<ProductsData | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const productos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    productos();
  }, [productId]);
  return (
    <div className="h-screen flex flex-col items-center w-4/5">
      {isLoading ? (
        <p>Loading...</p>
      ) : product ? (
        <ProductCard {...product} />
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
};
