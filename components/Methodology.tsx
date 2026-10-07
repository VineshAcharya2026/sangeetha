"use client";

import { motion } from "framer-motion";
import { BookOpen, Repeat2, Theater } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { methodology } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

const icons = {
  book: BookOpen,
  repeat: Repeat2,
  stage: Theater,
} as const;

export default function Methodology() {
  return (
    <section id={methodology.id} className="kolam-bg scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={methodology.eyebrow}
          headline={methodology.headline}
          intro={methodology.intro}
        />

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:block"
            aria-hidden="true"
          />

          {methodology.steps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <motion.article
                key={step.title}
                className="relative rounded-3xl border border-gold/25 bg-cream p-7 shadow-temple"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-maroon-deep text-gold-light shadow-diya">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="font-body text-xs uppercase tracking-[0.28em] text-gold-dark">
                  Step {step.step}
                </p>
                <h3 className="mt-1 font-heading text-3xl text-maroon-deep">{step.title}</h3>
                <p className="mt-1 font-body text-sm font-medium text-maroon-mid">{step.subtitle}</p>
                <p className="mt-4 font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
                  {step.description}
                </p>
                {step.tiers ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {step.tiers.map((tier) => (
                      <li
                        key={tier}
                        className="rounded-full border border-gold/40 bg-cream-warm px-3 py-1 font-body text-xs text-maroon-deep"
                      >
                        {tier}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
