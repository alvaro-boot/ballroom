import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import { timelineEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Línea del tiempo",
  description: "Los momentos clave en la historia del Ballroom, de 1960 a hoy.",
};

export default function LineaDelTiempoPage() {
  return (
    <>
      <PageHero
        label="Cronología"
        title="Línea del tiempo"
        subtitle="Desde los primeros balls en Harlem hasta el Ballroom digital del siglo XXI."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Timeline events={timelineEvents} />
        </div>
      </section>
    </>
  );
}
