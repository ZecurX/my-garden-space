import { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import {
  generateBreadcrumbSchema,
  generateContactPageSchema,
  SITE_URL,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote',
  description:
    'Contact My Garden Space for gardening, landscaping, and plant rental services in Bangalore. Call +91 95385 27433, email us, or visit our office. Free consultations available!',
  keywords: [
    'contact My Garden Space',
    'gardening services contact',
    'landscaping quote Bangalore',
    'garden maintenance enquiry',
    'plant rental enquiry',
  ],
  openGraph: {
    title: 'Contact Us | My Garden Space',
    description:
      'Get in touch for professional gardening and landscaping services in Bangalore. Free consultations!',
    url: `${SITE_URL}/contact`,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact My Garden Space',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | My Garden Space',
    description:
      'Get in touch for professional gardening and landscaping services in Bangalore.',
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

// JSON-LD schemas for contact page
const contactPageBreadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact Us', url: '/contact' },
]);

const contactPageSchema = generateContactPageSchema();

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 95385 27433',
    href: 'tel:+919538527433',
    description: 'Available Mon-Sat',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'mygardenspace11@gmail.com',
    href: 'mailto:mygardenspace11@gmail.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    content:
      'Bhoopasandra Main Rd, RMS Colony, Central Excise Layout, Sanjayanagara, Bengaluru, Karnataka 560094',
    href: 'https://share.google/Ayxa3HSA85KZ9VRp8',
    description: 'Serving all areas',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageBreadcrumbs),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero Section - White style */}
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
              Get In Touch
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
              Let&apos;s Talk About Your
              <br />
              <span style={{ color: 'var(--primary-600)' }}>Dream Garden</span>
            </h1>

            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Have a project in mind? Need a quote? We&apos;d love to hear from
              you. Reach out and we&apos;ll respond as soon as we can.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pt-24 pb-0 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Contact Info Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Support Channels
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              We&apos;re here to help. Choose the most convenient way to reach
              us.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px',
              marginBottom: '64px',
            }}
            className="md:!grid-cols-3"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    padding: '32px',
                    borderRadius: '24px',
                    backgroundColor: 'var(--neutral-50)',
                    border: '1px solid var(--neutral-100)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '18px',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.03)',
                    }}
                  >
                    <Icon
                      style={{
                        width: '24px',
                        height: '24px',
                        color: 'var(--primary-600)',
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: 'var(--primary-600)',
                        fontWeight: 500,
                        textDecoration: 'none',
                        fontSize: '16px',
                        marginBottom: '4px',
                      }}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        fontSize: '16px',
                        marginBottom: '4px',
                      }}
                    >
                      {item.content}
                    </p>
                  )}
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* WhatsApp & Map Grid - Side by side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp CTA */}
            <div
              style={{
                padding: '40px',
                borderRadius: '32px',
                backgroundColor: 'var(--primary-950)',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '400px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                Prefer a quick chat?
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '32px',
                  maxWidth: '350px',
                }}
              >
                Message us on WhatsApp for instant support and fast quotes.
              </p>
              <a
                href="https://wa.me/919538527433?text=Hi%2C%20I%27m%20interested%20in%20your%20gardening%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 40px',
                  backgroundColor: '#22c55e',
                  color: 'white',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
                }}
              >
                <svg
                  style={{ width: '24px', height: '24px' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div
              style={{
                height: '400px',
                borderRadius: '32px',
                overflow: 'hidden',
                border: '1px solid var(--neutral-100)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5949417266366!2d77.56370577609892!3d13.01091171407612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dbcfcf0a11%3A0x901e4e8f00e1e1e1!2sMy%20Garden%20Space!5e0!3m2!1sen!2sin!4v1703420000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Spacer */}
      <div style={{ height: '100px', backgroundColor: 'var(--bg-cream)' }} />
    </>
  );
}
