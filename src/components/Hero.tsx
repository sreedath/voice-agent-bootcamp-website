"use client";

import { motion } from "framer-motion";
import Waveform from "./Waveform";

const stats = [
  { value: "8", label: "Live Lectures" },
  { value: "8", label: "Weeks" },
  { value: "2-3h", label: "Per Lecture" },
  { value: "1", label: "Capstone Project" },
];

export default function Hero() {
  return (
    <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="label-pill">8-Day Live Bootcamp</span>
        </motion.div>

        {/* Waveform */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Waveform />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="headline-xl"
        >
          Build Voice Agents.
          <br />
          <span className="gradient-text-multi">From Scratch.</span>
        </motion.h1>

        {/* Workshop description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-6 text-base md:text-lg text-[#1d1d1f] max-w-2xl mx-auto leading-relaxed"
        >
          An 8-week live bootcamp taught by{" "}
          <span className="font-semibold">Dr. Sreedath Panat (MIT PhD)</span>.
          Build real-time voice agents from scratch using ASR, TTS, LLMs, and streaming pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.53 }}
          className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-sm font-semibold"
        >
          <span className="px-3 py-1.5 rounded-full bg-[#ede5ff] text-[#9565FF]">
            Starts April 28, 2026
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#ede5ff] text-[#9565FF]">
            Every Tuesday · 2 PM IST
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.54 }}
          className="mt-2 text-sm text-[#86868b] max-w-2xl mx-auto"
        >
          Can&apos;t attend live? All sessions are recorded for lifetime access.
        </motion.p>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 text-base md:text-lg italic text-[#6e6e73] max-w-2xl mx-auto"
        >
          &ldquo;The biggest untapped opportunity in AI is voice, and LLMs will unlock it at scale.&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#pricing" className="btn-primary text-base py-3 px-8">
            Enroll Now &rsaquo;
          </a>
          <a href="#curriculum" className="btn-secondary text-base py-3 px-8">
            View Curriculum
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card px-4 py-6 text-center"
            >
              <div
                className="text-3xl font-bold gradient-text-multi"
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#6e6e73] font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold tracking-[3px] text-[#86868b] uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#d2d2d7] to-transparent"
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
