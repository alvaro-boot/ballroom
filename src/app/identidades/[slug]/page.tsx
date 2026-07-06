import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProseBlock from "@/components/ProseBlock";
import {
  getCategoryBySlug,
  getIdentityBySlug,
  identities,
} from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

const figureLabels: Record<string, string> = {
  FF: "Female Figure",
  MF: "Male Figure",
  OTA: "Open To All",
};

export async function generateStaticParams() {
  return identities.map((identity) => ({ slug: identity.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const identity = getIdentityBySlug(slug);
  if (!identity) return { title: "Identidad no encontrada" };
  return {
    title: identity.name,
    description: identity.tagline,
  };
}

export default async function IdentidadPage({ params }: Props) {
  const { slug } = await params;
  const identity = getIdentityBySlug(slug);
  if (!identity) notFound();

  const relatedCats = identity.relatedCategories
    .map((catSlug) => getCategoryBySlug(catSlug))
    .filter(Boolean);

  const walkableCats = identity.canWalk
    ?.map((catSlug) => getCategoryBySlug(catSlug))
    .filter(Boolean);

  return (
    <>
      <PageHero
        label={
          identity.figure
            ? figureLabels[identity.figure] ?? identity.figure
            : "Identidad"
        }
        title={
          identity.abbreviation
            ? `${identity.name} (${identity.abbreviation})`
            : identity.name
        }
        subtitle={identity.tagline}
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          <article>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
              Qué es
            </h2>
            <div className="mt-3 gold-line" />
            <div className="mt-5">
              <ProseBlock paragraphs={identity.description} />
            </div>
          </article>

          <article>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
              Historia en Ballroom
            </h2>
            <div className="mt-3 gold-line" />
            <div className="mt-5">
              <ProseBlock paragraphs={identity.history} />
            </div>
          </article>

          {walkableCats && walkableCats.length > 0 && (
            <article>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                Categorías que puede caminar
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {walkableCats.map((cat) =>
                  cat ? (
                    <Link
                      key={cat.slug}
                      href={`/categorias/${cat.slug}`}
                      className="group border border-white/10 p-5 card-hover"
                    >
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white transition-colors group-hover:text-gold">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-xs text-white/50">{cat.tagline}</p>
                    </Link>
                  ) : null
                )}
              </div>
            </article>
          )}

          {relatedCats.length > 0 && (
            <article>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                Categorías relacionadas
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {relatedCats.map((cat) =>
                  cat ? (
                    <Link
                      key={cat.slug}
                      href={`/categorias/${cat.slug}`}
                      className="border border-gold/30 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold-muted"
                    >
                      {cat.name}
                    </Link>
                  ) : null
                )}
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-6">
          <Link
            href="/identidades"
            className="link-gold text-sm tracking-[0.15em] uppercase"
          >
            ← Todas las identidades
          </Link>
          <Link
            href="/categorias"
            className="link-gold text-sm tracking-[0.15em] uppercase"
          >
            Ver categorías →
          </Link>
        </div>
      </section>
    </>
  );
}
