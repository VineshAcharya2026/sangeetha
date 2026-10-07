"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { courses, coursesSection } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function CoursesAccordion() {
  const [openId, setOpenId] = useState(courses[0]?.id ?? "");

  return (
    <section id={coursesSection.id} className="scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={coursesSection.eyebrow}
          headline={coursesSection.headline}
          intro={coursesSection.intro}
        />

        <motion.div
          className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="frame-gold overflow-hidden rounded-lg">
            <Image
              src="/images/hero-founder-sowmya.png"
              alt="Carnatic vocal and music classes"
              width={900}
              height={700}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>

          <div className="space-y-2">
            {courses.map((course) => {
              const open = openId === course.id;
              return (
                <div key={course.id} className="overflow-hidden rounded-lg border border-tan/25 bg-cream-page">
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? "" : course.id)}
                  >
                    <span className="font-heading text-lg text-maroon sm:text-xl">{course.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-tan transition ${open ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-tan/15 px-5 pb-5 pt-2">
                          <p className="font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
                            {course.longDescription}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <a href="/contact" className="btn-tan text-xs sm:text-sm">
                              Join Now
                            </a>
                            <Link
                              href={course.href}
                              className="btn-tan-outline py-2 text-xs sm:text-sm"
                            >
                              {coursesSection.learnMore}
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
