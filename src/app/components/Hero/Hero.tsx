import React from "react";
import { CarouselDefault } from "../ui/Carousel";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";
import { CarouselStyled } from "@/components/Carousel";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-red-500 py-10">
      <CarouselStyled />
      {/* <div className="w-full h-40 bg-gradient-to-b from-red-500 via-red-400  to-red-300"></div> */}
      {/* <div className="w-full h-10 bg-gradient-to-b from-red-300 via-red-200  to-white"></div> */}
    </div>
  );
}
