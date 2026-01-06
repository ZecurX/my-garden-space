/**
 * SEO Utilities for My Garden Space
 * Comprehensive JSON-LD Schema generators and SEO helpers
 * Similar to Yoast SEO functionality but built for Next.js
 */

// Base URLs for the website (canonical is www version)
export const SITE_URL = 'https://www.mygardenspace.in';
export const SITE_URL_ALT = 'https://mygardenspace.in';
export const SITE_NAME = 'My Garden Space';

// Business Information
export const BUSINESS_INFO = {
  name: 'My Garden Space',
  legalName: 'My Garden Space',
  description:
    'Professional gardening, landscaping, and plant rental services in Bangalore',
  phone: '+91 95385 27433',
  email: 'mygardenspace11@gmail.com',
  address: {
    streetAddress: 'Bhoopasandra Main Rd, RMS Colony, Central Excise Layout',
    addressLocality: 'Sanjayanagara, Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560094',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 13.0423,
    longitude: 77.5892,
  },
  priceRange: '₹₹-₹₹₹',
  openingHours: ['Mo-Sa 09:00-18:00'],
  sameAs: [
    'https://www.facebook.com/mygardenspace',
    'https://www.instagram.com/mygardenspace',
    'https://www.linkedin.com/company/mygardenspace',
  ],
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/Screenshot_2025-12-27_153722-removebg-preview.png`,
};

// Types for JSON-LD schemas
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceSchema {
  name: string;
  description: string;
  image?: string;
  provider?: string;
  areaServed?: string;
  priceRange?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewSchema {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
}

export interface ProductSchema {
  name: string;
  description: string;
  image: string;
  price?: string;
  availability?: string;
}

/**
 * Generate LocalBusiness JSON-LD Schema
 * This is the primary schema for business identity
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    image: BUSINESS_INFO.image,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS_INFO.logo,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    priceRange: BUSINESS_INFO.priceRange,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: BUSINESS_INFO.sameAs,
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
      '@id': 'https://www.wikidata.org/wiki/Q1355',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude,
      },
      geoRadius: '50000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gardening Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Garden Maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscaping',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plant Rental',
          },
        },
      ],
    },
  };
}

/**
 * Generate Organization Schema
 * Broader business identity for search engines
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    url: SITE_URL,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    description: BUSINESS_INFO.description,
    email: BUSINESS_INFO.email,
    telephone: BUSINESS_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    sameAs: BUSINESS_INFO.sameAs,
    founder: {
      '@type': 'Person',
      name: 'My Garden Space Team',
    },
    foundingDate: '2015',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 50,
    },
  };
}

/**
 * Generate Website Schema
 * Helps search engines understand the site structure
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: BUSINESS_INFO.description,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  };
}

/**
 * Generate Breadcrumb JSON-LD Schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate Service Schema
 * For individual service pages
 */
export function generateServiceSchema(service: ServiceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    image: service.image,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: service.provider || BUSINESS_INFO.name,
    },
    areaServed: {
      '@type': 'City',
      name: service.areaServed || 'Bangalore',
    },
    serviceType: service.name,
    priceRange: service.priceRange || BUSINESS_INFO.priceRange,
  };
}

/**
 * Generate multiple services schema
 */
export function generateServicesListSchema(services: ServiceSchema[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gardening & Landscaping Services',
    description:
      'Comprehensive gardening and landscaping services offered by My Garden Space',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        image: service.image,
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#localbusiness`,
        },
      },
    })),
  };
}

/**
 * Generate FAQ Schema
 * For FAQ sections - helps with rich snippets
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Review Schema
 * For testimonials page
 */
export function generateReviewSchema(reviews: ReviewSchema[]) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished:
      review.datePublished || new Date().toISOString().split('T')[0],
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: BUSINESS_INFO.name,
    },
  }));
}

/**
 * Generate Product/Rental Schema
 * For plant rental items
 */
export function generateProductSchema(product: ProductSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: BUSINESS_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      availability: product.availability || 'https://schema.org/InStock',
      priceCurrency: 'INR',
      price: product.price || '0',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      seller: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
      },
    },
  };
}

/**
 * Generate Image Gallery Schema
 * For gallery page
 */
export function generateImageGallerySchema(
  images: { url: string; caption: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'My Garden Space Portfolio',
    description:
      'A collection of our completed gardening and landscaping projects',
    image: images.map((img) => ({
      '@type': 'ImageObject',
      url: img.url.startsWith('http') ? img.url : `${SITE_URL}${img.url}`,
      caption: img.caption,
      creditText: BUSINESS_INFO.name,
    })),
  };
}

/**
 * Generate Contact Page Schema
 */
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact My Garden Space',
    description:
      'Get in touch with My Garden Space for gardening, landscaping, and plant rental services',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
    },
  };
}

/**
 * Generate About Page Schema
 */
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About My Garden Space',
    description:
      'Learn about My Garden Space - your trusted partner for professional gardening and landscaping services',
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

/**
 * Generate Professional Service Schema
 * For the services page
 */
export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/services/#professionalservice`,
    name: 'My Garden Space - Professional Gardening Services',
    description:
      'Comprehensive gardening and landscaping services including maintenance, design, installation, and plant rental',
    url: `${SITE_URL}/services`,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    priceRange: BUSINESS_INFO.priceRange,
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Our Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Gardening & Maintenance',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Garden maintenance' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Lawn mowing & care' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Pruning & trimming' },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Landscaping',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Garden design & planning',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Landscape execution' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Garden renovation' },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Plant Rental',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Event plant rental' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Office plant rental' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Home plant rental' },
            },
          ],
        },
      ],
    },
  };
}

/**
 * Combine multiple schemas into a single graph
 * Best practice for multiple schemas on one page
 */
export function combineSchemas(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map((schema) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { '@context': _, ...rest } = schema as { '@context'?: string };
      return rest;
    }),
  };
}

/**
 * Generate JSON-LD script tag content
 */
export function generateJsonLd(schema: object): string {
  return JSON.stringify(schema);
}

/**
 * Default SEO configuration
 */
export const defaultSEOConfig = {
  titleTemplate: '%s | My Garden Space',
  defaultTitle:
    'My Garden Space | Professional Gardening & Landscaping Services in Bangalore',
  description:
    'Transform your outdoor space with My Garden Space. Professional gardening, landscaping, plant rental, and maintenance services in Bangalore. 10+ years experience, 500+ projects completed.',
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'My Garden Space - Beautiful Gardens in Bangalore',
      },
    ],
  },
  twitter: {
    handle: '@mygardenspace',
    site: '@mygardenspace',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#2E7D32' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'geo.region', content: 'IN-KA' },
    { name: 'geo.placename', content: 'Bangalore' },
    { name: 'geo.position', content: '13.0423;77.5892' },
    { name: 'ICBM', content: '13.0423, 77.5892' },
  ],
};
