"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-900)]/90 to-[var(--primary-800)]/80" />

            <div className="relative container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                            Ready to Create Your
                            <br />
                            <span className="text-[var(--primary-300)]">Dream Garden?</span>
                        </h2>
                        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                            Let&apos;s discuss your project and bring your outdoor vision to
                            life. Get a free consultation and quote today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn btn-white btn-lg group w-full sm:w-auto"
                            >
                                Get Free Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+919880220257"
                                className="btn btn-lg w-full sm:w-auto !border-white !text-white hover:!bg-white/10 bg-transparent border-2"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
