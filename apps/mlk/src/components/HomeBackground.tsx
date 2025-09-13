"use client";
import { bungeeOutline } from "../styles/font/page";
import { usePathname } from "next/navigation";

export default function HomeBackground() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className={`${bungeeOutline.className} overflow-x-hidden`}>
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 -z-20 w-full max-w-[1000px] h-[900px] bg-[#ebdd00] opacity-10 pointer-events-none" />
      <div className="lg:flex flex-col ">
        <div className="absolute top-65 left-40 -translate-x-1/2 -z-10 text-[#15763f] font-bold text-[120px] opacity-20 pointer-events-none">MLK</div>
        <div className="absolute top-110 left-45 -rotate-15 -translate-x-1/2 -z-10 text-[#15763f] font-bold text-[74px] opacity-20 pointer-events-none">Primary</div>
      </div>
      <div className="absolute top-100 left-15 -translate-x-1/2 -z-10 pointer-events-none">
        <div className="h-20 w-20 rounded-full p-[5px] bg-gradient-to-r from-[#e26d5c] to-[#404afe]" />
      </div>
      <div className="absolute top-127 left-42 -translate-x-1/2 -z-10 h-27 w-27 bg-gradient-to-br from-[#dabeea] to-[#6c3c8a] rounded-full pointer-events-none"></div>
    </div>
  );
}
