import Image from "next/image";
import { getFigureByName, getFigureBySlug } from "@/lib/figures";

interface FigurePortraitProps {
  name?: string;
  slug?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function FigurePortrait({
  name,
  slug,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 400px",
}: FigurePortraitProps) {
  const figure = slug ? getFigureBySlug(slug) : name ? getFigureByName(name) : undefined;

  if (!figure) {
    return (
      <div
        className={`flex items-end bg-gradient-to-b from-white/10 to-dark-gray p-6 grayscale ${className}`}
      >
        <span className="font-[family-name:var(--font-playfair)] text-4xl text-gold/40">
          {name?.charAt(0) ?? "?"}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-dark-gray ${className}`}>
      <Image
        src={figure.image}
        alt={figure.name}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}
