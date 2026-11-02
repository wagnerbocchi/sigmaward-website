import { describe, it, expect } from "vitest";
import i18n from "@/content/i18n.json";
import { getDictionary, getLocaleFromPath, localizePath } from "@/lib/i18n";
import { ROUTES, pageMetadata } from "@/lib/routes";

describe("getDictionary", () => {
  it("returns pt and en dictionaries with mirrored nav keys", () => {
    expect(getDictionary("pt").nav.platform).toBe("Plataforma");
    expect(getDictionary("en").nav.platform).toBe("Platform");
  });
});

describe("i18n mirror integrity", () => {
  const keyPaths = (obj: unknown, prefix = ""): string[] =>
    obj && typeof obj === "object" && !Array.isArray(obj)
      ? Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
          keyPaths(v, prefix ? `${prefix}.${k}` : k),
        )
      : [prefix];

  it("pt and en have exactly the same key structure", () => {
    const pt = new Set(keyPaths(i18n.pt));
    const en = new Set(keyPaths(i18n.en));
    expect([...pt].filter((k) => !en.has(k))).toEqual([]);
    expect([...en].filter((k) => !pt.has(k))).toEqual([]);
  });

  it("no empty strings anywhere in the dictionary", () => {
    const empties = keyPaths(i18n.pt).filter((k) => {
      const v = k.split(".").reduce<unknown>((o, p) => (o as Record<string, unknown>)[p], i18n.pt);
      return v === "";
    });
    expect(empties).toEqual([]);
  });
});

describe("getLocaleFromPath", () => {
  it("detects en under /en", () => {
    expect(getLocaleFromPath("/en/")).toBe("en");
    expect(getLocaleFromPath("/en/platform/")).toBe("en");
  });
  it("defaults to pt at root", () => {
    expect(getLocaleFromPath("/")).toBe("pt");
    expect(getLocaleFromPath("/platform/")).toBe("pt");
  });
});

describe("localizePath", () => {
  it("pt -> en", () => {
    expect(localizePath("/", "en")).toBe("/en/");
    expect(localizePath("/platform/", "en")).toBe("/en/platform/");
  });
  it("en -> pt", () => {
    expect(localizePath("/en/", "pt")).toBe("/");
    expect(localizePath("/en/platform/", "pt")).toBe("/platform/");
  });
  it("same locale is idempotent", () => {
    expect(localizePath("/platform/", "pt")).toBe("/platform/");
    expect(localizePath("/en/platform/", "en")).toBe("/en/platform/");
  });
  it("every route localizes to itself and to /en", () => {
    for (const r of ROUTES) {
      expect(localizePath(r, "pt")).toBe(r);
      expect(localizePath(r, "en")).toBe(r === "/" ? "/en/" : `/en${r}`);
      expect(localizePath(localizePath(r, "en"), "pt")).toBe(r);
    }
  });
});

describe("pageMetadata", () => {
  it("returns a title and description for every route in both locales", () => {
    for (const r of ROUTES) {
      for (const locale of ["pt", "en"] as const) {
        const m = pageMetadata(r, locale);
        expect(m.title.length).toBeGreaterThan(3);
        expect(m.description.length).toBeGreaterThan(10);
      }
    }
  });
});
