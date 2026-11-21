// Unsplash's imgix CDN resizes and serves modern formats itself, so we hand sizing to it.
// Local files (logo mark) are served as-is.
export default function loader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("https://images.unsplash.com/")) return `${src}?w=${width}`;
  return `${src}?auto=format&fit=max&w=${width}&q=${quality ?? 70}`;
}
