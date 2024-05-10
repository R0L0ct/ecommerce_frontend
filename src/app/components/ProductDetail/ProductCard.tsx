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
    <div className="flex items-center justify-evenly w-full border-2">
      <div className="flex justify-center items-center p-10">
        <div className="relative w-96 h-96">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      </div>
      <div className="flex justify-evenly flex-col border-l-2 h-full p-10">
        <p className="max-w-96 font-bold text-2xl flex flex-wrap">{title}</p>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Detalles del producto:</h3>
          <p>Rate: {rating.rate}</p>
          <p>Count: {rating.count}</p>
          <p>{description}</p>
          <p>Categoria: {category}</p>
          <p>Precio: ${price}</p>
        </div>
        <div className="flex justify-around items-center w-full border-t pt-3">
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
          >
            Add to cart
          </Button>
          <div className="flex gap-3 justify-between items-center">
            <p>Amount:</p>
            <Button
              onClick={() => {
                if (count < 2) {
                  setCount(1);
                } else {
                  setCount(count - 1);
                }
              }}
            >
              -
            </Button>
            <p className="font-bold w-4 flex justify-center">{count}</p>
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
