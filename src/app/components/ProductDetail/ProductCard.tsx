import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useProductStore } from "@/store/product-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  title: string;
  image: string;
  id: number;
  category: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductCard = ({
  title,
  image,
  id,
  category,
  price,
  description,
  rating,
}: Props) => {
  const [count, setCount] = useState(1);
  const updateProductStore = useProductStore((state) => state.addProductToCart);
  const { addItemsToCart, cartItems } = useCartStore();
  const router = useRouter();

  return (
    <div className="flex items-center justify-evenly w-full border-2 lg:flex-col lg:border-0">
      <div className="flex justify-center items-center p-10 sm:p-1 lg:border-b">
        <div className="relative w-96 h-96 sm:w-48 sm:h-48 xs:w-32 xs:h-32">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      </div>
      <div className="flex justify-evenly flex-col border-l-2 h-full p-10 sm:p-1">
        <p className="max-w-96 font-bold text-2xl flex flex-wrap sm:text-lg sm:text-center xs:text-base">
          {title}
        </p>
        <div className="flex flex-col gap-1 lg:border-t-4 lg:pt-2">
          <h3 className="font-bold text-center sm:text-base xs:text-sm">
            Product Details
          </h3>
          <div className="border-t sm:text-sm xs:text-xs">
            <p className="font-bold">Rate:</p> <p>{rating.rate}</p>{" "}
          </div>
          <div className="border-t sm:text-sm xs:text-xs">
            <p className="font-bold">Count:</p>
            <p>{rating.count}</p>{" "}
          </div>
          <div className="border-t sm:text-sm xs:text-xs">
            <p>{description}</p>
          </div>
          <div className="border-t sm:text-sm xs:text-xs">
            <p className="font-bold">Category</p>
            <p>{category}</p>{" "}
          </div>
          <div className="border-t sm:text-sm xs:text-xs">
            <p className="font-bold">Price</p>
            <p>${price}</p>{" "}
          </div>
        </div>
        <div className="flex justify-around items-center w-full border-t-4 pt-3 sm:text-sm xs:text-xs sm:flex-col sm:items-center sm:gap-2">
          <Button
            onClick={() => {
              updateProductStore({
                productId: id,
                amount: count,
                price: price,
                image: image,
                title: title,
              });
              addItemsToCart({
                productId: id,
                amount: count,
                price: price,
                image: image,
                title: title,
              });
              router.push("/cart");
            }}
            className="sm:text-sm xs:text-xs xs:h-8 xs:px-1"
          >
            Add to cart
          </Button>
          <div className="flex gap-3 justify-between items-center sm:gap-1 sm:flex-col">
            <p>Amount:</p>
            <div className="flex justify-between items-center gap-3 sm:gap-1">
              <Button
                onClick={() => {
                  if (count < 2) {
                    setCount(1);
                  } else {
                    setCount(count - 1);
                  }
                }}
                className="sm:text-sm xs:text-xs xs:h-8 xs:w-8"
              >
                -
              </Button>
              <p className="font-bold w-4 flex justify-center">{count}</p>
              <Button
                onClick={() => setCount(count + 1)}
                className="sm:text-sm xs:text-xs xs:h-8 xs:w-8"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
