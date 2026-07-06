import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProseBlock from "@/components/ProseBlock";
import { houses, houseConcepts, cultureTerms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Casas",
  description:
    "Qué es una House, qué hace una Mother, un Father y qué significa ser 007 en Ballroom.",
};

export default function CasasPage() {
  return (
    <>
      <PageHero
        label="Familias"
        title="Casas"
        subtitle="Las Houses son el corazón de Ballroom: familias elegidas creadas por personas negras donde la pertenencia es un acto de amor y resistencia."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {houseConcepts.map((concept) => (
            <article key={concept.title}>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                {concept.title}
              </h2>
              <div className="mt-3 gold-line" />
              <div className="mt-5">
                <ProseBlock paragraphs={concept.paragraphs} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Casas icónicas
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-white">
            Ejemplos históricos
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {houses.map((house) => (
              <article
                key={house.slug}
                className="border border-white/10 p-8 card-hover"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-gold">
                    {house.name}
                  </h3>
                  {house.founded && (
                    <span className="text-xs text-white/40">{house.founded}</span>
                  )}
                </div>
                {house.founder && (
                  <p className="mt-1 text-xs tracking-[0.1em] text-white/50 uppercase">
                    Fundada por {house.founder}
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {house.description}
                </p>
                <div className="mt-5">
                  <ProseBlock paragraphs={house.paragraphs} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Cultura
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-white">
            Lenguaje de Ballroom
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {cultureTerms.map((term) => (
              <div
                key={term.term}
                className="border border-white/10 p-5 card-hover"
              >
                <h3 className="text-sm tracking-[0.1em] text-gold uppercase">
                  {term.term}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
