"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import TopBar from "@/components/TopBar";
import { navLinks, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <TopBar />
    <header
      className={`transition-shadow duration-300 ${
        scrolled ? "header-light" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="focus-ring group flex min-w-0 shrink-0 items-center">
          <Logo priority className="max-w-[min(100%,11rem)] sm:max-w-[13rem]" />
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded px-3 py-2 font-body text-sm text-charcoal transition hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="focus-ring hidden items-center gap-1.5 font-body text-sm text-charcoal-muted hover:text-maroon sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden lg:inline">{site.phoneDisplay}</span>
          </a>
          <a href="/contact" className="btn-tan hidden py-2 text-xs sm:inline-flex sm:text-sm">
            {site.enrollCta}
          </a>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-tan/30 text-maroon xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="mobile-drawer"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,86vw)] flex-col bg-white px-6 py-6 shadow-xl xl:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mb-6 flex items-center justify-between">
                <Logo className="max-w-[11rem]" />
                <button
                  type="button"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-tan/30"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="focus-ring rounded-lg px-3 py-3 font-body text-lg text-charcoal hover:bg-cream-page"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto space-y-3 pt-8">
                <a
                  href={site.phoneHref}
                  className="focus-ring flex items-center justify-center gap-2 rounded-md border border-tan/30 py-3 font-body text-sm"
                >
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a
                  href="/contact"
                  className="btn-tan w-full"
                  onClick={() => setOpen(false)}
                >
                  {site.enrollCta}
                </a>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
    </div>
  );
}
