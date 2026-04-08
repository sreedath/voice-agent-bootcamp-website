"use client";

import { motion } from "framer-motion";

const barHeights = [12, 20, 28, 16, 24, 32, 18, 26, 14, 22, 30, 10, 24, 18, 28, 14, 22, 30, 16, 26];
const colors = [
  "from-[#4B9EFF] to-[#9565FF]",
  "from-[#9565FF] to-[#ED4FCA]",
  "from-[#ED4FCA] to-[#F76E35]",
  "from-[#4B9EFF] to-[#ED4FCA]",
  "from-[#9565FF] to-[#F76E35]",
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
