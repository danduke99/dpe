"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  nunito,
  nunitoBold,
} from "../styles/font/page";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
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
      {/* Top Row: Logo + Hamburger */}
      <div className="flex justify-between items-center w-full py-3 sm:py-4 md:py-6">
        {/* Logo section */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src="/logo.png"
            alt="MLK Primary"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
          <img
            src="/logodpe.png"
            alt="DPE"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 md:hidden"
          aria-label="Open menu"
        >
          <Bars3Icon className="w-10 h-10 text-gray-800" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#6c3c8a] w-full h-full z-50 flex flex-col justify-center items-center text-white transition-all duration-500 ease-out">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </button>

          {/* Links */}
          <ul className="flex flex-col gap-8 sm:gap-10 text-2xl sm:text-3xl text-center">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`${isActive ? nunitoBold.className : nunito.className} hover:opacity-90 transition-opacity`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full flex-row items-center justify-between py-3 sm:py-4 lg:py-5 text-lg lg:text-xl">
        {/* Nav links */}
        <div className={`flex flex-wrap gap-x-10 lg:gap-x-16 ${nunitoBold.className}`}>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col transition-colors duration-300 ${
                  isActive
                    ? "text-gray-800 font-semibold hover:text-[#6c3c8a]"
                    : "text-gray-800 hover:text-[#6c3c8a]"
                }`}
              >
                {label}
                <div
                  className={`h-[2px] rounded-full mt-1 transition-all duration-300 ${
                    isActive
                      ? "bg-[#6c3c8a] w-[24px]"
                      : "bg-[#6c3c8a] w-0 group-hover:w-[24px]"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-0">
          <img
            src="/facebook.png"
            alt="Facebook"
            className="rounded-full p-1.5 sm:p-2 w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 transition"
          />
          <img
            src="/facebook.png"
            alt="Facebook"
            className="rounded-full p-1.5 sm:p-2 w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 transition"
          />
        </div>
      </div>

      {/* Divider line */}
      <div
        className={`h-[1px] bg-gray-300 mt-2 ${animate ? "animate-slide-in-left" : "opacity-0"}`}
      />
    </nav>
  );
}
