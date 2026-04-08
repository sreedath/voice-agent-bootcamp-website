"use client";

import { FileText, Route, BookOpen, Code } from "lucide-react";
import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: Route,
    title: "Personalised Research Roadmap (PDF)",
    description:
      "An 8-week structured plan with milestones, deliverables, and acceptance criteria — tailored to your specific research area in voice AI.",
  },
  {
    icon: FileText,
    title: "Initial Research Paper Draft",
    description:
      "An initial version of your research paper — research questions framed, methodology outlined, related work surveyed, and experiment setup defined.",
  },
  {
    icon: BookOpen,
    title: "Curated Paper Reading List",
    description:
      "12–15 handpicked papers relevant to your topic with a recommended reading order, key takeaways, and links to original sources.",
  },
  {
    icon: Code,
    title: "Starter Code Template",
    description:
      "Documentation and pipeline scaffolding for your voice AI research project — ready to extend with your own experiments and benchmarks.",
  },
];

export default function ResearchStarterSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateIn className="text-center">
          <span className="label-pill">Research Starter Kit</span>
          <h2 className="headline-lg">
            Start your research{" "}
            <span className="gradient-text-multi">with a head start.</span>
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            Don&apos;t start from scratch. Tell us your topic of interest and
            we&apos;ll generate a personalised research roadmap and an initial
            version of your research paper — delivered asynchronously, so you
            can hit the ground running from day one.
          </p>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimateIn key={feature.title} delay={i * 0.08}>
                <div className="card h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[rgba(149,101,255,0.1)]">
                    <Icon size={20} className="text-[#9565FF]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#1d1d1f] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="https://research.vizuara.ai/publications"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View sample roadmap, paper & code &rsaquo;
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
