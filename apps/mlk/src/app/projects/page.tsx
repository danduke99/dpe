"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Course } from "../../interfaces/page";
import { activities, projectsPage } from "../../components/map";
import { nunito, nunitoBlack, nunitoBold, nunitoSemiBold } from "../../styles/font/page";
import InteractiveSection from "../../components/InteractiveSection";

const CourseCard = ({ course }: { course: Course }) => {
  const [expanded, setExpanded] = useState(false);

  // [index, direction] for carousel
  const [carouselState, setCarouselState] = useState<[number, number]>([0, 0]);
  const [carouselIndex, direction] = carouselState;
  const imageCount = course.images.length;

  const prevImage = () =>
    setCarouselState([(carouselIndex - 1 + imageCount) % imageCount, -1]);

  const nextImage = () =>
    setCarouselState([(carouselIndex + 1) % imageCount, 1]);

  const goToImage = (idx: number) =>
    setCarouselState([idx, idx > carouselIndex ? 1 : -1]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer shadow-xl"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative">
        <img className="rounded-t-lg w-full h-40 object-cover" src={course.coverImg} alt="" />
        <button
          className="absolute top-34 right-2 bg-[#15763f] hover:bg-[#2c553e] rounded-full w-10 h-10"
        >
          <EyeIcon className="h-6 text-white justify-center w-full" />
        </button>
      </div>
      <div className={`p-4 border-t-4 border-[#ebdd00]`}>
        <p className={`${nunitoBlack.className} font-bold text-lg text-gray-900 mb-1`}>{course.title}</p>
        <div className="grid grid-cols-2 space-x-1">
          <div className="flex flex-col">
            <p className={`${nunitoBold.className} text-gray-600`}>Duration:</p>
            <p className={`${nunito.className} text-gray-600`}>{course.duration}</p>
          </div>
          <div className="flex flex-col">
            <span className={`${nunitoBold.className} text-gray-600`}>Participants:</span>
            <ul className={`${nunito.className} list-disc list-inside  text-gray-700`}>
              {course.participants?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </ul>
          </div>
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`${nunito.className} overflow-hidden`}
            >
              <p className={`${nunitoBold.className} text-gray-600`}>Description:</p>
              <p className="text-gray-600 mb-2">{course.longDesc}</p>
              <p className={`${nunitoBold.className} text-gray-600 mb-1`}>Gallery:</p>

              {/* Image carousel */}
              <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={carouselIndex}
                    src={course.images[carouselIndex]}
                    alt={`${course.title} image`}
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
                      if (offset.x > 50) prevImage();
                      else if (offset.x < -50) nextImage();
                    }}
                  />
                </AnimatePresence>

                {/* Fade edges */}
                <div className="absolute top-0 left-0 h-full w-1/6 pointer-events-none bg-gradient-to-r from-black/40 via-black/0"></div>
                <div className="absolute top-0 right-0 h-full w-1/6 pointer-events-none bg-gradient-to-l from-black/40 via-black/0"></div>

                {/* Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute top-1/2 left-2 h-8 w-8 p-1 rounded-full bg-white bg-opacity-70 shadow-lg hover:bg-opacity-100 -translate-y-1/2 transition"
                >
                  &#10094;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute top-1/2 right-2 h-8 w-8 p-1 rounded-full bg-white bg-opacity-70 shadow-lg hover:bg-opacity-100 -translate-y-1/2 transition"
                >
                  &#10095;
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {course.images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 w-3 rounded-full cursor-pointer transition ${idx === carouselIndex
                        ? "bg-[#6c3c8a]"
                        : "bg-gray-400"
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(idx);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Social media link */}
              <p className={`${nunitoBold.className} w-full text-center`}>View the Full Album on{" "}
                <a
                  href={course.socialLink}
                  target={course.socialLink}
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Facebook
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function CourseCards() {
  const [activeTab, setActiveTab] = useState<"activities" | "projects">(
    "activities"
  );

  return (
    <>
      <div className="relative w-full h-32 my-4">
        {/* Interactive section */}
        <InteractiveSection bgColor="#15763f" height="128px" iconCount={30} />

        {/* Projects text */}
        <div className="absolute inset-0 z-20 flex justify-center items-center w-full h-full pointer-events-none">
          <p className={`${nunitoBold.className} text-4xl text-black`}>
            Projects
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-white px-6 pb-4">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`${nunitoBold.className} pb-3 px-4 font-semibold text-lg ${activeTab === "activities"
                ? "text-[#6c3c8a] border-b-2 border-[#6c3c8a]"
                : "text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab("activities")}
            >
              Activities
            </button>
            <button
              className={`${nunitoBold.className} pb-3 px-4 font-semibold text-lg ${activeTab === "projects"
                ? "text-[#6c3c8a] border-b-2 border-[#6c3c8a]"
                : "text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === "activities" ? activities : projectsPage).map(
              (course: Course) => (
                <CourseCard key={course.id} course={course} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
