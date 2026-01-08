// components/Bcourt.tsx
"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const PLAYERS = [
  { id: 1, image: "/images/style.png" },
  { id: 2, image: "/images/style2.png" },
  { id: 3, image: "/images/style3.png" },
  { id: 4, image: "/images/style4.png" },
  { id: 5, image: "/images/play2.png" },
  { id: 6, image: "/images/play1.png" },
];

export default function Bcourt() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <section className="bg-white py-24 overflow-hidden">
      {/* --- HEADER --- */}
      <div className="text-center mb-20 px-6">
        <h2 className="hero font-bold text-[64px] leading-18 md:text-5xl uppercase tracking-tighter mb-4">
          Big Court Players
        </h2>
        <p className="max-w-xl mx-auto text-zinc-500 text-[28px] md:text-xs leading-7 uppercase tracking-widest">
          Lorem ipsum dolor sit amet consectetur. In vestibulum fames risus quis
          a ipsum porta amet dignissim.
        </p>
      </div>

      {/* --- STAGGERED SLIDER --- */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-10 md:gap-6">
            {PLAYERS.map((player, i) => (
              <div
                key={player.id}
                className={`flex-[0_0_70%] sm:flex-[0_0_40%] lg:flex-[0_0_22%] min-w-0 transition-transform duration-700 
                  ${i % 2 !== 0 ? "translate-y-12" : "-translate-y-4"}`}
              >
                <div className="relative group">
                  {/* The Mint Offset Background Box */}
                  <div className="absolute inset-0 bg-[#38D2A1] translate-x-3 translate-y-3" />

                  {/* Image Container */}
                  <div className="relative aspect-3/4 overflow-hidden border border-black bg-white">
                    <img
                      src={player.image}
                      alt="Player"
                      className="w-full h-full object-cover  transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CONTROLS --- */}
        <div className="mt-32 pt-8 border-t border-dashed border-zinc-300 flex justify-between items-center">
          <div className="flex gap-2">
            {PLAYERS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  i === selectedIndex ? "bg-black w-8" : "bg-zinc-200 w-2"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="p-3 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"
            >
              <HiOutlineArrowLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="p-3 border border-zinc-200 rounded-full hover:bg-black hover:text-white transition-all"
            >
              <HiOutlineArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
