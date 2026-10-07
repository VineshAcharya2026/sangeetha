import Link from "next/link";
import { ArrowRight, Flower2, Lamp, Music4 } from "lucide-react";
import { courses, site } from "@/lib/data";
import type { CourseSlug } from "@/lib/seo";
import { courseSeoPages } from "@/lib/seo";
import PageHero from "@/components/PageHero";

const icons = {
  veena: Music4,
  lotus: Flower2,
  diya: Lamp,
} as const;

type CourseLandingProps = {
  slug: CourseSlug;
};

export default function CourseLanding({ slug }: CourseLandingProps) {
  const page = courseSeoPages[slug];
  const course = courses.find((c) => c.id === page.courseId);
  if (!course) return null;

  const Icon = icons[course.icon];

  return (
    <>
      <PageHero h1={page.h1} intro={page.intro} tagline={course.title} />
      <section className="kolam-bg py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gold/25 bg-cream p-8 shadow-temple">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon-deep text-gold-light">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-2xl text-maroon-deep sm:text-3xl">
              What you will learn in {course.title.toLowerCase()} classes
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-charcoal-muted">
              {course.description}
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-charcoal-muted">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3 font-body text-sm font-semibold text-maroon-deep shadow-gold"
              >
                {site.enrollCta}
              </Link>
              <Link
                href="/courses"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-body text-sm font-semibold text-maroon-mid"
              >
                All courses
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
