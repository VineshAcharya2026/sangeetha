type PageHeroProps = {
  h1: string;
  intro?: string;
  tagline?: string;
  light?: boolean;
};

export default function PageHero({ h1, intro, tagline }: PageHeroProps) {
  return (
    <section className="scroll-mt-28 border-b border-tan/15 bg-white px-4 pb-12 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {tagline ? (
          <p className="font-body text-xs uppercase tracking-[0.28em] text-tan-dark">{tagline}</p>
        ) : null}
        <div className="section-title-underline mx-auto my-4" aria-hidden="true" />
        <h1 className="font-heading text-3xl leading-snug text-maroon sm:text-4xl lg:text-5xl">{h1}</h1>
        {intro ? (
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-charcoal-muted sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
