"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";
import ProductCard from "./ProductCard";

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Surf the wave",
    price: "150,000.00",
    oldPrice: "250,000.00",
    badge: "-40%",
  },
  { id: 2, title: "Surf the wave", price: "150,000.00" },
  { id: 3, title: "Surf the wave", price: "150,000.00", badge: "New Arrival" },
  { id: 4, title: "Midnight Flow", price: "120,000.00" },
  { id: 5, title: "Urban Edge", price: "180,000.00", badge: "Limited" },
  { id: 6, title: "Playground Tee", price: "95,000.00" },
];

export default function Bsellers() {
  // 1. Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 2. Navigation Logic
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // 3. Update active dot on scroll
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
    <section className="py-20 px-6 md:px-16 bg-white overflow-hidden mx-15">
      {/* Header */}
      <div className="flex justify-between items-center  mb-12">
        <h2 className="hero font-heading text-[64px] uppercase tracking-wider leading-18">
          Best Sellers
        </h2>
        <a
          href="#"
          className="flex items-center gap-2 text-[18px] text-[#5C5C5C] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
        >
          View All <HiOutlineArrowNarrowRight />
        </a>
      </div>

      {/* Slider Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] border border-[#5C5C5C] rounded-sm"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex justify-between items-center mt-10">
        {/* Pagination Dots */}
        <div className="flex gap-2 border-2">
          {MOCK_PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === selectedIndex ? "bg-black w-6" : "bg-gray-300  w-1.5"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            className="p-3 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"
          >
            <HiOutlineArrowLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"
          >
            <HiOutlineArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
