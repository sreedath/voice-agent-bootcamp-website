"use client";

import { motion } from "framer-motion";

const barHeights = [12, 20, 28, 16, 24, 32, 18, 26, 14, 22, 30, 10, 24, 18, 28, 14, 22, 30, 16, 26];
const colors = [
  "from-[#4F46E5] to-[#7C3AED]",
  "from-[#7C3AED] to-[#D946EF]",
  "from-[#D946EF] to-[#F43F5E]",
  "from-[#4F46E5] to-[#D946EF]",
  "from-[#7C3AED] to-[#F43F5E]",
];

export default function Waveform() {
  return (
    <div className="flex items-end justify-center gap-[3px] h-10 mb-10">
      {barHeights.map((h, i) => (
        <motion.div
          key={i}
          className={`w-[3px] rounded-full bg-gradient-to-t ${colors[i % colors.length]}`}
          style={{ height: h }}
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}
