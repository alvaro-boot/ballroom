import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Sobre Cuarzo 007",
  description:
    "La historia detrás de Vogue Society y la misión de preservar la memoria del Ballroom.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        label="Archivo de la memoria"
        title="Sobre Cuarzo 007"
        subtitle="El origen de este proyecto y su propósito dentro de la comunidad Ballroom."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed text-white/80">
            Soy <span className="text-gold">Cuarzo 007</span>. Este proyecto
            nace con el propósito de preservar la memoria del Ballroom,
            compartir su historia y acercar esta cultura a nuevas generaciones.
          </p>
          <p className="leading-relaxed text-white/70">
            Más que un blog, busca convertirse en un archivo vivo donde la
            historia, las categorías, las Houses, las leyendas y la evolución
            del Ballroom puedan ser consultadas y valoradas desde el respeto y
            el reconocimiento de quienes construyeron este movimiento.
          </p>
          <p className="leading-relaxed text-white/70">
            Cada página de Vogue Society es un homenaje a las madres, padres,
            legends e icons que convirtieron la supervivencia en arte. Este
            espacio existe para que su legado no se pierda, para que las nuevas
            generaciones encuentren sus raíces, y para que la cultura Ballroom
            sea comprendida con la profundidad y el respeto que merece.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <QuoteBlock
            quote="Este archivo es para quienes vinieron antes, para quienes están aquí ahora, y para quienes aún no saben que el Ballroom les está esperando."
            author="Cuarzo 007"
          />
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-playfair)] text-4xl text-gold">
            007
          </p>
          <p className="mt-4 text-sm tracking-[0.2em] text-white/50 uppercase">
            Independiente. Maestría. Respeto.
          </p>
        </div>
      </section>
    </>
  );
}
