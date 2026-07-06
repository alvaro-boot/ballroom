import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { categories } from "@/lib/data";
import type { CategoryGroup } from "@/lib/types";

export const metadata: Metadata = {
  title: "Categorías",
  description:
    "Todas las categorías de Ballroom: Face, Runway, Vogue, Realness, identidades y más.",
};

const groupOrder: CategoryGroup[] = [
  "belleza",
  "runway",
  "vogue",
  "realness",
  "moda",
  "cuerpo",
  "sex-siren",
  "performance",
  "otros",
];

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

const grouped = groupOrder.map((group) => ({
  group,
  label: groupLabels[group],
  items: categories.filter((cat) => cat.group === group),
}));

export default function CategoriasPage() {
  return (
    <>
      <PageHero
        label="Competencia"
        title="Categorías"
        subtitle={`${categories.length} categorías que componen la arquitectura de competencia de Ballroom — desde Face hasta Production, desde Realness hasta Virgin Vogue.`}
      />

      <section className="border-b border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            ¿No sabes en qué categoría caminar?{" "}
            <Link href="/identidades" className="text-gold hover:underline">
              Explora las identidades
            </Link>
          </p>
          <p className="text-xs tracking-[0.15em] text-white/30 uppercase">
            {categories.length} categorías
          </p>
        </div>
      </section>

      {grouped.map(
        ({ group, label, items }) =>
          items.length > 0 && (
            <section key={group} className="px-6 py-16 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex items-baseline gap-4">
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white">
                    {label}
                  </h2>
                  <span className="text-xs tracking-[0.15em] text-gold uppercase">
                    {items.length}
                  </span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categorias/${cat.slug}`}
                      className="group border border-white/10 p-8 card-hover"
                    >
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white transition-colors group-hover:text-gold">
                        {cat.name}
                      </h3>
                      <p className="mt-3 text-sm text-white/50">{cat.tagline}</p>
                      {cat.whoCanWalk && (
                        <ul className="mt-4 space-y-1">
                          {cat.whoCanWalk.slice(0, 2).map((who) => (
                            <li
                              key={who}
                              className="text-xs leading-relaxed text-white/40"
                            >
                              {who}
                            </li>
                          ))}
                          {cat.whoCanWalk.length > 2 && (
                            <li className="text-xs text-gold/70">
                              +{cat.whoCanWalk.length - 2} más
                            </li>
                          )}
                        </ul>
                      )}
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
          )
      )}
    </>
  );
}
