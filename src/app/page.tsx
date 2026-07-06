import Link from "next/link";
import Button from "@/components/Button";
import QuoteBlock from "@/components/QuoteBlock";
import FigurePortrait from "@/components/FigurePortrait";
import {
  siteConfig,
  timelineEvents,
  categories,
  legends,
  blogPosts,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #1a1a1a 0%, #0b0b0b 50%, #2a2a2a 100%)",
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8">
          <p className="animate-fade-in-up text-xs tracking-[0.4em] text-gold uppercase">
            Archivo cultural del Ballroom
          </p>
          <h1 className="animate-fade-in-up animation-delay-200 mt-6 font-[family-name:var(--font-playfair)] text-6xl leading-[0.95] text-white md:text-8xl lg:text-9xl">
            Vogue
            <br />
            <span className="text-gold">Society</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-400 mt-8 max-w-lg text-sm leading-relaxed tracking-wide text-white/60">
            {siteConfig.slogan}
          </p>
          <div className="animate-fade-in-up animation-delay-600 mt-12">
            <Button href="/historia">Explorar Historia</Button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-white/10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <QuoteBlock quote={siteConfig.quote} />
        </div>
      </section>

      {/* Preview: Historia */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-gold uppercase">
                Orígenes
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl text-white md:text-5xl">
                Una historia de resistencia
              </h2>
              <p className="mt-6 leading-relaxed text-white/60">
                Desde Harlem en la década de 1960, la comunidad LGBTQ+ negra y
                latina creó un espacio propio donde la belleza, la competencia y
                la familia eran actos de supervivencia y protesta.
              </p>
              <Link
                href="/historia"
                className="link-gold mt-8 inline-block text-sm tracking-[0.15em] uppercase"
              >
                Leer la historia completa
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Harlem", "1960", "Casas", "Revolución"].map((item) => (
                <div
                  key={item}
                  className="flex aspect-square items-center justify-center border border-white/10 bg-dark-gray p-6 card-hover"
                >
                  <span className="font-[family-name:var(--font-playfair)] text-lg text-gold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preview: Timeline */}
      <section className="border-t border-white/10 bg-dark-gray px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Línea del tiempo
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl text-white">
            Momentos clave
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timelineEvents.slice(0, 4).map((event) => (
              <div
                key={event.year + event.title}
                className="border border-white/10 p-6 card-hover"
              >
                <span className="font-[family-name:var(--font-playfair)] text-2xl text-gold">
                  {event.year}
                </span>
                <h3 className="mt-2 text-sm text-white">{event.title}</h3>
              </div>
            ))}
          </div>
          <Link
            href="/linea-del-tiempo"
            className="link-gold mt-10 inline-block text-sm tracking-[0.15em] uppercase"
          >
            Ver línea del tiempo completa
          </Link>
        </div>
      </section>

      {/* Preview: Categorías */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Categorías
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl text-white">
            El arte de la competencia
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="group border border-white/10 p-8 card-hover"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white transition-colors group-hover:text-gold">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-white/50">{cat.tagline}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/categorias"
            className="link-gold mt-10 inline-block text-sm tracking-[0.15em] uppercase"
          >
            Ver todas las categorías
          </Link>
        </div>
      </section>

      {/* Preview: Leyendas */}
      <section className="border-t border-white/10 bg-dark-gray px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Leyendas
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl text-white">
            Quienes construyeron el movimiento
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {legends.slice(0, 3).map((legend) => (
              <Link
                key={legend.slug}
                href={`/leyendas/${legend.slug}`}
                className="group overflow-hidden border border-white/10 card-hover"
              >
                <FigurePortrait
                  slug={legend.slug}
                  className="aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="p-8">
                  <p className="text-xs tracking-[0.15em] text-gold uppercase">
                    {legend.house}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl text-white transition-colors group-hover:text-gold">
                    {legend.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {legend.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/leyendas"
            className="link-gold mt-10 inline-block text-sm tracking-[0.15em] uppercase"
          >
            Conocer todas las leyendas
          </Link>
        </div>
      </section>

      {/* Preview: Blog */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Blog</p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl text-white">
            Artículos y reflexiones
          </h2>
          <div className="mt-12 space-y-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between gap-4 border-b border-white/10 py-6 md:flex-row md:items-center"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white transition-colors group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{post.excerpt}</p>
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
          <Link
            href="/blog"
            className="link-gold mt-10 inline-block text-sm tracking-[0.15em] uppercase"
          >
            Ver todos los artículos
          </Link>
        </div>
      </section>
    </>
  );
}
