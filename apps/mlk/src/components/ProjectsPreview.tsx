import { useState } from "react";
import { nunitoBlack, nunitoBold, nunitoSemiBold } from "../styles/font/page";
import { Project } from "../types/page";
import Section from "./Section";

type ProjectsPreviewProps = {
  projects: Project[];
};

export default function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  if (projects.length === 0) return null;

  const project = projects[currentIndex];

  return (
    <Section title="School Projects" link="/projects">
      <div className="mb-4">
        Since 2019, the school has been involved in several projects both locally and internationally.
        Find out how this has benefitted the school below.
      </div>

      <div className="relative flex flex-col items-center">
        {/* Slide */}
        <div className={`${nunitoBold.className} flex flex-col max-w-md w-full`}>
          <img
            src={project.imgSrc}
            alt={project.alt}
            className="z-10 object-cover h-64 rounded-3xl"
          />
          <div className="relative bg-[#ebdd00] z-20 rounded-3xl py-1 px-2 w-fit bottom-4 left-7">
            {project.icons}
          </div>
          <div className={`relative text-black bottom-2 ${nunitoBlack.className} text-2xl`}>Action Oriented Pedagogy in Environmental Literacy</div>
          <div className="mt-2 relative bottom-2 grid grid-cols-[60%_40%]">
            <div>
              <div className="flex flex-col h-full items-center justify-center">
                <div className="text-black text-xl">{project.durationLabel}</div>
                <div className="text-sm">{project.duration}</div>
              </div>
            </div>
            <div className="flex justify-center items-center px-2">
              <button className="bg-[#15763f] text-sm text-white w-26 p-2 rounded-md justify-items-center">View Project</button>
            </div>
          </div>
          <div className="mb-2">{project.description}</div>
        </div>

        {/* Navigation */}
        <div className="relative bottom-4 flex justify-between w-full mt-4">
          <button
            onClick={prevSlide}
            className={`${nunitoSemiBold.className} text-white px-4 py-2 bg-[#15763f] rounded hover:bg-[#335642] hover:cursor-pointer`}
          >
            ← Prev
          </button>
          <button
            onClick={nextSlide}
            className={`${nunitoSemiBold.className} text-white px-4 py-2 bg-[#15763f] rounded hover:bg-[#335642] hover:cursor-pointer`}
          >
            Next →
          </button>
        </div>

        {/* Dots */}
        <div className="relative bottom-4 flex space-x-2 mt-2">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-[#15763f]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
