"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { events, eventsSection } from "@/lib/data";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export default function Events() {
  return (
    <section id={eventsSection.id} className="kolam-bg scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eventsSection.eyebrow}
          headline={eventsSection.headline}
          intro={eventsSection.intro}
        />
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren}
        >
          {events.map((event) => (
            <motion.article
              key={event.title}
              variants={fadeUp}
              className="overflow-hidden rounded-3xl border border-gold/25 bg-cream shadow-temple"
            >
              {/* TODO: replace with real photo from the recital / festival evening */}
              <div className="flex items-center gap-4 bg-maroon-deep px-6 py-5">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-gold/15 text-gold-pale">
                  <span className="font-heading text-2xl leading-none">{event.date}</span>
                  <span className="font-body text-[10px] uppercase tracking-widest">{event.month}</span>
                </div>
                <h3 className="font-heading text-xl leading-snug text-gold-pale">{event.title}</h3>
              </div>
              <div className="p-6">
                <p className="font-body text-sm leading-relaxed text-charcoal-muted">
                  {event.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider text-maroon-mid">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {event.venue}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
