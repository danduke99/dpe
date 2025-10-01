"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nunitoBold } from "../styles/font/page";

interface InteractiveSectionProps {
  bgColor?: string;
  height?: string | number;
  iconCount?: number;
}

interface BubbleIcon {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  logo: string;
}

const AnimatedIcon = ({
  icon,
  mode,
  containerWidth,
  containerHeight,
}: {
  icon: BubbleIcon;
  mode: "fall" | "bubble";
  containerWidth: number;
  containerHeight: number;
}) => {
  const posRef = useRef({ ...icon });
  const [, setTick] = useState(0); // force re-render at ~60fps

  useEffect(() => {
    if (mode !== "bubble") return;
    let animationFrame: number;

    const animate = () => {
      const pos = posRef.current;

      let newX = pos.x + pos.vx;
      let newY = pos.y + pos.vy;
      let newVX = pos.vx;
      let newVY = pos.vy;

      if (newX <= 0 || newX + pos.size >= containerWidth) newVX *= -1;
      if (newY <= 0 || newY + pos.size >= containerHeight) newVY *= -1;

      newX = Math.min(Math.max(newX, 0), containerWidth - pos.size);
      newY = Math.min(Math.max(newY, 0), containerHeight - pos.size);

      posRef.current = { ...pos, x: newX, y: newY, vx: newVX, vy: newVY };

      // trigger re-render once per frame
      setTick((tick) => tick + 1);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [containerWidth, containerHeight, mode, icon.size]);

  if (mode === "fall") {
    return (
      <motion.div
        initial={{ y: -50, rotate: 0, x: 0 }}
        animate={{
          y: "120vh",
          rotate: 360,
          x: [0, 10 + Math.random() * 20, -10 - Math.random() * 20, 0],
        }}
        transition={{
          y: { repeat: Infinity, repeatType: "loop", duration: 6 + Math.random() * 4, ease: "linear" },
          x: { repeat: Infinity, repeatType: "mirror", duration: 3 + Math.random() * 2, ease: "easeInOut" },
          rotate: { repeat: Infinity, repeatType: "loop", duration: 6 + Math.random() * 4, ease: "linear" },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: `${icon.x}%`,
          width: icon.size,
          height: icon.size,
        }}
      >
        <Image src={icon.logo} width={icon.size} height={icon.size} alt="logo" />
      </motion.div>
    );
  }

  // Bubble mode using direct x/y style updates for smooth animation
  const { x, y } = posRef.current;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: icon.size,
        height: icon.size,
        x,
        y,
      }}
    >
      <Image src={icon.logo} width={icon.size} height={icon.size} alt="logo" />
    </motion.div>
  );
};


const InteractiveIcons = ({
  iconCount = 20,
  mode,
  containerWidth = 800,
  containerHeight = 300,
}: {
  iconCount?: number;
  mode: "fall" | "bubble";
  containerWidth?: number;
  containerHeight?: number;
}) => {
  const [icons, setIcons] = useState<BubbleIcon[]>([]);
  const logos = ["/aopelC.png", "/logo.png", "/parliament.png"];

  useEffect(() => {
    const newIcons: BubbleIcon[] = Array.from({ length: iconCount }, (_, i) => {
      if (mode === "fall") {
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 60,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 4,
          size: 42,
          logo: i % 3 === 0 ? "/logodpe.png" : "/logo.png",
        };
      } else {
        return {
          id: i,
          x: Math.random() * containerWidth,
          y: Math.random() * containerHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: 30 + Math.random() * 40,
          logo: logos[Math.floor(Math.random() * logos.length)],
        };
      }
    });
    setIcons(newIcons);
  }, [iconCount, mode, containerWidth, containerHeight]);

  return (
    <>
      {icons.map((icon) => (
        <AnimatedIcon
          key={icon.id}
          icon={icon}
          mode={mode}
          containerWidth={containerWidth}
          containerHeight={containerHeight}
        />
      ))}
    </>
  );
};

export default function InteractiveSection({
  bgColor = "#15763f",
  height = 150,
  iconCount = 25,
}: InteractiveSectionProps) {
  const pathname = usePathname();
  let sectionText = "Projects";
  let animationMode: "fall" | "bubble" = "fall";

  if (pathname?.includes("about")) {
    sectionText = "About";
    animationMode = "fall";
  } else if (pathname?.includes("projects")) {
    sectionText = "Projects";
    animationMode = "bubble";
  } else if (pathname?.includes("contact")) {
    sectionText = "Contact";
    animationMode = "fall";
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundColor: bgColor }}></div>

      <InteractiveIcons
        iconCount={iconCount}
        mode={animationMode}
        containerWidth={typeof window !== "undefined" ? window.innerWidth : 800}
        containerHeight={typeof height === "number" ? height : 300}
      />

      <div className="absolute inset-0 z-20 flex justify-center items-center w-full h-full pointer-events-none">
        <p className={`${nunitoBold.className} text-4xl text-black`}>{sectionText}</p>
      </div>
    </div>
  );
}
