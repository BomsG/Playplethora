// app/playplethora/page.tsx
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import about1 from "../../public/images/about1.png";

export default function PlayPlethoraPage() {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center pt-20">
        <div className="flex justify-center gap-3 pb-10">
          <span>Home</span>
          <span> / </span>
          <span className="tracking-widest font-semibold">Plethora</span>
        </div>
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-3xl leading-7 tracking-widest uppercase hero pb-5">
              playplethora
            </h1>
            <p className="text-lg tracking-widest text-[#5C5C5C]">
              Lorem ipsum dolor sit amet consectetur. In vestibulum fames risus
              quis a ipsum porta amet dignissim <br /> Lorem ipsum dolor sit
              amet consectetur. In vestibulum fames risus quis a ipsum porta
              amet dignissim.{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image src={about1} alt="about-image" className="w-full" />
        <h2 className="hero text-3xl text-center py-20 ">
          Lorem ipsum dolor sit amet <br /> consectetur. In vestibulum <br />
          fames risus quis a ipsum porta <br /> amet dignissim. Lorem ipsum{" "}
          <br /> dolor sit amet consectetur. In <br /> vestibulum fames risus
          quis a <br /> ipsum porta amet dignissim.{" "}
        </h2>
        <div className="flex justify-center">
          <button className="border py-3 px-2 text-[18px]  rounded-sm ">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}
