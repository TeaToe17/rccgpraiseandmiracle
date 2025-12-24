"use client";

import { motion } from "framer-motion";

const centers = [
  {
    center: "6, Ayorinde Stret, Mubarak Estate, Akute",
    host: "Pastor & Pastor (Mrs) Falodun 1",
  },
  {
    center: "Oluwatoyin Close, Off Fasakin Street, Akute",
    host: "AP & AP (Mrs) Ayanbadejo",
  },
  {
    center: "6 Akinbolu Str, By Old Toll Gate, Off Ishasi Rd, Akute",
    host: "Elder & Elder Edward Eyefia",
  },
  {
    center: "6, Atobatele Close, Off Y-Ajayi Str, Ishasi Akute",
    host: "Elder & Elder (Mrs) Atobatele",
  },
  {
    center: "31 Bamidele Oduntan Str, Off Ojerinde Str, Akute",
    host: "Bro & Sis Victor Bello",
  },
  {
    center: "8A, Alhaji Yusuf Str, Off Ishasi-Pipeline, Akute",
    host: "Bro & Sis Akinwehinmi",
  },
  {
    center: "22, Jeff Crescent, Iboko Area, Off Ishasi Akute",
    host: "Elder & Elder (Mrs) Uzo Jeff",
  },
  {
    center: "10B, Prince Adewusi Str, Off Olarewaju B/Stop, Ishasi Rd, Akute",
    host: "Dcn & Sis Akinade",
  },
  {
    center: "49, Afe Olusegun Street, Ishasi Akute",
    host: "Elder & AP (Mrs) Olusegun Afe",
  },
];

export default function HouseFellowshipTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl shadow-2xl bg-white"
    >
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <th className="px-6 py-4 text-left text-lg font-bold">Center</th>
            <th className="px-6 py-4 text-left text-lg font-bold">
              Host/Hostess
            </th>
          </tr>
        </thead>
        <tbody>
          {centers.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.42, 0, 0.58, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
              }}
              className="border-b border-purple-100 transition-all duration-500 ease-in"
            >
              <td className="px-6 py-4 text-purple-900 font-medium">
                {item.center}
              </td>
              <td className="px-6 py-4 text-purple-700">{item.host}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
