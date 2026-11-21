import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { tours } from "@/lib/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/tours", "/destinations", "/tailor-made", "/about", "/faq", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...tours.map((t) => ({ url: `${site.url}/tours/${t.slug}`, priority: 0.7 })),
  ];
}
