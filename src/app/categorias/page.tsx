import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Categorías",
  description:
    "Todas las categorías de Ballroom: Face, Runway, Vogue, Realness y más.",
};

export default function CategoriasPage() {
  return (
    <>
      <PageHero
        label="Competencia"
        title="Categorías"
        subtitle="Cada categoría es un universo propio con historia, reglas y leyendas. Explora el arte de la competencia Ballroom."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="group border border-white/10 p-8 card-hover"
              >
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white transition-colors group-hover:text-gold">
                  {cat.name}
                </h2>
                <p className="mt-3 text-sm text-white/50">{cat.tagline}</p>
                {cat.subcategories && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.subcategories.map((sub) => (
                      <span
                        key={sub}
                        className="border border-gold/30 px-2 py-1 text-xs text-gold"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
                <span className="link-gold mt-6 inline-block text-xs tracking-[0.15em] uppercase">
                  Explorar
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
