import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";

export const metadata: Metadata = {
    title: "Testimonials",
    description:
        "Read what our clients say about My Garden Space. Customer reviews and testimonials from satisfied homeowners and businesses in Bangalore.",
};

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        title: "Homeowner",
        location: "Whitefield, Bangalore",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote:
            "My Garden Space completely transformed our backyard. The team was professional, creative, and completed the project on time. Our garden is now the highlight of our home!",
        project: "Backyard Landscaping",
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        title: "Office Manager",
        location: "Koramangala, Bangalore",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote:
            "We rented plants for our office and the difference was amazing. The team handled everything from delivery to maintenance. Highly recommend their rental service!",
        project: "Office Plant Rental",
    },
    {
        id: 3,
        name: "Anita Desai",
        title: "Event Planner",
        location: "Indiranagar, Bangalore",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote:
            "For our wedding venue, My Garden Space created the most beautiful floral arrangements with rented plants. Guests couldn't stop complimenting the decor! Best investment we made.",
        project: "Wedding Plant Decor",
    },
    {
        id: 4,
        name: "Vikram Mehta",
        title: "Villa Owner",
        location: "HSR Layout, Bangalore",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote:
            "The pergola and garden design they did for our villa is stunning. Professional team with great attention to detail. They truly understand quality landscaping.",
        project: "Pergola & Garden Design",
    },
    {
        id: 5,
        name: "Meera Nair",
        title: "Apartment Resident",
        location: "Malleshwaram, Bangalore",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote:
            "They transformed our small balcony into a mini garden paradise. The team was patient, listened to our needs, and delivered beyond expectations.",
        project: "Balcony Garden",
    },
    {
        id: 6,
        name: "Arun Patel",
        title: "Restaurant Owner",
        location: "JP Nagar, Bangalore",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote:
            "My Garden Space designed our restaurant's outdoor seating area. The vertical garden and lighting created the perfect ambiance. Customers love dining here now!",
        project: "Commercial Landscaping",
    },
];

export default function TestimonialsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-b from-[var(--primary-50)] to-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium mb-8">
                            <Quote className="w-4 h-4" />
                            Client Stories
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--text-primary)] leading-tight">
                            What Our
                            <br />
                            <span className="text-[var(--primary-600)]">Clients Say</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                            Don&apos;t just take our word for it. Here&apos;s what our
                            satisfied clients have to say about their experience with My
                            Garden Space.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-[var(--neutral-200)]"
                            >
                                <Quote className="w-10 h-10 text-[var(--primary-200)] mb-4" />
                                <p className="text-[var(--text-secondary)] mb-6 italic leading-relaxed">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-[var(--text-primary)]">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-[var(--text-muted)]">
                                            {testimonial.title} • {testimonial.location}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <StarRating rating={testimonial.rating} size="sm" />
                                            <span className="text-xs text-[var(--primary-600)] bg-[var(--primary-50)] px-2 py-0.5 rounded-full">
                                                {testimonial.project}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[var(--primary-900)]">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                        Ready to Join Our Happy Clients?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Let us transform your outdoor space and create your own success
                        story.
                    </p>
                    <Link
                        href="/contact"
                        className="btn btn-white btn-lg inline-flex group"
                    >
                        Get Started Today
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Visual Spacer */}
            <div style={{ height: "100px", backgroundColor: "var(--bg-cream)" }} />
        </>
    );
}
