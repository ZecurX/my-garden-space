import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  combineSchemas,
  SITE_URL,
} from '@/lib/seo';

// Inter as the main body font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Viewport configuration for SEO
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2E7D32' },
    { media: '(prefers-color-scheme: dark)', color: '#1B5E20' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'My Garden Space | Professional Gardening & Landscaping Services in Bangalore',
    template: '%s | My Garden Space',
  },
  description:
    'Transform your outdoor space with My Garden Space. Professional gardening, landscaping, plant rental, and maintenance services in Bangalore. 10+ years experience, 500+ projects, 50+ expert gardeners. Call +91 95385 27433.',
  keywords: [
    'gardening services Bangalore',
    'landscaping services Bangalore',
    'plant rental Bangalore',
    'garden maintenance Bangalore',
    'vertical garden installation',
    'pergola installation Bangalore',
    'lawn development',
    'garden design Bangalore',
    'terrace garden Bangalore',
    'office plant rental',
    'event plant rental',
    'artificial grass installation',
    'water features garden',
    'gazebo installation',
    'outdoor landscaping',
    'residential landscaping',
    'commercial landscaping',
    'garden maintenance services',
    'professional gardeners Bangalore',
    'best landscaping company Bangalore',
  ],
  authors: [{ name: 'My Garden Space', url: SITE_URL }],
  creator: 'My Garden Space',
  publisher: 'My Garden Space',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/Screenshot_2025-12-27_153722-removebg-preview.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/Screenshot_2025-12-27_153722-removebg-preview.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/Screenshot_2025-12-27_153722-removebg-preview.png',
    apple: [
      {
        url: '/Screenshot_2025-12-27_153722-removebg-preview.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'My Garden Space',
    title:
      'My Garden Space | Professional Gardening & Landscaping Services in Bangalore',
    description:
      'Transform your outdoor space with professional gardening and landscaping services. 10+ years experience, 500+ projects completed in Bangalore.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Garden Space - Beautiful Gardens in Bangalore',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Garden Space | Gardening & Landscaping Services',
    description:
      'Transform your outdoor space with professional gardening and landscaping services in Bangalore.',
    images: ['/og-image.jpg'],
    creator: '@mygardenspace',
    site: '@mygardenspace',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
    },
    types: {
      // Both www and non-www versions point to the same content
      'text/html': [
        { url: SITE_URL, title: 'My Garden Space (www)' },
        { url: 'https://mygardenspace.in', title: 'My Garden Space' },
      ],
    },
  },
  category: 'Home & Garden',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '13.0423;77.5892',
    ICBM: '13.0423, 77.5892',
    rating: 'general',
    'revisit-after': '7 days',
    'msapplication-TileColor': '#2E7D32',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'My Garden Space',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
    yandex: 'your-yandex-verification-code', // Replace with actual verification code
    // bing: "your-bing-verification-code",
  },
};

// Generate JSON-LD structured data
const jsonLd = combineSchemas(
  generateLocalBusinessSchema(),
  generateOrganizationSchema(),
  generateWebsiteSchema()
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* DNS Prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-28">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
