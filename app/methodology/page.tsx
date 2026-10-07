import type { Metadata } from "next";
import Methodology from "@/components/Methodology";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WhyChooseUs from "@/components/WhyChooseUs";
import { buildMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.methodology);

export default function MethodologyPage() {
  return (
    <SiteShell>
      <PageHero
        h1={seoPages.methodology.h1}
        intro={seoPages.methodology.intro}
        tagline="How We Teach"
      />
      <Methodology />
      <WhyChooseUs />
    </SiteShell>
  );
}
