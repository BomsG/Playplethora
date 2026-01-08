// components/Playground.tsx
"use client";
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import ProductCard from "./ProductCard";

const CATEGORIES = [
  "ALL",
  "PLAY EXCLUSIVE",
  "PLAY STREET",
  "GIRLFRIENDS",
  "BOYFRIENDS",
];

const ALL_PRODUCTS = [
  {
    id: 1,
    category: "PLAY EXCLUSIVE",
    badge: "NEW ARRIVAL",
    title: "SURF THE WAVE",
    price: "150,000.00",
  },
  {
    id: 2,
    category: "PLAY STREET",
    badge: "BESTSELLER",
    title: "SURF THE WAVE",
    price: "150,000.00",
  },
  {
    id: 3,
    category: "GIRLFRIENDS",
    badge: "-40%",
    title: "SURF THE WAVE",
    price: "150,000.00",
    oldPrice: "180,000.00",
  },
  {
    id: 4,
    category: "BOYFRIENDS",
    title: "SURF THE WAVE",
    price: "150,000.00",
  },
];

export default function Playground() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "ALL"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-18">
      <div className="max-w-360 mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="hero leading-18 tracking-wide font-bold text-lg md:text-[64px]  uppercase">
            Playground
          </h2>
          <button className="flex items-center gap-2 text-[18px] font-medium uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity">
            Enter Playground <HiOutlineArrowNarrowRight />
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-[18px]  font-semibold uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#6EE7B7] border-[#6EE7B7] text-[#5C5C5C]"
                  : "bg-[#F3F3F3] border-[#BDBFC1] text-gray-500 hover:border-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden mb-10" ref={emblaRef}>
          <div className="flex gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation & Pagination */}
        <div className="flex justify-between items-center">
          {/* Dots */}
          <div className="flex gap-2">
            {filteredProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1 w-1 rounded-full transition-all ${
                  i === selectedIndex ? "bg-black scale-125" : "bg-zinc-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="p-3 border border-zinc-300 rounded-full hover:bg-black hover:text-white transition-all"
            >
              <HiOutlineArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="p-3 border border-zinc-300 rounded-full hover:bg-black hover:text-white transition-all"
            >
              <HiOutlineArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
