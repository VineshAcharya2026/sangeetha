import { Mail, Phone } from "lucide-react";
import { site, socialLinks, topBar } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="border-b border-tan/20 bg-white text-charcoal-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="hidden font-body sm:block sm:flex-1">{topBar.ticker}</p>
        <p className="font-body sm:hidden">{site.shortName}</p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a href={site.phoneHref} className="focus-ring inline-flex items-center gap-1 hover:text-maroon">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {topBar.phoneLabel}
          </a>
          <a href={site.emailHref} className="focus-ring inline-flex items-center gap-1 hover:text-maroon">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="max-w-[12rem] truncate sm:max-w-none">{topBar.emailLabel}</span>
          </a>
          <ul className="hidden items-center gap-2 md:flex">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring text-[11px] uppercase tracking-wider text-tan-dark hover:text-maroon"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
