import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteBlock from "@/components/QuoteBlock";
import ProseBlock from "@/components/ProseBlock";

export const metadata: Metadata = {
  title: "Sobre Cuarzo 007",
  description:
    "La historia detrás de Vogue Society y la misión de preservar la memoria negra de Ballroom.",
};

const aboutParagraphs = [
  "Soy Cuarzo 007. Este proyecto nace con el propósito de preservar la memoria de Ballroom — una cultura creada por personas negras LGBTQ+ en Harlem — y acercar su historia a nuevas generaciones con el respeto y la profundidad que merece.",
  "Ballroom no es un trend de moda ni un baile de TikTok. Es un sistema de supervivencia: Houses como familias elegidas, balls como espacios donde las personas negras queer y trans no pedían permiso para ser hermosas, voguing como lenguaje de resistencia. Crystal LaBeija, Pepper LaBeija, Willi Ninja, Dorian Corey, Angie Xtravaganza — son el cimiento. Todo lo demás se construyó sobre sus hombros.",
  "Vogue Society busca ser un archivo vivo donde la historia, las categorías, las Houses, las leyendas y la evolución de Ballroom puedan consultarse desde el reconocimiento de quienes construyeron este movimiento. No es un blog superficial — es documentación con rigor, memoria negra al centro, y la convicción de que preservar es un acto político.",
  "Como 007, llevo un título que en Ballroom significa independencia dentro de una House: alguien con mérito propio, respeto ganado en la pista, y la capacidad de representar sin depender de una madre o un padre para validarme. Vogue Society es esa independencia aplicada al archivo: un proyecto que honra las raíces negras de Ballroom mientras construye puente hacia Latinoamérica y el mundo.",
  "Cada página de este sitio es un homenaje a las madres, padres, legends e icons que convirtieron la supervivencia en arte. Este espacio existe para que su legado no se pierda, para que las nuevas generaciones encuentren sus raíces negras, y para que quien llegue por primera vez entienda que Ballroom tiene historia, tiene dolor, tiene gloria — y tiene un pueblo negro que la sostuvo cuando nadie más lo hacía.",
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        label="Archivo de la memoria"
        title="Sobre Cuarzo 007"
        subtitle="El origen de Vogue Society y su compromiso con la memoria negra de Ballroom."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ProseBlock paragraphs={aboutParagraphs} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <QuoteBlock
            quote="Este archivo es para quienes vinieron antes, para quienes están aquí ahora, y para quienes aún no saben que Ballroom les está esperando."
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
          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-white/50">
            Preservar la memoria negra de Ballroom no es nostalgia — es
            responsabilidad. Vogue Society existe para cumplirla.
          </p>
        </div>
      </section>
    </>
  );
}
