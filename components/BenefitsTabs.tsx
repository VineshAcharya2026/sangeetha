"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { benefitsTabsSection } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function BenefitsTabs() {
  const [active, setActive] = useState(benefitsTabsSection.tabs[0]?.id ?? "");
  const tab = benefitsTabsSection.tabs.find((t) => t.id === active) ?? benefitsTabsSection.tabs[0];

  return (
    <section id={benefitsTabsSection.id} className="scroll-mt-28 bg-cream-page py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={benefitsTabsSection.eyebrow}
          headline={benefitsTabsSection.headline}
        />

        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div
            className="flex flex-wrap gap-2 border-b border-tan/20 pb-4"
            role="tablist"
            aria-label="Benefits"
          >
            {benefitsTabsSection.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={t.id === active}
                className={`focus-ring rounded-md px-4 py-2 font-body text-sm font-medium transition ${
                  t.id === active
                    ? "bg-tan text-white shadow-sm"
                    : "bg-white text-maroon hover:bg-tan/10"
                }`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="card-soft mt-6 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {tab ? (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading text-2xl text-maroon">{tab.title}</h3>
                  {tab.paragraphs.map((p) => (
                    <p key={p.slice(0, 30)} className="mt-4 font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
                      {p}
                    </p>
                  ))}
                  {tab.bullets ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm text-charcoal-muted">
                      {tab.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
