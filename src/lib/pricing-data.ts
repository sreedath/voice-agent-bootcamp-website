export interface Offering {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly includes: readonly string[];
  readonly type: "base" | "addon";
  readonly tag?: string;
  readonly url: string;
}

export const offerings: readonly Offering[] = [
  {
    id: "bootcamp",
    name: "Full Bootcamp (8 Days)",
    price: 55000,
    description:
      "The complete 8-day voice agent engineering bootcamp with hands-on projects.",
    includes: [
      "Code files & starter templates",
      "Hand-written notes & slides",
      "Visual guides & PDF booklets",
      "Assignments & interactive quizzes",
      "Live Zoom sessions + lifetime recordings",
      "Certificate + showcase page",
    ],
    type: "base",
    url: "https://vizuara.ai/courses/build-voice-agents-from-scratch-foundations",
  },
  {
    id: "research-starter",
    name: "Research Starter Kit",
    price: 15000,
    description:
      "Jumpstart your research in voice AI with a personalized roadmap.",
    includes: [
      "Personalized research roadmap PDF",
      "Code file template for research projects",
    ],
    type: "addon",
    url: "https://vizuara.ai/courses/build-voice-agents-from-scratch-research-starter-kit",
  },
  {
    id: "mentorship",
    name: "1:1 Mentorship (3 Months, Async)",
    price: 95000,
    description:
      "Guided async mentorship from topic selection to a publishable paper.",
    includes: [
      "Research topic selection guidance",
      "Personalized async feedback",
      "Literature review & experiment design support",
      "Paper reading guidance with curated lists",
      "Actionable next steps with clear deliverables",
    ],
    type: "addon",
    tag: "Most Popular",
    url: "https://vizuara.ai/courses/build-voice-agents-from-scratch-research-mentorship",
  },
] as const;

export interface Bundle {
  readonly id: string;
  readonly name: string;
  readonly itemIds: readonly string[];
  readonly price: number;
  readonly originalPrice: number;
  readonly tag?: string;
  readonly url: string;
}

export const bundles: readonly Bundle[] = [
  {
    id: "bundle-bootcamp-research",
    name: "Full Bootcamp + Research Starter",
    itemIds: ["bootcamp", "research-starter"],
    price: 60000,
    originalPrice: 70000,
    tag: "Save ₹10,000",
    url: "https://vizuara.ai/course-bundle/build-voice-agents-from-scratch-foundations-research-starter-kit",
  },
  {
    id: "bundle-bootcamp-mentorship",
    name: "Full Bootcamp + 1:1 Mentorship",
    itemIds: ["bootcamp", "mentorship"],
    price: 125000,
    originalPrice: 150000,
    tag: "Save ₹25,000",
    url: "https://vizuara.ai/course-bundle/build-voice-agents-from-scratch-foundations-research-mentorship",
  },
  {
    id: "bundle-research-mentorship",
    name: "Research Starter + 1:1 Mentorship",
    itemIds: ["research-starter", "mentorship"],
    price: 100000,
    originalPrice: 110000,
    tag: "Save ₹10,000",
    url: "https://vizuara.ai/course-bundle/build-voice-agents-from-scratch-research-kit-mentorship",
  },
  {
    id: "bundle-all",
    name: "Full Bootcamp + Research Starter + 1:1 Mentorship",
    itemIds: ["bootcamp", "research-starter", "mentorship"],
    price: 130000,
    originalPrice: 165000,
    tag: "Best Value — Save ₹35,000",
    url: "https://vizuara.ai/course-bundle/build-voice-agents-from-scratch-foundations-research-kit-mentorship",
  },
] as const;

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function getCheckoutUrl(itemIds: readonly string[]): string | null {
  if (itemIds.length === 0) return null;

  // Try to match a bundle first (exact match of all items)
  const selectedSet = new Set(itemIds);
  const matchingBundle = bundles.find(
    (b) =>
      b.itemIds.length === selectedSet.size &&
      b.itemIds.every((id) => selectedSet.has(id))
  );
  if (matchingBundle) return matchingBundle.url;

  // Single item — return that offering's URL
  if (itemIds.length === 1) {
    const offering = offerings.find((o) => o.id === itemIds[0]);
    return offering?.url ?? null;
  }

  // Mixed selection that doesn't match a bundle — fall back to foundations
  return (
    offerings.find((o) => o.id === "bootcamp")?.url ?? null
  );
}
