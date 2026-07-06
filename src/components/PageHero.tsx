interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 px-6 pt-40 pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {label && (
          <p className="animate-fade-in-up text-xs tracking-[0.3em] text-gold uppercase">
            {label}
          </p>
        )}
        <h1 className="animate-fade-in-up animation-delay-200 mt-4 font-[family-name:var(--font-playfair)] text-5xl leading-tight text-white md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {subtitle}
          </p>
        )}
        <div className="animate-fade-in-up animation-delay-600 mt-8 gold-line" />
      </div>
    </section>
  );
}
