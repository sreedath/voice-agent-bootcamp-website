"use client";

import { Target, BookOpen, Compass, FileText, ListChecks } from "lucide-react";
import AnimateIn from "./AnimateIn";

const mentorshipFeatures = [
  {
    icon: Target,
    title: "Target: Publishable Paper",
    description:
      "The goal is a research paper. Your mentors guide you from topic selection through experiments to a publication-ready manuscript.",
    color: "bg-[#4F46E5]",
  },
  {
    icon: BookOpen,
    title: "Every Step Guided",
    description:
      "Literature review, experiment design, ablation studies, writing — your mentors walk you through every step of the research process so you never feel stuck.",
    color: "bg-[#7C3AED]",
  },
  {
    icon: Compass,
    title: "Industry + Research Exposure",
    description:
      "Get career strategy and deep research guidance. Both industry and academic perspectives in one mentorship.",
    color: "bg-[#38a169]",
  },
  {
    icon: FileText,
    title: "Paper Reading Guidance",
    description:
      "Curated reading lists, paper discussion, and feedback on how to extract and apply insights from the literature.",
    color: "bg-[#F43F5E]",
  },
  {
    icon: ListChecks,
    title: "Actionable Next Steps",
    description:
      "Every interaction ends with clear deliverables and deadlines. You always know exactly what to do next.",
    color: "bg-[#D946EF]",
  },
] as const;

export default function MentorshipSection() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="rounded-[22px] bg-white border border-[#e8e8ed] p-8 md:p-12">
            <h3 className="headline-md mb-2">
              What mentorship includes
            </h3>
            <p className="text-sm text-[#86868b] mb-8">
              Fully async — personalized feedback at every stage, no calls required.
              See our{" "}
              <a
                href="https://research.vizuara.ai/publications"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C3AED] hover:underline"
              >
                published research
              </a>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mentorshipFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <AnimateIn key={feature.title} delay={i * 0.08}>
                    <div className="card h-full">
                      <div
                        className={`w-2 h-2 rounded-full ${feature.color} mb-4`}
                      />
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
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
