import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { getDictionary, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const footer = dict.footer;

  return (
    <footer className="border-t border-border-soft bg-bg-footer">
      <div
        style={{ maxWidth: 1240, margin: "0 auto" }}
        className="px-8 pt-[56px] pb-[34px]"
      >
        {/* 5-column grid: brand col (1.5fr) + 4 link cols (1fr each) */}
        <div
          style={{ gridTemplateColumns: "1.5fr repeat(4, 1fr)" }}
          className="grid gap-[34px] mb-[44px] max-[900px]:!grid-cols-2 max-[600px]:!grid-cols-1"
        >
          {/* Brand column */}
          <div>
            <Link
              href={localizePath("/", locale)}
              className="inline-flex items-center gap-[10px] mb-4"
              aria-label="Sigmaward — home"
            >
              <Logo size={28} mono />
              <span className="font-display font-semibold text-[18px] text-text-bright tracking-[-0.02em]">
                Sigmaward
              </span>
            </Link>
            <p className="text-[13px] text-text-faintest leading-[1.6] max-w-[240px] mb-4">
              {footer.tagline}
            </p>

            {/* Social icon links */}
            <div className="flex gap-[10px]">
              {/* X / Twitter */}
              <a
                href="https://x.com/sigmaward"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigmaward on X"
                className="w-[30px] h-[30px] rounded-lg border border-border flex items-center justify-center text-text-faint hover:text-text-bright hover:border-border-strong transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/sigmaward"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigmaward on LinkedIn"
                className="w-[30px] h-[30px] rounded-lg border border-border flex items-center justify-center text-text-faint hover:text-text-bright hover:border-border-strong transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sigmaward"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sigmaward on GitHub"
                className="w-[30px] h-[30px] rounded-lg border border-border flex items-center justify-center text-text-faint hover:text-text-bright hover:border-border-strong transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.1.82-.25.82-.56v-2.1c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.33-1.73-1.33-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.5.12-3.14 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.28-1.53 3.29-1.21 3.29-1.21.66 1.64.24 2.84.12 3.14.77.83 1.23 1.88 1.23 3.17 0 4.53-2.81 5.53-5.49 5.82.43.37.81 1.1.81 2.22v3.29c0 .31.22.67.83.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4 link columns from footer.cols */}
          {footer.cols.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-text-faint mb-[15px]">
                {col.title}
              </div>
              <div className="flex flex-col gap-[10px]">
                {col.links.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-[13.5px] text-text-body hover:text-brand transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-border-soft pt-[22px] flex items-center justify-between max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2">
          <span className="font-mono text-[11.5px] text-disclaimer">
            © 2026 Sigmaward — {footer.rights}
          </span>
          <span className="font-mono text-[11px] text-disclaimer tracking-[0.06em]">
            {footer.built}
          </span>
        </div>
      </div>
    </footer>
  );
}
