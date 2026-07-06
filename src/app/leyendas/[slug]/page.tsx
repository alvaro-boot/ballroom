import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProseBlock from "@/components/ProseBlock";
import FigurePortrait from "@/components/FigurePortrait";
import { legends, getLegendBySlug } from "@/lib/data";
import { getFigureBySlug } from "@/lib/figures";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return legends.map((legend) => ({ slug: legend.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const legend = getLegendBySlug(slug);
  if (!legend) return { title: "Leyenda no encontrada" };
  return {
    title: legend.name,
    description: legend.excerpt,
  };
}

export default async function LeyendaPage({ params }: Props) {
  const { slug } = await params;
  const legend = getLegendBySlug(slug);
  if (!legend) notFound();

  const figure = getFigureBySlug(slug);

  return (
    <>
      <PageHero
        label={legend.house ?? "Leyenda"}
        title={legend.name}
        subtitle={legend.excerpt}
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_2fr]">
          <FigurePortrait
            slug={legend.slug}
            className="aspect-[3/4] lg:sticky lg:top-32 lg:self-start"
            priority
          />
          <article>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
              Biografía
            </h2>
            <div className="mt-4 gold-line" />
            <div className="mt-6">
              <ProseBlock paragraphs={legend.biographyParagraphs} />
            </div>
            {figure?.credit && (
              <p className="mt-8 text-xs text-white/30">
                Foto: {figure.credit}
              </p>
            )}
          </article>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/leyendas"
            className="link-gold text-sm tracking-[0.15em] uppercase"
          >
            ← Todas las leyendas
          </Link>
        </div>
      </section>
    </>
  );
}
