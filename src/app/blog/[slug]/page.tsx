import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

const blogContent: Record<string, string> = {
  "como-nacio-el-voguing":
    "El voguing nació en las pistas de baile de Harlem en la década de 1970, inspirado en las poses de las modelos de la revista Vogue. Lo que comenzó como un juego de imitación se transformó en un lenguaje de movimiento complejo, con estilos como Old Way, New Way y Vogue Fem. Willi Ninja fue quien llevó el baile más allá de Harlem, enseñándolo en clubes, videos musicales y pasarelas internacionales.",
  "que-significa-ser-007":
    "Ser 007 dentro de una House significa ser un miembro independiente con estatus especial. El número evoca a James Bond: alguien que opera solo pero con el respaldo de la organización. Un 007 ha demostrado maestría en la pista, respeto de la comunidad y la capacidad de representar la casa sin depender directamente de la madre o el padre.",
  "historia-house-of-ninja":
    "La House of Ninja fue fundada por Willi Ninja, conocido como el Grandfather of Vogue. Desde sus inicios en Harlem, la casa se convirtió en sinónimo de excelencia en voguing. Willi llevó el baile a la moda internacional, trabajando con Madonna, Malcolm McLaren y diseñadores de todo el mundo. Hoy, la House of Ninja sigue siendo una de las más respetadas del movimiento.",
  "como-prepararse-para-un-ball":
    "Prepararse para un ball requiere dedicación en varios frentes: elegir la categoría correcta según tus fortalezas, construir un outfit que cuente una historia, practicar tu walk o performance, y estudiar las reglas del evento. La presencia es tan importante como la técnica — llega con confianza, respeta a la comunidad y recuerda que cada ball es una oportunidad de aprender.",
  "que-es-una-kiki-house":
    "Una Kiki House es una casa informal dentro del Ballroom, orientada a la práctica, el aprendizaje y la construcción de comunidad más que a la competencia de alto nivel. Las kiki scenes son espacios accesibles para quienes están empezando, donde se pueden probar categorías, recibir feedback y conectar con la cultura sin la presión de un ball principal.",
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug] ?? post.excerpt;

  return (
    <>
      <PageHero label="Artículo" title={post.title} subtitle={post.excerpt} />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <time className="text-xs tracking-[0.1em] text-gold">
            {new Date(post.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className="mt-8 gold-line" />
          <p className="mt-8 text-base leading-relaxed text-white/70">
            {content}
          </p>
          <p className="mt-6 text-sm text-white/40 italic">
            Este artículo es parte del archivo en construcción de Vogue Society.
            Próximamente: contenido ampliado, entrevistas y referencias.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="link-gold text-sm tracking-[0.15em] uppercase"
          >
            ← Todos los artículos
          </Link>
        </div>
      </section>
    </>
  );
}
