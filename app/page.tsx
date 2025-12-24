import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import PlantRentalBanner from "@/components/home/PlantRentalBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsScrolling from "@/components/ui/TestimonialsScrolling";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
