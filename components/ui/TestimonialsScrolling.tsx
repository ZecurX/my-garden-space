"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// --- Types ---
interface Testimonial {
    id: number;
    text: string;
    image: string;
    name: string;
    role: string;
    location: string;
    project: string;
}

// --- Testimonials Data ---
const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "My Garden Space completely transformed our backyard. The team was professional, creative, and completed the project on time. Our garden is now the highlight of our home and we couldn't be happier with the results!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Priya Sharma",
        role: "Homeowner",
        location: "Whitefield, Bangalore",
        project: "Backyard Landscaping",
    },
    {
        id: 2,
        text: "We rented plants for our office and the difference was amazing. The team handled everything from delivery to maintenance. The green environment has boosted our team's productivity and morale significantly.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rajesh Kumar",
        role: "Office Manager",
        location: "Koramangala, Bangalore",
        project: "Office Plant Rental",
    },
    {
        id: 3,
        text: "For our wedding venue, My Garden Space created the most beautiful floral arrangements with rented plants. Guests couldn't stop complimenting the decor! It was truly magical and exceeded our expectations.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Anita Desai",
        role: "Event Planner",
        location: "Indiranagar, Bangalore",
        project: "Wedding Plant Decor",
    },
    {
        id: 4,
        text: "The pergola and garden design they did for our villa is stunning. Professional team with great attention to detail. They truly understand quality landscaping and delivered beyond our expectations.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Vikram Mehta",
        role: "Villa Owner",
        location: "HSR Layout, Bangalore",
        project: "Pergola & Garden Design",
    },
    {
        id: 5,
        text: "They transformed our small balcony into a mini garden paradise. The team was patient, listened to our needs, and delivered beyond expectations. Now it's our favorite spot in the entire apartment!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Meera Nair",
        role: "Apartment Resident",
        location: "Malleshwaram, Bangalore",
        project: "Balcony Garden",
    },
];

export default function TestimonialsSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    }, []);

    // Auto-play every 5 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-32 lg:py-40 bg-[var(--bg-cream)]">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-[var(--primary-700)] bg-[var(--primary-100)] mb-8">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-8">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                        Hear from homeowners and businesses who have transformed their outdoor spaces with us.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div
                    className="max-w-4xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Card */}
                    <div className="bg-white rounded-3xl shadow-xl py-20 md:py-24 px-12 md:px-20 lg:px-32">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-12">
                            <div className="w-16 h-16 rounded-full bg-[var(--primary-600)] flex items-center justify-center shadow-lg">
                                <Quote className="w-7 h-7 text-white" />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center"
                            >
                                {/* Testimonial Text */}
                                <p className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed mb-16">
                                    &ldquo;{currentTestimonial.text}&rdquo;
                                </p>

                                {/* Divider */}
                                <div className="w-20 h-0.5 bg-[var(--primary-200)] mx-auto mb-14" />

                                {/* Author */}
                                <div className="flex flex-col items-center gap-8">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-[var(--primary-100)]">
                                        <Image
                                            src={currentTestimonial.image}
                                            alt={currentTestimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                                            {currentTestimonial.name}
                                        </h4>
                                        <p className="text-[var(--text-muted)] mb-5">
                                            {currentTestimonial.role} • {currentTestimonial.location}
                                        </p>
                                        <span className="inline-block px-5 py-2 bg-[var(--primary-50)] text-[var(--primary-700)] text-sm font-medium rounded-full">
                                            {currentTestimonial.project}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-10 mt-16">
                        {/* Previous Button */}
                        <button
                            onClick={prevSlide}
                            className="w-14 h-14 rounded-full bg-white shadow-lg border border-[var(--neutral-200)] flex items-center justify-center hover:bg-[var(--neutral-50)] hover:border-[var(--primary-300)] transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-[var(--text-primary)]" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-3 rounded-full transition-all duration-500 ${index === currentIndex
                                        ? "bg-[var(--primary-600)] w-10"
                                        : "bg-[var(--neutral-300)] hover:bg-[var(--neutral-400)] w-3"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="w-14 h-14 rounded-full bg-white shadow-lg border border-[var(--neutral-200)] flex items-center justify-center hover:bg-[var(--neutral-50)] hover:border-[var(--primary-300)] transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-[var(--text-primary)]" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
