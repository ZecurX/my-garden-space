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
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
    {
        icon: Leaf,
        title: "Gardening & Maintenance",
        description: "Regular care to keep your garden flourishing all year round.",
        slug: "gardening-maintenance",
        color: "from-green-500 to-emerald-600",
        bgColor: "bg-green-50",
    },
    {
        icon: TreePine,
        title: "Landscaping & Design",
        description: "Transform your outdoor space with professional landscape design.",
        slug: "landscaping",
        color: "from-teal-500 to-cyan-600",
        bgColor: "bg-teal-50",
    },
    {
        icon: Flower2,
        title: "Lawn Development",
        description: "Natural lawns and artificial grass solutions for every need.",
        slug: "lawn-ground",
        color: "from-lime-500 to-green-600",
        bgColor: "bg-lime-50",
    },
    {
        icon: Fence,
        title: "Pergola & Structures",
        description: "Beautiful pergolas, gazebos, and decorative installations.",
        slug: "structural-decorative",
        color: "from-amber-500 to-orange-600",
        bgColor: "bg-amber-50",
    },
    {
        icon: Waves,
        title: "Water Features",
        description: "Elegant ponds, fountains, and water body installations.",
        slug: "water-features",
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: FlowerIcon,
        title: "Vertical Gardens",
        description: "Space-saving vertical and artificial wall garden solutions.",
        slug: "vertical-green",
        color: "from-emerald-500 to-green-600",
        bgColor: "bg-emerald-50",
    },
    {
        icon: Droplets,
        title: "Pots & Planters",
        description: "Premium FRP pots and decorative planters for any space.",
        slug: "pots-accessories",
        color: "from-rose-500 to-pink-600",
        bgColor: "bg-rose-50",
    },
    {
        icon: Wrench,
        title: "Smart Irrigation",
        description: "Drip and sprinkler systems for water-efficient gardens.",
        slug: "irrigation-smart",
        color: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-50",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function ServiceHighlights() {
    return (
        <section
            id="services-section"
            className="section-padding bg-[var(--bg-secondary)]"
        >
            <div className="container mx-auto">
                <SectionHeading
                    label="What We Offer"
                    title="Our Service Expertise"
                    subtitle="Comprehensive gardening and landscaping solutions tailored to transform your outdoor space into a green paradise."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div key={service.slug} variants={itemVariants}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="card group block p-6 h-full hover:border-[var(--primary-200)]"
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                                    >
                                        <Icon
                                            className={`w-7 h-7 bg-gradient-to-r ${service.color} [background-clip:text] [-webkit-background-clip:text] text-transparent`}
                                            style={{
                                                stroke: `url(#grad-${index})`,
                                            }}
                                        />
                                        <svg width="0" height="0">
                                            <defs>
                                                <linearGradient
                                                    id={`grad-${index}`}
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="100%"
                                                >
                                                    <stop offset="0%" stopColor="#22c55e" />
                                                    <stop offset="100%" stopColor="#16a34a" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)] group-hover:text-[var(--primary-600)] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                                        {service.description}
                                    </p>

                                    {/* Link */}
                                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary-600)] group-hover:gap-2 transition-all">
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link href="/services" className="btn btn-outline btn-lg">
                        View All Services
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
