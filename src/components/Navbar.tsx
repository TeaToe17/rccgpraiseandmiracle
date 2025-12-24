"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Same gradient theme as Hero Carousel */
const navGradients = [
  "from-purple-400 to-pink-400",
  "from-pink-400 to-amber-400",
  "from-amber-400 to-purple-400",
];

const AnimatedNavbar = () => {
  const [animationState, setAnimationState] = useState<"flying" | "complete">(
    "flying"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState("complete");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  /* Gradient animation loop */
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % navGradients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/youthchurch", label: "Youth Church" },
    { href: "/workforce", label: "Work Force" },
    { href: "/hymns", label: "Hymns" },
    { href: "/teensandchildren", label: "Teens & Children" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-md transition-all duration-1000 ${
        animationState === "flying" ? "h-32" : "h-28"
      }`}
    >
      {/* Hero-style animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={gradientIndex}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
            className={`absolute inset-0 bg-gradient-to-br ${navGradients[gradientIndex]}`}
          />
        </AnimatePresence>
      </div>

      {/* Navbar content */}
      <div className="max-w-7xl mx-auto px-4 h-full relative z-10">
        <div
          className={`absolute transition-all duration-[5000ms] delay-[1000ms] ease-in ${
            animationState === "flying"
              ? "left-[-100px] top-4 scale-[2] opacity-0"
              : "left-[50px] top-6 scale-0 opacity-100"
          }`}
        >
          <Image
            src="/actual-20dove.png"
            alt="Flying dove"
            width={70}
            height={70}
            className="object-contain scale-x-[-1]"
            priority
          />
        </div>

        <div
          className={`flex items-center justify-between gap-4 transition-all duration-1000 ${
            animationState === "flying" ? "pt-6" : "pt-4"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <div
                className={`absolute inset-0 transition-all duration-1000 delay-[4000ms] ${
                  animationState === "flying"
                    ? "opacity-0 scale-50"
                    : "opacity-100 scale-100"
                }`}
              >
                <Image
                  src="/rccg-logo.png"
                  alt="RCCG logo"
                  width={64}
                  height={64}
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>

            <div
              className={`flex flex-col transition-all duration-1000 delay-[3500ms] ${
                animationState === "flying"
                  ? "opacity-0 translate-x-[-20px]"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <p className="font-bold text-green-700 text-lg leading-tight">
                RCCG, Praise & Miracle Parish
              </p>
              <p className="text-sm text-gray-700 leading-tight hidden sm:block">
                A place where we praise God and we receive our miracles
              </p>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 text-gray-800 hover:text-green-700 transition-all duration-1000 delay-[4500ms] ${
              animationState === "flying"
                ? "opacity-0 scale-0"
                : "opacity-100 scale-100"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`hidden lg:flex gap-6 items-center justify-center mt-2 transition-all duration-1000 delay-[4500ms] ${
            animationState === "flying"
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-500 ease-in font-medium relative pb-1 ${
                  isActive
                    ? "text-green-800 font-semibold scale-110"
                    : "text-gray-800 hover:text-green-800 hover:scale-105"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-lg transition-all duration-500 ease-in font-medium ${
                  isActive
                    ? "bg-green-100 text-green-700 font-semibold scale-105"
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-700 hover:scale-105"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default AnimatedNavbar;
