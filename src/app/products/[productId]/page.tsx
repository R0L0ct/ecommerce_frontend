import { ProductDetail } from "@/app/components/ProductDetail/ProductDetail";
import React from "react";

interface Props {
  params: { productId: string };
}

export default function ProductDetails({ params }: Props) {
  const { productId } = params;
  return (
    <div className="flex flex-col items-center">
      Producto: {productId}
      <ProductDetail productId={productId} />
    </div>
  );
}
