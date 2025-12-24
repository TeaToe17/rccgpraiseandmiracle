"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* 🔁 Just change image src here */
const images = [
  {
    id: 1,
    src: "https://ik.imagekit.io/jale/hero1.jpg",
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/jale/hero2.jpg?updatedAt=1765804470956",
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/jale/hero3.jpg",
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/jale/hero4.jpg",
  },
  {
    id: 5,
    src: "https://ik.imagekit.io/jale/hero5.jpg",
  },
  {
    id: 6,
    src: "https://ik.imagekit.io/jale/hero6.jpg",
  },
  {
    id: 7,
    src: "https://ik.imagekit.io/jale/hero7.jpg",
  },
  {
    id: 8,
    src: "https://ik.imagekit.io/jale/hero8.jpg",
  },
  {
    id: 9,
    src: "https://ik.imagekit.io/jale/hero9.jpg",
  },
  {
    id: 10,
    src: "https://ik.imagekit.io/jale/hero10.jpg",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            scale: 0.5,
            rotateY: -180,
            rotateX: 90,
            skewX: 45,
          }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0, skewX: 0 }}
          exit={{
            opacity: 0,
            scale: 0.3,
            rotateY: 180,
            rotateX: -90,
            skewX: -45,
          }}
          transition={{
            duration: 1.8,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
          className="absolute inset-0 mt-20 flex items-center justify-center p-8"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={`${images[currentIndex].src}?tr=w-1200,f-auto`}
            alt="Hero slide"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-amber-400/20 z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-white">
            Join Us This Sunday
          </h1>

          <div className="space-y-4 text-xl md:text-3xl font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              1st Service: 7:30 – 9:15 AM
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              2nd Service: 10:00 – 11:45 AM
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 rounded-full transition-all duration-500 ease-in-out hover:scale-110 ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
