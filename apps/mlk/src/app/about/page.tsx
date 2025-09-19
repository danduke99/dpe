"use client";
import InteractiveSection from "../../components/InteractiveSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <div className="relative w-full h-32 my-4">
        <InteractiveSection bgColor="#ebdd00" height="128px" iconCount={30} />
      </div>
      <div className="min-h-screen bg-white flex flex-col md:flex-row mx-6">
        {/* Text Section */}
        <div className="w-full md:w-2/5 flex flex-col justify-center md:p-16 lg:p-24">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Welcome to </span>
              <span className="text-orange-500">Shelly</span>
              <span className="text-black"> School</span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
              Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id
              purus urna. Maecenas ultrices ligula a nisi dictum tristique.
              Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum
              leo sagittis et.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-3/5 relative flex items-center justify-center p-8 md:p-16">
          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-white"></div>
          </div>

          <div className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
            <div className="w-6 h-0.5 bg-white"></div>
          </div>

          {/* Small circular images */}
          <div className="absolute top-1/4 left-10 flex flex-col space-y-6">
            <Image
              className="text-lg font-semibold text-gray-700 object-cover rounded-full"
              width={96}
              height={96}
              src="/placeholder.jpeg"
              alt="test"
            />
            <Image
              className="text-lg font-semibold text-gray-700 object-cover rounded-full"
              width={96}
              height={96}
              src="/placeholder.jpeg"
              alt="test"
            />
          </div>

          {/* Main circular image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <Image
                  className="text-lg font-semibold text-gray-700 object-cover"
                  src="/placeholder.jpeg"
                  alt="test"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div>Our Mission</div>
          <div>Our Vision</div>
        </div>
      </div>
    </section>
  );
}
