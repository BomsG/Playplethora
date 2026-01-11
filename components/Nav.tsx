import Image from "next/image";
import {
  RiShoppingBagLine,
  RiShoppingCartLine,
  RiSearchLine,
  RiHeart3Fill,
} from "react-icons/ri";
import logo from "../public/images/Logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pt-3 ">
      <div className="relative w-full max-w-6xl bg-white border-2 border-black text-black px-8 py-4 flex items-center justify-between shadow-[8px_8px_0px_0px_rgba(110,231,183,1)]">
        <div className="flex gap-8 text-[18px]  tracking-widest uppercase">
          <a href="#" className="hover:opacity-70">
            Brand
          </a>
          <a href="#" className="hover:opacity-70 flex items-center gap-1">
            Playground <span className="text-[10px]">▼</span>
          </a>
          <a href="#" className="hover:opacity-70">
            Playverse
          </a>
        </div>

        <Image src={logo} alt="logo" />

        <div className="flex gap-6 items-center text-[18px] ">
          <a href="#" className="text-[16px] uppercase hidden md:block">
            Contact
          </a>
          <a href="#" className="text-[16px] uppercase hidden md:block">
            Account
          </a>
          <div className="flex gap-4 text-xl">
            <RiShoppingCartLine className="cursor-pointer text-[24px]" />
            <RiHeart3Fill className="cursor-pointer text-[24px]" />
            <RiSearchLine className="cursor-pointer text-[24px]" />
          </div>
        </div>
      </div>
    </nav>
  );
}
