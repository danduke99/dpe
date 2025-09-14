import { nunitoSemiBold } from "../styles/font/page";
import Section from "./Section";
import { managementTeam } from "./map";

export default function AboutPreview() {
  return (
    <Section title="About Us" link="/about">
      <div className="mt-1 mb-2">
        Dr. Martin Luther King Primary School is committed to fostering academic
        excellence and personal growth. Learn more about our mission and
        dedicated staff.
      </div>

      <div className="mb-2">
        <div className="font-bold text-black">Mission:</div>
        <div>We nurture every child in a safe and supportive environment, empowering them to grow in knowledge, creativity, and character.</div>
        <div className="font-bold text-black mt-1">Vision:</div>
        <div>To inspire lifelong learners who are confident, caring, and ready to thrive in a changing world.</div>
      </div>

      {/* Management Team Title */}
      <div
        className={`${nunitoSemiBold.className} text-black text-xl w-full flex justify-center`}
      >
        Management Team
      </div>

      {/* Management Team Grid */}
      <div className="grid grid-cols-2 gap-4 my-2">
        {managementTeam.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center h-full"
          >
            <img
              src={member.imgSrc}
              alt={member.alt}
              className="h-46 w-full object-cover rounded-lg"
            />
            <div className="mt-1 text-md">{member.name}</div>
            <div className="text-md font-bold text-[#c0b306]">
              {member.role}
            </div>
          </div>
        ))}
      </div>

      {/* Staff Section Title */}
      <div
        className={`${nunitoSemiBold.className} text-lg text-black mt-2 w-full flex justify-center bg-[#ebdd00] rounded-lg py-1`}
      >
        Meet the Staff
      </div>
    </Section>
  );
}
