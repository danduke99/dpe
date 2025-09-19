"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";

interface InteractiveSectionProps {
  /** Background color, can be any Tailwind class or hex value */
  bgColor?: string;
  /** Optional height */
  height?: string | number;
  /** Number of falling icons */
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
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
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
          <img src="/aopelC.png" alt="logo"/>
        </motion.div>
      ))}
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          initial={{ y: -50, rotate: 15 }}
          animate={{ y: "120vh", rotate: -360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 4 + Math.random() * 6,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: `${icon.left}%`,
            width: 50,
            height: 50,
          }}
        >
          <img src="/logoDPE.png" alt="logo"/>
        </motion.div>
      ))}
    </>
  );
};

export default function InteractiveSection({
  bgColor = "#15763f",
  height = "64px", // default 96 Tailwind = 24rem
  iconCount = 30,
}: InteractiveSectionProps) {
  return (
    <div className={`relative w-full overflow-hidden`} style={{ height }}>
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-20 z-10"
        style={{ backgroundColor: bgColor }}
      ></div>

      {/* Falling icons */}
      <FallingIcons iconCount={iconCount} />
    </div>
  );
}
