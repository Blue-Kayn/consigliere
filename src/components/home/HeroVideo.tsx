"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch((err) => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section className="min-h-[130vh] sm:min-h-screen relative bg-[#0a0a0a]">
      {/* Video Background - positioned absolutely behind everything */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoReady(true)}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ zIndex: 1, opacity: videoReady ? 1 : 0 }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50"
        style={{ zIndex: 2 }}
      />

      {/* Content Container */}
      <div
        className="relative flex flex-col justify-center items-center text-center px-6 sm:px-8 py-28 sm:py-40 text-white min-h-[130vh] sm:min-h-screen"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-[0.7rem] tracking-[0.3em] uppercase mb-6 sm:mb-8 opacity-80">
            London · Dubai
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            London &amp; Dubai&apos;s Most Sought-After Addresses
          </h1>

          <p className="font-editorial text-base sm:text-lg md:text-xl lg:text-2xl italic opacity-90 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            We don&apos;t just find properties. We open doors that others can&apos;t —
            connecting discerning clients with exceptional homes and investment
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stay" className="btn btn-outline-light w-full sm:w-auto">
              Find a Residence
            </Link>
            <Link href="/contact" className="btn btn-gold w-full sm:w-auto">
              Speak to an Advisor
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-70">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase">
            Discover
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
