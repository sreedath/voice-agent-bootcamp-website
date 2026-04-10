"use client";

import { CheckCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";

const whoFor = [
  "Engineers transitioning into voice AI, speech systems, or conversational AI engineering",
  "Developers building voice-powered products — receptionists, assistants, agents",
  "Engineers who want to go beyond using LLMs — to building real-time voice pipelines",
  "Researchers who need production engineering depth alongside theory",
];

const outcomes = [
  "Build production-grade voice agents from scratch — ASR, LLM, TTS, tools, memory",
  "Design low-latency, real-time streaming voice pipelines with WebSockets",
  "Implement tool-calling, memory, and agentic workflows in voice systems",
  "Deploy voice agents locally, in the browser, and in the cloud",
  "Build industry-level portfolio projects from hands-on capstone work",
];

export default function WhoSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          {/* Left: Who is this for */}
          <AnimateIn>
            <div>
              <span className="label-pill">Who is this for?</span>
              <h2 className="headline-lg mt-4">
                Built for engineers{" "}
                <span className="gradient-text-multi">
                  who want to go deep.
                </span>
              </h2>

              <ul className="mt-8 space-y-5">
                {whoFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#1d1d1f] leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1d1d1f] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Right: What you will achieve */}
          <AnimateIn delay={0.15}>
            <div>
              <span className="label-pill">What you will achieve</span>
              <h2 className="headline-lg mt-4">
                Leave{" "}
                <span className="gradient-text-multi">production-ready.</span>
              </h2>

              {/* Interview question card */}
              <div className="mt-8 rounded-[18px] border border-[#e8e8ed] bg-[#f5f5f7] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">
                  Voice AI interview question:
                </p>
                <p className="text-[15px] text-[#1d1d1f] italic leading-relaxed">
                  &ldquo;Design a real-time voice agent that handles tool calling,
                  memory, and barge-in interruptions with sub-second latency.
                  Walk me through the architecture.&rdquo;
                </p>
                <p className="mt-3 text-xs text-[#86868b]">
                  Asked at companies building voice AI products. You will have a complete answer.
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-[#1d1d1f] leading-relaxed"
                  >
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-[#D946EF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
