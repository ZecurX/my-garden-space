"use client";

import { motion } from "framer-motion";
import { Award, Users, Leaf, HeadphonesIcon, Shield, Clock, Sprout, Flower2 } from "lucide-react";

const highlights = [
    { label: "Happy Customers", value: "500+", icon: Users },
    { label: "Maintenance Visits", value: "4000+", icon: Sprout },
    { label: "Setups Completed", value: "600+", icon: Flower2 },
];

const reasons = [
    {
        icon: Award,
        title: "10+ Years Experience",
        description:
            "Over a decade of expertise in creating beautiful, sustainable gardens and landscapes.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description:
            "Skilled gardeners and landscape designers who bring your vision to life.",
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Practices",
        description:
            "Sustainable gardening methods that are good for your garden and the planet.",
    },
    {
        icon: Shield,
        title: "Quality Guaranteed",
        description:
            "Premium materials and plants with satisfaction guarantee on all our work.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description:
            "We respect your time with punctual project completion and reliable service.",
    },
    {
        icon: HeadphonesIcon,
        title: "Ongoing Support",
        description:
            "Post-project maintenance guidance and responsive customer support.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
};

export default function WhyChooseUs() {
    // Client logos - actual company logo images
    const clientLogos = [
        { name: "Axcend", src: "/0006439-axcend-automation-software-solutions-pvt-ltd-280.png" },
        { name: "Planview", src: "/Planview-Logo-Pngsource-FC7DV9RD.png" },
        { name: "Build A Home", src: "/buildahome-logo-blue.png" },
        { name: "Hyundai", src: "/hyundai-black-logo-png-7017516947139912sj1azc7ua.png" },
        { name: "Kia", src: "/pngimg.com - kia_PNG46.png" },
        { name: "Ubona", src: "/ubona-logo.png" },
        { name: "Nium", src: "/Nium_Logo.png" },
        { name: "Client", src: "/Untitled-design-2.png" },
        { name: "Partner", src: "/download.png" },
    ];

    return (
        <section style={{ backgroundColor: "white" }}>
            {/* Client Logos Marquee */}
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px 0 40px",
                    overflow: "hidden",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <span
                        style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--text-secondary)",
                        }}
                    >
                        Trusted By Leading Brands
                    </span>
                </div>

                {/* Marquee Container */}
                <div
                    style={{
                        display: "flex",
                        position: "relative",
                    }}
                >
                    {/* First set of logos */}
                    <motion.div
                        animate={{
                            x: [0, -280 * clientLogos.length],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                        style={{
                            display: "flex",
                            gap: "30px",
                            paddingRight: "30px",
                        }}
                    >
                        {/* Duplicate logos for seamless loop */}
                        {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minWidth: "200px",
                                    height: "80px",
                                    padding: "15px 30px",
                                    backgroundColor: "white",
                                    borderRadius: "12px",
                                }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    style={{
                                        maxWidth: "160px",
                                        maxHeight: "50px",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Stats Highlights Banner */}
            <div
                style={{
                    backgroundColor: "white",
                    padding: "80px 20px",
                }}
            >
                {/* Stats Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "40px",
                    }}
                    className="!grid-cols-1 sm:!grid-cols-3"
                >
                    {highlights.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "64px",
                                        height: "64px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#16a34a",
                                        marginBottom: "16px",
                                    }}
                                >
                                    <Icon size={48} strokeWidth={1.5} />
                                </div>
                                <div
                                    style={{
                                        fontSize: "clamp(32px, 5vw, 48px)",
                                        fontWeight: 700,
                                        color: "var(--text-primary)",
                                        lineHeight: 1,
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: "13px",
                                        color: "var(--text-secondary)",
                                        marginTop: "12px",
                                        fontWeight: 500,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Why Choose Us Features */}
            <div
                style={{
                    padding: "100px 0",
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
                            Why My Garden Space
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
                            Why Choose Us
                        </h2>
                        <p style={{
                            fontSize: "18px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                            maxWidth: "600px",
                            margin: "0 auto"
                        }}>
                            We&apos;re committed to transforming your outdoor spaces with expertise, quality,
                            and care.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                    >
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group text-center"
                                >
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--neutral-50)] group-hover:bg-[var(--primary-50)] transition-colors duration-300 mb-6">
                                        <Icon className="w-7 h-7 text-[var(--primary-600)]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
                                        {reason.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-sm mx-auto">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
