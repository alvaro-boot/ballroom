import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotografías de Ballroom en blanco y negro con detalles dorados.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        label="Archivo visual"
        title="Galería"
        subtitle="Imágenes que capturan la esencia de Ballroom: elegancia, resistencia negra y belleza."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure
                key={item.slug}
                className="group relative aspect-[4/5] overflow-hidden border border-white/10 card-hover"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs tracking-[0.15em] text-gold uppercase">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">{item.year}</p>
                  {item.credit && (
                    <p className="mt-2 text-[10px] text-white/30 opacity-0 transition-opacity group-hover:opacity-100">
                      {item.credit}
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
