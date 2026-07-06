import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotografías de Ballroom en blanco y negro con detalles dorados.",
};

const galleryItems = [
  { title: "Harlem Ball", year: "1987", category: "Runway" },
  { title: "House of LaBeija", year: "1990", category: "Face" },
  { title: "Vogue Fem", year: "1995", category: "Vogue" },
  { title: "Paris Is Burning", year: "1990", category: "Documental" },
  { title: "House of Ninja", year: "1988", category: "Performance" },
  { title: "Bogotá Ball", year: "2024", category: "Realness" },
  { title: "Grand Prize", year: "2001", category: "Runway" },
  { title: "Kiki Scene", year: "2020", category: "Community" },
  { title: "Old Way Vogue", year: "1985", category: "Vogue" },
];

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
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative aspect-[4/5] overflow-hidden border border-white/10 card-hover"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-dark-gray grayscale transition-all duration-500 group-hover:from-gold/10"
                  style={{
                    backgroundImage: `linear-gradient(${135 + index * 20}deg, #2a2a2a, #0b0b0b)`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-xs tracking-[0.15em] text-gold uppercase">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
