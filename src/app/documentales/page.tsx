import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProseBlock from "@/components/ProseBlock";
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
        <div className="mx-auto max-w-7xl space-y-12">
          {documentaries.map((doc) => (
            <article
              key={doc.slug}
              className="grid gap-8 border border-white/10 p-8 card-hover lg:grid-cols-[1fr_2fr]"
            >
              <div className="flex aspect-video items-center justify-center bg-dark-gray">
                <span className="font-[family-name:var(--font-playfair)] text-5xl text-gold/30">
                  {doc.year}
                </span>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  {doc.year}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-white">
                  {doc.title}
                </h2>
                <p className="mt-2 text-sm text-white/50">{doc.description}</p>

                <h3 className="mt-8 text-xs tracking-[0.15em] text-gold uppercase">
                  Historia
                </h3>
                <div className="mt-3">
                  <ProseBlock paragraphs={doc.history} />
                </div>

                {doc.whereToWatch && (
                  <>
                    <h3 className="mt-8 text-xs tracking-[0.15em] text-gold uppercase">
                      Dónde verlo
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      {doc.whereToWatch}
                    </p>
                  </>
                )}

                <h3 className="mt-8 text-xs tracking-[0.15em] text-gold uppercase">
                  Influencia
                </h3>
                <div className="mt-3">
                  <ProseBlock paragraphs={doc.influence} />
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
