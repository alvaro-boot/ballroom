interface QuoteBlockProps {
  quote: string;
  author?: string;
}

export default function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <blockquote className="relative border-l-2 border-gold py-4 pl-8">
      <p className="font-[family-name:var(--font-cormorant)] text-2xl leading-relaxed text-white/90 italic md:text-3xl">
        &ldquo;{quote}&rdquo;
      </p>
      {author && (
        <cite className="mt-4 block text-xs tracking-[0.15em] text-gold not-italic uppercase">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}
