import { describe, it, expect } from "vitest";
import { getDictionary, getLocaleFromPath, localizePath } from "@/lib/i18n";

describe("getDictionary", () => {
  it("returns pt and en dictionaries with mirrored nav keys", () => {
    expect(getDictionary("pt").nav.platform).toBe("Plataforma");
    expect(getDictionary("en").nav.platform).toBe("Platform");
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
});
