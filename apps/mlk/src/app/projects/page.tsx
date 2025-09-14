"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Course } from "../../interfaces/page";
import { activities, projects } from "../../components/map";

const CourseCard = ({ course }: { course: Course }) => {
  const [expanded, setExpanded] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextImage = () => setCarouselIndex((prev) => (prev + 1) % course.images.length);
  const prevImage = () => setCarouselIndex((prev) => (prev - 1 + course.images.length) % course.images.length);

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative">
        <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-40" />
        <button
          className="absolute top-34 right-2 bg-[#15763f] hover:bg-[#2c553e] rounded-full w-10 h-10"
        >
          <EyeIcon className="h-6 text-white justify-center w-full" />
        </button>
      </div>
      <div className="p-4 border-t-4 border-[#ebdd00]">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{course.schedule}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-gray-600">{course.instructor}</span>
          <span className="font-bold text-blue-600">${course.price}</span>
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <p className="text-gray-600 mb-4">{course.longDesc}</p>

              {/* Image carousel */}
              <div className="relative">
                <img
                  src={course.images[carouselIndex]}
                  alt={`${course.title} image`}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
                >
                  ◀
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
                >
                  ▶
                </button>
              </div>

              {/* Social media link */}
              <a
                href={course.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                View Album on Facebook
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function CourseCards() {
  const [activeTab, setActiveTab] = useState<"activities" | "projects">("activities");

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`pb-3 px-4 font-medium text-lg ${
              activeTab === "activities"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("activities")}
          >
            Activities
          </button>
          <button
            className={`pb-3 px-4 font-medium text-lg ${
              activeTab === "projects"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === "activities" ? activities : projects).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
