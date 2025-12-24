"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hero section with 3D card flip
function TeensHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    {
      id: 1,
      color: "from-purple-500 via-pink-500 to-amber-500",
      src: "https://ik.imagekit.io/jale/t1.jpg",
    },
    {
      id: 2,
      color: "from-pink-500 via-amber-500 to-purple-500",
      src: "https://ik.imagekit.io/jale/t2.jpg",
    },
    {
      id: 3,
      color: "from-amber-500 via-purple-500 to-pink-500",
      src: "https://ik.imagekit.io/jale/t3.jpg",
    },
    {
      id: 4,
      color: "from-purple-600 via-pink-600 to-amber-600",
      src: "https://ik.imagekit.io/jale/t4.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-[600px] overflow-hidden mt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${heroImages[currentIndex].color}`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={`${heroImages[currentIndex].src}?tr=w-1200,f-auto`}
            alt="Hero slide"
            className="absolute mt-20 w-full max-h-full object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
            Teens & Children
          </h1>
          <p className="text-2xl md:text-3xl font-light drop-shadow-lg">
            Building strong foundations in Christ from a young age
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-700 ease-in ${
              idx === currentIndex ? "bg-white w-10" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// About section with staggered animations
function AboutTeensChildren() {
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
          Welcome to Teens & Children Ministry
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-gray-700 text-center"
        >
          <p className="leading-relaxed">
            Our Teens & Children ministry is dedicated to nurturing the
            spiritual growth of our youngest members. We create a safe, fun, and
            engaging environment where children and teenagers can learn about
            God's love, develop their faith, and build lasting friendships.
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
              Children's Church meets during main service
            </p>
            <p className="text-lg text-purple-700 mt-2">
              Age-appropriate teaching, worship, and activities
            </p>
          </motion.div>

          <p className="leading-relaxed">
            Through interactive Bible lessons, creative activities, music, and
            games, we help children discover their unique purpose in God's
            kingdom. We believe every child has the potential to make a
            significant impact for Christ, and we're committed to equipping them
            with the tools they need to grow in faith.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Carousel 1: Bible Stories with Slide + Fade
function BibleStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    { id: 1, color: "from-purple-400 to-pink-500" },
    { id: 2, color: "from-pink-400 to-amber-500" },
    { id: 3, color: "from-amber-500 to-purple-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [stories.length]);

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
          Interactive Bible Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-12"
        >
          Learning God's Word through engaging storytelling
        </motion.p>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${stories[currentIndex].color} flex items-center justify-center`}
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
                  Biblical Adventures
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
                  Discover amazing Bible stories through drama, puppets, and
                  multimedia
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {stories.map((_, idx) => (
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

// Carousel 2: Parties & Campouts with Zoom + Blur
function PartiesAndCampoutsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    { id: 1, color: "from-amber-400 to-purple-500" },
    { id: 2, color: "from-purple-400 to-pink-500" },
    { id: 3, color: "from-pink-500 to-amber-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [activities.length]);

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
          Parties & Campouts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-12"
        >
          Building friendships and memories through fun events and outdoor
          adventures
        </motion.p>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${activities[currentIndex].color} flex items-center justify-center`}
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
                  className="text-4xl font-bold mb-4"
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
                  Join us for birthday celebrations, camping trips, and special
                  events throughout the year
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {activities.map((_, idx) => (
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

// Carousel 3: Worship & Music with Rotation + Scale
function WorshipMusicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const worship = [
    { id: 1, color: "from-pink-400 to-amber-500" },
    { id: 2, color: "from-amber-400 to-purple-500" },
    { id: 3, color: "from-purple-500 to-pink-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % worship.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [worship.length]);

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
          Worship & Music
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, rotate: 5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-12"
        >
          Praising God through joyful songs and music
        </motion.p>

        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ rotate: 15, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -15, scale: 0.7, opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${worship[currentIndex].color} flex items-center justify-center`}
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
                  Praise & Worship
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
                  Kids learn to worship God with joy through age-appropriate
                  songs
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {worship.map((_, idx) => (
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

// Age Groups Section with staggered grid
function AgeGroupsSection() {
  const ageGroups = [
    {
      name: "Nursery (0-3 years)",
      description: "Safe & caring environment",
      color: "from-purple-300 to-pink-300",
      src: "https://ik.imagekit.io/jale/0-3.jpg",
    },
    {
      name: "Preschool (4-5 years)",
      description: "Fun Bible stories & songs",
      color: "from-pink-300 to-amber-300",
      src: "https://ik.imagekit.io/jale/4-5.jpg",
    },
    {
      name: "Elementary (6-9 years)",
      description: "Interactive learning",
      color: "from-amber-300 to-purple-300",
      src: "https://ik.imagekit.io/jale/6-9.jpg",
    },
    {
      name: "Preteens (10-12 years)",
      description: "Building foundations",
      color: "from-purple-400 to-pink-400",
      src: "https://ik.imagekit.io/jale/10-12.jpg",
    },
    {
      name: "Teens (13-15 years)",
      description: "Growing in faith",
      color: "from-pink-400 to-amber-400",
      src: "https://ik.imagekit.io/jale/13%20-%2015.jpg",
    },
    {
      name: "Senior Teens (16-18 years)",
      description: "Leadership development",
      color: "from-amber-400 to-purple-400",
      src: "https://ik.imagekit.io/jale/senior%20teen.jpg",
    },
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
          Age Groups
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-16"
        >
          Age-appropriate programs designed for spiritual growth
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ageGroups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.42, 0, 0.58, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
              }}
              className="relative group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                {/* IMAGE */}
                <img
                  src={`${group.src}?tr=w-1200,f-auto`}
                  alt={group.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* DARK GRADIENT FOR READABILITY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* TEXT — BOTTOM LEFT */}
                <div className="absolute bottom-6 left-6 z-10 max-w-[80%]">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.6,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                  >
                    {group.name}
                  </motion.h3>

                  <motion.p
                    className="text-white/90 text-sm font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.6,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                  >
                    {group.description}
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

// Teachers Section
function TeachersSection() {
  const teachers = [
    {
      name: "Sister Joy Adebayo",
      role: "Children's Director",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Brother Daniel Okafor",
      role: "Teens Coordinator",
      color: "from-pink-400 to-amber-400",
    },
    {
      name: "Sister Peace Okoro",
      role: "Nursery Lead",
      color: "from-amber-400 to-purple-400",
    },
    {
      name: "Sister Mercy Okonkwo",
      role: "Elementary Teacher",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent"
        >
          Our Teachers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-700 mb-16"
        >
          Dedicated servants nurturing the next generation
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.42, 0, 0.58, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                y: -12,
                transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
              }}
              className="relative group"
            >
              <div
                className={`h-80 rounded-3xl bg-gradient-to-br ${teacher.color} p-6 flex flex-col items-center justify-center shadow-xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-all duration-600 ease-in" />

                <motion.div
                  className="relative z-10 w-32 h-32 rounded-full bg-white/30 backdrop-blur-md mb-6 flex items-center justify-center"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
                  }}
                >
                  <div className="w-24 h-24 rounded-full bg-white/40" />
                </motion.div>

                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-lg text-white/90 font-semibold">
                    {teacher.role}
                  </p>
                </div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.5,
                    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeensAndChildrenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50">
      <TeensHeroCarousel />
      <AboutTeensChildren />
      <BibleStoriesCarousel />
      <PartiesAndCampoutsCarousel />
      <WorshipMusicCarousel />
      <AgeGroupsSection />
      {/* <TeachersSection /> */}
    </div>
  );
}
