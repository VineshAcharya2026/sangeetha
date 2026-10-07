import { courses, site } from "@/lib/data";
import { courseSeoPages, siteUrl } from "@/lib/seo";

export default function JsonLd() {
  const courseList = Object.values(courseSeoPages).map((page) => {
    const course = courses.find((c) => c.id === page.courseId);
    return {
      "@type": "Course",
      name: course?.title ?? page.h1,
      description: page.description,
      url: `${siteUrl}${page.canonicalPath}`,
      provider: {
        "@type": "MusicSchool",
        name: site.name,
        telephone: site.phoneDisplay,
        email: site.email,
      },
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicSchool",
        "@id": `${siteUrl}/#school`,
        name: site.name,
        url: siteUrl,
        telephone: site.phoneDisplay,
        email: site.email,
        description:
          "Carnatic vocal classes for beginners, Sugama Sangeeta, and devotional song training in the Guru-Shishya tradition.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Carnatic Music Courses",
          itemListElement: courseList,
        },
      },
      ...courseList,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
