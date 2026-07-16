// Moldura de "janela do app" para um screenshot real da plataforma (substitui
// os mocks estilizados por imagens reais da UI, com dados de exemplo). Traz o
// próprio glow, como os mocks, para encaixar nos slots de Hero/Pillar/Mssp.
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
    <div className="relative">
      {/* Glow ambiente (mesma linguagem dos mocks) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(420px 220px at 30% 0%,rgba(32,221,201,0.18),transparent 65%),radial-gradient(420px 240px at 90% 100%,rgba(140,123,255,0.16),transparent 62%)",
        }}
      />
      <figure className="relative overflow-hidden rounded-[14px] border border-border-strong bg-surface-mock shadow-[0_30px_70px_-36px_rgba(0,0,0,0.85)]">
        {/* Barra de navegador */}
        <div className="flex items-center gap-2 h-9 px-3.5 border-b border-border-soft bg-[#0B111E]">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </span>
          <span className="mx-auto font-mono text-[11px] text-text-faint">
            app.sigmaward.com
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="block w-full h-auto"
        />
      </figure>
    </div>
  );
}
