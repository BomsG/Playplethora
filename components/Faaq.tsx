// components/FAQ.tsx
"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ_DATA = [
  {
    question: "QUESTION TEXT GOES HERE",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    question: "QUESTION TEXT GOES HERE",
    answer: "Answer text goes here for the second question.",
  },
  {
    question: "QUESTION TEXT GOES HERE",
    answer: "Answer text goes here for the third question.",
  },
  {
    question: "QUESTION TEXT GOES HERE",
    answer: "Answer text goes here for the fourth question.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Title */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="hero font-bold text-[64px] uppercase tracking-tighter">
            FAQ'S
          </h2>
          <p className="text-zinc-500 text-lg uppercase leading-7 max-w-xs">
            Lorem ipsum dolor sit amet consectetur. In vestibulum fames risus
            quis a ipsum porta amet dignissim.
          </p>
          <button className="border border-zinc-300 px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            Contact Us
          </button>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-8">
          <div className="border-t border-zinc-200">
            {FAQ_DATA.map((item, index) => (
              <div key={index} className="border-b border-zinc-200">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="font-heading text-lg md:text-xl uppercase tracking-tight group-hover:text-zinc-500 transition-colors">
                    {item.question}
                  </span>
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>

                {openIndex === index && (
                  <div className="pb-8 pr-12">
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed uppercase tracking-wide">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
