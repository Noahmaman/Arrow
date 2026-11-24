// Central SEO config. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://arrow-ai.com).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const SITE_NAME = "Arrow AI";
export const LOCALES = ["en", "fr", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const OG_LOCALE: Record<Locale, string> = { en: "en_US", fr: "fr_FR", es: "es_ES" };

/** Canonical + hreflang alternates for a locale-prefixed path ("/prospecting"). */
export function alternates(locale: Locale, path: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${SITE_URL}/${l}${path}`;
  languages["x-default"] = `${SITE_URL}/en${path}`;
  return { canonical: `${SITE_URL}/${locale}${path}`, languages };
}
