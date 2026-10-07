"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { curriculumSection } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function CurriculumLevels() {
  const [active, setActive] = useState(curriculumSection.levels[0]?.id ?? "");
  const level = curriculumSection.levels.find((l) => l.id === active) ?? curriculumSection.levels[0];

  return (
    <section id={curriculumSection.id} className="scroll-mt-28 border-t border-tan/15 bg-gradient-to-b from-cream-warm/50 to-cream-page py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={curriculumSection.eyebrow}
          headline={curriculumSection.headline}
          intro={curriculumSection.intro}
        />

        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {curriculumSection.levels.map((l) => (
              <button
                key={l.id}
                type="button"
                className={`focus-ring rounded-md px-5 py-2.5 font-body text-sm font-semibold ${
                  l.id === active ? "bg-tan text-white" : "bg-white text-maroon shadow-sm"
                }`}
                onClick={() => setActive(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="card-soft mx-auto mt-8 max-w-3xl p-8">
            <AnimatePresence mode="wait">
              {level ? (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-heading text-2xl text-maroon">{level.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {level.bullets.map((b) => (
                      <li key={b} className="flex gap-2 font-body text-sm text-charcoal-muted sm:text-base">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tan" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
