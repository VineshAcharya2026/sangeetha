"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { welcomeIntro } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function WelcomeIntro() {
  return (
    <section id={welcomeIntro.id} className="scroll-mt-28 bg-cream-page py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="frame-gold overflow-hidden rounded-lg">
            <Image
              src="/images/hero-founder-sowmya.png"
              alt="Carnatic music learning at Sangeeta School"
              width={800}
              height={600}
              className="h-auto w-full object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ delay: 0.08 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.28em] text-tan-dark">{welcomeIntro.eyebrow}</p>
          <div className="section-title-underline mt-3" />
          <h2 className="font-heading mt-4 text-3xl leading-snug text-maroon sm:text-4xl">
            {welcomeIntro.headline}
          </h2>
          <div className="mt-6 space-y-4">
            {welcomeIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={welcomeIntro.knowMoreHref} className="btn-tan">
              Know More
            </a>
            <a href={welcomeIntro.joinHref} className="btn-tan-outline">
              Join Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
