import type { Metadata } from "next";
import About from "@/components/About";
import DevotionalBand from "@/components/DevotionalBand";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WhyChooseUs from "@/components/WhyChooseUs";
import { buildMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.about);

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero h1={seoPages.about.h1} intro={seoPages.about.intro} tagline="Our Lineage" />
      <About />
      <WhyChooseUs />
      <DevotionalBand />
    </SiteShell>
  );
}
