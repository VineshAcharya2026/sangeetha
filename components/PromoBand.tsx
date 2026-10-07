"use client";

import { motion } from "framer-motion";
import { promoSection } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function PromoBand() {
  return (
    <section className="bg-gradient-to-r from-cream-warm via-white to-cream-warm py-14 sm:py-16">
      <motion.div
        className="mx-auto max-w-4xl px-4 text-center sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <h2 className="font-heading text-2xl leading-snug text-maroon sm:text-3xl">{promoSection.headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
          {promoSection.body}
        </p>
        <nav className="mt-6 flex flex-wrap justify-center gap-6" aria-label="Quick actions">
          {promoSection.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring font-body text-sm font-semibold text-tan-dark underline-offset-4 hover:text-maroon hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}
