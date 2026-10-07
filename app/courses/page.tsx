import type { Metadata } from "next";
import Courses from "@/components/Courses";
import Methodology from "@/components/Methodology";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { buildMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.courses);

export default function CoursesPage() {
  return (
    <SiteShell>
      <PageHero h1={seoPages.courses.h1} intro={seoPages.courses.intro} tagline="What We Teach" />
      <Courses />
      <Methodology />
    </SiteShell>
  );
}
