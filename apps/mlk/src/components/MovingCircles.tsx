"use client";
import { useState, useEffect } from "react";

export default function MovingCircles() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: { clientX: number; clientY: number; }) {
      // Calculate offset from center of window
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Opposite movement with limited intensity
      const moveX = (centerX - e.clientX) * 0.02; // adjust 0.02 for sensitivity
      const moveY = (centerY - e.clientY) * 0.02;

      setOffset({ x: moveX, y: moveY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hidden lg:flex">
      <div
        className="flex flex-col rounded-full h-34 w-34 absolute -top-4 right-6 bg-[#4e2a66]"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      />
      {/* Green circle with top-to-bottom gradient */}
      <div
        className="flex flex-col rounded-full h-13 w-13 absolute top-40 right-56 bg-gradient-to-b from-[#888888] to-[#8741ac]"
        style={{ transform: `translate(${offset.x * 0.8}px, ${offset.y * 0.8}px)` }}
      />
      <div
        className="flex flex-col rounded-full h-22 w-22 absolute top-60 right-125 bg-[#a77fbd]"
        style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }}
      />
      {/* Red circle with top-to-bottom gradient */}
      <div
        className="flex flex-col rounded-full h-10 w-10 absolute top-142 right-85 bg-gradient-to-b from-[#888888] to-[#8741ac]"
        style={{ transform: `translate(${offset.x * 1}px, ${offset.y * 1}px)` }}
      />
    </div>
  );
}
