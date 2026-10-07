export type NavLink = {
  label: string;
  href: string;
};

export type Course = {
  id: string;
  title: string;
  icon: "veena" | "lotus" | "diya";
  description: string;
  longDescription: string;
  href: string;
};

export type InstrumentStripItem = {
  name: string;
};

export type BenefitTab = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CurriculumLevel = {
  id: string;
  label: string;
  title: string;
  bullets: string[];
};

export type HeroSlide =
  | {
      kind: "founder";
      name: string;
      role: string;
      blurb: string;
    }
  | {
      kind: "banner";
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };

export type MethodStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: "book" | "repeat" | "stage";
  tiers?: string[];
};

export type Benefit = {
  title: string;
  description: string;
  icon: "diversity" | "guidance" | "curriculum" | "performance" | "devotion";
};

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
  rating: number;
};

export type EventItem = {
  date: string;
  month: string;
  title: string;
  description: string;
  venue: string;
};

export type CourseOption = {
  value: string;
  label: string;
};

export type SocialLink = {
  name: "Instagram" | "YouTube" | "Facebook";
  href: string;
};

export const site = {
  name: "Sangeeta School of Carnatic Music",
  shortName: "Sangeeta School",
  phone: "6364431767",
  phoneDisplay: "+91 63644 31767",
  phoneHref: "tel:+916364431767",
  email: "musicworldlearnings@gmail.com",
  emailHref: "mailto:musicworldlearnings@gmail.com",
  whatsappHref: "https://wa.me/916364431767",
  enrollCta: "Enroll Now",
  exploreCta: "Explore Courses",
  footerTagline: "Learn Music • Preserve Tradition • Inspire the Next Generation",
  copyright: "Sangeeta School of Carnatic Music. All rights reserved.",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Bengaluru%2C%20Karnataka&t=&z=12&ie=UTF8&iwloc=&output=embed",
  // TODO: replace with real school address / Google Maps place embed
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Methodology", href: "/methodology" },
  { label: "Events", href: "/events" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  headline: "Learn Carnatic Vocal, Sugama Sangeeta and Devotional Songs",
  tagline: "Discover the Divine Power of Music",
  subheadline: "Sangeeta School of Carnatic Music",
  chips: ["Carnatic Classical Music", "Sugama Sangeeta", "Devotional Songs"] as const,
};

export const topBar = {
  ticker:
    "Guru-Shishya parampara • Carnatic vocal • Sugama Sangeeta • Devotional bhajans • Bengaluru & online",
  phoneLabel: site.phoneDisplay,
  emailLabel: site.email,
} as const;

export const heroSlides: HeroSlide[] = [
  {
    kind: "founder",
    name: "Sowmya",
    role: "Founder & Guru",
    blurb:
      "Guiding students through swara, raga, and bhakti with the patience and warmth of the living Carnatic tradition.",
  },
  {
    kind: "banner",
    title: "Carnatic Music & Vocal Classes in Bengaluru",
    subtitle: hero.tagline,
    ctaPrimary: site.enrollCta,
    ctaSecondary: "Know More",
  },
];

export const welcomeIntro = {
  id: "welcome",
  eyebrow: "Welcome",
  headline: "Carnatic Music & Vocal Musical Classes in Bengaluru",
  paragraphs: [
    "Carnatic classical music is not only an art — it is a path that connects listeners and learners to centuries of sanctity and sound. At Sangeeta School of Carnatic Music, we nurture shruti, tala, and the emotional truth of every raga with care.",
    "From sarali varisai and geetham to manodharma and stage kutcheri, our Carnatic vocal classes welcome beginners, returning learners, and devotees alike. Sugama Sangeeta and devotional song lessons sit alongside classical depth so every voice can find its colour.",
  ],
  knowMoreHref: "/about",
  joinHref: "/contact",
};

export const about = {
  id: "about",
  eyebrow: "Our Lineage",
  headline: "Nurturing the Guru-Shishya Tradition of Carnatic Vocal Music",
  paragraphs: [
    "For centuries, the Guru-Shishya parampara has carried the living flame of Carnatic music from one heart to the next — not as a subject to be studied, but as a sacred inheritance to be received. At Sangeeta School of Carnatic Music, we honour that lineage with devotion, discipline, and joy.",
    "Here, every swara is a prayer and every tala a heartbeat. Whether you come for Carnatic music classes for beginners, the lyrical warmth of Sugama Sangeeta, or bhajan and devaranama classes, you will find a Guru-Shishya parampara music school where tradition is nurtured and souls are gently inspired.",
  ],
  panelCaption: "The living thread of raga, tala, and bhakti",
};

export const courses: Course[] = [
  {
    id: "carnatic",
    title: "Carnatic Classical Music",
    icon: "veena",
    description:
      "A reverent journey through swaras, ragas, and the great kriti tradition — from sarali varisai to manodharma, guided with patience and precision.",
    longDescription:
      "Conception of ragas, alankara, and the great kriti parampara — from varnams and kritis to neraval and swara kalpana. High classical forms are taught alongside listening, notation, and stage presentation so students grow as complete vocalists.",
    href: "/courses/carnatic-classical-music",
  },
  {
    id: "sugama",
    title: "Sugama Sangeeta",
    icon: "lotus",
    description:
      "The poetry of everyday devotion — light classical songs that sit close to the heart, blending lyrical Kannada and Indian light music with classical grace.",
    longDescription:
      "Lyrical compositions in Kannada and allied languages, taught with classical shruti and expression. Students learn phrasing, bhava, and the gentle ornamentation that makes Sugama Sangeeta both accessible and artistically honest.",
    href: "/courses/sugama-sangeeta",
  },
  {
    id: "devotional",
    title: "Devotional Songs",
    icon: "diya",
    description:
      "Bhajans, devaranamas, and namasankirtana offered as worship. Learn to sing with bhava so that music becomes a lamp, not merely a lesson.",
    longDescription:
      "Bhajans, devaranamas, and namasankirtana with attention to pronunciation, tala, and devotional feeling. Ideal for families, festival seasons, and anyone who wishes to offer song as worship.",
    href: "/courses/devotional-songs",
  },
];

export const instrumentsSection = {
  eyebrow: "Our Offerings",
  headline: "Learn Vocal & Traditional Instruments",
  intro:
    "Vocal music is our heart; mridangam, violin, flute, veena, and tambura support complete musicianship.",
  items: [
    { name: "Veena" },
    { name: "Mridangam" },
    { name: "Flute" },
    { name: "Violin" },
    { name: "Tambura" },
    { name: "Vocal" },
  ] satisfies InstrumentStripItem[],
};

export const benefitsTabsSection = {
  id: "why-choose-us",
  eyebrow: "Why Choose Us",
  headline: "Benefits of Joining Sangeeta School",
  tabs: [
    {
      id: "diversity",
      label: "Diversity",
      title: "Explore Diversity of Music",
      paragraphs: [
        "Classical depth, Sugama warmth, and devotional radiance — three streams under one roof. Repertoire spans varnams, kritis, light classical forms, and festival bhajans with a methodical raga-based exploration.",
      ],
    },
    {
      id: "orientation",
      label: "Orientation",
      title: "Detailed Orientation Process",
      paragraphs: [
        "Every learner begins with the values of the Guru-Shishya parampara — swara gyan, alankara, shruti, and tala fundamentals before repertoire accelerates.",
      ],
      bullets: [
        "Theory and evolution of Carnatic music",
        "Swara, alankara, and basic tala",
        "Listening and keeping shruti",
        "Introduction to semi-classical and devotional forms",
      ],
    },
    {
      id: "assistance",
      label: "Assistance",
      title: "Personalized Assistance",
      paragraphs: [
        "Small batches and individual correction honour each voice. Teachers listen first, then shape technique — so beginners and advanced students both feel seen.",
      ],
    },
    {
      id: "service",
      label: "Service",
      title: "Serve Through Music",
      paragraphs: [
        "Students contribute to kutcheri evenings, temple recitals, and community bhajan sandhyas — turning practice into offering and building quiet stage confidence.",
      ],
    },
    {
      id: "celebrations",
      label: "Celebrations",
      title: "Learn Through Celebrations",
      paragraphs: [
        "Annual student concerts and festive gatherings give every learner a dignified first stage — accompanied by experienced artists where possible, in the spirit of baithak and sabha tradition adapted for Carnatic music.",
      ],
    },
  ] satisfies BenefitTab[],
};

export const curriculumSection = {
  id: "curriculum",
  eyebrow: "Structured Curriculum",
  headline: "One of the Best Carnatic Classical Music Classes in Bengaluru",
  intro:
    "Whether you choose Carnatic vocal, Sugama Sangeeta, or devotional songs, progress is mapped across three clear levels — from first swaras to kutcheri-ready repertoire.",
  levels: [
    {
      id: "level-1",
      label: "Level 1",
      title: "Beginners Level",
      bullets: [
        "Basic theory and evolution of Carnatic music",
        "Sarali, janta, and alankara exercises",
        "Introduction to geethams and simple kritis",
        "Semi-classical and devotional introductions",
      ],
    },
    {
      id: "level-2",
      label: "Level 2",
      title: "Intermediate Level",
      bullets: [
        "Raga recognition and allied ragas",
        "Varnams and structured kritis",
        "Ornamentation: gamaka, meend, and phrasing",
        "Tala practice in multiple tempos",
      ],
    },
    {
      id: "level-3",
      label: "Level 3",
      title: "Advanced Level",
      bullets: [
        "Manodharma: neraval and kalpana swaras",
        "Full kutcheri planning and presentation",
        "Light classical and bhajan finales",
        "Stage kutcheri and concert preparation",
      ],
    },
  ] satisfies CurriculumLevel[],
};

export const promoSection = {
  headline: "Sangeeta School is a home for Carnatic vocal and devotional music in Bengaluru",
  body: "Join Carnatic music classes for beginners or deepen your practice with structured levels, student kutcheris, and Guru-led guidance.",
  links: [
    { label: "Enroll Now", href: "/contact" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Courses", href: "/courses" },
  ],
};

export const coursesSection = {
  id: "courses",
  eyebrow: "What We Teach",
  headline: "Carnatic Vocal, Sugama Sangeeta and Bhajan Classes",
  intro:
    "Choose Carnatic classical vocal classes, Sugama Sangeeta classes, or devotional song lessons — or walk more than one. Each path is taught with the same care for shruti, tala, and the inner feeling of the song.",
  learnMore: "Learn More",
};

export const methodology = {
  id: "methodology",
  eyebrow: "How We Teach",
  headline: "Learn Carnatic Music from Swaras to Stage",
  intro:
    "A time-honoured Carnatic teaching method — from the first sa through structured practice levels to student kutcheri and stage confidence.",
  steps: [
    {
      step: 1,
      title: "Learn",
      subtitle: "The foundation of sound",
      description:
        "Swaras, tala, and the grammar of raga are received slowly, the way a temple lamp is lit — with stillness, repetition, and the Guru’s living example.",
      icon: "book",
    },
    {
      step: 2,
      title: "Practice",
      subtitle: "Compositions, level by level",
      description:
        "Traditional varnams, kritis, and light compositions are practised in a three-tier path so every voice grows with structure, not haste.",
      icon: "repeat",
      tiers: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      step: 3,
      title: "Perform",
      subtitle: "From class to the stage",
      description:
        "Student concerts, temple recitals, and intimate sabhas turn practice into offering — building stage grace, memory, and quiet confidence.",
      icon: "stage",
    },
  ] satisfies MethodStep[],
};

export const whyChooseUs = {
  id: "why-choose-us",
  eyebrow: "Why Choose Us",
  headline: "A School That Feels Like a Home of Music",
  benefits: [
    {
      title: "Diversity of styles",
      description:
        "Classical depth, Sugama warmth, and devotional radiance — three traditions under one roof, so your voice can find its true colour.",
      icon: "diversity",
    },
    {
      title: "Personalized guidance",
      description:
        "Small batches and one-to-one attention honour the Guru-Shishya bond. We listen to your voice before we shape it.",
      icon: "guidance",
    },
    {
      title: "Structured curriculum",
      description:
        "Beginner, Intermediate, and Advanced levels with clear milestones — so progress is felt, not guessed.",
      icon: "curriculum",
    },
    {
      title: "Performance opportunities",
      description:
        "Annual recitals, festive gatherings, and community concerts give every student a dignified first stage.",
      icon: "performance",
    },
    {
      title: "Devotional & cultural grounding",
      description:
        "Music is taught as living culture — with stories of composers, festival songs, and the spirit of bhakti at the centre.",
      icon: "devotion",
    },
  ] satisfies Benefit[],
};

export const testimonialsSection = {
  id: "testimonials",
  eyebrow: "Voices of Our Students",
  headline: "Carnatic Music Class Reviews from Our Students",
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Rao",
    city: "Bengaluru",
    quote:
      "I came only knowing film songs. Within months I could hold a raga with reverence. The classes feel like a quiet temple more than a classroom.",
    rating: 5,
  },
  {
    name: "Karthik Iyer",
    city: "Chennai",
    quote:
      "The Guru-Shishya care is real. Every mistake is corrected with dignity, and every small swara is celebrated. My daughter now looks forward to class more than playtime.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    city: "Mysuru",
    quote:
      "Sugama Sangeeta here is taught with classical roots, not shortcuts. I finally understand why a simple devaranama can move an entire hall to silence.",
    rating: 5,
  },
  {
    name: "Rohan Deshpande",
    city: "Pune",
    quote:
      "I was shy of the stage. The student concert was gentle, well-prepared, and full of encouragement. I sang — and I did not tremble.",
    rating: 5,
  },
  {
    name: "Lakshmi Narayan",
    city: "Hyderabad",
    quote:
      "Devotional class is my weekly prayer. We learn not only the lyric, but the feeling behind it. Our home now fills with namasankirtana in the evenings.",
    rating: 5,
  },
];

export const eventsSection = {
  id: "events",
  eyebrow: "Gatherings & Recitals",
  headline: "Student Carnatic Kutcheris and Devotional Recitals",
  intro:
    "Throughout the year we open our doors for student Carnatic concerts, festival kutcheris, bhajan sandhya, and community evenings of song.",
};

export const events: EventItem[] = [
  {
    date: "18",
    month: "Oct",
    title: "Sharad Ritu Student Kutcheri",
    description:
      "Young voices present varnams and kritis in a lamp-lit evening of first-stage grace.",
    venue: "School Hall · Evening",
  },
  {
    date: "08",
    month: "Nov",
    title: "Kartika Deepam Bhajan Sandhya",
    description:
      "A communal offering of devaranamas and namasankirtana as the kartika lamps are lit.",
    venue: "Temple Courtyard · Dusk",
  },
  {
    date: "12",
    month: "Jan",
    title: "Sankranti Sugama Sangeeta Evening",
    description:
      "Harvest songs and lyrical Kannada compositions shared with families and well-wishers.",
    venue: "Community Sabha · Twilight",
  },
];

export const devotionalBand = {
  quote: "Nurturing Tradition. Inspiring Souls.",
  caption: "A living parampara of raga, tala, and bhakti",
};

export const contactSection = {
  id: "contact",
  eyebrow: "Begin Your Journey",
  headline: "Enroll in Carnatic Music Classes Today",
  intro:
    "Share a few words about yourself to join Carnatic vocal, Sugama Sangeeta, or bhajan classes. We will respond with timings, a gentle voice assessment, and the path that suits you.",
  form: {
    name: "Full name",
    phone: "Phone number",
    email: "Email address",
    course: "Interested course",
    message: "Message",
    messagePlaceholder: "Tell us about your musical background, age group, or what you hope to learn…",
    submit: "Send Enquiry",
    success:
      "Your enquiry has been received with gratitude. We will reach you shortly on the number you shared.",
    whatsappCta: "Chat on WhatsApp",
    callCta: "Call us",
    emailCta: "Write to us",
    mapCaption: "Visit us — location details will be confirmed on enrolment",
  },
  courseOptions: [
    { value: "", label: "Select a course" },
    { value: "carnatic", label: "Carnatic Classical Music" },
    { value: "sugama", label: "Sugama Sangeeta" },
    { value: "devotional", label: "Devotional Songs" },
    { value: "all", label: "All three streams" },
  ] satisfies CourseOption[],
  errors: {
    name: "Please share your name (at least 2 letters).",
    phone: "Enter a valid 10-digit Indian mobile number.",
    email: "Enter a valid email address.",
    course: "Please choose the course that calls to you.",
    message: "A short note helps us prepare — at least 10 characters, or leave it blank.",
  },
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "YouTube", href: "https://youtube.com" },
  { name: "Facebook", href: "https://facebook.com" },
];

export const footer = {
  quickLinksLabel: "Quick links",
  contactLabel: "Reach us",
  followLabel: "Follow the music",
};
