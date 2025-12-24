"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Calendar, FileText, Flower2 } from "lucide-react";

export default function Hero() {
    const scrollToContent = () => {
        const element = document.getElementById("services-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                {/* Animated Floating Elements */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-[var(--primary-500)]/20 rounded-full blur-2xl"
                    animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 right-20 w-32 h-32 bg-[var(--primary-400)]/20 rounded-full blur-3xl"
                    animate={{ y: [0, -30, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-16 h-16 bg-[var(--accent-500)]/20 rounded-full blur-2xl"
                    animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center py-32">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
                        <Flower2 className="w-4 h-4 text-[var(--primary-400)]" />
                        Professional Gardening & Landscaping Services
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Transform Your
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-400)] to-[var(--primary-300)]">
                        Outdoor Space
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
                >
                    Create stunning gardens and landscapes that bring joy and serenity to
                    your home. From design to maintenance, we bring your green vision to
                    life.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="btn btn-primary btn-lg group"
                    >
                        <Calendar className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        Book Service
                    </Link>
                    <Link
                        href="/contact"
                        className="btn btn-white btn-lg group"
                    >
                        <FileText className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        Get Quote
                    </Link>
                    <Link
                        href="/plant-rental"
                        className="btn btn-outline btn-lg !border-white !text-white hover:!bg-white/10 group"
                    >
                        <Flower2 className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        Rent Plants
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                >
                    {[
                        { value: "500+", label: "Projects Completed" },
                        { value: "10+", label: "Years Experience" },
                        { value: "200+", label: "Happy Clients" },
                        { value: "50+", label: "Expert Gardeners" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/60">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToContent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll to content"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.button>
        </section>
    );
}
