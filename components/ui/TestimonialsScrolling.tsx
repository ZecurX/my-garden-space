"use client";

import Carousel from "./Carousel";
import { Quote } from "lucide-react";
import Image from "next/image";

// --- Types ---
interface Testimonial {
    id: number;
    text: string;
    image: string; // Avatar (Internal data kept, but not rendered)
    projectImage: string; // Feature Image
    name: string;
    role: string;
    location: string;
    project: string;
}

// --- Testimonials Data ---
const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "My Garden Space completely transformed our backyard. The team was professional, creative, and completed the project on time. Our garden is now the highlight of our home!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        projectImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600&h=400", // Backyard garden
        name: "Priya Sharma",
        role: "Homeowner",
        location: "Whitefield, Bangalore",
        project: "Backyard Landscaping",
    },
    {
        id: 2,
        text: "We rented plants for our office and the difference was amazing. The green environment has boosted our team's productivity and morale significantly.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        projectImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400", // Office plants
        name: "Rajesh Kumar",
        role: "Office Manager",
        location: "Koramangala, Bangalore",
        project: "Office Plant Rental",
    },
    {
        id: 3,
        text: "For our wedding venue, My Garden Space created the most beautiful floral arrangements. It was truly magical and exceeded our expectations.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        projectImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600&h=400", // Wedding decor
        name: "Anita Desai",
        role: "Event Planner",
        location: "Indiranagar, Bangalore",
        project: "Wedding Plant Decor",
    },
    {
        id: 4,
        text: "The pergola and garden design they did for our villa is stunning. They truly understand quality landscaping and delivered beyond our expectations.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        projectImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400", // Modern villa garden
        name: "Vikram Mehta",
        role: "Villa Owner",
        location: "HSR Layout, Bangalore",
        project: "Pergola & Garden Design",
    },
    {
        id: 5,
        text: "They transformed our small balcony into a mini garden paradise. The team was patient and listened to our needs. Now it's our favorite spot!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        projectImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600&h=400", // Balcony garden
        name: "Meera Nair",
        role: "Apartment Resident",
        location: "Malleshwaram, Bangalore",
        project: "Balcony Garden",
    },
];

export default function TestimonialsSlideshow() {
    return (
        <section id="testimonials" style={{ padding: "120px 0", backgroundColor: "var(--bg-cream)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

                {/* Section Header */}
                <div style={{ marginBottom: "60px", textAlign: "center" }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--primary-600)",
                        marginBottom: "24px"
                    }}>
                        Testimonials
                    </span>
                    <h2 style={{
                        fontSize: "clamp(32px, 4vw, 48px)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                    }}>
                        What Our Clients Say About Us
                    </h2>
                </div>

                <div style={{ height: '600px', position: 'relative', width: '100%' }}>
                    <Carousel
                        baseWidth={380}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={false}
                        round={false}
                    >
                        {testimonials.map((t) => (
                            <div key={t.id} style={{
                                background: "white",
                                borderRadius: "24px",
                                height: "520px",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                border: "1px solid var(--neutral-100)",
                                textAlign: "center"
                            }}>
                                {/* Project Image Header */}
                                <div style={{ position: "relative", width: "100%", height: "220px", flexShrink: 0 }}>
                                    <Image
                                        src={t.projectImage}
                                        alt={t.project}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "60px",
                                        background: "linear-gradient(to top, rgba(0,0,0,0.05), transparent)"
                                    }} />
                                </div>

                                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Quote
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            color: "var(--primary-200)",
                                            marginBottom: "12px"
                                        }}
                                    />
                                    <p style={{
                                        fontSize: "15px",
                                        lineHeight: 1.6,
                                        color: "var(--text-secondary)",
                                        marginBottom: "auto",
                                        fontStyle: "italic",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 4,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    }}>
                                        &ldquo;{t.text}&rdquo;
                                    </p>

                                    <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "12px", width: "100%", justifyContent: "center", borderTop: "1px solid var(--neutral-100)", paddingTop: "16px" }}>
                                        <div style={{ textAlign: "center" }}>
                                            <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>{t.name}</div>
                                            <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
