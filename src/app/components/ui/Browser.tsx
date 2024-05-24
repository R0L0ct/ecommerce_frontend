"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";

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

export default function Browser() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ProductsData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const isSmallScreen = useMediaQuery("(max-width: 477px)");

  useEffect(() => {
    if (isFocused && isSmallScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFocused, isSmallScreen]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (query !== "") {
        try {
          setIsLoading(true);
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
          setFilteredProducts(
            data.filter((product: any) =>
              product.title.toLowerCase().includes(query.toLowerCase())
            )
          );
          setIsLoading(false);
        } catch (err) {
          console.error(err);
          setIsLoading(false);
        }
      } else {
        setFilteredProducts(products);
      }
    };

    fetchProducts();
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (isFocused && query !== "") {
        if (event.key === "ArrowDown") {
          setSelectedIndex((prevIndex) =>
            Math.min(prevIndex + 1, filteredProducts.length - 1)
          );
        } else if (event.key === "ArrowUp") {
          setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (event.key === "Enter") {
          if (selectedIndex >= 0 && selectedIndex < filteredProducts.length) {
            router.push(`/products/${filteredProducts[selectedIndex].id}`);
            setQuery("");
            setFilteredProducts([]);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused, query, selectedIndex, filteredProducts]);

  const handleSearch = (event: any) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    setSelectedIndex(-1); // Reiniciar la selección cuando se cambia la consulta
  };

  const handleMouseEnter = (index: number) => {
    setSelectedIndex(index);
  };

  const handleMouseClick = (index: number) => {
    const productId = filteredProducts[index].id;
    router.push(`/products/${productId}`);
    setFilteredProducts([]);
  };

  return (
    <div
      className={`flex w-full max-w-[50%] h-9 mx-10  bg-white relative 2xs:h-5 ${
        query && "outline outline-2 rounded-none "
      }${
        isFocused &&
        "2xs:absolute 2xs:top-0 2xs:right-0 2xs:left-0 2xs:max-w-full 2xs:mx-0 2xs:h-8 2xs:z-50"
      }`}
    >
      {isFocused && (
        <button
          onClick={() => {
            setIsFocused(false);
            setQuery("");
          }}
          className="px-1"
        >
          <FaCircleArrowLeft className="text-red-700" />
        </button>
      )}
      <input
        className="w-full border-none bg-transparent px-4 py-1 text-blue-900 outline-none 2xs:text-xs"
        type="search"
        name="search"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
      />
      {query && filteredProducts.length > 0 && !isSmallScreen && isFocused ? (
        <div className="absolute bg-white top-[38px] left-0 right-0 z-50 p-3 rounded-b outline outline-2 max-h-[669px] overflow-auto">
          <ul>
            {filteredProducts.map((items, index) => (
              <li
                className="p-1 border-b"
                key={items.id}
                style={{
                  backgroundColor:
                    index === selectedIndex ? "#d3d3d3" : "transparent",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={() => handleMouseClick(index)}
              >
                {items.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        isFocused &&
        isSmallScreen && (
          <div className="absolute bg-white top-8 left-0 right-0 p-1 outline outline-1 h-screen overflow-auto text-xs z-50">
            <ul>
              {filteredProducts.map((items, index) => (
                <li
                  className="p-1 border-b"
                  key={items.id}
                  style={{
                    backgroundColor:
                      index === selectedIndex ? "#d3d3d3" : "transparent",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() => handleMouseClick(index)}
                >
                  {items.title}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
      {query && (
        <button
          type="submit"
          className="m-1 rounded-xl bg-blue-900 px-2 py-0 text-white"
        >
          <svg
            className="fill-current h-4 w-4 2xs:h-2 2xs:w-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ background: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      )}
    </div>
  );
}
