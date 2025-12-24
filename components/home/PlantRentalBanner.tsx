"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flower2, Calendar, Truck, Sparkles, ArrowRight } from "lucide-react";

const benefits = [
    {
        icon: Flower2,
        title: "Wide Variety",
        description: "Indoor, outdoor, and decorative plants for every occasion.",
    },
    {
        icon: Calendar,
        title: "Flexible Durations",
        description: "Daily, weekly, or monthly rental options available.",
    },
    {
        icon: Truck,
        title: "Delivery & Setup",
        description: "Free delivery, professional setup, and pickup included.",
    },
    {
        icon: Sparkles,
        title: "Maintenance Included",
        description: "We take care of watering and plant health during rental.",
    },
];

const useCases = [
    "Corporate Events",
    "Weddings",
    "Office Spaces",
    "Exhibitions",
    "Home Décor",
    "Showrooms",
];

export default function PlantRentalBanner() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-800)] via-[var(--primary-900)] to-[#0c3d22]" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
                <div className="absolute bottom-10 right-20 w-60 h-60 border border-white rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rounded-full" />
            </div>

            <div className="relative container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                            <Flower2 className="w-4 h-4 text-[var(--primary-300)]" />
                            Special Service
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            Rent Plants for
                            <br />
                            <span className="text-[var(--primary-300)]">Any Occasion</span>
                        </h2>

                        <p className="text-lg text-white/70 mb-8 max-w-xl">
                            Add natural beauty to your events, offices, and homes with our
                            premium plant rental service. Transform any space instantly
                            without the long-term commitment.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5 text-[var(--primary-300)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white mb-1">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-sm text-white/60">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Use Cases */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {useCases.map((useCase, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm"
                                >
                                    {useCase}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/plant-rental"
                            className="btn btn-white btn-lg inline-flex group"
                        >
                            Explore Plant Rental
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main Image */}
                            <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Indoor plants display"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Side Images */}
                            <div className="relative h-40 rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Event plant decoration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-40 rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Office plant setup"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                        >
                            <div className="text-3xl font-bold text-[var(--primary-600)]">
                                ₹99
                            </div>
                            <div className="text-sm text-[var(--text-secondary)]">
                                Starting<br />per day
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
