/**
 * SEO Configuration for My Garden Space
 *
 * This file contains SEO best practices and configuration
 * that can be used across the application.
 */

import { Metadata } from 'next';
import { SITE_URL, SITE_NAME, BUSINESS_INFO } from './index';

/**
 * Default metadata that can be extended by individual pages
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Professional Gardening & Landscaping Services in Bangalore`,
    template: `%s | ${SITE_NAME}`,
  },
  description: BUSINESS_INFO.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: 'Next.js',
  keywords: [
    'gardening services Bangalore',
    'landscaping services Bangalore',
    'plant rental Bangalore',
    'garden maintenance',
  ],
  referrer: 'origin-when-cross-origin',
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mygardenspace',
    site: '@mygardenspace',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

/**
 * Helper function to create page-specific metadata
 */
export function createPageMetadata(options: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  images?: { url: string; alt: string }[];
}): Metadata {
  const { title, description, path, keywords, noIndex, images } = options;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      type: 'website',
      images: images || [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: images?.map((img) => img.url) || ['/og-image.jpg'],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * SEO-friendly URL slug generator
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Truncate text for meta descriptions (recommended 150-160 chars)
 */
export function truncateDescription(
  text: string,
  maxLength: number = 155
): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Generate structured data for a webpage
 */
export function generateWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: options.name,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished || new Date().toISOString(),
    dateModified: options.dateModified || new Date().toISOString(),
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

/**
 * SEO checklist for pages
 * Use this as a reference when creating new pages
 */
export const SEO_CHECKLIST = {
  metadata: [
    '✓ Title tag (50-60 characters)',
    '✓ Meta description (150-160 characters)',
    '✓ Keywords (5-10 relevant terms)',
    '✓ Canonical URL',
    '✓ Open Graph tags',
    '✓ Twitter Card tags',
  ],
  structuredData: [
    '✓ LocalBusiness schema',
    '✓ BreadcrumbList schema',
    '✓ Service/Product schema (for service pages)',
    '✓ FAQPage schema (for FAQ sections)',
    '✓ Review schema (for testimonials)',
  ],
  content: [
    '✓ H1 tag (one per page)',
    '✓ Heading hierarchy (H1 > H2 > H3)',
    '✓ Alt text for images',
    '✓ Internal linking',
    "✓ External links with rel='noopener'",
  ],
  technical: [
    '✓ Mobile responsive',
    '✓ Fast loading (< 3s)',
    '✓ HTTPS enabled',
    '✓ XML sitemap',
    '✓ robots.txt',
  ],
};
