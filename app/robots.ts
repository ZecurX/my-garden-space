import { MetadataRoute } from 'next';

/**
 * Robots.txt Generator for My Garden Space
 * Controls search engine crawler behavior
 * Supports both www.mygardenspace.in and mygardenspace.in
 */

// Primary canonical URL
const BASE_URL = 'https://www.mygardenspace.in';
// Alternate URL
const BASE_URL_ALT = 'https://mygardenspace.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/thank-you'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/thank-you'],
      },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL_ALT}/sitemap.xml`],
    host: BASE_URL,
  };
}
