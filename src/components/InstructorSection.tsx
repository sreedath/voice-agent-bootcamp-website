"use client";

import Image from "next/image";
import { Award, Link2, Play, GraduationCap } from "lucide-react";
import AnimateIn from "./AnimateIn";

const highlights = [
  "All 8 core lectures personally delivered",
  "PhD from MIT — rigorous technical foundation",
  "IIT Madras graduate & department gold medalist",
  "Winner of the Langmuir Award",
  "Co-author of Manning bestseller \"Build DeepSeek from Scratch\"",
  "200K+ YouTube subscribers · 115K+ LinkedIn followers",
];

export default function InstructorSection() {
  return (
    <section id="instructor" className="relative z-10 py-24 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Photo with overlay card */}
          <AnimateIn>
            <div className="relative max-w-md mx-auto md:mx-0">
              <div className="rounded-[20px] overflow-hidden">
                <Image
                  src="/instructor.png"
                  alt="Dr. Sreedath Panat - Instructor"
                  width={480}
                  height={560}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Overlay name card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg">
                <p className="text-base font-bold text-[#1d1d1f]">Dr. Sreedath Panat</p>
                <p className="text-sm text-[#6e6e73]">MIT PhD &middot; Vizuara AI Labs</p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Info */}
          <AnimateIn delay={0.15}>
            <div>
              <span className="label-pill">Your Instructor</span>

              <h2 className="headline-lg mt-2">Dr. Sreedath Panat</h2>

              <p className="text-lg font-semibold gradient-text-multi mt-2">
                MIT PhD &middot; Co-founder & Director, Vizuara AI Labs
              </p>

              <p className="mt-6 text-[#6e6e73] leading-relaxed text-base">
                Dr. Sreedath holds a PhD from MIT and is the co-founder and director of
                Vizuara AI Labs. An IIT Madras graduate and department gold medalist,
                he has built a 200K+ subscriber{" "}
                <a
                  href="https://www.youtube.com/@vizuara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7C3AED] hover:underline"
                >
                  YouTube channel
                </a>{" "}
                and co-authored the Manning bestseller{" "}
                <a
                  href="https://www.manning.com/books/build-a-deepseek-model-from-scratch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7C3AED] hover:underline"
                >
                  &ldquo;Build DeepSeek from Scratch&rdquo;
                </a>.
              </p>

              <p className="mt-4 text-[#6e6e73] leading-relaxed text-base">
                His teaching philosophy: visual intuition first, mathematical rigour
                second, hands-on implementation always. Every concept is taught
                from scratch — no hand-waving.
              </p>

              <p className="mt-4 text-[#6e6e73] leading-relaxed text-base">
                Have questions? Reach out at{" "}
                <a
                  href="mailto:sreedath@vizuara.com"
                  className="text-[#7C3AED] hover:underline"
                >
                  sreedath@vizuara.com
                </a>
              </p>

              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#1d1d1f] text-[15px]">
                    <Award size={18} className="flex-shrink-0 mt-0.5 text-[#D946EF]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://in.linkedin.com/in/sreedath-panat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1d1d1f] bg-white border border-[#e8e8ed] rounded-xl px-4 py-2.5 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all"
                >
                  <Link2 size={16} />
                  LinkedIn (115K+)
                </a>
                <a
                  href="https://www.youtube.com/@vizuara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1d1d1f] bg-white border border-[#e8e8ed] rounded-xl px-4 py-2.5 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all"
                >
                  <Play size={16} />
                  YouTube (200K+)
                </a>
                <a
                  href="https://scholar.google.com/citations?user=qq8OirYAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1d1d1f] bg-white border border-[#e8e8ed] rounded-xl px-4 py-2.5 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all"
                >
                  <GraduationCap size={16} />
                  Google Scholar
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
