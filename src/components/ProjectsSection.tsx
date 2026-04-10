"use client";

import { projects } from "@/lib/data";
import AnimateIn from "./AnimateIn";

const iconBgs = [
  "bg-[rgba(75,158,255,0.1)] text-[#4F46E5]",
  "bg-[rgba(124,58,237,0.1)] text-[#7C3AED]",
  "bg-[rgba(237,79,202,0.1)] text-[#D946EF]",
  "bg-[rgba(247,110,53,0.1)] text-[#F43F5E]",
  "bg-[rgba(56,161,105,0.1)] text-[#38a169]",
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center">
          <span className="label-pill">Capstone Projects</span>
          <h2 className="headline-lg">
            Build something
            <br />
            <span className="gradient-text-multi">
              you can actually ship.
            </span>
          </h2>
          <p className="subhead mt-5 max-w-xl mx-auto">
            Day 8 culminates in a hands-on capstone project that ties together
            everything you&apos;ve learned.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <AnimateIn key={project.title} delay={i * 0.06}>
                <div className="card h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${iconBgs[i]} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
