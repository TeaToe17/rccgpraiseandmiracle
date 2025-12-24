"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  variant?: "sunday" | "weekday";
}

export default function ParallaxSection({
  variant = "sunday",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (variant === "weekday") {
    return (
      <section ref={ref} className="relative py-32 px-4 overflow-hidden">
        <motion.div style={{ y: y1, opacity }} className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true }}
              className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-300 to-pink-300 p-8 flex flex-col justify-center shadow-2xl hover:scale-105 transition-all duration-700 ease-in"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20" />
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Digging Deep
                </h3>
                <p className="text-xl text-white/90 mb-6">
                  Dive deeper into God's word and strengthen your faith through
                  intensive Bible study
                </p>
                <p className="text-2xl font-semibold text-white">
                  Tuesdays, 6:30 PM
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true }}
              className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-300 to-purple-300 p-8 flex flex-col justify-center shadow-2xl hover:scale-105 transition-all duration-700 ease-in"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-purple-400/20" />
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Faith Clinic
                </h3>
                <p className="text-xl text-white/90 mb-6">
                  Experience divine healing and receive answers to your prayers
                </p>
                <p className="text-2xl font-semibold text-white">
                  Thursdays, 6:30 PM
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      <motion.div style={{ y: y2, opacity }} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-pink-300 to-purple-300 p-8 flex flex-col justify-center shadow-2xl hover:scale-105 transition-all duration-700 ease-in"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Believers Class
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Build a strong foundation in Christian doctrine and grow in
                spiritual maturity
              </p>
              <p className="text-2xl font-semibold text-white">
                Sunday after Service
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-300 to-pink-300 p-8 flex flex-col justify-center shadow-2xl hover:scale-105 transition-all duration-700 ease-in"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-pink-400/20" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Communion Service
              </h3>
              <p className="text-xl text-white/90 mb-6">
                A sacred moment to remember Christ's sacrifice and renew our
                covenant
              </p>
              <p className="text-2xl font-semibold text-white">
                First Sundays Only
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
