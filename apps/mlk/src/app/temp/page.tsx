import React from "react";
import Image from "next/image";
import { nunito, nunitoBold, nunitoSemiBold } from "../../styles/font/page";

export default function HeroAbout() {
  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col items-center gap-10 px-6 py-16 md:flex-row md:justify-between lg:px-12">
        {/* Left Text */}
        <div className="max-w-lg text-center md:text-left">
          <h1
            className={`${nunitoBold.className} text-3xl md:text-4xl lg:text-5xl text-gray-900`}
          >
            Welcome to{" "}
            <span className="text-orange-500">Shelly</span> School
          </h1>
          <p className={`${nunito.className} mt-4 text-gray-600 leading-relaxed`}>
            Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus
            urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse
            potenti. Curabitur egestas ultricies sem, eu vestibulum leo sagittis et.
          </p>
          <button className="mt-6 rounded-full bg-blue-700 px-6 py-2 text-white transition hover:bg-blue-800">
            Classes
          </button>
        </div>

        {/* Right Image Cluster */}
        <div className="relative flex-shrink-0">
          {/* Main circle image */}
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            <Image
              src="/assets/img/teacher-kid.jpg"
              alt="Teacher with student"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Small top-right image */}
          <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full border-4 border-white shadow-lg">
            <Image
              src="/assets/img/family.jpg"
              alt="Family"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Small bottom-left icon */}
          <div className="absolute top-6 -left-6 h-16 w-16 rounded-full border-4 border-white shadow-lg">
            <Image
              src="/assets/img/clock.jpg"
              alt="Clock"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto flex flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:justify-between lg:px-12">
        {/* Left Circular Image */}
        <div className="relative h-80 w-80 md:h-96 md:w-96">
          <Image
            src="/assets/img/students.jpg"
            alt="Students"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="max-w-lg text-center md:text-left">
          <span className={`${nunitoSemiBold.className} text-orange-500 uppercase`}>
            About Us
          </span>
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
              <span className="text-orange-500">✦</span>
              <span className={`${nunito.className}`}>
                Etiam ante nisi, maximus vitae sem non, dignissim
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✦</span>
              <span className={`${nunito.className}`}>
                Donec blandit, sapien eu porttitor blandit
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✦</span>
              <span className={`${nunito.className}`}>
                Sed at urna at massa viverra feugiat non
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
