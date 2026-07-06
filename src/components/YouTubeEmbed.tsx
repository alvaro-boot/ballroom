interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}
