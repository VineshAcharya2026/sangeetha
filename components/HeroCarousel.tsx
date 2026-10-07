"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hero, heroSlides, site } from "@/lib/data";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="home" className="hero-sparkle relative scroll-mt-36 overflow-hidden pt-36 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center text-center text-white"
          >
            {slide.kind === "founder" ? (
              <>
                <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-tan/80 shadow-[0_0_0_6px_rgba(255,253,240,0.35)] sm:h-52 sm:w-52">
                  <Image
                    src="/images/hero-founder-sowmya.png"
                    alt={`${slide.name}, ${slide.role}`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="208px"
                  />
                </div>
                <p className="font-body text-sm uppercase tracking-[0.35em] text-tan-light">{hero.subheadline}</p>
                <p className="font-heading mt-2 text-3xl sm:text-4xl md:text-5xl">{slide.name}</p>
                <p className="mt-1 font-body text-lg text-white/90">{slide.role}</p>
                <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/85 sm:text-base">
                  {slide.blurb}
                </p>
              </>
            ) : (
              <>
                <p className="font-body text-sm uppercase tracking-[0.35em] text-tan-light">{hero.subheadline}</p>
                <p className="font-heading mt-3 max-w-3xl text-3xl leading-snug sm:text-4xl md:text-5xl">
                  {slide.title}
                </p>
                <p className="mt-3 font-heading text-xl text-tan-light sm:text-2xl">{slide.subtitle}</p>
                <p className="mt-4 max-w-2xl font-body text-sm text-white/85 sm:text-base">{hero.headline}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a href="/contact" className="btn-tan">
                    {slide.ctaPrimary}
                  </a>
                  <a href="/about" className="btn-tan-outline border-white/40 text-white hover:bg-white/10">
                    {slide.ctaSecondary}
                  </a>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white"
            onClick={() => go(-1)}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-tan" : "w-2 bg-white/40"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white"
            onClick={() => go(1)}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="pointer-events-none h-8 bg-gradient-to-b from-transparent to-cream-page" />
    </section>
  );
}
