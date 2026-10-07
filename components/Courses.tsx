"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flower2, Lamp, Music4 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { courses, coursesSection, type Course } from "@/lib/data";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const icons = {
  veena: Music4,
  lotus: Flower2,
  diya: Lamp,
} as const;

function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = icons[course.icon];

  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="card-soft group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(92,16,16,0.2)]"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon-deep text-gold-light shadow-diya">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-2xl text-maroon-deep">{course.title}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-charcoal-muted sm:text-base">
        {course.description}
      </p>
      <Link
        href={course.href}
        className="focus-ring mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-maroon-mid transition group-hover:text-gold-dark"
      >
        {coursesSection.learnMore}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </motion.article>
  );
}

export default function Courses() {
  return (
    <section id={coursesSection.id} className="scroll-mt-28 bg-cream-page py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={coursesSection.eyebrow}
          headline={coursesSection.headline}
          intro={coursesSection.intro}
        />
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren}
        >
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
