import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProseBlock from "@/components/ProseBlock";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { documentaries, ballroomRegions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Documentales",
  description:
    "Paris Is Burning, Pose, How Do I Look y la escena global de Ballroom.",
};

export default function DocumentalesPage() {
  return (
    <>
      <PageHero
        label="Cine y cultura"
        title="Documentales"
        subtitle="Las obras que documentaron, difundieron y transformaron la percepción de Ballroom — y el debate sobre quién cuenta historias negras."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {documentaries.map((doc) => (
            <article
              key={doc.slug}
              className="overflow-hidden border border-white/10 card-hover"
            >
              <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div className="relative aspect-video bg-dark-gray lg:min-h-full">
                  {doc.youtubeId ? (
                    <YouTubeEmbed videoId={doc.youtubeId} title={doc.title} />
                  ) : doc.posterImage ? (
                    <Image
                      src={doc.posterImage}
                      alt={doc.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top grayscale"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-[family-name:var(--font-playfair)] text-5xl text-gold/30">
                        {doc.year}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-8 lg:p-10">
                  <p className="text-xs tracking-[0.2em] text-gold uppercase">
                    {doc.year}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-white">
                    {doc.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {doc.description}
                  </p>

                  {doc.youtubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${doc.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-gold mt-4 inline-block text-xs tracking-[0.15em] uppercase"
                    >
                      Ver en YouTube →
                    </a>
                  )}

                  {doc.whereToWatch && (
                    <p className="mt-4 text-xs text-white/40">
                      <span className="text-gold">Dónde verlo: </span>
                      {doc.whereToWatch}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-10 border-t border-white/10 p-8 lg:grid-cols-2 lg:p-10">
                <div>
                  <h3 className="text-xs tracking-[0.15em] text-gold uppercase">
                    Historia
                  </h3>
                  <div className="mt-4">
                    <ProseBlock paragraphs={doc.history} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.15em] text-gold uppercase">
                    Influencia
                  </h3>
                  <div className="mt-4">
                    <ProseBlock paragraphs={doc.influence} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Ballroom hoy
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-white">
            La escena global
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ballroomRegions.map((region) => (
              <div
                key={region.region}
                className="border border-white/10 p-6 card-hover"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-gold">
                  {region.region}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
