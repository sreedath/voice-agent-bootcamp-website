"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Building2, Users } from "lucide-react";
import AnimateIn from "./AnimateIn";

const stats = [
  {
    icon: TrendingUp,
    value: "$41.4B",
    label: "Conversational AI market by 2030",
    source: "Grand View Research",
    sourceUrl:
      "https://www.grandviewresearch.com/industry-analysis/conversational-ai-market-report",
  },
  {
    icon: DollarSign,
    value: "$2.1B",
    label: "VC investment in voice AI (2024) — 7x from 2022",
    source: "Crunchbase",
    sourceUrl:
      "https://news.crunchbase.com/venture/voice-ai-startups-global-investment/",
  },
  {
    icon: Building2,
    value: "$80B",
    label: "Contact center cost savings predicted for 2026",
    source: "Gartner",
    sourceUrl:
      "https://www.gartner.com/en/newsroom/press-releases/2022-08-31-gartner-predicts-conversational-ai-will-reduce-contac",
  },
  {
    icon: Users,
    value: "340%",
    label: "YoY growth in production voice agent deployments",
    source: "NextLevel AI",
    sourceUrl:
      "https://nextlevel.ai/voice-ai-trends-enterprise-adoption-roi/",
  },
];

// Voice AI market size data (in billions)
const chartData = [
  { year: "2022", value: 1.5, label: "$1.5B" },
  { year: "2023", value: 2.2, label: "$2.2B" },
  { year: "2024", value: 3.0, label: "$3.0B" },
  { year: "2025", value: 4.5, label: "$4.5B" },
  { year: "2026", value: 6.5, label: "$6.5B" },
  { year: "2028", value: 12.0, label: "$12B" },
  { year: "2030", value: 20.4, label: "$20.4B" },
];

const maxValue = 22;
const chartHeight = 220;
const barWidth = 48;

const fundingRounds = [
  { company: "ElevenLabs", amount: "$11B valuation", color: "#7C3AED" },
  { company: "Deepgram", amount: "$1.3B valuation", color: "#4F46E5" },
  { company: "LiveKit", amount: "$1B valuation", color: "#D946EF" },
  { company: "Cartesia", amount: "$86M raised", color: "#F43F5E" },
  { company: "Bland.ai", amount: "$65M raised", color: "#38a169" },
  { company: "Vapi", amount: "$25M raised", color: "#7C3AED" },
];

function MarketChart() {
  return (
    <div className="bg-white rounded-[18px] border border-[#e8e8ed] p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-base font-semibold text-[#1d1d1f]">
            Voice AI Market Size
          </h4>
          <p className="text-sm text-[#86868b]">AI Voice Generators — Global</p>
        </div>
        <span className="text-xs font-semibold text-[#38a169] bg-[rgba(56,161,105,0.1)] px-2.5 py-1 rounded-full">
          29.6% CAGR
        </span>
      </div>

      {/* Bar chart */}
      <div className="flex items-end justify-between gap-2 md:gap-3" style={{ height: chartHeight + 40 }}>
        {chartData.map((d, i) => {
          const barHeight = (d.value / maxValue) * chartHeight;
          return (
            <div key={d.year} className="flex flex-col items-center gap-1.5 flex-1">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: barHeight }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="w-full max-w-[48px] rounded-t-lg relative"
                style={{
                  background:
                    i >= 4
                      ? "var(--ai-gradient-diag)"
                      : "#e8e8ed",
                }}
              >
                <span
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold whitespace-nowrap ${
                    i >= 4 ? "text-[#7C3AED]" : "text-[#86868b]"
                  }`}
                >
                  {d.label}
                </span>
              </motion.div>
              <span className="text-[11px] text-[#86868b] font-medium">
                {d.year}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-[11px] text-[#86868b]">
        Source:{" "}
        <a
          href="https://www.grandviewresearch.com/industry-analysis/ai-voice-generators-market-report"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7C3AED] hover:underline"
        >
          Grand View Research
        </a>
        {" · "}
        <a
          href="https://www.marketsandmarkets.com/Market-Reports/ai-voice-generator-market-144271159.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7C3AED] hover:underline"
        >
          Markets and Markets
        </a>
      </p>
    </div>
  );
}

function FundingTracker() {
  return (
    <div className="bg-white rounded-[18px] border border-[#e8e8ed] p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-base font-semibold text-[#1d1d1f]">
            Voice AI Unicorns & Funding
          </h4>
          <p className="text-sm text-[#86868b]">
            3 new unicorns in early 2026 alone
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {fundingRounds.map((round, i) => (
          <motion.div
            key={round.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: round.color }}
            />
            <span className="text-sm font-semibold text-[#1d1d1f] min-w-[100px]">
              {round.company}
            </span>
            <div className="flex-1 h-px bg-[#e8e8ed]" />
            <span className="text-sm font-semibold text-[#6e6e73]">
              {round.amount}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="mt-5 text-[11px] text-[#86868b]">
        Sources:{" "}
        <a
          href="https://techcrunch.com/2026/02/04/elevenlabs-raises-500m-from-sequioia-at-a-11-billion-valuation/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7C3AED] hover:underline"
        >
          TechCrunch
        </a>
        {" · "}
        <a
          href="https://news.crunchbase.com/venture/voice-ai-startups-global-investment/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7C3AED] hover:underline"
        >
          Crunchbase
        </a>
      </p>
    </div>
  );
}

export default function MarketSection() {
  return (
    <section id="market" className="relative z-10 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateIn className="text-center">
          <span className="label-pill">Why Voice Agents</span>
          <h2 className="headline-lg">
            Voice is the next
            <br />
            <span className="gradient-text-multi">trillion-dollar interface.</span>
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            Voice AI investment has grown 7x in two years. Three new unicorns
            emerged in early 2026. Gartner predicts $80B in contact center savings.
            The industry is just getting started.
          </p>
        </AnimateIn>

        {/* Stat cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <AnimateIn key={stat.value} delay={i * 0.06}>
                <div className="card h-full">
                  <Icon size={20} className="text-[#7C3AED] mb-3" />
                  <p className="text-2xl font-bold text-[#1d1d1f]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[#6e6e73] leading-relaxed">
                    {stat.label}
                  </p>
                  <a
                    href={stat.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[11px] text-[#7C3AED] hover:underline"
                  >
                    {stat.source} &rsaquo;
                  </a>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Charts */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimateIn delay={0.1}>
            <MarketChart />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <FundingTracker />
          </AnimateIn>
        </div>

        {/* Gartner quote */}
        <AnimateIn delay={0.3}>
          <div className="mt-10 rounded-[18px] border border-[#e8e8ed] bg-[#f5f5f7] p-8 md:p-10 text-center">
            <p className="text-lg md:text-xl font-semibold text-[#1d1d1f] leading-relaxed max-w-3xl mx-auto">
              &ldquo;By 2029, agentic AI will autonomously resolve{" "}
              <span className="gradient-text-multi">80% of common customer service issues</span>{" "}
              without human intervention, leading to a 30% reduction in operational costs.&rdquo;
            </p>
            <p className="mt-4 text-sm text-[#86868b]">
              —{" "}
              <a
                href="https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C3AED] hover:underline"
              >
                Gartner, March 2025
              </a>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
