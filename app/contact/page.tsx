import type { Metadata } from "next";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { buildMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.contact);

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero h1={seoPages.contact.h1} intro={seoPages.contact.intro} tagline="Begin Your Journey" />
      <Contact hideSectionHeading />
    </SiteShell>
  );
}
