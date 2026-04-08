import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 bg-[#1c1c1e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/vizuara-logo.png"
            alt="Vizuara"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-sm text-[#86868b]">
            &copy; 2026 Vizuara AI Labs. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#curriculum"
            className="text-sm text-[#86868b] hover:text-[#f5f5f7] transition-colors"
          >
            Curriculum
          </a>
          <a
            href="#instructor"
            className="text-sm text-[#86868b] hover:text-[#f5f5f7] transition-colors"
          >
            Instructor
          </a>
          <a
            href="#pricing"
            className="text-sm text-[#86868b] hover:text-[#f5f5f7] transition-colors"
          >
            Pricing
          </a>
        </div>
      </div>
    </footer>
  );
}
