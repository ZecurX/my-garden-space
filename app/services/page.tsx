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
            <section style={{
                padding: "180px 0 100px",
                backgroundColor: "var(--bg-cream)"
            }}>
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 40px"
                }}>
                    <div style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        textAlign: "center"
                    }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--primary-600)",
                            marginBottom: "32px"
                        }}>
                            Our Services
                        </span>
                        <h1
                            style={{
                                fontSize: "clamp(40px, 6vw, 64px)",
                                fontWeight: 300,
                                color: "var(--text-primary)",
                                marginBottom: "40px",
                                lineHeight: 1.1
                            }}
                            className="font-display"
                        >
                            Comprehensive Gardening &
                            <br />
                            <span style={{
                                color: "var(--primary-600)",
                                fontStyle: "italic"
                            }}>
                                Landscaping Solutions
                            </span>
                        </h1>
                        <p style={{
                            fontSize: "18px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                            maxWidth: "650px",
                            margin: "0 auto"
                        }}>
                            From garden design to maintenance, we offer a complete range of
                            services to transform and nurture your outdoor spaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{
                padding: "120px 0",
                backgroundColor: "white"
            }}>
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 40px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "120px"
                    }}>
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const isReversed = index % 2 === 1;
                            return (
                                <div
                                    key={category.slug}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr",
                                        gap: "64px",
                                        alignItems: "center"
                                    }}
                                    className="lg:!grid-cols-2"
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            position: "relative",
                                            height: "450px",
                                            borderRadius: "32px",
                                            overflow: "hidden",
                                            order: isReversed ? 1 : 0
                                        }}
                                        className={isReversed ? "lg:!order-2" : ""}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                backgroundImage: `url('${category.image}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            }}
                                        />
                                        <div style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)"
                                        }} />
                                    </div>

                                    {/* Content */}
                                    <div style={{ order: isReversed ? 0 : 1 }} className={isReversed ? "lg:!order-1" : ""}>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "24px",
                                            marginBottom: "32px"
                                        }}>
                                            <div style={{
                                                width: "72px",
                                                height: "72px",
                                                borderRadius: "20px",
                                                backgroundColor: "var(--primary-50)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}>
                                                <Icon style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    color: "var(--primary-600)"
                                                }} />
                                            </div>
                                            <h2
                                                style={{
                                                    fontSize: "clamp(28px, 4vw, 40px)",
                                                    fontWeight: 500,
                                                    color: "var(--text-primary)"
                                                }}
                                                className="font-display"
                                            >
                                                {category.title}
                                            </h2>
                                        </div>

                                        <p style={{
                                            fontSize: "18px",
                                            color: "var(--text-secondary)",
                                            marginBottom: "40px",
                                            lineHeight: 1.7
                                        }}>
                                            {category.description}
                                        </p>

                                        <ul style={{
                                            listStyle: "none",
                                            padding: 0,
                                            margin: "0 0 48px 0"
                                        }}>
                                            {category.services.map((service, idx) => (
                                                <li
                                                    key={idx}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "16px",
                                                        color: "var(--text-primary)",
                                                        marginBottom: "16px"
                                                    }}
                                                >
                                                    <span style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "var(--primary-500)"
                                                    }} />
                                                    <span style={{ fontSize: "16px" }}>{service}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/services/${category.slug}`}
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "12px",
                                                padding: "18px 36px",
                                                backgroundColor: "var(--primary-700)",
                                                color: "white",
                                                borderRadius: "9999px",
                                                fontWeight: 600,
                                                fontSize: "15px",
                                                textDecoration: "none",
                                                transition: "background 0.2s ease"
                                            }}
                                        >
                                            Explore Services
                                            <ArrowRight style={{ width: "20px", height: "20px" }} />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: "120px 0",
                backgroundColor: "var(--primary-950)"
            }}>
                <div style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "0 40px",
                    textAlign: "center"
                }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "var(--primary-400)",
                        marginBottom: "32px"
                    }}>
                        Need Help?
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 300,
                            color: "white",
                            marginBottom: "32px",
                            lineHeight: 1.2
                        }}
                        className="font-display"
                    >
                        Not Sure What You Need?
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        color: "rgba(255,255,255,0.75)",
                        maxWidth: "600px",
                        margin: "0 auto 48px",
                        lineHeight: 1.7
                    }}>
                        Our experts can help you assess your space and recommend the best
                        services for your needs.
                    </p>
                    <Link
                        href="/contact"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "22px 44px",
                            backgroundColor: "white",
                            color: "var(--text-primary)",
                            borderRadius: "9999px",
                            fontWeight: 600,
                            fontSize: "16px",
                            textDecoration: "none",
                            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)",
                            transition: "all 0.2s ease"
                        }}
                    >
                        Get Free Consultation
                        <ArrowRight style={{ width: "20px", height: "20px" }} />
                    </Link>
                </div>
            </section>
        </>
    );
}
