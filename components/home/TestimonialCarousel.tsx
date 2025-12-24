"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        title: "Homeowner",
        location: "Whitefield, Bangalore",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote: "My Garden Space completely transformed our backyard. The team was professional, creative, and completed the project on time. Our garden is now the highlight of our home!",
        project: "Backyard Landscaping",
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        title: "Office Manager",
        location: "Koramangala, Bangalore",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote: "We rented plants for our office and the difference was amazing. The team handled everything from delivery to maintenance. Highly recommend their rental service!",
        project: "Office Plant Rental",
    },
    {
        id: 3,
        name: "Anita Desai",
        title: "Event Planner",
        location: "Indiranagar, Bangalore",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote: "For our wedding venue, My Garden Space created the most beautiful floral arrangements with rented plants. Guests couldn't stop complimenting the decor!",
        project: "Wedding Plant Decor",
    },
    {
        id: 4,
        name: "Vikram Mehta",
        title: "Villa Owner",
        location: "HSR Layout, Bangalore",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        rating: 5,
        quote: "The pergola and garden design they did for our villa is stunning. Professional team with great attention to detail. They truly understand quality landscaping.",
        project: "Pergola & Garden Design",
    },
];

export default function TestimonialCarousel() {
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

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section className="section-padding bg-[var(--bg-secondary)]">
            <div className="container mx-auto">
                <SectionHeading
                    label="Testimonials"
                    title="What Our Clients Say"
                    subtitle="Hear from homeowners and businesses who have transformed their spaces with us."
                />

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Carousel */}
                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-8 opacity-10">
                                        <Quote className="w-20 h-20 text-[var(--primary-600)]" />
                                    </div>

                                    {/* Client Image */}
                                    <div className="flex-shrink-0">
                                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-400)] to-[var(--primary-600)] rounded-full animate-pulse-glow" />
                                            <Image
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                fill
                                                className="object-cover rounded-full border-4 border-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <StarRating rating={testimonials[currentIndex].rating} size="md" />

                                        <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed italic">
                                            &ldquo;{testimonials[currentIndex].quote}&rdquo;
                                        </p>

                                        <div className="mt-6">
                                            <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-sm text-[var(--text-muted)]">
                                                {testimonials[currentIndex].title} •{" "}
                                                {testimonials[currentIndex].location}
                                            </p>
                                            <span className="inline-block mt-2 px-3 py-1 bg-[var(--primary-50)] text-[var(--primary-700)] text-xs font-medium rounded-full">
                                                {testimonials[currentIndex].project}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--primary-50)] transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 text-[var(--text-primary)]" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                            ? "bg-[var(--primary-600)] w-8"
                                            : "bg-[var(--neutral-300)] hover:bg-[var(--neutral-400)]"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--primary-50)] transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 text-[var(--text-primary)]" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
