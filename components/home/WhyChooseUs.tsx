"use client";

import { motion } from "framer-motion";
import { Award, Users, Leaf, HeadphonesIcon, Shield, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto">
                <SectionHeading
                    label="Why My Garden Space"
                    title="Why Choose Us"
                    subtitle="We're committed to transforming your outdoor spaces with expertise, quality, and care."
                />

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
                                <h3 className="text-xl font-display font-medium mb-3 text-[var(--text-primary)]">
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
        </section>
    );
}
