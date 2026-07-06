import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { houses, cultureTerms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Casas",
  description:
    "Qué es una House, qué hace una Mother, un Father y qué significa ser 007.",
};

export default function CasasPage() {
  const houseConcepts = [
    {
      title: "¿Qué es una House?",
      content:
        "Una House es una familia elegida dentro del Ballroom. No es solo un grupo de competidores: es un sistema de apoyo, mentoría y pertenencia para personas LGBTQ+ que muchas veces han sido rechazadas por sus familias biológicas.",
    },
    {
      title: "¿Qué hace una Mother?",
      content:
        "La Mother es la líder femenina de la House. Acoge a nuevos miembros, los entrena, los guía en la pista y los representa. Es figura de autoridad, cariño y protección.",
    },
    {
      title: "¿Qué hace un Father?",
      content:
        "El Father aporta estructura y liderazgo paterno a la House. Protege, organiza y asegura que los valores y la reputación de la casa se mantengan en cada ball.",
    },
    {
      title: "¿Qué es un 007?",
      content:
        "Un 007 es un miembro independiente dentro de una House — alguien con estatus especial por mérito, maestría y respeto ganado en la pista. No depende de la madre o el padre para competir; actúa por cuenta propia representando la casa.",
    },
    {
      title: "¿Qué significa pertenecer?",
      content:
        "Pertenecer a una House implica lealtad, representación y compromiso. Es llevar el nombre de tu casa con orgullo en cada categoría, apoyar a tus hermanos y honrar la historia de quienes vinieron antes.",
    },
  ];

  return (
    <>
      <PageHero
        label="Familias"
        title="Casas"
        subtitle="Las Houses son el corazón del Ballroom: familias elegidas donde la pertenencia es un acto de amor y resistencia."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {houseConcepts.map((concept) => (
            <article key={concept.title}>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                {concept.title}
              </h2>
              <div className="mt-3 gold-line" />
              <p className="mt-5 leading-relaxed text-white/70">
                {concept.content}
              </p>
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
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {houses.map((house) => (
              <div
                key={house.slug}
                className="border border-white/10 p-8 card-hover"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-gold">
                  {house.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {house.description}
                </p>
              </div>
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
            Lenguaje del Ballroom
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {cultureTerms.slice(0, 8).map((term) => (
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
