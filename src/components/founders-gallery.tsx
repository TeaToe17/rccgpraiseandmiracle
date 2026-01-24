"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const founders = [
  {
    id: 1,
    name: "Pastor & (Pastor) Mrs Oladokun",
    title: "Founding Pastors",
    years: "2004 - 2015",
    description:
      "A visionary couple whose faith, obedience, and unity laid a strong spiritual foundation for the church, serving faithfully with a shared commitment to family, service, and ministry.",
    image: "https://ik.imagekit.io/jale/P%20OLADOKUN.png",
  },
  {
    id: 2,
    name: "Pastor & (Pastor) Mrs Akoh",
    title: "",
    years: "2015 - 2020",
    description:
      "Their tenure was marked by generosity and compassion, as both partners served selflessly with a deep love for people, touching lives through kindness, support, and sacrificial service.",
    image: "https://ik.imagekit.io/jale/AKOH.jpg",
  },
  {
    id: 3,
    name: "Pastor & (Pastor) Mrs Onimole",
    title: "",
    years: "2020 - 2022",
    description:
      "Known for a gentle spirit and compassionate leadership, they nurtured spiritual growth together, offering guidance while empowering young people to discover purpose and faith.",
    image: "https://ik.imagekit.io/jale/ONIMOLE.jpg",
  },
  {
    id: 4,
    name: "Pastor & (Pastor) Mrs Aiyedun",
    title: "",
    years: "2022 - Present",
    description:
      "Marked by a prophetic calling and a heart for mentorship, their ministry is strengthened by a shared passion for nurturing, supporting, and raising a faith-filled generation.",
    image: "https://ik.imagekit.io/jale/AIYEDUN.jpg",
  },
];

export default function FoundersGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
      setCurrentIndex((prev) => (prev + 1) % founders.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setAnimationKey((prev) => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  };

  const goToPrev = () => {
    setAnimationKey((prev) => prev + 1);
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative max-w-5xl mx-auto">
      <div
        className="relative h-[500px] overflow-visible"
        style={{ perspective: "2000px" }}
      >
        {founders.map((founder, index) => {
          const offset = index - currentIndex;
          const isActive = offset === 0;

          return (
            <div
              // key={`${founder.id}-${animationKey}`}
              key={founder.id}
              className="absolute inset-0 transition-all duration-[1500ms] ease-in-out"
              style={{
                transform: isActive
                  ? "translateX(0%) rotateY(0deg) scale(1)"
                  : offset < 0
                  ? "translateX(-120%) rotateY(-90deg) scale(0.6)"
                  : "translateX(120%) rotateY(90deg) scale(0.6)",
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0,
                transformStyle: "preserve-3d",
              }}
            >
              <div className=" border-2 border-white/20 shadow-2xl backdrop-blur-sm bg-white/95 overflow-hidden rounded-lg">
                <div className="p-0 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Image Side */}
                    <div
                      className="relative bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden
                  h-64 sm:h-80 md:h-auto"
                    >
                      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                        <div
                          className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64
                      rounded-full overflow-hidden border-4 sm:border-6 md:border-8
                      border-white shadow-2xl"
                        >
                          <Image
                            src={founder.image || "/placeholder.svg"}
                            alt={founder.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-32
                    bg-gradient-to-t from-purple-900/50 to-transparent"
                      />
                    </div>

                    {/* Content Side */}
                    <div
                      className="flex flex-col justify-center
                        p-6 sm:p-8 md:p-12 text-center md:text-left"
                    >
                      <div
                        className="inline-block px-3 py-1 sm:px-4 sm:py-1
                        rounded-full bg-gradient-to-r from-amber-400 to-purple-500
                        text-white font-semibold text-xs sm:text-sm
                        mb-4 mx-auto md:mx-0"
                      >
                        {founder.years}
                      </div>

                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl
                        font-bold mb-2 text-purple-900"
                      >
                        {founder.name}
                      </h3>

                      <p
                        className="text-lg sm:text-xl
                       text-purple-600 font-semibold mb-4 sm:mb-6"
                      >
                        {founder.title}
                      </p>

                      <p
                        className="text-base sm:text-lg
                      text-gray-700 leading-relaxed italic"
                      >
                        "{founder.description}"
                      </p>

                      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-purple-200">
                        <p className="text-xs sm:text-sm text-purple-600 font-medium">
                          In loving memory of their faithful service
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full w-12 h-12 bg-white/90 hover:bg-white shadow-lg z-20 flex items-center justify-center border border-purple-200 hover:border-purple-400 transition-all"
      >
        <span className="sr-only">Previous</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full w-12 h-12 bg-white/90 hover:bg-white shadow-lg z-20 flex items-center justify-center border border-purple-200 hover:border-purple-400 transition-all"
      >
        <span className="sr-only">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {founders.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-purple-600 w-8"
                : "bg-purple-300 hover:bg-purple-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
