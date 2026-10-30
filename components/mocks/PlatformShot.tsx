// Product captures are reviewed and anonymized before entering public/.
export default function PlatformShot({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className="product-shot"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        width={1101}
        height={1020}
      />
    </a>
  );
}
