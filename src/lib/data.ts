import {
  Mic,
  AudioLines,
  Volume2,
  Brain,
  Wrench,
  Zap,
  Building2,
  Rocket,
  Phone,
  NotebookPen,
  BookOpen,
  Monitor,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

export interface LearnItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const learnItems: LearnItem[] = [
  {
    icon: AudioLines,
    title: "Voice Agent Architecture",
    description:
      "Understand the full pipeline: audio input, ASR, LLM reasoning, tool calling, TTS, and audio output.",
  },
  {
    icon: Mic,
    title: "Speech-to-Text Pipelines",
    description:
      "Build transcription systems with Whisper, faster-whisper, and voice activity detection.",
  },
  {
    icon: Volume2,
    title: "Text-to-Speech Systems",
    description:
      "Generate natural voice responses using Piper, Coqui TTS, and modern synthesis engines.",
  },
  {
    icon: Brain,
    title: "LLM Reasoning Layer",
    description:
      "Connect language models as the brain. Design prompts for spoken, concise, interruption-friendly replies.",
  },
  {
    icon: Wrench,
    title: "Tool Use & Memory",
    description:
      "Give your voice agent real capabilities: search, schedule, calculate, remember, and take action.",
  },
  {
    icon: Zap,
    title: "Real-Time Streaming",
    description:
      "Build low-latency streaming pipelines with WebSockets, incremental ASR, and barge-in handling.",
  },
  {
    icon: Building2,
    title: "Production Architecture",
    description:
      "Design modular, scalable systems with fallbacks, logging, observability, and cost optimization.",
  },
  {
    icon: Rocket,
    title: "End-to-End Projects",
    description:
      "Build complete voice agents: AI receptionist, meeting assistant, research assistant, and more.",
  },
];

export interface DayData {
  day: number;
  title: string;
  topics: string[];
}

export const curriculum: DayData[] = [
  {
    day: 1,
    title: "Voice Agents & System Architecture",
    topics: [
      "What is a voice agent vs chatbot vs conversational AI",
      "Core architecture: Audio → ASR → LLM → TTS → Audio",
      "Batch vs streaming pipeline design",
      "Key challenges: latency, interruptions, turn-taking",
      "Overview of the voice agent ecosystem and frameworks",
      "Build a simple end-to-end voice interaction loop",
    ],
  },
  {
    day: 2,
    title: "Speech-to-Text (ASR) Foundations",
    topics: [
      "How automatic speech recognition works",
      "Audio preprocessing, feature extraction, decoding",
      "Whisper, faster-whisper, Distil-Whisper deep dive",
      "Implement local transcription pipeline in Python",
      "Microphone recording and live transcription",
      "Voice Activity Detection (VAD) for speech pipelines",
    ],
  },
  {
    day: 3,
    title: "Text-to-Speech & Voice Output",
    topics: [
      "How modern TTS systems work",
      "Trade-offs: latency, quality, controllability, cost",
      "Piper, Coqui TTS, ElevenLabs comparison",
      "Build a TTS pipeline in Python",
      "Real-time speech playback",
      "Local vs API-based TTS systems",
    ],
  },
  {
    day: 4,
    title: "LLMs as the Brain of a Voice Agent",
    topics: [
      "Why ASR + TTS alone is not enough",
      "LLMs as the reasoning and decision-making layer",
      "Prompting for voice: concise, spoken-style responses",
      "Transcript → LLM → spoken response loop",
      "Conversation history and context management",
      "Designing voice agent personalities",
    ],
  },
  {
    day: 5,
    title: "Tool Use, Memory & Agentic Workflows",
    topics: [
      "What makes a voice system an actual agent",
      "Tool calling: calculator, web search, scheduling, APIs",
      "Short-term vs long-term memory",
      "Context engineering: keep, compress, control latency",
      "Build a tool-using voice agent pipeline",
      "Example: voice assistant that searches and takes actions",
    ],
  },
  {
    day: 6,
    title: "Real-Time Streaming Voice Agents",
    topics: [
      "Turn-based vs real-time voice systems",
      "WebSockets, incremental ASR, partial transcripts",
      "Streaming TTS, endpointing, turn detection",
      "Barge-in and user interruption handling",
      "Build a real-time streaming voice loop",
      "Understanding production latency sources",
    ],
  },
  {
    day: 7,
    title: "Production-Grade Architecture",
    topics: [
      "Designing a robust, modular voice agent system",
      "Frontend, backend, ASR/LLM/TTS services, memory layer",
      "Fallbacks, retries, and failure handling",
      "Cost optimization and model selection",
      "Safety, filtering, and guardrails",
      "Frameworks comparison: Python+WS vs Pipecat/LiveKit",
    ],
  },
  {
    day: 8,
    title: "Final Project: End-to-End Voice Agent",
    topics: [
      "Build a complete voice agent from scratch",
      "Full pipeline: mic → VAD → ASR → LLM → tools → TTS",
      "Choose: receptionist, meeting, research, or desktop assistant",
      "Testing, debugging, and improving your system",
      "Deployment: local, browser-based, and cloud setups",
      "Extending into real-world products",
    ],
  },
];

export interface ToolItem {
  emoji: string;
  name: string;
  category: string;
}

export const tools: ToolItem[] = [
  { emoji: "🎙️", name: "Whisper", category: "OpenAI ASR" },
  { emoji: "⚡", name: "faster-whisper", category: "Optimized ASR" },
  { emoji: "🔍", name: "Distil-Whisper", category: "Lightweight ASR" },
  { emoji: "🔊", name: "Piper TTS", category: "Local Synthesis" },
  { emoji: "🎵", name: "Coqui TTS", category: "Neural Voices" },
  { emoji: "📢", name: "Silero VAD", category: "Voice Detection" },
  { emoji: "🧠", name: "Claude / GPT", category: "LLM Layer" },
  { emoji: "🚀", name: "WebSockets", category: "Real-Time Infra" },
  { emoji: "🐍", name: "Python", category: "Core Language" },
];

export interface ProjectItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const projects: ProjectItem[] = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description:
      "An intelligent phone receptionist that answers questions, routes calls, and handles bookings.",
  },
  {
    icon: NotebookPen,
    title: "Meeting Assistant",
    description:
      "A real-time voice assistant that joins meetings, takes notes, and extracts action items.",
  },
  {
    icon: BookOpen,
    title: "Research Assistant",
    description:
      "A voice-driven research agent that searches, summarizes, and answers complex questions.",
  },
  {
    icon: Monitor,
    title: "Desktop Assistant",
    description:
      "A personal voice assistant that controls your desktop, launches apps, and automates tasks.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling Agent",
    description:
      "A voice agent that manages calendars, sets reminders, and coordinates meetings.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  category: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    category: "About the Bootcamp",
    items: [
      {
        question: "Who is this bootcamp for?",
        answer:
          "This bootcamp is for software engineers, AI/ML practitioners, and developers who want to understand how voice agents work under the hood and build them from scratch. You should be comfortable with Python. No prior experience with speech AI or voice systems is needed.",
      },
      {
        question: "Are sessions live or recorded?",
        answer:
          "All sessions are delivered live over Zoom. The bootcamp runs for 8 weeks starting May 5, 2026, with one lecture every Tuesday at 2 PM IST (2-3 hours each). You can ask questions in real-time and get hands-on guidance from the instructor.",
      },
      {
        question: "Will I get recordings of the sessions?",
        answer:
          "Yes, all sessions are recorded and you get lifetime access to the recordings, along with code files, slides, visual guides, and PDF booklets.",
      },
      {
        question: "Do I need a GPU or special hardware?",
        answer:
          "A modern laptop with a microphone is sufficient. We cover both local and API-based approaches, so you can run models locally or use cloud APIs depending on your hardware.",
      },
      {
        question: "Is EMI available?",
        answer:
          "Yes, bank-mediated EMI options are available at checkout via Razorpay. Please note that all sales are final — no refunds.",
      },
    ],
  },
  {
    category: "Research Starter Kit",
    items: [
      {
        question: "How does the Research Starter Kit work?",
        answer:
          "You receive a personalized research roadmap PDF tailored to your interests in voice AI, along with code file templates to jumpstart your research project. It's designed to help you go from idea to structured research quickly.",
      },
      {
        question: "What do I get in the research roadmap?",
        answer:
          "A curated reading list of key papers in speech and voice AI, a structured plan for your research direction, and starter code templates for building research-grade voice pipelines.",
      },
      {
        question: "Can I choose any research topic?",
        answer:
          "Yes, the roadmap is personalized to your interests. Common areas include ASR optimization, low-latency TTS, voice agent memory systems, streaming architectures, and on-device voice AI.",
      },
    ],
  },
  {
    category: "1:1 Research Mentorship",
    items: [
      {
        question: "How does the 1:1 mentorship work?",
        answer:
          "The mentorship is fully async over 3 months. You receive personalized feedback on your research progress, experiment design, literature review, and paper writing — all through detailed async communication. No scheduled calls required.",
      },
      {
        question: "What is the goal of the mentorship?",
        answer:
          "The goal is a publishable research paper. Your mentor guides you from topic selection through experiments, ablation studies, and writing to a publication-ready manuscript.",
      },
      {
        question: "Can I get both the Research Starter Kit and the Mentorship?",
        answer:
          "Yes, and we recommend it. The Research Starter Kit gives you the foundation (roadmap + code), and the Mentorship provides ongoing guidance to turn that foundation into a published paper. The all-inclusive bundle offers the best savings.",
      },
    ],
  },
  {
    category: "After the Bootcamp",
    items: [
      {
        question: "What will I be able to build after this?",
        answer:
          "You'll be able to build real-time, tool-using voice agents from scratch — AI receptionists, meeting assistants, research assistants, desktop assistants, and any custom voice-powered application using ASR, LLMs, and TTS.",
      },
      {
        question: "How is this different from using a framework like Pipecat?",
        answer:
          "This bootcamp teaches you how voice agents work under the hood by building everything from scratch. You'll understand every component deeply, which makes you far more effective even when using high-level frameworks later.",
      },
      {
        question: "Do I get a certificate?",
        answer:
          "Yes, all bootcamp participants receive a certificate of completion and a showcase page to display their capstone project.",
      },
    ],
  },
];

// Keep flat faqs for backward compatibility
export const faqs: FaqItem[] = faqGroups.flatMap((g) => g.items);
