import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/lib/site";

const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/prospecting", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ai-agents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/finance", priority: 0.6, changeFrequency: "monthly" },
  { path: "/solutions/healthcare", priority: 0.6, changeFrequency: "monthly" },
  { path: "/solutions/retail", priority: 0.6, changeFrequency: "monthly" },
  { path: "/solutions/manufacturing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/solutions/legal", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.5, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.5, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.3, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
