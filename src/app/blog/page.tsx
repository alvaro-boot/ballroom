import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre la historia de Ballroom, categorías, casas y cultura negra.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Publicaciones"
        title="Blog"
        subtitle="Artículos, entrevistas y reflexiones sobre la cultura Ballroom."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-0">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between gap-4 border-b border-white/10 py-10 md:flex-row md:items-start"
              >
                <div className="flex-1">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white transition-colors group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-white/60">
                    {post.excerpt}
                  </p>
                </div>
                <time className="shrink-0 text-xs tracking-[0.1em] text-gold">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
