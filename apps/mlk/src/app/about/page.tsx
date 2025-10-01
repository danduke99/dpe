"use client";
import InteractiveSection from "../../components/InteractiveSection";
import Image from "next/image";
import { nunito, nunitoBold, nunitoExtraBold, nunitoSemiBold } from "../../styles/font/page";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fullStaff } from "../../components/map";

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % fullStaff.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + fullStaff.length) % fullStaff.length);

  return (
    <section>
      <div className="relative w-full h-32 my-4" >
        <InteractiveSection bgColor="#ebdd00" height="128px" iconCount={30} />
      </div>

      <div className="container mx-auto flex flex-col items-center gap-10 px-6 py-6 md:flex-row md:justify-between lg:px-12">
        <div className="max-w-lg text-center md:text-left">
          <h1
            className={`${nunitoExtraBold.className} text-3xl md:text-4xl lg:text-5xl text-gray-900`}
          >
            We are the{" "}
            <span className="text-[#6c3c8a] underline inline-block transform transition-transform duration-300 ease-in-out hover:scale-95">Dr. Martin Luther King Jr.</span>{" "}Primary School
          </h1>
          <p className={`${nunito.className} mt-4 text-gray-600 leading-relaxed`}>
            A beacon of light in the community. Inspiring children and parents to go beyond. Learn more about the school and it's past below.
          </p>
        </div>

        <div className="text-center mb-7">
          <p className={`${nunitoBold.className} text-2xl underline mb-1`}>A Brief History</p>
          <p className={`${nunito.className} text-gray-600`}>Our school was built in 1996 in the wake of Hurricane Luis to serve the Belvedere, Middle Region and Dutch Quarter neighborhoods on Sint Maarten.</p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-3/5 relative flex items-center justify-center mx-6 mb-2 md:p-16">
          {/* Decorative orange dots */}
          <div className="z-30 absolute top-12 right-12 w-5 h-5 rounded-full overflow-hidden bg-linear-to-r from-[#6c3c8a] to-[#a77fbd] shadow-sm"></div>
          <div className="z-30 absolute bottom-20 right-7 w-8 h-8 rounded-full overflow-hidden bg-linear-to-r from-[#6c3c8a] to-[#a77fbd] shadow-sm"></div>
          <svg className="z-30 absolute opacity-50 bottom-22 right-9" width="28" height="28" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stripedPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(70)">
                <rect width="20" height="40" fill="#15763f" />
              </pattern>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#stripedPattern)" />
          </svg>

          {/* Main circular image */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gray-200 overflow-visible z-20 flex items-center justify-center">
            <Image
              className="object-cover rounded-full"
              src="/placeholder.jpeg"
              alt="Main"
              fill
            />

            {/* Small circular images overlayed on main circle */}
            <div className="absolute top-10 -left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                className="object-cover"
                src="/placeholder.jpeg"
                alt="Small 1"
                fill
              />
            </div>
            <div className="absolute -top-12 left-14 w-22 h-22 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                className="object-cover"
                src="/placeholder.jpeg"
                alt="Small 2"
                fill
              />
            </div>
            <svg className="absolute opacity-50 -bottom-1 left-8" width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="stripedPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                  <rect width="20" height="40" fill="#15763f" />
                </pattern>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#stripedPattern)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mission/Vision Section */}
      <div className="container mx-auto flex flex-col-reverse items-center gap-10 px-6 pb-5 md:flex-row md:justify-between lg:px-12">
        {/* Left Circular Image (visible only from md screens) */}
        <div className="relative hidden md:block h-80 w-full md:h-96 md:w-96 items-center">
          <Image
            src="/placeholder.jpeg"
            alt="Students"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-5">
          <div className="max-w-lg text-center md:text-left bg-[rgba(235,219,0,0.3)] p-4 rounded-2xl">
            <h2
              className={`${nunitoBold.className} mt-2 text-3xl md:text-4xl text-gray-900`}
            >
              Our Mission
            </h2>
            <p className={`${nunito.className} mt-4 text-gray-600 leading-relaxed`}>
              Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam
              scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit
              ligula. Fusce eu rutrum nisl.
            </p>
            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span className="text-[#6c3c8a]">✦</span>
                <span className={`${nunito.className}`}>
                  Etiam ante nisi, maximus vitae sem non, dignissim
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c3c8a]">✦</span>
                <span className={`${nunito.className}`}>
                  Donec blandit, sapien eu porttitor blandit
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c3c8a]">✦</span>
                <span className={`${nunito.className}`}>
                  Sed at urna at massa viverra feugiat non
                </span>
              </li>
            </ul>
          </div>
          <div className="max-w-lg text-center md:text-left bg-[rgba(21,118,63,0.2)] p-4 rounded-2xl">
            <h2
              className={`${nunitoBold.className} mt-2 text-3xl md:text-4xl text-gray-900`}
            >
              Our Vision
            </h2>
            <p className={`${nunito.className} mt-4 text-gray-600 leading-relaxed`}>
              Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam
              scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit
              ligula. Fusce eu rutrum nisl.
            </p>
            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span className="text-[#6c3c8a]">✦</span>
                <span className={`${nunito.className}`}>
                  Etiam ante nisi, maximus vitae sem non, dignissim
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c3c8a]">✦</span>
                <span className={`${nunito.className}`}>
                  Donec blandit, sapien eu porttitor blandit
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c3c8a]">✦</span>
                <span className={`${nunito.className}`}>
                  Sed at urna at massa viverra feugiat non
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* fullStaff Section */}
      <div className="w-full text-center mb-5 px-6">
        <p className={`${nunitoExtraBold.className} text-2xl font-bold underline`}>Staff</p>
        <p className={`${nunito.className} text-gray-600 mb-4`}>
          {fullStaff.length} passionate staff members, ready to get the best out of every student.
        </p>

        <div className="relative w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) {
                  nextSlide();
                } else if (info.offset.x > 50) {
                  prevSlide();
                }
              }}
              className="flex flex-col items-center"
            >
              <Image
                src={fullStaff[index].imgSrc}
                alt={fullStaff[index].alt}
                width={400}
                height={300}
                className="object-cover rounded-2xl h-72 w-full"
              />
              <div className="mt-3 text-left w-full">
                <h3 className={`${nunitoBold.className} text-xl text-gray-800`}>
                  {fullStaff[index].name}
                </h3>
                <span className={`${nunitoSemiBold.className} block text-md text-blue-700`}>
                  {fullStaff[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls (desktop only) */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 w-10 shadow hover:bg-gray-300"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 w-10 shadow hover:bg-gray-300"
            >
              &#10095;
            </button>
          </div>

          {/* Position indicator (mobile only) */}
          <div className="flex justify-center mt-4">
            {fullStaff.map((_, i) => (
              <span
                key={i}
                className={`mx-1 h-3 w-3 rounded-full border border-gray-200 ${i === index ? "bg-[#4e2a66]" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
