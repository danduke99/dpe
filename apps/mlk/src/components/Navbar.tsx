"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nunito, nunitoBold, nunitoMedium, nunitoSemiBold } from "../styles/font/page";
import { PhoneIcon, MapPinIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <nav className="relative bg-transparent w-full overflow-x-hidden">
      {/* Top Row with Logo and Hamburger */}
      <div className="grid grid-cols-2 justify-between items-center top-0 z-50 py-4">
        <div className="flex flex-row mx-2 gap-2">
          <img src="/logo.png" alt="MLK Primary" className="w-14 h-14" />
          <img src="/logodpe.png" alt="DPE" className="w-14 h-14" />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 md:hidden"
          >
            <Bars3Icon className="w-12 h-12 mx-2 text-[]" />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#6c3c8a] w-full h-full z-50 flex flex-col justify-center items-center text-white">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
          >
            <XMarkIcon className="w-12 h-12" />
          </button>

          {/* Menu Links */}
          <ul className="flex flex-col gap-8 text-3xl text-center">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${isActive ? nunitoBold.className : nunito.className} text-2xl`}
                    onClick={() => setIsOpen(false)} // close menu on click
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Main Navigation Row (Desktop Only) */}
      <div className="hidden md:flex w-full py-4 flex-col sm:flex-row sm:items-center justify-between font-semibold text-xl">
        <div className={`flex flex-wrap space-x-16 ${nunitoBold.className}`}>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col transition-colors duration-300 ${isActive
                    ? "text-gray-800 font-600 hover:text-[#6c3c8a]"
                    : "text-gray-800 hover:text-[#6c3c8a]"
                  }`}
              >
                {label}
                <div
                  className={`h-1 rounded-full mt-1 transition-all duration-300 ${isActive
                      ? "bg-[#6c3c8a] w-[25px]"
                      : "bg-[#6c3c8a] w-0 group-hover:w-[25px]"
                    }`}
                ></div>
              </Link>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex gap-2 mt-4 sm:mt-0">
          <img
            src="/facebook.png"
            alt="Facebook"
            className="rounded-full p-2 w-10 h-10"
          />
          <img
            src="/facebook.png"
            alt="Facebook"
            className="rounded-full p-2 w-10 h-10"
          />
        </div>
      </div>
      <div className={`h-[1px] bg-[#888888] mx-6 ${animate ? "animate-slide-in-left" : "opacity-0"}`} />
    </nav>
  );
}
