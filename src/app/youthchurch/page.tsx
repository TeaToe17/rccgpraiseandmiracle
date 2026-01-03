"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgramsCarousel from "@/components/programs-carousel";
import { Images } from "lucide-react";

// Hero section with flip transition
function YouthHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    {
      id: 1,
      color: "from-purple-500 via-pink-500 to-amber-500",
      src: "https://ik.imagekit.io/jale/y1.jpg?updatedAt=1766124578878",
    },
    {
      id: 2,
      color: "from-amber-500 via-purple-500 to-pink-500",
      src: "https://ik.imagekit.io/jale/y2.jpg?updatedAt=1766124578819",
    },
    {
      id: 3,
      color: "from-pink-500 via-amber-500 to-purple-500",
      src: "https://ik.imagekit.io/jale/y3.jpg?updatedAt=1766124578428",
    },
    {
      id: 4,
      color: "from-purple-600 via-pink-600 to-amber-600",
      src: "https://ik.imagekit.io/jale/y4.jpg?updatedAt=1766124578810",
    },
    {
      id: 5,
      color: "from-purple-500 via-pink-500 to-amber-500",
      src: "https://ik.imagekit.io/jale/y5.jpg",
    },
    {
      id: 6,
      color: "from-purple-500 via-pink-500 to-amber-500",
      src: "https://ik.imagekit.io/jale/youth%20dance%202.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
          className="absolute inset-0 mt-20 flex items-center justify-center p-8"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={`${heroImages[currentIndex].src}?tr=w-1200,f-auto`}
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
            Youth Church
          </h1>

          <div className="space-y-4 text-xl md:text-3xl font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Empowering the next generation for Christ
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
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

// About section with staggered animations
function AboutYouthChurch() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Welcome to Youth Church
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-gray-700 text-center"
        >
          <p className="leading-relaxed">
            At RCCG Praise & Miracle Parish Youth Church, we are passionate
            about raising a generation that is sold out for Christ. Our youth
            ministry is a vibrant community where young people encounter God's
            presence, discover their purpose, and develop into strong leaders
            for tomorrow.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl shadow-lg"
          >
            <p className="text-xl font-semibold text-purple-800 mb-2">
              Join Us Every Sunday
            </p>
            <p className="text-2xl font-bold text-pink-700">
              Youth Church meets at The Gallery
            </p>
            <p className="text-lg text-purple-700 mt-2">
              Experience worship, fellowship, and life-changing messages
            </p>
          </motion.div>

          <p className="leading-relaxed">
            We believe that young people are not just the church of tomorrow,
            but powerful vessels for God's work today. Through dynamic worship,
            relevant teaching, and authentic community, we equip youth to live
            boldly for Christ in every area of their lives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Carousel 1: Slide + Fade transition
function ProgramCarousel1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      color: "",
      src: "https://ik.imagekit.io/jale/youthworship.jpg",
    },
    { id: 2, color: "from-pink-400 to-purple-500", src: "" },
    {
      id: 3,
      color: "",
      src: "https://ik.imagekit.io/jale/youth%20word.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Youth Sunday Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-12"
        >
          Dynamic worship and powerful teaching every Sunday
        </motion.p>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${
                !images[currentIndex].src && images[currentIndex].color
              } flex items-center justify-center`}
            >
              {!images[currentIndex].color && (
                <img
                  src={images[currentIndex].src}
                  alt="Youth image"
                  className="absolute h-full w-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 h-full flex flex-col px-4">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 flex items-center justify-center`}
            >
              <div className="text-center text-white p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="text-4xl font-bold mb-4"
                >
                  Worship & Word
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.7,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="text-xl"
                >
                  Experience authentic worship and relevant biblical teaching
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-700 ease-in ${
                  idx === currentIndex
                    ? "bg-white w-12 scale-110"
                    : "bg-white/50 hover:scale-105"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Carousel 2: Zoom + Blur transition
function ProgramCarousel2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      color: "",
      src: "https://ik.imagekit.io/jale/youth%20fun.jpg",
    },
    { id: 2, color: "from-purple-400 to-amber-500", src: "" },
    {
      id: 3,
      color: "",
      src: "https://ik.imagekit.io/jale/football%20youth%20edited.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent"
        >
          Youth Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-12"
        >
          Building authentic relationships and community
        </motion.p>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${
                !images[currentIndex].src && images[currentIndex].color
              } flex items-center justify-center`}
            >
              {!images[currentIndex].color && (
                <img
                  src={images[currentIndex].src}
                  alt="Youth image"
                  className="absolute h-full w-full object-cover"
                />
              )}{" "}
            </motion.div>
          </AnimatePresence>

          <div className="z-10 flex flex-col">
            <motion.div
              key={currentIndex}
              initial={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
            >
              <div className="text-center text-white p-8">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.7,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="text-4xl font-bold"
                >
                  Fellowship & Fun
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.7,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="text-xl"
                >
                  Connect with other young believers through events and
                  activities
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-700 ease-in ${
                  idx === currentIndex
                    ? "bg-white w-12 scale-110"
                    : "bg-white/50 hover:scale-105"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Carousel 3: Rotation + Scale transition
function ProgramCarousel3() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      color: "",
      src: "https://ik.imagekit.io/jale/evan3.jpg?updatedAt=1766394576403",
    },
    { id: 2, color: "from-amber-400 to-pink-500", src: "" },
    {
      id: 3,
      color: "",
      src: "https://ik.imagekit.io/jale/serveimpact.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent"
        >
          Youth Outreach
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, rotate: 5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-12"
        >
          Making a difference in our community
        </motion.p>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ rotate: 15, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -15, scale: 0.7, opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${
                !images[currentIndex].src && images[currentIndex].color
              } flex items-center justify-center`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {!images[currentIndex].color && (
                <img
                  src={images[currentIndex].src}
                  alt="Youth image"
                  className="absolute h-full w-full object-cover"
                />
              )}{" "}
            </motion.div>
          </AnimatePresence>

          <div className="">
            <motion.div
              key={currentIndex}
              initial={{ rotate: 15, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -15, scale: 0.7, opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${images[currentIndex].color} flex items-center justify-center`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-center text-white p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="text-4xl font-bold mb-4"
                >
                  Serve & Impact
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.7,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="text-xl"
                >
                  Join us as we spread God's love through outreach and service
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-700 ease-in ${
                  idx === currentIndex
                    ? "bg-white w-12 scale-110"
                    : "bg-white/50 hover:scale-105"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Executives section with staggered grid
function ExecutivesSection() {
  const executives = [
    {
      name: "AP Kehinde Ayanbadejo",
      role: "Youth Pastor",
      color: "from-purple-400 to-pink-400",
      src: "https://ik.imagekit.io/jale/Screenshot%202025-12-24%20033019.png",
    },
    {
      name: "Brother Adebayo Adekola",
      role: "Youth President",
      color: "from-pink-400 to-amber-400",
      src: "https://ik.imagekit.io/jale/j1.jpg?updatedAt=1766249280648",
    },
    // {
    //   name: "SIs Clem-Kayode Molayo",
    //   role: "Vice President 1",
    //   color: "from-amber-400 to-purple-400",
    // },
    // {
    //   name: "Brother Abayomi",
    //   role: "Vice President 2",
    //   color: "from-purple-500 to-pink-500",
    // },
    // {
    //   name: "Sis Kolade Abigail",
    //   role: "Treasurer",
    //   color: "from-pink-500 to-amber-500",
    // },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent"
        >
          Leadership Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-16"
        >
          Some of our passionate leaders dedicated to guiding and mentoring our
          youth
        </motion.p>

        {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {executives.map((exec, index) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.42, 0, 0.58, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -6,
              }}
              className="relative group"
            >
              <div
                className={`relative h-64 sm:h-72 lg:h-80
        rounded-3xl bg-gradient-to-br ${exec.color}
        p-1 shadow-xl overflow-hidden`}
              >
                {/* Image */}
                <img
                  src={exec.src}
                  alt={exec.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500 rounded-3xl" />

                {/* Text */}
                <div className="relative z-10 p-4 sm:p-6">
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-white mb-1"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    {exec.name}
                  </motion.h3>

                  <motion.p
                    className="text-sm sm:text-lg text-white/90 font-semibold"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {exec.role}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function YouthChurch() {
  const programs = [
    {
      id: 1,
      title: "Youth Sunday Celebration",
      date: "Date to be announced",
      time: "Time to be announced",
      location: "Church Auditorium",
      description:
        "A vibrant youth-led service focused on inspiring young people through worship, the Word, creative expressions, and practical teachings for godly living in today’s world.",
      color: "from-blue-500 to-indigo-500",
      images: [
        "https://ik.imagekit.io/jale/ys1.jpg",
        "https://ik.imagekit.io/jale/ys3.jpg",
        "https://ik.imagekit.io/jale/ys2.jpg",
      ],
    },
    {
      id: 2,
      title: "Recharging the Champions",
      date: "Date to be announced",
      time: "Time to be announced",
      location: "Main Church Hall",
      description:
        "A refreshing and empowering service designed to renew strength, rekindle passion, and inspire believers for effective Christian living.",
      color: "from-pink-500 to-amber-500",
      images: [
        "https://ik.imagekit.io/jale/rtc1.jpg",
        "https://ik.imagekit.io/jale/rtc2.jpg",
        "https://ik.imagekit.io/jale/rtc3.jpg",
      ],
    },
    {
      id: 3,
      title: "Jersey Sunday",
      date: "Date to be announced",
      time: "Service times to be announced",
      location: "Main Sanctuary",
      description:
        "A joyful and relaxed worship service where members come together in unity, celebrating fellowship and community in a warm atmosphere.",
      color: "from-amber-500 to-purple-500",
      images: [
        "https://ik.imagekit.io/jale/j1.jpg",
        "https://ik.imagekit.io/jale/j2.jpg",
        "https://ik.imagekit.io/jale/j3.jpg",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300/30 via-green-300/30 to-gray-100/30 overflow-x-hidden">
      <YouthHeroCarousel />
      <AboutYouthChurch />
      <ProgramCarousel1 />
      <ProgramCarousel2 />
      <ProgramCarousel3 />
      <ProgramsCarousel programs={programs} />
      <ExecutivesSection />
    </div>
  );
}
