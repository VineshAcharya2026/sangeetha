import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import Logo from "@/components/Logo";
import { footer, navLinks, site, socialLinks } from "@/lib/data";

const socialIcons = {
  Instagram,
  YouTube: Youtube,
  Facebook,
} as const;

export default function Footer() {
  return (
    <footer className="border-t border-tan/20 bg-gradient-to-b from-cream-warm to-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="/" className="focus-ring inline-flex">
            <Logo className="max-w-[13rem]" />
          </a>
          <p className="mt-4 font-body text-sm leading-relaxed text-charcoal-muted">{site.footerTagline}</p>
          <ul className="mt-4 flex gap-2">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-tan/30 text-maroon hover:bg-tan/10"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="font-heading text-lg text-maroon">{footer.quickLinksLabel}</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring font-body text-sm text-charcoal-muted hover:text-maroon"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-lg text-maroon">{footer.contactLabel}</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-charcoal-muted">
            <li>
              <a href={site.phoneHref} className="focus-ring inline-flex items-center gap-2 hover:text-maroon">
                <Phone className="h-4 w-4 text-tan" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="focus-ring inline-flex items-center gap-2 hover:text-maroon">
                <Mail className="h-4 w-4 text-tan" aria-hidden="true" />
                <span className="break-all">{site.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-heading text-lg text-maroon">{footer.followLabel}</p>
          <p className="mt-4 font-body text-sm leading-relaxed text-charcoal-muted">
            Carnatic vocal classes, Sugama Sangeeta, and devotional music lessons in Bengaluru.
          </p>
        </div>
      </div>

      <div className="border-t border-tan/15 py-4 text-center font-body text-xs text-charcoal-soft">
        © {new Date().getFullYear()} {site.copyright}
      </div>
    </footer>
  );
}
