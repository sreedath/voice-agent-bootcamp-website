"use client";

import { useState } from "react";
import {
  CheckCircle2,
  FileText,
  BookOpen,
  GraduationCap,
  Star,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import AnimateIn from "./AnimateIn";

const SAMPLE_ROADMAP_URL =
  "https://drive.google.com/file/d/1a_BfVlH1cVZehGg3enuyMUCmhFmQdPmF/view?usp=sharing";
const SAMPLE_PAPER_URL =
  "https://drive.google.com/file/d/1koIk3TdIbRUWj6DCK915vIkORp8s0cO4/view?usp=sharing";
const SAMPLE_COLAB_URL =
  "https://drive.google.com/file/d/1ZjTz4f63EEcCzt2xe4v3LvJQiVypl_um/view?usp=sharing";
const COLAB_BADGE = "https://colab.research.google.com/assets/colab-badge.svg";

// ── Roadmap preview card ──
function RoadmapPreview() {
  return (
    <div className="rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
          <FileText size={18} className="text-pink-600" />
        </div>
        <div>
          <p className="font-bold text-sm text-[#1d1d1f]">
            Sample Research Roadmap
          </p>
          <p className="text-[11px] text-[#86868b]">
            8-week structured plan with milestones
          </p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-xs font-semibold text-[#1d1d1f] mb-2">
          Example: Low-Latency Streaming Voice Agents for Real-Time Assistants
        </p>
        {[
          {
            week: "Weeks 1–2",
            milestone: "Literature Review & Scoping",
            deliverable:
              "Paper matrix (12 papers), ASR/TTS benchmarks, research questions",
          },
          {
            week: "Weeks 3–4",
            milestone: "Audio Pipeline & Dataset Setup",
            deliverable:
              "Streaming ASR scaffold, VAD tuning, latency instrumentation",
          },
          {
            week: "Weeks 5–6",
            milestone: "Training & Ablation Experiments",
            deliverable:
              "Models at 3 scales, WER/latency results, ablation studies",
          },
          {
            week: "Weeks 7–8",
            milestone: "Analysis, Insights & Manuscript",
            deliverable:
              "Visualisations, insight report, 6–8 page draft manuscript",
          },
        ].map((m) => (
          <div
            key={m.week}
            className="flex gap-3 p-2.5 rounded-lg bg-white border border-[#e8e8ed]"
          >
            <span className="text-[10px] font-bold text-pink-500 w-16 flex-shrink-0 mt-0.5">
              {m.week}
            </span>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f]">
                {m.milestone}
              </p>
              <p className="text-[11px] text-[#86868b]">{m.deliverable}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href={SAMPLE_ROADMAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
        style={{ background: "var(--ai-gradient-diag)" }}
      >
        <ExternalLink size={12} /> View Full Sample Roadmap (PDF)
      </a>
    </div>
  );
}

// ── Paper preview card ──
function PaperPreview() {
  return (
    <div className="rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          <BookOpen size={18} className="text-blue-600" />
        </div>
        <div>
          <p className="font-bold text-sm text-[#1d1d1f]">
            Sample Research Paper
          </p>
          <p className="text-[11px] text-[#86868b]">
            Student-produced, publication-ready draft
          </p>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-white border border-[#e8e8ed] mb-4">
        <p className="text-xs font-bold text-[#1d1d1f] mb-1 leading-snug">
          Streaming ASR with Conformer Encoders for Low-Latency Voice Agents:
          Fine-Tuning on Conversational Speech Corpora
        </p>
        <p className="text-[11px] text-[#86868b] mb-2">
          Student Author, Raj Dandekar, et al. — Vizuara AI Labs
        </p>
        <p className="text-[11px] text-[#6e6e73] leading-relaxed mb-3">
          Evaluates streaming Conformer encoders for real-time speech
          recognition in conversational voice agents. Demonstrates a
          latency-accuracy trade-off curve and integrates the model into an
          end-to-end voice agent with sub-300ms response time.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Streaming ASR",
            "Conformer",
            "Voice Agents",
            "Low Latency",
            "Conversational AI",
          ].map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <a
        href={SAMPLE_PAPER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)" }}
      >
        <ExternalLink size={12} /> View Full Sample Paper (PDF)
      </a>
    </div>
  );
}

// ── Starter Code preview card ──
function StarterCodePreview() {
  return (
    <div className="rounded-2xl border border-[#d2d2d7] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
          <Star size={18} className="text-amber-600" />
        </div>
        <div>
          <p className="font-bold text-sm text-[#1d1d1f]">
            Sample Starter Code
          </p>
          <p className="text-[11px] text-[#86868b]">
            Ready-to-run Colab notebook
          </p>
        </div>
      </div>
      <div className="p-3 rounded-xl bg-[#1e1e2e] mb-4 overflow-hidden">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="text-[10px] text-gray-500 ml-2 font-mono">
            voice_agent_starter.ipynb
          </span>
        </div>
        <pre className="text-[10px] leading-relaxed font-mono overflow-x-auto">
          <code>
            <span className="text-purple-400">import</span>
            <span className="text-gray-300"> torch</span>
            {"\n"}
            <span className="text-purple-400">from</span>
            <span className="text-gray-300"> transformers </span>
            <span className="text-purple-400">import</span>
            <span className="text-gray-300"> AutoProcessor, WhisperForConditionalGeneration</span>
            {"\n"}
            <span className="text-purple-400">from</span>
            <span className="text-gray-300"> datasets </span>
            <span className="text-purple-400">import</span>
            <span className="text-gray-300"> load_dataset</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-500"># Load ASR model &amp; processor</span>
            {"\n"}
            <span className="text-gray-300">
              model = WhisperForConditionalGeneration.from_pretrained(
            </span>
            {"\n"}
            <span className="text-green-400">    &quot;openai/whisper-small&quot;</span>
            <span className="text-gray-300">, torch_dtype=torch.float16</span>
            {"\n"}
            <span className="text-gray-300">)</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-500"># Streaming pipeline, eval harness,</span>
            {"\n"}
            <span className="text-gray-500"># latency benchmark — all included</span>
          </code>
        </pre>
      </div>
      <p className="text-xs text-[#6e6e73] leading-relaxed mb-4">
        A complete, documented Colab notebook with audio loading, ASR/TTS
        setup, streaming inference loop, evaluation pipeline, and experiment
        configuration — ready to run on day one.
      </p>
      <a
        href={SAMPLE_COLAB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={COLAB_BADGE}
          alt="Open In Colab"
          className="h-8 hover:opacity-80 transition-opacity"
        />
      </a>
    </div>
  );
}

export default function ResearchStarterSection() {
  const [showSamples, setShowSamples] = useState(false);

  return (
    <section className="relative z-10 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-14">
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

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* What's in the kit */}
          <AnimateIn delay={0.08}>
            <div className="card h-full">
              <h3
                className="text-lg font-bold text-[#1d1d1f] mb-5"
                style={{ letterSpacing: "-0.02em" }}
              >
                What&apos;s in the kit
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <FileText size={18} className="text-pink-500" />,
                    title: "Personalised Research Roadmap (PDF)",
                    desc: "You tell us your topic of interest. We generate an 8-week structured plan with milestones, deliverables, and acceptance criteria — tailored to your specific voice AI research area. Includes literature review scope, audio data pipeline design, experiment matrix, and manuscript timeline. Delivered asynchronously.",
                  },
                  {
                    icon: <BookOpen size={18} className="text-blue-500" />,
                    title: "Initial Research Paper Draft",
                    desc: "We generate an initial version of your research paper — research questions framed, methodology outlined, related work surveyed, and experiment setup defined. You don't start with a blank page — you start with a 6–8 page scaffold ready to build on. Delivered asynchronously based on your topic.",
                  },
                  {
                    icon: (
                      <GraduationCap size={18} className="text-purple-500" />
                    ),
                    title: "Curated Paper Reading List",
                    desc: "12–15 handpicked papers relevant to your topic with reading order, key takeaways, and connections between papers. Includes a literature matrix template for systematic tracking.",
                  },
                  {
                    icon: <Star size={18} className="text-amber-500" />,
                    title: "Starter Code Template",
                    desc: "A clean, documented codebase scaffold for your voice AI research project — audio loading, training loop, evaluation pipeline, and experiment config. Ready to run on day one.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1d1d1f] mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#6e6e73] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Example topics */}
          <AnimateIn delay={0.16}>
            <div className="card h-full">
              <h3
                className="text-lg font-bold text-[#1d1d1f] mb-5"
                style={{ letterSpacing: "-0.02em" }}
              >
                Example research topics
              </h3>
              <p className="text-xs text-[#6e6e73] mb-4">
                Your roadmap is personalised to your background and goals.
                Here are some voice AI topics our students have worked on:
              </p>
              <div className="space-y-2.5">
                {[
                  "Low-Latency Streaming ASR with Conformer Encoders for Voice Agents",
                  "Expressive Neural TTS with Emotion and Prosody Control",
                  "End-to-End Speech-to-Speech Translation with Nano-Scale Models",
                  "Real-Time Voice Activity Detection and Barge-In for Conversational Agents",
                  "Knowledge Distillation of Whisper for On-Device Speech Recognition",
                  "Voice Cloning Ethics and Watermarking for Generative Speech Models",
                  "Speaker Diarization for Multi-Party Voice Assistants",
                  "Retrieval-Augmented Voice Agents for Domain-Specific Dialog",
                ].map((topic) => (
                  <div
                    key={topic}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f5f5f7]"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-pink-500 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-xs text-[#4a4a4a] leading-relaxed">
                      {topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* View samples toggle */}
        <AnimateIn delay={0.24}>
          <div className="text-center mb-6">
            <button
              onClick={() => setShowSamples(!showSamples)}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-2xl border-2 border-pink-200 text-pink-600 hover:border-pink-400 hover:bg-pink-50 transition-all"
            >
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showSamples ? "rotate-180" : ""
                }`}
              />
              {showSamples ? "Hide" : "View"} sample roadmap, paper &amp; code
            </button>
          </div>
        </AnimateIn>

        {/* Sample previews */}
        {showSamples && (
          <div className="grid md:grid-cols-3 gap-6">
            <RoadmapPreview />
            <PaperPreview />
            <StarterCodePreview />
          </div>
        )}
      </div>
    </section>
  );
}
