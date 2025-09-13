"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "./map"; // adjust path

export default function GalleryCarousel() {
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);

  const imageCount = galleryImages.length;

  const prevSlide = () => {
    setCurrentIndex([(currentIndex - 1 + imageCount) % imageCount, -1]);
  };

  const nextSlide = () => {
    setCurrentIndex([(currentIndex + 1) % imageCount, 1]);
  };

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
      <div className="overflow-hidden rounded-3xl w-full h-80 sm:h-96 shadow-2xl relative">
        {/* Framer Motion Slide */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
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
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x > 50) prevSlide();
              else if (offset.x < -50) nextSlide();
            }}
          />
        </AnimatePresence>

        {/* Left & Right Fade Columns */}
        <div className="absolute top-0 left-0 h-full w-1/6 pointer-events-none bg-gradient-to-r from-black/50 via-black/0"></div>
        <div className="absolute top-0 right-0 h-full w-1/6 pointer-events-none bg-gradient-to-l from-black/50 via-black/0"></div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 h-8 w-8 p-1 rounded-full bg-white bg-opacity-70 shadow-lg hover:bg-opacity-100 transform -translate-y-1/2 transition cursor-pointer"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 h-8 w-8 p-1 rounded-full bg-white bg-opacity-70 shadow-lg hover:bg-opacity-100 transform -translate-y-1/2 transition cursor-pointer"
        >
          &#10095;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {galleryImages.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-3 rounded-full cursor-pointer transition ${
              idx === currentIndex ? "bg-[#6c3c8a]" : "bg-[#888888]"
            }`}
            onClick={() => setCurrentIndex([idx, idx > currentIndex ? 1 : -1])}
          ></span>
        ))}
      </div>
    </div>
  );
}
