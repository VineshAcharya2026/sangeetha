"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoldParticles } from "@/components/Decor";
import { hero, site } from "@/lib/data";
import { fadeUp, staggerChildren } from "@/lib/motion";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-cream">
      <div className="relative bg-maroon-deep pt-[4.5rem] sm:pt-20">
        <GoldParticles className="opacity-60" />
        <motion.div
          className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-2xl border border-gold/35 shadow-temple sm:rounded-3xl">
            <Image
              src="/images/hero-founder-sowmya.png"
              alt="Sowmya, Founder and Guru of Sangeeta School of Carnatic Music, seated with a veena — Nurturing Tradition. Inspiring Souls."
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
              className="h-auto w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>

      <div className="relative bg-maroon-deep px-4 pb-14 pt-10 text-cream sm:px-6 sm:pb-16 sm:pt-12">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-maroon-deep to-transparent"
          aria-hidden="true"
        />
        <motion.div
          className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="font-body text-xs uppercase tracking-[0.42em] text-gold-light/90"
          >
            {hero.subheadline}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="font-heading gold-text-glow mt-3 max-w-4xl text-2xl leading-snug text-gold-pale sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="mt-3 max-w-2xl font-heading text-base text-gold-light/95 sm:text-lg md:text-xl"
          >
            {hero.tagline}
          </motion.p>
          <motion.ul
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          >
            {hero.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-gold/40 bg-maroon/30 px-4 py-1.5 font-body text-xs tracking-wide text-gold-pale backdrop-blur-sm sm:text-sm"
              >
                {chip}
              </li>
            ))}
          </motion.ul>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/contact"
              className="focus-ring inline-flex min-w-[10.5rem] items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3 font-body text-sm font-semibold text-maroon-deep shadow-gold transition hover:shadow-gold-glow"
            >
              {site.enrollCta}
            </a>
            <a
              href="/courses"
              className="focus-ring inline-flex min-w-[10.5rem] items-center justify-center rounded-full border border-gold-light/70 px-7 py-3 font-body text-sm font-medium text-gold-pale transition hover:bg-gold/10"
            >
              {site.exploreCta}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none h-10 bg-gradient-to-b from-maroon-deep to-cream sm:h-16" />
    </section>
  );
}
