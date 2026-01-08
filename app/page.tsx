import Navbar from "@/components/Nav";
import React from "react";
import { FiSearch, FiHeart, FiChevronDown } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import heroi from "../public/images/hero.png";
import Image from "next/image";
import Bsellers from "@/components/Bsellers";
import styleimg from "../public/images/style.png";
import styleimg2 from "../public/images/style2.png";
import Playground from "@/components/Playground";
import Bcourt from "@/components/Bcourt";
import Playverse from "@/components/Playverse";
import FAQ from "@/components/Faaq";

const HeroSection = () => {
  return (
    <>
      <div className="relative min-h-screen bg-zinc-900 overflow-hidden font-sans">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroi}
            alt="Streetwear Background"
            className="w-full h-full object-center brightness-50"
          />
        </div>

        <Navbar />

        <main className="relative z-10 container mx-auto px-10 h-screen flex flex-col justify-end pb-32">
          <div className="grid grid-cols-12 items-end">
            {/* Main Typography Area */}
            <div className="col-span-8">
              <h1 className="hero text-[72px] leading-15 tracking-wide font-black text-white uppercase flex flex-col">
                <span>Play Fashion</span>
                <span>Play Style</span>
                <span>Play Plethora</span>
              </h1>
              <p className="mt-8 text-gray-300 text-lg max-w-lg leading-7">
                Lorem ipsum dolor sit amet consectetur. In vestibulum fames
                risus quis a ipsum porta amet dignissim.
              </p>
            </div>

            {/* CTA Button Area */}
            <div className="col-span-4 flex justify-center ml-35">
              <button className="bg-white text-black font-semibold uppercase py-4 px-10 tracking-7 text-lg hover:bg-[#38D2A1] hover:text-white transition-all duration-300">
                Enter Playground
              </button>
            </div>
          </div>
        </main>
      </div>
      <Bsellers />
      <section className="bg-[#F3F3F3] py-20 ">
        <div className="max-w-360  grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-24 items-center ">
          {/* --- Image Container with Hard Shadow --- */}
          <div className="relative group w-169.75">
            {/* The Hard Shadow (Solid Gray Box) */}
            <div className="absolute inset-0 bg-[#696969] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

            {/* The Image Wrapper */}
            <div className="relative aspect-4/3 md:aspect-square overflow-hidden  border border-zinc-300 bg-white ">
              <Image
                src={styleimg}
                alt="Editorial Fashion"
                fill
                className="object-cover "
              />
            </div>
          </div>

          {/* --- Text Content Area --- */}
          <div className="space-y-8 flex flex-col items-start">
            <h2 className="hero font-heading text-3xl md:text-4xl lg:text-5xl uppercase leading-[1.1] tracking-tighter text-black">
              Lorem ipsum dolor sit amet consectetur. In vestibulum fames risus
              quis a ipsum porta amet dignissim.
            </h2>

            <button className="bg-white border border-zinc-300 px-8 py-3 text-[18px] font-semibold uppercase tracking-[0.2em] shadow-sm hover:bg-black hover:text-white transition-all duration-300">
              Read Our Story
            </button>
          </div>
        </div>
      </section>
      <Playground />
      <section className="bg-[#F3F3F3] py-20 overflow-hidden pl-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* --- Text Column (CONSTRAINED) --- */}
          <div className="px-6 lg:px-0">
            <div className="max-w-7xl mx-auto space-y-8 flex flex-col items-start">
              <h2 className="hero font-heading text-3xl md:text-4xl lg:text-5xl uppercase leading-[1.1] tracking-tighter text-black">
                Lorem ipsum dolor sit amet consectetur. In vestibulum fames
                risus quis a ipsum porta amet dignissim.
              </h2>

              <button className="bg-white border border-zinc-300 px-8 py-3 text-[18px] font-semibold uppercase tracking-[0.2em] shadow-sm hover:bg-black hover:text-white transition-all duration-300">
                DISPLAY
              </button>
            </div>
          </div>

          {/* --- Image Column (FULL BLEED RIGHT) --- */}
          <div className="relative">
            <div className="relative ml-auto w-full lg:w-[55vw] group">
              {/* Shadow */}
              <div className="absolute inset-0 bg-[#696969] translate-x-4 translate-y-4 z-0" />

              {/* Image */}
              <div className="relative z-10 aspect-4/3 md:aspect-square overflow-hidden border border-zinc-300 bg-white">
                <Image
                  src={styleimg2}
                  alt="Editorial Fashion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bcourt />
      <Playverse />
      <FAQ />
    </>
  );
};

export default HeroSection;
