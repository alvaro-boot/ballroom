import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import QuoteBlock from "@/components/QuoteBlock";
import ProseBlock from "@/components/ProseBlock";
import FigurePortrait from "@/components/FigurePortrait";
import { historySections, historyFigures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "La historia de Ballroom desde Harlem hasta la revolución cultural global — contada desde la memoria negra.",
};

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        label="Orígenes"
        title="Historia de Ballroom"
        subtitle="Desde la exclusión anti-negra hasta la revolución: la historia de un movimiento creado por personas negras LGBTQ+ que transformó la cultura."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-20">
          {historySections.map((section) => (
            <article key={section.title}>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white">
                {section.title}
              </h2>
              <div className="mt-4 gold-line" />
              <div className="mt-6">
                <ProseBlock paragraphs={section.paragraphs} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Figuras clave
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-white">
            Las madres y padres fundadores
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {historyFigures.map((figure) => (
              <Link
                key={figure.slug}
                href={`/leyendas/${figure.slug}`}
                className="group overflow-hidden border border-white/10 card-hover"
              >
                <FigurePortrait
                  slug={figure.slug}
                  className="aspect-[4/3]"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
                <div className="p-6">
                  <span className="font-[family-name:var(--font-playfair)] text-xl text-gold transition-colors group-hover:text-white">
                    {figure.name}
                  </span>
                  <p className="mt-2 text-xs text-white/50">{figure.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <QuoteBlock
            quote="En un mundo que nos negaba existir, creamos nuestro propio mundo donde éramos reyes y reinas."
            author="Crystal LaBeija"
          />
        </div>
      </section>
    </>
  );
}
