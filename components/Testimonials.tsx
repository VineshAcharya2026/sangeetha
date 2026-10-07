"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials, testimonialsSection } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

function visibleIndices(center: number, len: number): number[] {
  const prev = (center - 1 + len) % len;
  const next = (center + 1) % len;
  return [prev, center, next];
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((current) => (current + dir + testimonials.length) % testimonials.length);
  };

  const indices = visibleIndices(index, testimonials.length);

  return (
    <section id={testimonialsSection.id} className="scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          headline={testimonialsSection.headline}
        />

        <motion.div
          className="relative mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="flex items-stretch justify-center gap-4 overflow-hidden py-4">
            <AnimatePresence mode="popLayout">
              {indices.map((i) => {
                const t = testimonials[i];
                const isCenter = i === index;
                return (
                  <motion.article
                    key={`${t.name}-${i}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.65,
                      scale: isCenter ? 1 : 0.92,
                      y: isCenter ? -8 : 0,
                    }}
                    className={`card-soft flex w-full max-w-sm flex-col p-6 transition-shadow ${
                      isCenter ? "z-10 shadow-[0_20px_50px_-20px_rgba(92,16,16,0.25)]" : ""
                    } ${!isCenter ? "hidden sm:flex" : ""}`}
                  >
                    <p className="flex-1 font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
                      “{t.quote}”
                    </p>
                    <footer className="mt-6 flex items-center justify-between gap-3 border-t border-tan/15 pt-4">
                      <div>
                        <p className="font-body font-semibold text-charcoal">{t.name}</p>
                        <p className="font-body text-xs text-charcoal-muted">{t.city}</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tan/20 font-heading text-sm text-maroon">
                        {t.name.charAt(0)}
                      </div>
                    </footer>
                    <div className="mt-2 flex gap-0.5" aria-hidden="true">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-tan text-tan" />
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-tan/40 text-maroon"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-tan/40 text-maroon"
              onClick={() => go(1)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
