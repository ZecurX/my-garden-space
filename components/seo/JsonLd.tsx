'use client';

import React from 'react';

interface JsonLdProps {
  data: object | object[];
}

/**
 * JSON-LD Script Component for SEO
 *
 * Usage:
 * <JsonLd data={generateLocalBusinessSchema()} />
 *
 * For multiple schemas:
 * <JsonLd data={[schema1, schema2]} />
 */
export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

/**
 * SEO Head component for additional meta tags
 * Use this for page-specific meta tags that aren't covered by Next.js Metadata
 */
interface SeoHeadProps {
  jsonLd?: object | object[];
  noindex?: boolean;
}

export function SeoHead({ jsonLd, noindex }: SeoHeadProps) {
  return (
    <>
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {jsonLd && <JsonLd data={jsonLd} />}
    </>
  );
}

export default JsonLd;
