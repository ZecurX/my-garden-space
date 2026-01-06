import { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Gallery | Our Landscaping Projects',
  description:
    'Browse our gallery of completed gardening and landscaping projects in Bangalore. Residential gardens, commercial landscapes, vertical gardens, pergolas, and more.',
  keywords: [
    'landscaping gallery',
    'garden design portfolio',
    'landscaping projects Bangalore',
    'garden photos',
    'vertical garden images',
    'pergola designs',
  ],
  openGraph: {
    title: 'Gallery | My Garden Space',
    description:
      'Browse our portfolio of stunning garden transformations in Bangalore.',
    url: `${SITE_URL}/gallery`,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Garden Space Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | My Garden Space',
    description: 'Browse our portfolio of stunning garden transformations.',
  },
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
