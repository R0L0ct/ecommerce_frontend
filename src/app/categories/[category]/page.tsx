import { Category } from "@/app/components/Category/Category";
import React from "react";

interface Props {
  params: { category: string };
}

export default function CategorySearch({ params }: Props) {
  const { category } = params;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full border-t border-b flex justify-center py-3 mb-5">
        <h1 className="text-2xl font-bold">{decodeURIComponent(category)}</h1>
      </div>
      <Category category={category} />
    </div>
  );
}
