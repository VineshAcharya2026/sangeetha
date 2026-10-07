"use client";

import { Drum, Music2, Music4, Sparkles, Wind } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { instrumentsSection } from "@/lib/data";

const iconCycle = [Music4, Drum, Wind, Music2, Sparkles, Music4];

export default function InstrumentsMarquee() {
  const doubled = [...instrumentsSection.items, ...instrumentsSection.items];

  return (
    <section className="border-y border-tan/15 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={instrumentsSection.eyebrow}
          headline={instrumentsSection.headline}
          intro={instrumentsSection.intro}
        />
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 px-4">
          {doubled.map((item, i) => {
            const Icon = iconCycle[i % iconCycle.length];
            return (
              <div
                key={`${item.name}-${i}`}
                className="flex w-28 shrink-0 flex-col items-center gap-2 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-tan/30 bg-cream-page text-tan-dark">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <span className="font-body text-sm font-medium text-maroon">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
