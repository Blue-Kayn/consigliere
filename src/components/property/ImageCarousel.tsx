"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: { url: string; alt: string | null }[];
  propertyName: string;
}

export function ImageCarousel({ images, propertyName }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/9] bg-[var(--warm-gray)] flex items-center justify-center">
        <span className="text-[var(--gray-400)]">No images</span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative aspect-[16/9] bg-[var(--warm-gray)] overflow-hidden group">
      <Image
        src={images[current].url}
        alt={images[current].alt || propertyName}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 1024px) 100vw, 66vw"
        priority={current === 0}
      />

      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
