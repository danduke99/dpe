"use client";
import { useState, useEffect } from "react";
import AboutPreview from "../components/AboutPreview";
import ProjectsPreview from "../components/ProjectsPreview";
import { nunito, nunitoBold, nunitoExtraBold, nunitoLight } from "../styles/font/page";
import MovingCircles from "../components/MovingCircles";
import { features, projects } from "../components/map"
import GalleryCarousel from "../components/GalleryCarousel";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="px-6 w-full flex flex-col overflow-x-hidden mt-2">
      <div className="gap-1">
        {/* Hero Section */}
        <div className={`relative w-full flex flex-col gap-4 ${animate ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className={`flex flex-col justify-start items-center w-full`}>
            <div className={`text-center text-[#434344] text-[32px] ${nunitoExtraBold.className}`}>
              Empowering Every Child to{" "}
              <span className="text-[#6c3c8a] underline">Rise</span> Beyond
            </div>
            <div className={`text-center text-[#666565] mt-5 ${nunito.className}`}>
              We believe in the power of perseverance.
              Through compassionate teaching, a strong community, and a love for learning, we guide
              our students to push through adversity and grow into confident, capable leaders of
              tomorrow.
            </div>
          </div>

          {/* Right column: fade + translate from point */}
          <div className={`relative ${animate ? "animate-come-from-point" : "opacity-0"}`}>
            <div className="bg-white rounded-full flex justify-center h-30 w-30 relative left-56 bottom-7">
              <img
                src="/aopelC.png"
                alt="aopelC"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col rounded-full h-25 w-25 relative bottom-27 left-25">
              <img
                src="/studentHarbor.jpg"
                alt="studentHarbor"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col rounded-full h-34 w-34 relative bottom-15 left-53">
              <img
                src="/studentT.jpg"
                alt="studentT"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col rounded-full h-24 w-24 relative bottom-37 right-2">
              <img
                src="/mlk.png"
                alt="mlk"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <MovingCircles />
          </div>
        </div>

        <div className="h-96 flex flex-col justify-center mt-90">
          <div className={`text-center text-[#434344] text-5xl ${nunitoExtraBold.className}`}>Welcome to <span className="text-[#6c3c8a]">Dr. Martin Luther King Primary School</span></div>
          <div className={`max-w-2xl mx-auto text-center text-[#434344] text-xl mt-4 ${nunitoLight.className}`}>Serving the community since 1996</div>
          <div className="flex flex-col md:flex-row justify-center mt-5 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="w-full h-56 flex flex-col justify-center shadow-xl rounded-lg p-6 border border-[#d0d0d0]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={`url(#${feature.gradientId})`}
                  className={`size-16 ${feature.extraClasses}`}
                >
                  <defs>
                    <linearGradient id={feature.gradientId} x1="0" y1="0" x2="1" y2="1">
                      {feature.gradient.map((stop, i) => (
                        <stop key={i} offset={stop.offset} stopColor={stop.color} />
                      ))}
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={feature.path}
                  />
                </svg>
                <div className="flex flex-col justify-center">
                  <div className={`text-lg mt-2 ${nunitoBold.className}`}>
                    {feature.title}
                  </div>
                  <div className={`text-md mt-2 ${nunitoLight.className}`}>
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="flex flex-col justify-center items-center mt-120 w-full">
          <span className={`text-4xl font-bold ${nunitoExtraBold.className}`}>
            Gallery
          </span>
          <GalleryCarousel />
        </div>

        <div className="my-10 space-y-5">
          <div className="bg-[rgba(235,219,0,0.1)] p-4 rounded-4xl">
            <AboutPreview />
          </div>
          <div className="bg-[rgba(21,118,63,0.05)] p-4 rounded-4xl">
            <ProjectsPreview projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}
