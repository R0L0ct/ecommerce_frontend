import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const CarouselStyled = () => {
  const images = [
    "/carousel/camara.jpg",
    "/carousel/cell.jpg",
    "/carousel/reloj.jpg",
    "/carousel/jabon.jpg",
    "/carousel/auri.jpg",
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-4/5"
    >
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem
            key={img}
            className="basis-1/3"
            // className="md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <div className="relative w-full h-full rounded-lg">
                    <Image
                      src={img}
                      alt={img}
                      className="absolute object-cover rounded-lg"
                      fill
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
