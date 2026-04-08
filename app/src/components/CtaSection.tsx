"use client";

import { ChevronRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CtaSection() {
  return (
    <section id="enroll" className="relative z-10 py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateIn>
          <div className="relative rounded-[22px] p-12 md:p-16 text-center overflow-hidden bg-[#f5f5f7] border border-[#e8e8ed]">
            <h2 className="headline-lg">
              Ready to build your
              <br />
              <span className="gradient-text-multi">voice agent?</span>
            </h2>

            <p className="subhead mt-4 max-w-lg mx-auto">
              Join the 8-day bootcamp and go from zero to building real-time,
              production-grade voice agents from scratch.
            </p>

            <div className="mt-8">
              <a
                href="#pricing"
                className="btn-primary text-lg py-4 px-10"
              >
                Enroll Now
                <ChevronRight size={18} />
              </a>
              <p className="mt-4 text-sm text-[#86868b]">
                Starts April 28, 2026 &middot; Every Tuesday 2 PM IST &middot; 100% Hands-On
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
