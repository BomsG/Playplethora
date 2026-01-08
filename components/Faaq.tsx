// components/FAQ.tsx
"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ_DATA = [
  {
    question: "QUESTION TEXT GOES HERE",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    question: "QUESTION TEXT GOES HERE",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    question: "QUESTION TEXT GOES HERE",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    question: "QUESTION TEXT GOES HERE",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24 w-full">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Title */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="hero font-bold text-[64px] uppercase tracking-tighter">
            FAQ'S
          </h2>
          <p className="text-zinc-500 text-lg  leading-7 ">
            Lorem ipsum dolor sit amet consectetur. In vestibulum fames risus
            quis a ipsum porta amet dignissim.
          </p>
          <button className="border-2 border-zinc-300 px-8 py-3 text-[14px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-2xl">
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
                  className="w-full py-10 flex justify-between items-center text-left group"
                >
                  <span className="hero font-heading text-[24px] tracking-wider font-bold md:text-xl uppercase  group-hover:text-zinc-500 transition-colors">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <FiChevronUp size={20} />
                  ) : (
                    <FiChevronDown size={20} />
                  )}
                </button>

                {openIndex === index && (
                  <div className="pb-5 pr-12">
                    <p className="text-zinc-500 text-[16px] leading-6 md:text-sm tracking-wider">
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
