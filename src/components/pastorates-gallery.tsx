"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const pastorates = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Pastor ${i + 1}`,
  role: "Senior Pastor",
  color: [
    "from-purple-400 to-pink-500",
    "from-pink-400 to-amber-500",
    "from-amber-400 to-purple-500",
    "from-purple-500 to-pink-400",
    "from-pink-500 to-amber-400",
    "from-amber-500 to-purple-400",
    "from-purple-300 to-pink-300",
    "from-pink-300 to-amber-300",
    "from-amber-300 to-purple-300",
    "from-purple-600 to-pink-600",
  ][i],
}))

export default function PastoratesGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {pastorates.map((pastor, index) => (
        <motion.div
          key={pastor.id}
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.42, 0, 0.58, 1],
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.15,
            rotateY: 5,
            zIndex: 10,
            transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
          }}
          onHoverStart={() => setHoveredId(pastor.id)}
          onHoverEnd={() => setHoveredId(null)}
          className="relative cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`aspect-square rounded-2xl bg-gradient-to-br ${pastor.color} shadow-xl overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: hoveredId === pastor.id ? 1 : 0, y: hoveredId === pastor.id ? 0 : 20 }}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            >
              <h4 className="text-white font-bold text-lg">{pastor.name}</h4>
              <p className="text-white/90 text-sm">{pastor.role}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
