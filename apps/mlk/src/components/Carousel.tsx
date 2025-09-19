"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  height?: string; // e.g. "h-80 sm:h-96"
  rounded?: string; // e.g. "rounded-3xl"
}

export default function Carousel({ images, height = "h-80 sm:h-96", rounded = "rounded-3xl" }: CarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);
  const imageCount = images.length;

  const prevSlide = () => setCurrentIndex([(currentIndex - 1 + imageCount) % imageCount, -1]);
  const nextSlide = () => setCurrentIndex([(currentIndex + 1) % imageCount, 1]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-4">
      <div className={`overflow-hidden ${rounded} w-full ${height} shadow-2xl relative`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 50) prevSlide();
              else if (offset.x < -50) nextSlide();
            }}
          />
        </AnimatePresence>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 h-full w-1/6 pointer-events-none bg-gradient-to-r from-black/50 via-black/0"></div>
        <div className="absolute top-0 right-0 h-full w-1/6 pointer-events-none bg-gradient-to-l from-black/50 via-black/0"></div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 h-8 w-8 p-1 rounded-full bg-white bg-opacity-70 shadow-lg hover:bg-opacity-100 -translate-y-1/2 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 h-8 w-8 p-1 rounded-full bg-white bg-opacity-70 shadow-lg hover:bg-opacity-100 -translate-y-1/2 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-3 rounded-full cursor-pointer transition ${
              idx === currentIndex ? "bg-[#6c3c8a]" : "bg-[#888888]"
            }`}
            onClick={() => setCurrentIndex([idx, idx > currentIndex ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
}
