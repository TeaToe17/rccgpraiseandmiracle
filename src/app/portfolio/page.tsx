"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto px-4 py-16"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Albert Titobiloluwa Israel
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              Full-Stack Developer | Django Backend Specialist
            </p>
            <p className="text-lg text-gray-600">
              Building Jale e-Commerce Platform 
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="md:col-span-1">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src="/portfoliodp.png"
                  alt="Albert Titobiloluwa Israel"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </motion.div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-purple-700 mb-3">
                  About Me
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I am a passionate full-stack developer with expertise in
                  Django backend development and modern web technologies. With a
                  focus on creating scalable, user-friendly applications, I
                  specialize in building robust e-commerce platforms and web
                  solutions that drive business growth.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-pink-700 mb-4">
                  Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Django",
                    "Python",
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "PostgreSQL",
                    "REST APIs",
                    "Full-Stack Development",
                  ].map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.1,
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 rounded-lg font-semibold text-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-amber-700 mb-6">
              Featured Project
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/jalepic.png"
                  alt="Jale e-Commerce Platform"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-700">
                  Jale e-Commerce Platform
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A comprehensive e-commerce solution built with Django and
                  React, featuring machine learning - NLP techniques , inventory
                  management, and a seamless user experience. The platform
                  handles thousands of transactions and provides real-time
                  analytics for business owners.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Django", "React", "PostgreSQL", "Stripe API"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8 opacity-90">
              Interested in working together or learning more about my work?
              Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:titobiloluwaa83@gmail.com"
                className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-500 ease-in"
              >
                Send Email
              </a>
              <a
                href="tel:+2347046938727"
                className="px-6 py-3 bg-white/20 border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-500 ease-in"
              >
                Call Me
              </a>
            </div>
            <p className="text-sm opacity-75">
              Email: titobiloluwaa83@gmail.com | Phone: +234 704 693 8727
            </p>
          </motion.div>

          {/* Back Link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-500 ease-in"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
