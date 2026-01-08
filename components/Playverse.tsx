// components/Playverse.tsx
import React from "react";

export default function Playverse() {
  return (
    <section className="relative h-150 w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Playverse"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="hero font-heading text-[64px] md:text-7xl lg:text-8xl text-white uppercase tracking-widest mb-4">
          PLAYVERSE
        </h2>
        <p className="max-w-xl text-zinc-300 text-lg md:text-sm uppercase tracking-widest leading-7 mb-10">
          Lorem ipsum dolor sit amet consectetur. In vestibulum fames risus quis
          a ipsum porta amet dignissim.
        </p>
        <button className="bg-white text-black font-semibold uppercase py-4 px-12 tracking-widest text-lg hover:bg-[#38D2A1] transition-colors">
          Enter Playverse
        </button>
      </div>
    </section>
  );
}
