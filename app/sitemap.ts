import { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generator for My Garden Space
 * Automatically generates sitemap.xml for search engines
 * Supports both www.mygardenspace.in and mygardenspace.in
 */

// Primary canonical URL (www version)
const BASE_URL = 'https://www.mygardenspace.in';
// Alternate URL (non-www version) - configure redirect at hosting level
// Note: Both domains should 301 redirect to canonical (www) version

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/plant-rental`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Service category pages (uncomment and add to return when individual service pages exist)
  // const serviceCategories = [
  //   "gardening-maintenance",
  //   "landscaping",
  //   "lawn-ground",
  //   "structural-decorative",
  //   "water-features",
  //   "plant-rental-services",
  //   "special-installations",
  //   "maintenance-support",
  // ];

  // Generate service category URLs (commented out for now, enable when pages exist)
  // const servicePages: MetadataRoute.Sitemap = serviceCategories.map((category) => ({
  //   url: `${BASE_URL}/services/${category}`,
  //   lastModified: currentDate,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    // ...servicePages, // Uncomment when service detail pages are added
  ];
}
