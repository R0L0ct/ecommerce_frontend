"use client";
import React from "react";
import Slider from "react-slick";

// Estilos
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: React.ReactNode;
}

interface ArrowStyles {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
}

export function CarouselDefault({ children }: CarouselProps) {
  function NextArrow({ className, style, onClick }: ArrowStyles) {
    return (
      <div
        className={className}
        style={{
          ...style,
          // display: "block",
          backgroundColor: "gray",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow({ className, style, onClick }: ArrowStyles) {
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: "gray",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ width: "95%" }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
