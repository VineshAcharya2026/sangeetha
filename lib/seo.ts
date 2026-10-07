import type { Metadata } from "next";
import { site } from "@/lib/data";

export const siteUrl = "https://sangeetaschoolofcarnaticmusic.example";

export type PageSeo = {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  canonicalPath: string;
  intro?: string;
};

export const seoPages = {
  home: {
    title: "Carnatic Music Classes for Beginners | Sugama Sangeeta & Bhajan School",
    description:
      "Carnatic vocal classes for beginners, Sugama Sangeeta, and bhajan training in the Guru-Shishya tradition. Enroll at Sangeeta School of Carnatic Music.",
    h1: "Learn Carnatic Vocal, Sugama Sangeeta and Devotional Songs",
    keywords: [
      "carnatic music classes for beginners",
      "carnatic vocal classes",
      "sugama sangeeta classes",
      "bhajan classes",
      "guru shishya parampara music school",
    ],
    canonicalPath: "/",
  },
  about: {
    title: "Guru-Shishya Carnatic Music School | Vocal Tradition & Lineage",
    description:
      "Meet Sangeeta School of Carnatic Music — a traditional Carnatic vocal school teaching raga, tala, and bhakti through the Guru-Shishya parampara.",
    h1: "A Carnatic Music School Rooted in Guru-Shishya Parampara",
    keywords: [
      "guru shishya parampara music school",
      "carnatic vocal tradition",
      "carnatic music school India",
      "learn carnatic music heritage",
    ],
    canonicalPath: "/about",
    intro:
      "We are a Guru-Shishya parampara music school where Carnatic vocal training is received as living tradition — not merely syllabus.",
  },
  courses: {
    title: "Carnatic Vocal, Sugama Sangeeta & Bhajan Classes | Courses",
    description:
      "Compare Carnatic classical vocal classes, Sugama Sangeeta classes, and devotional song / bhajan classes for beginners to advanced students.",
    h1: "Carnatic Music Courses: Classical Vocal, Sugama Sangeeta & Devotional Songs",
    keywords: [
      "carnatic vocal classes",
      "sugama sangeeta classes",
      "bhajan and devaranama classes",
      "carnatic music courses",
    ],
    canonicalPath: "/courses",
    intro:
      "Whether you seek Carnatic music classes for beginners or advanced manodharma, our three streams share the same care for shruti, tala, and bhava.",
  },
  methodology: {
    title: "How We Teach Carnatic Music | Learn, Practice and Perform",
    description:
      "Our Carnatic teaching method: first swaras and tala, then structured practice levels, then student concerts and stage confidence.",
    h1: "Carnatic Music Teaching Method: Learn, Practice, Perform",
    keywords: [
      "learn carnatic music from swaras to stage",
      "carnatic music teaching method",
      "carnatic vocal beginner intermediate advanced",
    ],
    canonicalPath: "/methodology",
    intro:
      "From the first sa to the first stage bow — a clear path for every voice learning Carnatic music in India and beyond.",
  },
  events: {
    title: "Student Carnatic Concerts & Bhajan Evenings | Kutcheri Recitals",
    description:
      "Upcoming student kutcheris, Kartika bhajan sandhya, and Sugama Sangeeta evenings — where practice becomes a public offering.",
    h1: "Carnatic Student Concerts, Kutcheris and Devotional Recitals",
    keywords: [
      "student carnatic kutcheri",
      "carnatic music concert for students",
      "bhajan sandhya recital",
    ],
    canonicalPath: "/events",
    intro:
      "Student Carnatic concerts and devotional evenings give every learner a dignified stage after structured practice.",
  },
  testimonials: {
    title: "Carnatic Vocal Class Reviews | Student Experiences",
    description:
      "Read student reviews of Carnatic vocal classes, Sugama Sangeeta training, and devotional song lessons at Sangeeta School.",
    h1: "What Students Say About Our Carnatic Music Classes",
    keywords: [
      "carnatic music class reviews",
      "carnatic vocal student testimonials",
      "sugama sangeeta class feedback",
    ],
    canonicalPath: "/testimonials",
    intro:
      "Families and students share how Carnatic vocal classes, Sugama Sangeeta, and bhajan lessons changed their relationship with music.",
  },
  contact: {
    title: "Enroll in Carnatic Music Classes | Call +91 63644 31767",
    description:
      "Join Carnatic music classes — call +91 63644 31767, WhatsApp us, or send an enquiry for Carnatic vocal, Sugama Sangeeta, or bhajan lessons.",
    h1: "Enroll in Carnatic Vocal, Sugama Sangeeta or Devotional Classes",
    keywords: [
      "enroll carnatic music classes",
      "carnatic vocal classes contact",
      "carnatic music classes phone number",
    ],
    canonicalPath: "/contact",
    intro:
      "Begin Carnatic music classes for beginners or returning learners — we will guide you to the right stream after a gentle voice conversation.",
  },
} as const satisfies Record<string, PageSeo>;

export type CourseSlug = "carnatic-classical-music" | "sugama-sangeeta" | "devotional-songs";

export const courseSeoPages: Record<CourseSlug, PageSeo & { courseId: string }> = {
  "carnatic-classical-music": {
    courseId: "carnatic",
    title: "Carnatic Vocal Classes for Beginners to Advanced | Swara, Raga & Kriti",
    description:
      "Learn Carnatic vocal step by step — swaras, tala, varnams, and kritis — with structured beginner, intermediate, and advanced levels.",
    h1: "Carnatic Classical Vocal Classes from Sarali Varisai to Manodharma",
    keywords: [
      "carnatic vocal classes for beginners",
      "carnatic classical music classes",
      "learn carnatic vocal swaras raga",
      "carnatic vocal classes online India",
    ],
    canonicalPath: "/courses/carnatic-classical-music",
    intro:
      "Our Carnatic music classes for beginners build shruti, tala, and raga grammar before manodharma — always in the Guru-Shishya spirit.",
  },
  "sugama-sangeeta": {
    courseId: "sugama",
    title: "Sugama Sangeeta Classes | Light Classical Kannada Song Training",
    description:
      "Sugama Sangeeta classes that blend light classical technique with Kannada lyric songs, taught with Carnatic roots rather than shortcuts.",
    h1: "Learn Sugama Sangeeta — Light Classical and Kannada Lyric Songs",
    keywords: [
      "sugama sangeeta classes",
      "light classical kannada songs",
      "sugama sangeeta training",
    ],
    canonicalPath: "/courses/sugama-sangeeta",
    intro:
      "Sugama Sangeeta classes here keep classical anchoring — so light songs remain musically honest, not merely popular.",
  },
  "devotional-songs": {
    courseId: "devotional",
    title: "Devotional Song Classes | Bhajan, Devaranama & Namasankirtana",
    description:
      "Devotional music classes for bhajan, devaranama, and namasankirtana — sing with bhava for home prayer, temple recitals, and festivals.",
    h1: "Learn Devotional Songs: Bhajans, Devaranamas and Namasankirtana",
    keywords: [
      "bhajan and devaranama classes",
      "devotional song classes",
      "namasankirtana training",
    ],
    canonicalPath: "/courses/devotional-songs",
    intro:
      "Bhajan and devaranama classes teach lyric and feeling together — devotional song as worship, not performance alone.",
  },
};

export const allCanonicalPaths = [
  seoPages.home.canonicalPath,
  seoPages.about.canonicalPath,
  seoPages.courses.canonicalPath,
  seoPages.methodology.canonicalPath,
  seoPages.events.canonicalPath,
  seoPages.testimonials.canonicalPath,
  seoPages.contact.canonicalPath,
  ...Object.values(courseSeoPages).map((p) => p.canonicalPath),
];

export function buildMetadata(page: PageSeo): Metadata {
  const canonical = `${siteUrl}${page.canonicalPath}`;

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [...page.keywords],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      title: page.title,
      description: page.description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
