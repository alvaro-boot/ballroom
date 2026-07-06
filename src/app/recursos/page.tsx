import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { glossaryTerms, cultureTerms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Glosario del Ballroom: Chop, Tens, Mop, Legend, Shade, Reading y más.",
};

export default function RecursosPage() {
  return (
    <>
      <PageHero
        label="Referencia"
        title="Recursos"
        subtitle="Glosario y diccionario de la cultura Ballroom para consulta y aprendizaje."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white">
            Glosario
          </h2>
          <div className="mt-4 gold-line" />
          <div className="mt-10 space-y-6">
            {glossaryTerms.map((term) => (
              <div
                key={term.term}
                className="border-b border-white/10 pb-6 last:border-0"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-gold">
                  {term.term}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white">
            Cultura
          </h2>
          <p className="mt-4 text-white/60">
            ¿Qué significa? Términos esenciales para entender el lenguaje del
            Ballroom.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {cultureTerms.map((term) => (
              <div
                key={term.term}
                className="border border-white/10 p-5 card-hover"
              >
                <h3 className="text-sm tracking-[0.1em] text-gold uppercase">
                  {term.term}
                </h3>
                <p className="mt-2 text-sm text-white/60">{term.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
