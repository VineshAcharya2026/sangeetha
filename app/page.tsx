import type { Metadata } from "next";
import About from "@/components/About";
import BenefitsTabs from "@/components/BenefitsTabs";
import Contact from "@/components/Contact";
import CoursesAccordion from "@/components/CoursesAccordion";
import CurriculumLevels from "@/components/CurriculumLevels";
import Footer from "@/components/Footer";
import GatheringsCarousel from "@/components/GatheringsCarousel";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import InstrumentsMarquee from "@/components/InstrumentsMarquee";
import PromoBand from "@/components/PromoBand";
import Testimonials from "@/components/Testimonials";
import WelcomeIntro from "@/components/WelcomeIntro";
import WhatsAppButton from "@/components/WhatsAppButton";
import { hero } from "@/lib/data";
import { buildMetadata, seoPages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.home);

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="sr-only">{hero.headline}</h1>
        <HeroCarousel />
        <WelcomeIntro />
        <About />
        <InstrumentsMarquee />
        <GatheringsCarousel />
        <CoursesAccordion />
        <BenefitsTabs />
        <CurriculumLevels />
        <PromoBand />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
