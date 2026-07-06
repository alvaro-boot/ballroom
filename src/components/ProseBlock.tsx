export default function ProseBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="text-base leading-relaxed text-white/70"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
