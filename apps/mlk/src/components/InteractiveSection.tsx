"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nunitoBold } from "../styles/font/page";

interface InteractiveSectionProps {
  bgColor?: string;
  height?: string | number;
  iconCount?: number;
}

// Bubble icon type for /projects
interface BubbleIcon {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  logo: string;
}

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
  const animControls = useRef(Array.from({ length: iconCount * 2 }, () => useAnimation())).current; // double for two logos
  const logos = ["/aopelC.png", "/logo.png", "/parliament.png"];

  useEffect(() => {
    if (mode === "fall") {
      const initialIcons: BubbleIcon[] = Array.from({ length: iconCount * 2 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // percent left
        y: Math.random() * 60, // start y
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 4,
        size: 42,
        logo: i % 3 === 0 ? "/logodpe.png" : "/logo.png",
      }));
      setIcons(initialIcons);
    } else if (mode === "bubble") {
      const initialIcons: BubbleIcon[] = Array.from({ length: iconCount * 2 }, (_, i) => ({
        id: i,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: 30 + Math.random() * 40,
        logo: logos[Math.floor(Math.random() * logos.length)]
      }));
      setIcons(initialIcons);
    }
  }, [iconCount, mode, containerWidth, containerHeight]);

  // Bubble animation
  useEffect(() => {
    if (mode !== "bubble") return;
    let animationFrame: number;

    const animate = () => {
      setIcons((prev) =>
        prev.map((icon, idx) => {
          let newX = icon.x + icon.vx;
          let newY = icon.y + icon.vy;

          if (newX <= 0 || newX + icon.size >= containerWidth) icon.vx *= -1;
          if (newY <= 0 || newY + icon.size >= containerHeight) icon.vy *= -1;

          newX = Math.min(Math.max(newX, 0), containerWidth - icon.size);
          newY = Math.min(Math.max(newY, 0), containerHeight - icon.size);

          animControls[idx].start({ x: newX, y: newY });

          return { ...icon, x: newX, y: newY };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mode, containerWidth, containerHeight, animControls]);

  // Render icons
  return (
    <>
      {icons.map((icon, idx) => {
        if (mode === "bubble") {
          return (
            <motion.div
              key={icon.id}
              animate={animControls[idx]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: icon.size,
                height: icon.size,
              }}
            >
              <Image src={icon.logo} width={icon.size} height={icon.size} alt="logo" />
            </motion.div>
          );
        } else {
          // Falling icons
          return (
            <motion.div
              key={icon.id}
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
      })}
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
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundColor: bgColor }}></div>

      {/* Icons */}
      <InteractiveIcons
        iconCount={iconCount}
        mode={animationMode}
        containerWidth={typeof window !== "undefined" ? window.innerWidth : 800}
        containerHeight={typeof height === "number" ? height : 300}
      />

      {/* Section text */}
      <div className="absolute inset-0 z-20 flex justify-center items-center w-full h-full pointer-events-none">
        <p className={`${nunitoBold.className} text-4xl text-black`}>{sectionText}</p>
      </div>
    </div>
  );
}
