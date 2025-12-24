import { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore our comprehensive gardening and landscaping services including garden maintenance, landscaping, plant rental, water features, and more.",
};

const categories = [
    {
        icon: Leaf,
        title: "Gardening & Maintenance",
        slug: "gardening-maintenance",
        description:
            "Regular care and maintenance to keep your garden flourishing all year round.",
        services: [
            "Garden maintenance (weekly/monthly)",
            "Lawn mowing & care",
            "Pruning & trimming",
            "Weed control",
            "Fertilization & soil treatment",
            "Seasonal plant care",
        ],
        image:
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: TreePine,
        title: "Landscaping & Outdoor Development",
        slug: "landscaping",
        description:
            "Transform your outdoor space with professional landscape design and execution.",
        services: [
            "Garden design & planning",
            "Landscape execution",
            "Front yard design",
            "Backyard design",
            "Garden renovation & remodeling",
        ],
        image:
            "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Flower2,
        title: "Lawn & Ground Solutions",
        slug: "lawn-ground",
        description:
            "Natural lawns and artificial grass solutions for beautiful ground cover.",
        services: [
            "Natural lawn development",
            "Artificial grass installation",
            "Stone laying & pathway development",
            "Soil preparation & leveling",
        ],
        image:
            "https://images.unsplash.com/photo-1558635924-f34f3d1f8ea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Fence,
        title: "Structural & Decorative Elements",
        slug: "structural-decorative",
        description:
            "Beautiful structural installations that enhance your outdoor living space.",
        services: [
            "Picket fence installation",
            "Pergola installation",
            "Gazebo installation",
            "Lattice structures",
            "Cladding (decorative & protective)",
            "WPC decking",
        ],
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Waves,
        title: "Water Features & Luxury Add-ons",
        slug: "water-features",
        description:
            "Elegant water features that add tranquility and beauty to your garden.",
        services: [
            "Pond design & construction",
            "Fountain installation",
            "Swimming pool landscaping support",
            "Water body features & accents",
        ],
        image:
            "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: FlowerIcon,
        title: "Vertical & Artificial Green Solutions",
        slug: "vertical-green",
        description:
            "Space-saving vertical gardens and artificial green wall installations.",
        services: [
            "Vertical garden installation",
            "Artificial wall garden",
            "Balcony & terrace garden setup",
        ],
        image:
            "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Droplets,
        title: "Pots & Accessories",
        slug: "pots-accessories",
        description:
            "Premium FRP pots and decorative planters for indoor and outdoor spaces.",
        services: [
            "FRP pots supply & installation",
            "Decorative planters",
            "Custom pot solutions",
        ],
        image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Wrench,
        title: "Irrigation & Smart Gardening",
        slug: "irrigation-smart",
        description:
            "Water-efficient irrigation systems for sustainable gardening.",
        services: [
            "Drip irrigation systems",
            "Sprinkler systems",
            "Water-efficient garden solutions",
        ],
        image:
            "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-[var(--primary-50)] to-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium mb-6">
                            <Leaf className="w-4 h-4" />
                            Our Services
                        </span>
                        <h1 className="font-serif mb-6">
                            Comprehensive Gardening &
                            <br />
                            <span className="text-[var(--primary-600)]">
                                Landscaping Solutions
                            </span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)]">
                            From garden design to maintenance, we offer a complete range of
                            services to transform and nurture your outdoor spaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid gap-8">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const isReversed = index % 2 === 1;
                            return (
                                <div
                                    key={category.slug}
                                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Image */}
                                    <div
                                        className={`relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden ${isReversed ? "lg:order-2" : ""
                                            }`}
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url('${category.image}')` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className={isReversed ? "lg:order-1" : ""}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-[var(--primary-100)] flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-[var(--primary-600)]" />
                                            </div>
                                            <h2 className="text-2xl font-serif font-semibold text-[var(--text-primary)]">
                                                {category.title}
                                            </h2>
                                        </div>

                                        <p className="text-[var(--text-secondary)] mb-6">
                                            {category.description}
                                        </p>

                                        <ul className="space-y-2 mb-6">
                                            {category.services.map((service, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2 text-[var(--text-primary)]"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)]" />
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/services/${category.slug}`}
                                            className="btn btn-primary inline-flex group"
                                        >
                                            Explore Services
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-[var(--primary-900)]">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        Not Sure What You Need?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Our experts can help you assess your space and recommend the best
                        services for your needs.
                    </p>
                    <Link
                        href="/contact"
                        className="btn btn-white btn-lg inline-flex group"
                    >
                        Get Free Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </>
    );
}
