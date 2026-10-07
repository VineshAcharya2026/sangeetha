import { MessageCircle } from "lucide-react";
import { contactSection, site } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold-glow transition hover:scale-105"
      aria-label={contactSection.form.whatsappCta}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" fill="currentColor" />
    </a>
  );
}
