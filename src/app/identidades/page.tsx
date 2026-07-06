import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { identities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Identidades",
  description:
    "El sistema de figuras y términos de Ballroom: Femme Queen, Butch Queen, Drag, Butch Queen Up in Drag, Female Figure, Male Figure, Twister y más.",
};

const figureLabels: Record<string, string> = {
  FF: "Female Figure",
  MF: "Male Figure",
  OTA: "Open To All",
};

export default function IdentidadesPage() {
  return (
    <>
      <PageHero
        label="Sistema de figuras"
        title="Identidades"
        subtitle="Ballroom organiza la competencia por figuras, presentaciones y términos comunitarios — no por suposiciones del mundo exterior. Conocerlos es entender la pista."
      />

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm leading-relaxed text-white/60">
            Femme Queen, Butch Queen, Butch, Drag, Butch Queen Up in Drag,
            Female Figure y Male Figure son parte de una taxonomía comunitaria
            creada por personas negras LGBTQ+ en Harlem. No son etiquetas
            clínicas: son herramientas para competir con justicia, reconocer
            presentaciones distintas y proteger historias que no deben mezclarse.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {identities.map((identity) => (
              <Link
                key={identity.slug}
                href={`/identidades/${identity.slug}`}
                className="group border border-white/10 p-8 card-hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white transition-colors group-hover:text-gold">
                    {identity.name}
                  </h2>
                  {identity.abbreviation && (
                    <span className="shrink-0 border border-gold/30 px-2 py-1 text-xs text-gold">
                      {identity.abbreviation}
                    </span>
                  )}
                </div>
                {identity.figure && (
                  <p className="mt-2 text-xs tracking-[0.12em] text-white/40 uppercase">
                    {figureLabels[identity.figure] ?? identity.figure}
                  </p>
                )}
                <p className="mt-3 text-sm text-white/50">{identity.tagline}</p>
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
