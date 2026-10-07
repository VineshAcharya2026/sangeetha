"use client";

import { motion } from "framer-motion";
import { BookMarked, Flame, HeartHandshake, Sparkles, Volume2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { whyChooseUs, type Benefit } from "@/lib/data";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const icons = {
  diversity: Sparkles,
  guidance: HeartHandshake,
  curriculum: BookMarked,
  performance: Volume2,
  devotion: Flame,
} as const;

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = icons[benefit.icon];
  return (
    <motion.article
      variants={fadeUp}
      className="h-full rounded-3xl border border-gold/20 bg-cream p-6 shadow-temple transition hover:-translate-y-1 hover:shadow-gold-glow"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon-deep text-gold-light">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl text-maroon-deep">{benefit.title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-charcoal-muted">
        {benefit.description}
      </p>
    </motion.article>
  );
}

export default function WhyChooseUs() {
  return (
    <section id={whyChooseUs.id} className="scroll-mt-24 bg-cream-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={whyChooseUs.eyebrow} headline={whyChooseUs.headline} />
        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren}
        >
          {whyChooseUs.benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={index === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2"}
            >
              <BenefitCard benefit={benefit} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
