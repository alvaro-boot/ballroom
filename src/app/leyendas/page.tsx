import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FigurePortrait from "@/components/FigurePortrait";
import { legends } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leyendas",
  description:
    "Las figuras que construyeron el Ballroom: Crystal LaBeija, Willi Ninja, Angie Xtravaganza y más.",
};

export default function LeyendasPage() {
  return (
    <>
      <PageHero
        label="Íconos"
        title="Leyendas"
        subtitle="Biografías de quienes dieron forma al Ballroom y cuyo legado perdura en cada ball."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {legends.map((legend) => (
              <Link
                key={legend.slug}
                href={`/leyendas/${legend.slug}`}
                className="group grid gap-6 border border-white/10 p-8 card-hover md:grid-cols-[1fr_2fr]"
              >
                <FigurePortrait
                  slug={legend.slug}
                  className="aspect-[3/4]"
                />
                <div>
                  {legend.house && (
                    <p className="text-xs tracking-[0.15em] text-gold uppercase">
                      {legend.house}
                    </p>
                  )}
                  <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl text-white transition-colors group-hover:text-gold">
                    {legend.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {legend.excerpt}
                  </p>
                  <span className="link-gold mt-4 inline-block text-xs tracking-[0.15em] uppercase">
                    Leer biografía
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
