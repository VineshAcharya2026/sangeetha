import Image from "next/image";
import { site } from "@/lib/data";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-sangeeta.png"
      alt={site.name}
      width={480}
      height={180}
      priority={priority}
      className={`h-9 w-auto rounded-md object-contain sm:h-11 md:h-12 ${className}`}
    />
  );
}
