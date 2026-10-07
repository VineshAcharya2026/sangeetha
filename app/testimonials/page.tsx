import type { Metadata } from "next";
import DevotionalBand from "@/components/DevotionalBand";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import Testimonials from "@/components/Testimonials";
import { buildMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.testimonials);

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero
        h1={seoPages.testimonials.h1}
        intro={seoPages.testimonials.intro}
        tagline="Voices of Our Students"
      />
      <Testimonials />
      <DevotionalBand />
    </SiteShell>
  );
}
