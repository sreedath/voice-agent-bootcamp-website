"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ShoppingCart, ChevronRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/pricing-data";

const navLinks = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Instructor", href: "#instructor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, total } = useCart();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,255,255,0.88)] backdrop-blur-xl border-b border-black/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/vizuara-logo.png"
            alt="Vizuara"
            width={28}
            height={28}
          />
          <span className="text-[15px] font-bold text-[#1d1d1f] tracking-tight">
            Vizuara AI Labs
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Cart button */}
          {items.length > 0 && (
            <a
              href="#pricing"
              className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] hover:bg-black/[0.08] transition-colors text-[13px] font-medium"
            >
              <ShoppingCart size={14} className="text-[#6e6e73]" />
              <span
                className="font-semibold"
                style={{
                  background: "var(--ai-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {formatPrice(total)}
              </span>
              <span className="absolute -top-1 -right-1 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#7C3AED] text-white text-[10px] font-bold">
                {items.length}
              </span>
            </a>
          )}

          <a
            href="#pricing"
            className="btn-primary text-[13px] py-1.5 px-4"
          >
            Enroll Now
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile: cart + toggle */}
        <div className="md:hidden flex items-center gap-3">
          {items.length > 0 && (
            <a
              href="#pricing"
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.05] text-[13px]"
            >
              <ShoppingCart size={14} className="text-[#6e6e73]" />
              <span className="absolute -top-1 -right-1 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#7C3AED] text-white text-[10px] font-bold">
                {items.length}
              </span>
            </a>
          )}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-[#1d1d1f] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(255,255,255,0.95)] backdrop-blur-xl border-b border-[#e8e8ed] px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[14px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="btn-primary justify-center mt-2"
            >
              Enroll Now
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
