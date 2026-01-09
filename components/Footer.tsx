import React from "react";
import Image from "next/image";
import logo from "../public/images/logo2.png";

const FOOTER_DATA = {
  navigation: [
    { name: "Brand", href: "#" },
    { name: "Playground", href: "#" },
    { name: "Playverse", href: "#" },
    { name: "Favorites", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" },
  ],
  shop: [
    { name: "All", href: "#" },
    { name: "Play Exclusive", href: "#" },
    { name: "Play Street", href: "#" },
    { name: "Boyfriends", href: "#" },
    { name: "Girlfriends", href: "#" },
  ],
  support: [
    { name: "Payment Methods", href: "#" },
    { name: "Return & Refunds", href: "#" },
    { name: "Shipping & Delivery", href: "#" },
    { name: "Terms & Condition", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  const linkStyles =
    "hover:text-[#38D2A1] cursor-pointer transition-colors duration-200";
  const titleStyles =
    "font-heading text-xs tracking-[0.2em] uppercase text-zinc-300 mb-6 block";
  const listStyles =
    "space-y-3 text-[10px] md:text-xs uppercase tracking-widest text-zinc-500";

  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* --- Newsletter --- */}
          <div className="lg:col-span-6 space-y-8">
            <Image src={logo} alt="plethora-logo" />

            <div className="space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-widest text-zinc-400">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form className="flex flex-col sm:flex-row gap-0 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-800/50 border border-zinc-700 px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 flex-grow text-white"
                />
                <button className="bg-white text-black font-bold uppercase py-3 px-8 text-xs tracking-widest hover:bg-[#38D2A1] transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* --- Mapped Links Sections --- */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Navigation Column */}
            <div>
              <span className={titleStyles}>Navigation</span>
              <ul className={listStyles}>
                {FOOTER_DATA.navigation.map((link) => (
                  <li key={link.name} className={linkStyles}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop Column */}
            <div>
              <span className={titleStyles}>Shop</span>
              <ul className={listStyles}>
                {FOOTER_DATA.shop.map((link) => (
                  <li key={link.name} className={linkStyles}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <span className={titleStyles}>Support</span>
              <ul className={listStyles}>
                {FOOTER_DATA.support.map((link) => (
                  <li key={link.name} className={linkStyles}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-600">
            © 20245 PlayPlethora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
