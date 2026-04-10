"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Waveform from "./Waveform";

const EARLYBIRD_DEADLINE = new Date("2026-04-20T23:59:59+05:30").getTime();
const COUPON_CODE = "VOICEAGENTEARLYBIRD";

function useCountdown(deadline: number) {
  const calculate = useCallback(() => {
    const diff = Math.max(0, deadline - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: diff <= 0,
    };
  }, [deadline]);

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(id);
  }, [calculate]);

  return time;
}

function CountdownTimer() {
  const { days, hours, minutes, seconds, expired } = useCountdown(EARLYBIRD_DEADLINE);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(COUPON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (expired) return null;

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.58 }}
      className="mt-8 mx-auto max-w-lg"
    >
      <div className="relative rounded-2xl border border-[#DDD6FE] bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] p-5 shadow-sm">
        {/* Urgency label */}
        <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-[#7C3AED]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C3AED]" />
          </span>
          Early Bird — 15% Off Ends In
        </div>

        {/* Countdown digits */}
        <div className="flex items-center justify-center gap-3">
          {units.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-2xl font-bold text-[#1d1d1f] shadow-sm">
                {String(value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[#86868b]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Coupon code */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-xs font-medium text-[#86868b] uppercase tracking-wider">Coupon Code:</span>
          <code className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold tracking-wide text-[#7C3AED] shadow-sm border border-[#DDD6FE]">
            {COUPON_CODE}
          </code>
          <button
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy to clipboard"}
            className="rounded-lg bg-[#7C3AED] p-1.5 text-white transition-all hover:bg-[#6D28D9] active:scale-95"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

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
          <span className="px-3 py-1.5 rounded-full bg-[#EDE9FE] text-[#7C3AED]">
            Starts April 28, 2026
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#EDE9FE] text-[#7C3AED]">
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

        {/* Early Bird Countdown */}
        <CountdownTimer />

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
