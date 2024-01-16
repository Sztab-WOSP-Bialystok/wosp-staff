import { MetadataRoute } from "next";
import { Links } from "./components/navbar/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wosp.bialystok.pl";

  return [
    {
      url: base + Links.HOME,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: base + Links.FAQ,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.CONTACT,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.CONCERTS,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.PARTNERS,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.COLLABORATION,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.VOLOUNTEERS,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.MONEY_BOX,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.MARATHONS,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: base + Links.SUPPORT,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
