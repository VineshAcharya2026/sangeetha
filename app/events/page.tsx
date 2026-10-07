import type { Metadata } from "next";
import Events from "@/components/Events";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { buildMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.events);

export default function EventsPage() {
  return (
    <SiteShell>
      <PageHero h1={seoPages.events.h1} intro={seoPages.events.intro} tagline="Gatherings & Recitals" />
      <Events />
    </SiteShell>
  );
}
