"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const quotes = [
  {
    name: "Mark Zuckerberg",
    title: "CEO, Meta",
    quote:
      "Voice is going to be a way more natural way of interacting with AI than text.",
    color: "#4F46E5",
    photo: "/leaders/zuckerberg.jpg",
  },
  {
    name: "Sundar Pichai",
    title: "CEO, Google",
    quote:
      "Interacting with Gemini should feel conversational and intuitive — an in-depth conversation using your voice.",
    color: "#7C3AED",
    photo: "/leaders/pichai.jpg",
  },
  {
    name: "Mustafa Suleyman",
    title: "CEO, Microsoft AI",
    quote:
      "Conversational AI is the next web browser.",
    color: "#D946EF",
    photo: "/leaders/suleyman.jpg",
  },
  {
    name: "Jensen Huang",
    title: "CEO, NVIDIA",
    quote:
      "Digital humans will revolutionize industries. Interacting with computers will become as natural as interacting with humans.",
    color: "#F43F5E",
    photo: "/leaders/huang.jpg",
  },
  {
    name: "Olivia Moore",
    title: "Partner, a16z",
    quote:
      "For consumers, voice will be the first — and perhaps the primary — way people interact with AI.",
    color: "#7C3AED",
    photo: "/leaders/moore.png",
  },
  {
    name: "Mati Staniszewski",
    title: "CEO, ElevenLabs",
    quote:
      "Voice is the next interface for AI.",
    color: "#D946EF",
    photo: "/leaders/staniszewski.webp",
  },
] as const;

export default function VoiceQuotesSection() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center">
          <span className="label-pill">Industry Leaders</span>
          <h2 className="headline-lg">
            The world&apos;s top leaders agree:
            <br />
            <span className="gradient-text-multi">voice is the next interface.</span>
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            From Meta to NVIDIA to a16z — the consensus is clear. Voice is
            becoming the most natural, primary way people will interact with AI.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <AnimateIn key={q.name} delay={i * 0.06}>
              <motion.div
                className="card h-full flex flex-col justify-between"
                whileHover={{ y: -2 }}
              >
                <div>
                  <p className="text-[15px] text-[#1d1d1f] leading-relaxed italic">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#e8e8ed] flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2"
                    style={{ borderColor: q.color }}
                  >
                    <Image
                      src={q.photo}
                      alt={q.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">{q.name}</p>
                    <p className="text-xs text-[#86868b]">{q.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
