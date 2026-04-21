import type { MetadataRoute } from "next";

const BASE = "https://karvan-mmc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/haqqimizda", "/brendler", "/kataloq", "/terefdaslar", "/qalereya", "/elaqe"];
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
