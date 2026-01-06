'use client';

import { useState } from 'react';
import { Images } from 'lucide-react';
import GalleryGrid, { categories } from '@/components/gallery/GalleryGrid';

// JSON-LD for gallery page (embedded directly for client components)
const galleryBreadcrumbsSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.mygardenspace.in/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gallery',
      item: 'https://www.mygardenspace.in/gallery',
    },
  ],
};

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'My Garden Space Portfolio',
  description:
    'A collection of our completed gardening and landscaping projects in Bangalore',
  url: 'https://www.mygardenspace.in/gallery',
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryBreadcrumbsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      {/* Hero Section - Cream style like About page */}
      <section style={{ padding: '180px 0 100px', backgroundColor: 'white' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--primary-600)',
                marginBottom: '24px',
              }}
            >
              Our Portfolio
            </span>

            <h1
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '32px',
                lineHeight: 1.1,
              }}
            >
              Our Green
              <br />
              <span style={{ color: 'var(--primary-600)' }}>Masterpieces</span>
            </h1>

            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                marginBottom: '60px',
                maxWidth: '600px',
                lineHeight: 1.7,
                margin: '0 auto 60px',
              }}
            >
              Explore our collection of completed projects, from intimate home
              gardens to expansive corporate landscapes.
            </p>

            {/* Filter Buttons - Updated for light background */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor:
                      activeFilter === cat.key
                        ? 'var(--primary-600)'
                        : 'var(--neutral-100)',
                    color:
                      activeFilter === cat.key
                        ? 'white'
                        : 'var(--text-secondary)',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="pb-32 pt-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <GalleryGrid
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Visual Spacer */}
      <div style={{ height: '100px', backgroundColor: 'var(--bg-cream)' }} />
    </>
  );
}
