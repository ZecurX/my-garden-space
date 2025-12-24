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
    },
    {
        icon: TreePine,
        title: "Landscaping & Design",
        description: "Transform your outdoor space with professional landscape design.",
        slug: "landscaping",
    },
    {
        icon: Flower2,
        title: "Lawn Development",
        description: "Natural lawns and artificial grass solutions for every need.",
        slug: "lawn-ground",
    },
    {
        icon: Fence,
        title: "Pergola & Structures",
        description: "Beautiful pergolas, gazebos, and decorative installations.",
        slug: "structural-decorative",
    },
    {
        icon: Waves,
        title: "Water Features",
        description: "Elegant ponds, fountains, and water body installations.",
        slug: "water-features",
    },
    {
        icon: FlowerIcon,
        title: "Vertical Gardens",
        description: "Space-saving vertical and artificial wall garden solutions.",
        slug: "vertical-green",
    },
    {
        icon: Droplets,
        title: "Pots & Planters",
        description: "Premium FRP pots and decorative planters for any space.",
        slug: "pots-accessories",
    },
    {
        icon: Wrench,
        title: "Smart Irrigation",
        description: "Drip and sprinkler systems for water-efficient gardens.",
        slug: "irrigation-smart",
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
                            fontWeight: 300,
                            color: "var(--text-primary)",
                            marginBottom: "32px",
                            lineHeight: 1.2
                        }}
                        className="font-display"
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
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "32px"
                }}>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    href={`/services/${service.slug}`}
                                    style={{
                                        display: "block",
                                        padding: "40px",
                                        minHeight: "280px",
                                        backgroundColor: "white",
                                        borderRadius: "24px",
                                        border: "1px solid var(--neutral-100)",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--primary-200)";
                                        e.currentTarget.style.boxShadow = "0 20px 60px -15px rgba(0,0,0,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "var(--neutral-100)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {/* Icon */}
                                    <div style={{
                                        width: "72px",
                                        height: "72px",
                                        borderRadius: "20px",
                                        backgroundColor: "var(--primary-50)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "28px"
                                    }}>
                                        <Icon style={{
                                            width: "32px",
                                            height: "32px",
                                            color: "var(--primary-600)"
                                        }} />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: 500,
                                            color: "var(--text-primary)",
                                            marginBottom: "16px"
                                        }}
                                        className="font-display"
                                    >
                                        {service.title}
                                    </h3>
                                    <p style={{
                                        fontSize: "16px",
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6
                                    }}>
                                        {service.description}
                                    </p>
                                </Link>
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
