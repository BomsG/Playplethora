// components/ProductCard.tsx
import { HiOutlineHeart } from "react-icons/hi";
import Image, { StaticImageData } from "next/image";
import play1 from "../public/images/play1.png";
import play2 from "../public/images/play2.png";
import play3 from "../public/images/play3.png";

interface ProductProps {
  badge?: string;
  title: string;
  price: string;
  oldPrice?: string;
  // Accept multiple images now
  imageSrc?: (StaticImageData | string)[];
}

export default function ProductCard({
  badge,
  title,
  price,
  oldPrice,
  imageSrc = [play1], // default array with one image
}: ProductProps) {
  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-3/4 bg-[#F9F9F9] border border-zinc-100 overflow-hidden">
        {/* Badge - Mint Green Style */}
        {badge && (
          <div className="absolute top-4 left-4 z-10 bg-[#6EE7B7] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
            {badge}
          </div>
        )}

        {/* Wishlist Icon */}
        <button className="absolute top-4 right-4 z-10 text-zinc-400 hover:text-black transition-colors">
          <HiOutlineHeart size={20} />
        </button>

        {/* Product Images */}
        <div className="w-full h-full flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-110 space-x-2">
          {imageSrc.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="py-4 space-y-1">
        <h3 className="hero font-bold text-[#363636] leading-8 font-heading text-[12px] md:text-[24px] uppercase tracking-wider ">
          {title}
        </h3>

        <p className="font-sans text-[12px]  text-zinc-500 uppercase leading-6 max-w-62.5">
          Rich pigments. Long wear. Shades that celebrate every mood and every
          skin tone.
        </p>

        <div className="hero flex items-center gap-2 pt-1">
          {oldPrice && (
            <span className="font-heading text-[18px] text-zinc-400 line-through">
              {oldPrice} NGN
            </span>
          )}
          <span className="font-heading text-[24px] font-bold text-black">
            {price} NGN
          </span>
        </div>
      </div>
    </div>
  );
}
