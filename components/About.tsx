"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section id={about.id} className="scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="font-body text-xs uppercase tracking-[0.28em] text-tan-dark">{about.eyebrow}</p>
          <div className="section-title-underline mt-3" />
          <h2 className="font-heading mt-4 text-3xl leading-snug text-maroon sm:text-4xl">{about.headline}</h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((para) => (
              <p key={para.slice(0, 24)} className="font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
                {para}
              </p>
            ))}
          </div>
          <a href="/about" className="btn-tan mt-8">
            Read More
          </a>
        </motion.div>

        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ delay: 0.06 }}
          aria-label={about.panelCaption}
        >
          <div className="frame-gold overflow-hidden rounded-lg">
            <Image
              src="/images/logo-sangeeta.png"
              alt={about.panelCaption}
              width={800}
              height={800}
              className="h-auto w-full bg-cream-page object-contain p-6"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
          <p className="mt-4 text-center font-heading text-lg text-maroon">{about.panelCaption}</p>
        </motion.aside>
      </div>
    </section>
  );
}
