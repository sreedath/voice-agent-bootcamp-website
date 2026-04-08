"use client";

import { learnItems } from "@/lib/data";
import AnimateIn from "./AnimateIn";

const dotColors = [
  "bg-[#4B9EFF]",
  "bg-[#9565FF]",
  "bg-[#ED4FCA]",
  "bg-[#F76E35]",
  "bg-[#4B9EFF]",
  "bg-[#9565FF]",
  "bg-[#ED4FCA]",
  "bg-[#F76E35]",
];

export default function LearnSection() {
  return (
    <section id="learn" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center">
          <span className="label-pill">What You&apos;ll Learn</span>
          <h2 className="headline-lg">
            The complete toolkit.
            <br />
            <span className="gradient-text-multi">
              One voice agent bootcamp.
            </span>
          </h2>
          <p className="subhead mt-5 max-w-xl mx-auto">
            Go from zero to building production-grade, tool-using, real-time
            voice agents in Python.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {learnItems.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.06}>
              <div className="card h-full">
                <div
                  className={`w-3 h-3 rounded-full ${dotColors[i]} mb-5`}
                />
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
