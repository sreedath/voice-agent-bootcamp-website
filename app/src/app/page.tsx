import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketSection from "@/components/MarketSection";
import VoiceQuotesSection from "@/components/VoiceQuotesSection";
import WhoSection from "@/components/WhoSection";
import LearnSection from "@/components/LearnSection";
import CurriculumSection from "@/components/CurriculumSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";
import InstructorSection from "@/components/InstructorSection";
import ResearchStarterSection from "@/components/ResearchStarterSection";
import PricingSection from "@/components/PricingSection";
import MentorshipSection from "@/components/MentorshipSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarketSection />
        <VoiceQuotesSection />
        <WhoSection />
        <LearnSection />
        <CurriculumSection />
        <ToolsSection />
        <ProjectsSection />
        <InstructorSection />
        <ResearchStarterSection />
        <PricingSection />
        <MentorshipSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
