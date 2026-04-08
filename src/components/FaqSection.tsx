"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqGroups } from "@/lib/data";
import AnimateIn from "./AnimateIn";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#e8e8ed] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-[15px] font-semibold text-[#1d1d1f] pr-4 group-hover:text-[#9565FF] transition-colors">
          {question}
        </span>
        <span className="shrink-0 text-[#86868b] group-hover:text-[#9565FF] transition-colors">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm md:text-[15px] text-[#6e6e73] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="faq" className="relative z-10 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center">
          <span className="label-pill">FAQ</span>
          <h2 className="headline-lg">Common questions.</h2>
        </AnimateIn>

        <div className="mt-14 max-w-3xl mx-auto space-y-8">
          {faqGroups.map((group, gi) => (
            <AnimateIn key={group.category} delay={gi * 0.06}>
              <div>
                <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#9565FF] mb-3">
                  {group.category}
                </h3>
                <div className="bg-[#f5f5f7] rounded-[18px] border border-[#e8e8ed] px-6 md:px-8">
                  {group.items.map((faq) => {
                    const key = `${gi}-${faq.question}`;
                    return (
                      <FaqItem
                        key={key}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openKey === key}
                        onToggle={() =>
                          setOpenKey((prev) => (prev === key ? null : key))
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
