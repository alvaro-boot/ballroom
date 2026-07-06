import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProseBlock from "@/components/ProseBlock";
import FigurePortrait from "@/components/FigurePortrait";
import { categories, getCategoryBySlug } from "@/lib/data";
import type { CategoryGroup } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

const groupLabels: Record<CategoryGroup, string> = {
  belleza: "Belleza & Face",
  runway: "Runway",
  vogue: "Vogue",
  realness: "Realness",
  moda: "Moda & Estilo",
  cuerpo: "Cuerpo",
  "sex-siren": "Sex Siren",
  performance: "Performance",
  otros: "Open To All & Otros",
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Categoría no encontrada" };
  return {
    title: category.name,
    description: category.tagline,
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const sections = [
    { title: "Historia", paragraphs: category.history },
    { title: "Origen", paragraphs: category.origin },
    { title: "Cómo se juzga", paragraphs: category.judging },
    { title: "Qué buscan los jueces", paragraphs: category.judgesLookFor },
  ];

  return (
    <>
      <PageHero
        label={groupLabels[category.group]}
        title={category.name}
        subtitle={category.tagline}
      />

      {category.whoCanWalk && category.whoCanWalk.length > 0 && (
        <section className="border-b border-white/10 px-6 py-8 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Quién puede caminar
            </p>
            <ul className="mt-4 space-y-2">
              {category.whoCanWalk.map((who) => (
                <li
                  key={who}
                  className="text-sm leading-relaxed text-white/60"
                >
                  {who}
                </li>
              ))}
            </ul>
            <Link
              href="/identidades"
              className="link-gold mt-4 inline-block text-xs tracking-[0.15em] uppercase"
            >
              Entender identidades →
            </Link>
          </div>
        </section>
      )}

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                {section.title}
              </h2>
              <div className="mt-3 gold-line" />
              <div className="mt-5">
                <ProseBlock paragraphs={section.paragraphs} />
              </div>
            </article>
          ))}

          {category.tips && (
            <article className="border border-gold/30 bg-gold-muted p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl text-gold">
                Consejos
              </h2>
              <div className="mt-4">
                <ProseBlock paragraphs={category.tips} />
              </div>
            </article>
          )}

          {category.subcategories && (
            <article>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                Subcategorías
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.subcategories.map((sub) => (
                  <span
                    key={sub}
                    className="border border-white/20 px-4 py-2 text-sm text-white/80"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </article>
          )}

          {category.icons.length > 0 && (
            <article>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                Íconos históricos
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {category.icons.map((icon) => (
                  <div
                    key={icon}
                    className="overflow-hidden border border-white/10 card-hover"
                  >
                    <FigurePortrait
                      name={icon}
                      className="aspect-[4/3]"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                    <div className="p-4">
                      <span className="font-[family-name:var(--font-playfair)] text-lg text-gold">
                        {icon}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/categorias"
            className="link-gold text-sm tracking-[0.15em] uppercase"
          >
            ← Todas las categorías
          </Link>
        </div>
      </section>
    </>
  );
}
