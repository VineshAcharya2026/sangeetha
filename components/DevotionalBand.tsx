"use client";

import { motion } from "framer-motion";
import { DiyaGlow, GoldParticles } from "@/components/Decor";
import { devotionalBand } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function DevotionalBand() {
  return (
    <section className="relative isolate overflow-hidden bg-maroon-veil py-24 sm:py-32">
      {/* TODO: replace with real photo of a glowing diya / student recital in low light */}
      <GoldParticles />
      <div className="pointer-events-none absolute inset-0 diya-halo opacity-70" aria-hidden="true" />

      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <DiyaGlow className="mb-6 h-16 w-24" />
        <p className="font-heading gold-text-glow text-3xl leading-snug text-gold-pale sm:text-5xl lg:text-6xl">
          {devotionalBand.quote}
        </p>
        <div className="ornate-rule my-6 w-48" aria-hidden="true" />
        <p className="font-body text-sm uppercase tracking-[0.28em] text-gold-light/80">
          {devotionalBand.caption}
        </p>
      </motion.div>
    </section>
  );
}
