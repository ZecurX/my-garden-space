"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Leaf,
    TreePine,
    Flower2,
    Fence,
    Waves,
    FlowerIcon,
    Droplets,
    Wrench,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Leaf,
        title: "Gardening & Maintenance",
        description: "Regular care to keep your garden flourishing all year round.",
        slug: "gardening-maintenance",
        image: "/services/maintenance.png"
    },
    {
        icon: TreePine,
        title: "Landscaping & Design",
        description: "Transform your outdoor space with professional landscape design.",
        slug: "landscaping",
        image: "/services/landscaping.png"
    },
    {
        icon: Flower2,
        title: "Lawn Development",
        description: "Natural lawns and artificial grass solutions for every need.",
        slug: "lawn-ground",
        image: "/services/lawn.png"
    },
    {
        icon: Fence,
        title: "Pergola & Structures",
        description: "Beautiful pergolas, gazebos, and decorative installations.",
        slug: "structural-decorative",
        image: "/services/pergola.png"
    },
    {
        icon: Waves,
        title: "Water Features",
        description: "Elegant ponds, fountains, and water body installations.",
        slug: "water-features",
        image: "/services/water.png"
    },
    {
        icon: FlowerIcon,
        title: "Vertical Gardens",
        description: "Space-saving vertical and artificial wall garden solutions.",
        slug: "vertical-green",
        image: "/services/vertical.png"
    },
    {
        icon: Droplets,
        title: "Pots & Planters",
        description: "Premium FRP pots and decorative planters for any space.",
        slug: "pots-accessories",
        image: "/services/pots.png"
    },
    {
        icon: Wrench,
        title: "Smart Irrigation",
        description: "Drip and sprinkler systems for water-efficient gardens.",
        slug: "irrigation-smart",
        image: "/services/irrigation.png"
    },
];

export default function ServiceHighlights() {
    return (
        <section
            id="services-section"
            style={{
                padding: "140px 0",
                backgroundColor: "var(--bg-cream)"
            }}
        >
            <div style={{
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 40px"
            }}>
                {/* Section Header */}
                <div style={{
                    textAlign: "center",
                    maxWidth: "800px",
                    margin: "0 auto 80px"
                }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--primary-600)",
                        marginBottom: "24px"
                    }}>
                        What We Offer
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "32px",
                            lineHeight: 1.2
                        }}
                    >
                        Our Service Expertise
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7
                    }}>
                        Comprehensive gardening and landscaping solutions tailored to transform your
                        outdoor space into a green paradise.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{
                                    delay: (index % 4) * 0.1,
                                    duration: 0.8,
                                    ease: [0.21, 0.47, 0.32, 0.98]
                                }}
                                className="group relative h-[380px] sm:h-[420px] overflow-hidden rounded-[2.5rem] bg-neutral-100 cursor-pointer shadow-sm hover:shadow-xl transition-[shadow,border-color] duration-500 will-change-transform"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                    />
                                    {/* Gradients */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                                </div>

                                <Link
                                    href={`/services#${service.slug}`}
                                    className="relative z-10 h-full w-full p-8 sm:p-10 flex flex-col items-center justify-end text-center no-underline"
                                >
                                    {/* Glass Badge for Icon */}
                                    <div className="mb-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary-600 group-hover:border-primary-500 transition-colors duration-500">
                                        <Icon size={28} />
                                    </div>

                                    {/* Content */}
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.21,0.47,0.32,0.98)]">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 max-w-[280px]">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center justify-center text-primary-400 font-semibold text-sm sm:text-base transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:text-primary-300">
                                            <span>Learn more</span>
                                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Subtle Border Glow on Hover */}
                                <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/20 rounded-[2.5rem] transition-colors duration-1000" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        textAlign: "center",
                        marginTop: "80px"
                    }}
                >
                    <Link
                        href="/services"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "22px 48px",
                            border: "2px solid var(--primary-700)",
                            color: "var(--primary-700)",
                            borderRadius: "9999px",
                            fontWeight: 600,
                            fontSize: "16px",
                            textDecoration: "none",
                            transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--primary-700)";
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--primary-700)";
                        }}
                    >
                        View All Services
                        <ArrowRight style={{ width: "20px", height: "20px" }} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
