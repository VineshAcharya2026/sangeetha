import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseLanding from "@/components/CourseLanding";
import SiteShell from "@/components/SiteShell";
import { buildMetadata, courseSeoPages, type CourseSlug } from "@/lib/seo";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(courseSeoPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.slug as CourseSlug;
  const page = courseSeoPages[slug];
  if (!page) return {};
  return buildMetadata(page);
}

export default function CourseDetailPage({ params }: Props) {
  const slug = params.slug as CourseSlug;
  if (!courseSeoPages[slug]) notFound();

  return (
    <SiteShell>
      <CourseLanding slug={slug} />
    </SiteShell>
  );
}
