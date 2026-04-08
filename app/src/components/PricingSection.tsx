"use client";

import { Check, ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { useCart } from "@/lib/cart-context";
import { offerings, bundles, formatPrice, getCheckoutUrl } from "@/lib/pricing-data";

function OfferingCard({ offering }: { readonly offering: (typeof offerings)[number] }) {
  const { hasItem, toggleItem } = useCart();
  const selected = hasItem(offering.id);
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      type="button"
      onClick={() =>
        toggleItem({ id: offering.id, name: offering.name, price: offering.price })
      }
      className={`select-card relative w-full text-left ${selected ? "selected" : ""}`}
    >
      {/* Tag */}
      {offering.tag && (
        <span className="absolute -top-3 right-6 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#ede5ff] text-[#9565FF] border border-[#d4c4ff]">
          {offering.tag}
        </span>
      )}

      {/* Selection indicator */}
      <div
        className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          selected
            ? "border-[#9565FF] bg-[#9565FF]"
            : "border-[#d2d2d7] bg-white"
        }`}
      >
        {selected && <Check size={14} className="text-white" />}
      </div>

      {/* Type badge */}
      <span
        className={`inline-block text-[11px] font-bold uppercase tracking-widest mb-3 ${
          offering.type === "base"
            ? "text-[#9565FF]"
            : "text-[#F76E35]"
        }`}
      >
        {offering.type === "base" ? "Core Program" : "Add-on"}
      </span>

      <h3 className="text-lg font-semibold text-[#1d1d1f] pr-8">{offering.name}</h3>
      <p className="mt-1.5 text-sm text-[#6e6e73] leading-relaxed">
        {offering.description}
      </p>

      {/* Price */}
      <p className="mt-4 text-2xl font-bold text-[#1d1d1f]">
        {formatPrice(offering.price)}
      </p>

      {/* Expand includes */}
      <div
        className="mt-4"
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((prev) => !prev);
        }}
      >
        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#9565FF] cursor-pointer hover:underline">
          {offering.includes.length} items included
          <ChevronDown
            size={12}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-3 space-y-2"
          >
            {offering.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#6e6e73]">
                <Check size={14} className="mt-0.5 flex-shrink-0 text-[#9565FF]" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </button>
  );
}

function BundleCard({
  bundle,
}: {
  readonly bundle: (typeof bundles)[number];
}) {
  const { items, removeItem, addItem, clearCart } = useCart();

  // Bundle is "selected" only when the cart EXACTLY matches its items
  const isExactMatch =
    items.length === bundle.itemIds.length &&
    bundle.itemIds.every((id) => items.some((i) => i.id === id));

  const handleBundleToggle = () => {
    if (isExactMatch) {
      bundle.itemIds.forEach((id) => removeItem(id));
    } else {
      // Replace cart contents with exactly this bundle's items
      clearCart();
      bundle.itemIds.forEach((id) => {
        const offering = offerings.find((o) => o.id === id);
        if (offering) {
          addItem({ id: offering.id, name: offering.name, price: offering.price });
        }
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleBundleToggle}
      className={`select-card relative w-full text-left ${isExactMatch ? "selected" : ""}`}
    >
      {bundle.tag && (
        <span
          className="absolute -top-3 left-6 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-white"
          style={{ background: "var(--ai-gradient-diag)" }}
        >
          {bundle.tag}
        </span>
      )}

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-[#1d1d1f]">{bundle.name}</h4>
          <div className="mt-1 flex items-center gap-3">
            <span className="text-xl font-bold text-[#1d1d1f]">
              {formatPrice(bundle.price)}
            </span>
            <span className="text-sm text-[#86868b] line-through">
              {formatPrice(bundle.originalPrice)}
            </span>
          </div>
        </div>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            isExactMatch
              ? "border-[#9565FF] bg-[#9565FF]"
              : "border-[#d2d2d7] bg-white"
          }`}
        >
          {isExactMatch && <Check size={14} className="text-white" />}
        </div>
      </div>
    </button>
  );
}

export default function PricingSection() {
  const { items, total } = useCart();
  const checkoutUrl = getCheckoutUrl(items.map((i) => i.id));
  return (
    <section id="pricing" className="relative z-10 py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="label-pill">Pricing</span>
            <h2 className="headline-lg">
              Build your{" "}
              <span className="gradient-text-multi">workshop</span>
            </h2>
            <p className="subhead mt-4 max-w-xl mx-auto">
              Select what you need. Everything adjusts instantly.
            </p>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Left: selections */}
          <div>
            {/* Step 1 */}
            <AnimateIn delay={0.1}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-4">
                Step 1 &mdash; Choose your program
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 items-start">
                {offerings.map((offering) => (
                  <OfferingCard key={offering.id} offering={offering} />
                ))}
              </div>
            </AnimateIn>

            {/* Step 2 */}
            <AnimateIn delay={0.2}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-4">
                Step 2 &mdash; Or pick a bundle and save
              </p>
              <div className="grid grid-cols-1 gap-4 mb-10">
                {bundles.map((bundle) => (
                  <BundleCard key={bundle.id} bundle={bundle} />
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: sticky cart summary */}
          <AnimateIn delay={0.3}>
            <div className="sticky-price-bar">
              <div className="flex items-center gap-2.5 mb-4">
                <ShoppingCart size={18} className="text-[#9565FF]" />
                <h3 className="text-base font-bold text-[#1d1d1f]">Your Workshop</h3>
              </div>

              {items.length === 0 ? (
                <p className="text-sm text-[#86868b]">
                  Select a program to get started.
                </p>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-[#1d1d1f]">{item.name}</span>
                      <span className="font-semibold text-[#1d1d1f]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}

                  {/* Check for bundle discount */}
                  {(() => {
                    const selectedIds = new Set(items.map((i) => i.id));
                    const matchingBundle = bundles.find(
                      (b) =>
                        b.itemIds.length === selectedIds.size &&
                        b.itemIds.every((id) => selectedIds.has(id))
                    );
                    if (matchingBundle && total > matchingBundle.price) {
                      const discount = total - matchingBundle.price;
                      return (
                        <div className="flex items-center justify-between text-sm text-green-600 font-medium">
                          <span>
                            Discount ({Math.round((discount / total) * 100)}% off)
                          </span>
                          <span>-{formatPrice(discount)}</span>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  <div className="divider" />

                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#1d1d1f]">Total</span>
                    <span className="text-xl font-bold gradient-text-multi">
                      {(() => {
                        const selectedIds = new Set(items.map((i) => i.id));
                        const matchingBundle = bundles.find(
                          (b) =>
                            b.itemIds.length === selectedIds.size &&
                            b.itemIds.every((id) => selectedIds.has(id))
                        );
                        return formatPrice(
                          matchingBundle && total > matchingBundle.price
                            ? matchingBundle.price
                            : total
                        );
                      })()}
                    </span>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <a
                  href={checkoutUrl ?? "#"}
                  target={checkoutUrl ? "_blank" : undefined}
                  rel={checkoutUrl ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-center w-full gap-2 py-4 text-base font-bold rounded-[980px] transition-all ${
                    items.length > 0
                      ? "bg-[#9565FF] text-white hover:bg-[#7c4ee0] hover:shadow-xl active:scale-[0.98]"
                      : "bg-[#e8e8ed] text-[#86868b] cursor-not-allowed"
                  }`}
                >
                  {items.length > 0 ? (
                    <>
                      Enroll Now
                      <ChevronRight size={16} />
                    </>
                  ) : (
                    "Select a program to continue"
                  )}
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
