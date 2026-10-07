"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  headline: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  headline,
  intro,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <motion.div
      className={`max-w-3xl ${alignment}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p
        className={`font-body text-xs uppercase tracking-[0.28em] ${
          light ? "text-tan-light" : "text-tan-dark"
        }`}
      >
        {eyebrow}
      </p>
      <div
        className={`section-title-underline my-4 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <h2
        className={`font-heading text-3xl leading-snug sm:text-4xl ${
          light ? "text-white" : "text-maroon"
        }`}
      >
        {headline}
      </h2>
      {intro ? (
        <p
          className={`mt-5 font-body text-base leading-relaxed sm:text-lg ${
            light ? "text-white/85" : "text-charcoal-muted"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </motion.div>
  );
}
