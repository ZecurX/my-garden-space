import Hero from '@/components/home/Hero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import PlantRentalBanner from '@/components/home/PlantRentalBanner';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsScrolling from '@/components/ui/TestimonialsScrolling';
import CTABanner from '@/components/home/CTABanner';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  SITE_URL,
} from '@/lib/seo';

// Home page specific JSON-LD
const homePageBreadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
]);

const homePageFAQs = generateFAQSchema([
  {
    question: 'What gardening services do you offer in Bangalore?',
    answer:
      'We offer comprehensive gardening services including garden maintenance, landscaping, lawn development, vertical gardens, pergola installation, water features, plant rental for events and offices, and complete garden design and renovation services.',
  },
  {
    question: 'Do you provide plant rental services for corporate events?',
    answer:
      'Yes! We provide plant rental services for corporate events, weddings, exhibitions, and office spaces. Our service includes delivery, setup, maintenance during the event, and pickup.',
  },
  {
    question: 'What areas in Bangalore do you service?',
    answer:
      'We service all areas in Bangalore and surrounding regions including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, Jayanagar, JP Nagar, and more.',
  },
  {
    question: 'How much does landscaping cost in Bangalore?',
    answer:
      'Landscaping costs vary based on the scope of work, area size, and design complexity. We offer customized quotes based on your specific requirements. Contact us for a free consultation and quote.',
  },
  {
    question: 'Do you offer garden maintenance packages?',
    answer:
      'Yes, we offer weekly, bi-weekly, and monthly garden maintenance packages that include lawn mowing, pruning, fertilization, pest control, and seasonal plant care.',
  },
]);

export default function HomePage() {
  return (
    <>
      {/* Page-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageBreadcrumbs),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageFAQs) }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <ServiceHighlights />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Plant Rental Highlight */}
      <PlantRentalBanner />

      {/* Testimonials */}
      <TestimonialsScrolling />

      {/* CTA Banner */}
      <CTABanner />

      {/* Visual Spacer */}
      <div style={{ height: '100px', backgroundColor: 'var(--bg-cream)' }} />
    </>
  );
}
