"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { events, eventsSection } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function GatheringsCarousel() {
  const [index, setIndex] = useState(0);
  const event = events[index];

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + events.length) % events.length);
  };

  return (
    <section id={eventsSection.id} className="scroll-mt-28 bg-cream-page py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eventsSection.eyebrow}
          headline="Student Kutcheris & Devotional Evenings"
          intro={eventsSection.intro}
        />

        <motion.div
          className="relative mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="card-soft mx-auto flex max-w-4xl flex-col overflow-hidden md:flex-row">
            <div className="relative h-48 w-full shrink-0 bg-maroon-deep md:h-auto md:w-2/5">
              <Image
                src="/images/hero-founder-sowmya.png"
                alt=""
                fill
                className="object-cover opacity-90"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-maroon-deep/40" />
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-4 py-2 text-center shadow">
                <span className="font-heading text-2xl text-maroon">{event.date}</span>
                <span className="block font-body text-[10px] uppercase tracking-widest text-charcoal-muted">
                  {event.month}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="font-heading text-2xl text-maroon">{event.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
                    {event.description}
                  </p>
                  <p className="mt-4 font-body text-xs uppercase tracking-wider text-tan-dark">{event.venue}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-tan/40 text-maroon"
              onClick={() => go(-1)}
              aria-label="Previous event"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-tan/40 text-maroon"
              onClick={() => go(1)}
              aria-label="Next event"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
