"use client";

import { tools } from "@/lib/data";
import AnimateIn from "./AnimateIn";

const dotColors = [
  "bg-[#4F46E5]",
  "bg-[#7C3AED]",
  "bg-[#D946EF]",
  "bg-[#F43F5E]",
  "bg-[#4F46E5]",
  "bg-[#38a169]",
  "bg-[#7C3AED]",
  "bg-[#D946EF]",
  "bg-[#F43F5E]",
];

export default function ToolsSection() {
  return (
    <section id="tools" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center">
          <span className="label-pill">Tools & Models</span>
          <h2 className="headline-lg">
            The tools that power
            <br />
            <span className="gradient-text-multi">production voice AI.</span>
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            You won&apos;t just learn theory &mdash; you&apos;ll build with the
            same models and tools used in real voice agent systems.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <AnimateIn key={tool.name} delay={i * 0.04}>
              <div className="card">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${dotColors[i]}`}
                  />
                  <h4 className="text-base font-semibold text-[#1d1d1f]">
                    {tool.name}
                  </h4>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed pl-[22px]">
                  {tool.category}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
