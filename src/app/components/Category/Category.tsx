"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../Products/Product";
import { PulseLoader } from "react-spinners";

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
        // console.log(response);
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
    <div className="w-full justify-center grid grid-cols-[300px_350px_300px_350px] gap-4 place-items-center p-1 xl:grid-cols-[200px_250px_200px_250px] lg:grid-cols-[250px_250px] xs:grid-cols-2 3xs:gap-0">
      {!isLoading ? (
        product.map((prod) => <Product key={prod.id} {...prod} />)
      ) : (
        <div className="col-span-full">
          <PulseLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};
