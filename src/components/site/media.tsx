export function Still({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} className="aspect-video w-full rounded-2xl border border-line object-cover" />
  );
}

export function Reel({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <video
      className="aspect-video w-full rounded-2xl border border-line object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      aria-label={label}
    />
  );
}
