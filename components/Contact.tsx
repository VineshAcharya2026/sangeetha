"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { contactSection, site } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

type FormState = {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  course: "",
  message: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = contactSection.errors.name;
  if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\s+/g, ""))) {
    errors.phone = contactSection.errors.phone;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = contactSection.errors.email;
  }
  if (!values.course) errors.course = contactSection.errors.course;
  if (values.message.trim().length > 0 && values.message.trim().length < 10) {
    errors.message = contactSection.errors.message;
  }
  return errors;
}

type ContactProps = {
  hideSectionHeading?: boolean;
};

export default function Contact({ hideSectionHeading = false }: ContactProps) {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }
    // Stub: no backend yet — later POST to an API or form service.
    setSubmitted(true);
    setValues(emptyForm);
  };

  const fieldClass =
    "focus-ring w-full rounded-md border border-tan/25 bg-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal-soft";

  return (
    <section id={contactSection.id} className="scroll-mt-28 bg-cream-page py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {hideSectionHeading ? null : (
          <SectionHeading
            eyebrow={contactSection.eyebrow}
            headline={contactSection.headline}
            intro={contactSection.intro}
          />
        )}

        <div className={`grid gap-10 lg:grid-cols-2 ${hideSectionHeading ? "" : "mt-12"}`}>
          <motion.div
            className="card-soft space-y-5 p-6 sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h3 className="font-heading text-2xl text-maroon">Get in Touch</h3>
            <p className="font-body text-sm leading-relaxed text-charcoal-muted">{contactSection.intro}</p>
            <div className="space-y-4 font-body text-sm text-charcoal-muted">
              <p>
                <span className="block font-semibold text-maroon">Phone</span>
                <a href={site.phoneHref} className="focus-ring hover:text-maroon">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block font-semibold text-maroon">Email</span>
                <a href={site.emailHref} className="focus-ring break-all hover:text-maroon">
                  {site.email}
                </a>
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="focus-ring flex items-center gap-3 rounded-md border border-tan/20 bg-cream-page px-4 py-3"
              >
                <Phone className="h-5 w-5 text-tan" aria-hidden="true" />
                <span className="font-body text-sm font-semibold text-maroon">{contactSection.form.callCta}</span>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center justify-center gap-2 rounded-md bg-[#128C7E] px-4 py-3 font-body text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {contactSection.form.whatsappCta}
              </a>
            </div>
            <div className="overflow-hidden rounded-md border border-tan/20">
              <iframe
                title="School location map"
                src={site.mapEmbedUrl}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            noValidate
            className="card-soft space-y-4 p-6 sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: 0.06 }}
          >
            <h3 className="font-heading text-2xl text-maroon">Send us a Message</h3>
            <label className="block">
              <span className="mb-1.5 block font-body text-sm text-maroon-deep">
                {contactSection.form.name}
              </span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                className={fieldClass}
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <p className="mt-1 text-xs text-maroon-mid">{errors.name}</p> : null}
            </label>

            <label className="block">
              <span className="mb-1.5 block font-body text-sm text-maroon-deep">
                {contactSection.form.phone}
              </span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="numeric"
                className={fieldClass}
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? <p className="mt-1 text-xs text-maroon-mid">{errors.phone}</p> : null}
            </label>

            <label className="block">
              <span className="mb-1.5 block font-body text-sm text-maroon-deep">
                {contactSection.form.email}
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className={fieldClass}
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <p className="mt-1 text-xs text-maroon-mid">{errors.email}</p> : null}
            </label>

            <label className="block">
              <span className="mb-1.5 block font-body text-sm text-maroon-deep">
                {contactSection.form.course}
              </span>
              <select
                name="course"
                className={fieldClass}
                value={values.course}
                onChange={(e) => setValues({ ...values, course: e.target.value })}
                aria-invalid={Boolean(errors.course)}
              >
                {contactSection.courseOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.course ? <p className="mt-1 text-xs text-maroon-mid">{errors.course}</p> : null}
            </label>

            <label className="block">
              <span className="mb-1.5 block font-body text-sm text-maroon-deep">
                {contactSection.form.message}
              </span>
              <textarea
                name="message"
                rows={4}
                className={fieldClass}
                placeholder={contactSection.form.messagePlaceholder}
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? (
                <p className="mt-1 text-xs text-maroon-mid">{errors.message}</p>
              ) : null}
            </label>

            <button type="submit" className="btn-tan w-full">
              {contactSection.form.submit}
            </button>

            {submitted ? (
              <p role="status" className="rounded-md bg-tan/15 px-4 py-3 font-body text-sm text-maroon">
                {contactSection.form.success}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
