import type { TimelineEvent } from "@/lib/types";

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-4 w-px bg-gold/30 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-16">
        {events.map((event, index) => (
          <div
            key={`${event.year}-${event.title}`}
            className={`relative flex flex-col gap-4 md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="hidden flex-1 md:block" />

            <div className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-black md:left-1/2" />

            <div className="flex-1 pl-12 md:pl-0">
              <div
                className={`border border-white/10 bg-dark-gray p-8 card-hover ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-gold">
                  {event.year}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-xl text-white">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {event.description}
                </p>
                {event.detail && (
                  <p className="mt-3 text-sm leading-relaxed text-white/45">
                    {event.detail}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
