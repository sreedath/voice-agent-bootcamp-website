"use client";

import { Check } from "lucide-react";
import { curriculum } from "@/lib/data";
import AnimateIn from "./AnimateIn";

function DayCard({ data }: { data: (typeof curriculum)[number] }) {
  return (
    <div className="rounded-[18px] bg-white border border-[#e8e8ed] overflow-hidden hover:border-[#7C3AED] hover:shadow-[0_4px_24px_rgba(124,58,237,0.1)] transition-all duration-300">
      <div className="flex items-start gap-4 p-6 pb-0">
        <div
          className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm"
          style={{ background: "var(--ai-gradient-diag)" }}
        >
          {data.day}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-[#1d1d1f] leading-snug">
            {data.title}
          </h3>
          <span className="text-xs text-[#86868b] font-medium">Tuesday · 2 PM IST</span>
        </div>
      </div>

      <ul className="px-6 pb-6 pt-4 pl-[72px] space-y-3">
        {data.topics.map((topic) => (
          <li
            key={topic}
            className="flex items-start gap-2.5 text-sm text-[#6e6e73] leading-relaxed"
          >
            <Check className="shrink-0 w-4 h-4 text-[#7C3AED] mt-0.5" />
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CurriculumSection() {
  return (
    <section
      id="curriculum"
      className="relative z-10 py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center">
          <span className="label-pill">Curriculum</span>
          <h2 className="headline-lg">
            8 days of building.
            <br />
            <span className="gradient-text-multi">
              One complete education.
            </span>
          </h2>
          <p className="subhead mt-5 max-w-xl mx-auto">
            Each day builds on the previous. By the end, you&apos;ll have built
            a complete real-time voice agent.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {curriculum.map((day, i) => (
            <AnimateIn key={day.day} delay={i * 0.05}>
              <DayCard data={day} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
