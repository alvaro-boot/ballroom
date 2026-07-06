import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FigurePortrait from "@/components/FigurePortrait";
import { categories, getCategoryBySlug } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

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
    { title: "Historia", content: category.history },
    { title: "Origen", content: category.origin },
    { title: "Cómo se juzga", content: category.judging },
    { title: "Qué buscan los jueces", content: category.judgesLookFor },
  ];

  return (
    <>
      <PageHero
        label="Categoría"
        title={category.name}
        subtitle={category.tagline}
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                {section.title}
              </h2>
              <div className="mt-3 gold-line" />
              <p className="mt-5 leading-relaxed text-white/70">
                {section.content}
              </p>
            </article>
          ))}

          {category.tips && (
            <article className="border border-gold/30 bg-gold-muted p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl text-gold">
                Consejos
              </h2>
              <p className="mt-4 leading-relaxed text-white/80">
                {category.tips}
              </p>
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
