"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
        style={{
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(149,101,255,0.5) 0%, rgba(75,158,255,0.3) 40%, rgba(237,79,202,0.15) 70%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
