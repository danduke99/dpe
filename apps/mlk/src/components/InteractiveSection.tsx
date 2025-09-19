"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <-- hook for current path
import { nunitoBold } from "../styles/font/page";

interface InteractiveSectionProps {
  bgColor?: string;
  height?: string | number;
  iconCount?: number;
}

const FallingIcons = ({ iconCount = 20 }: { iconCount?: number }) => {
  const [icons, setIcons] = useState<Array<{ id: number; left: number }>>([]);

  useEffect(() => {
    const initialIcons = Array.from({ length: iconCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
    }));
    setIcons(initialIcons);
  }, [iconCount]);

  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: -50, rotate: 0 }}
          animate={{ y: "120vh", rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6 + Math.random() * 4,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: `${icon.left}%`,
            width: 42,
            height: 42,
          }}
        >
          <Image src="/aopelC.png" width={42} height={42} alt="logo" />
        </motion.div>
      ))}
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: -50, rotate: 0 }}
          animate={{ y: "120vh", rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6 + Math.random() * 4,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: `${icon.left}%`,
            width: 42,
            height: 42,
          }}
        >
          <Image src="/logo.png" width={42} height={42} alt="logo" />
        </motion.div>
      ))}
    </>
  );
};

export default function InteractiveSection({
  bgColor = "#15763f",
  height = "64px",
  iconCount = 30,
}: InteractiveSectionProps) {
  const pathname = usePathname(); // get current path
  let sectionText = "Projects"; // default text

  if (pathname?.includes("about")) {
    sectionText = "About";
  } else if (pathname?.includes("contact")) {
    sectionText = "Contact";
  } // add more conditions if needed

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-20 z-10"
        style={{ backgroundColor: bgColor }}
      ></div>

      {/* Falling icons */}
      <FallingIcons iconCount={iconCount} />

      {/* Section text */}
      <div className="absolute inset-0 z-20 flex justify-center items-center w-full h-full pointer-events-none">
          <p className={`${nunitoBold.className} text-4xl text-black`}>
            {sectionText}
          </p>
        </div>
    </div>
  );
}
