import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProseBlock from "@/components/ProseBlock";
import { blogPosts, blogContent } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

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

  const paragraphs = blogContent[slug] ?? [post.excerpt];

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
          <div className="mt-8">
            <ProseBlock paragraphs={paragraphs} />
          </div>
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
