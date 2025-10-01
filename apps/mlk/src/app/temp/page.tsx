import React from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/aopel.jpg", width: 180, height: 210 },
  { src: "/gallery2.jpg", width: 278, height: 360 },
  { src: "/gallery4.jpg", width: 178, height: 290 },
  { src: "/gallery6.jpg", width: 94, height: 87 },
  { src: "/gallery8.jpg", width: 257, height: 192 },
  { src: "/gallery7.jpg", width: 179, height: 240 },
  { src: "/gallery9.jpg", width: 179, height: 240 },
  { src: "/gallery10.jpg", width: 61, height: 64 },
  { src: "/gallery3.jpg", width: 180, height: 190 },
  { src: "/gallery5.jpg", width: 80, height: 72 },
];

export function Component() {
  return (
    <div className="w-full bg-white text-gray-400 p-2">
      <ul className="grid grid-cols-12 gap-2 relative">
        {galleryItems.map((item, index) => (
          <li
            key={index}
            className="relative col-span-3"
            style={{ width: item.width, height: item.height }}
          >
            <a href={item.src}>
              <Image
                src={item.src}
                alt={item.alt ?? `Gallery ${index + 1}`}
                width={item.width}
                height={item.height}
                className="rounded-xl object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
