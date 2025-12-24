"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface Program {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  color: string; // Tailwind gradient classes e.g. "from-purple-500 to-pink-500"
  images: string[]; // Image paths / URLs
}

export default function ProgramsCarousel({
  programs,
}: {
  programs: Program[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (imageIndex < 2) {
        setImageIndex((prev) => prev + 1);
      } else {
        setDirection(1);
        setImageIndex(0);
        setCurrentIndex((prev) => (prev + 1) % programs.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [imageIndex]);

  const goToNext = () => {
    setDirection(1);
    setImageIndex(0);
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setImageIndex(0);
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-[500px] overflow-hidden perspective-1000">
        {programs.map((program, index) => {
          const offset = index - currentIndex;
          const isActive = offset === 0;

          return (
            <div
              key={program.id}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${offset * 100}%) scale(${
                  isActive ? 1 : 0.7
                }) translateZ(${isActive ? 0 : -200}px)`,
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0,
                filter: isActive ? "blur(0px)" : "blur(3px)",
              }}
            >
              <div className="h-full relative border-2 border-white/20 shadow-2xl backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="absolute inset-0">
                  {program.images.map((image, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{
                        opacity: isActive && imageIndex === imgIdx ? 1 : 0,
                      }}
                    >
                      <img
                        src={`${image}?tr=w-1200,f-auto` || "/placeholder.svg"}
                        alt={`${program.title} ${imgIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    </div>
                  ))}
                </div>

                <div className="relative p-8 h-full flex flex-col justify-between text-white z-10">
                  <div>
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${program.color} font-semibold text-sm mb-4`}
                    >
                      Upcoming Event
                    </div>
                    <h3 className="text-3xl font-bold mb-6 drop-shadow-lg">
                      {program.title}
                    </h3>
                    <p className="text-lg mb-8 leading-relaxed drop-shadow-md">
                      {program.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{program.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{program.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">{program.location}</span>
                    </div>
                  </div>

                  {isActive && (
                    <div className="flex justify-center gap-2 mt-4">
                      {program.images.map((_, imgIdx) => (
                        <div
                          key={imgIdx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            imgIdx === imageIndex
                              ? "bg-white w-8"
                              : "bg-white/50 w-1.5"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

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

      <div className="flex justify-center gap-2 mt-6">
        {programs.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setImageIndex(0);
            }}
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
