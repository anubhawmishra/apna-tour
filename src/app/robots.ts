import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apnatour.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/internal/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
