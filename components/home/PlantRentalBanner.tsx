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
        <section style={{
            position: "relative",
            padding: "160px 0",
            overflow: "hidden",
            backgroundColor: "var(--primary-950)"
        }}>
            <div style={{
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 40px"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "80px",
                    alignItems: "center"
                }} className="lg:!grid-cols-2">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--primary-400)",
                            marginBottom: "32px"
                        }}>
                            Special Service
                        </span>

                        <h2
                            style={{
                                fontSize: "clamp(36px, 5vw, 60px)",
                                fontWeight: 700,
                                color: "white",
                                marginBottom: "40px",
                                lineHeight: 1.1
                            }}
                        >
                            Rent Plants for
                            <br />
                            <span style={{
                                color: "var(--primary-400)",
                                fontWeight: 700
                            }}>
                                Any Occasion
                            </span>
                        </h2>

                        <p style={{
                            fontSize: "18px",
                            color: "rgba(255,255,255,0.85)",
                            marginBottom: "56px",
                            maxWidth: "550px",
                            lineHeight: 1.7
                        }}>
                            Add natural beauty to your events, offices, and homes with our
                            premium plant rental service. Transform any space instantly
                            without the long-term commitment.
                        </p>

                        {/* Benefits Grid */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "40px",
                            marginBottom: "56px"
                        }}>
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "20px"
                                        }}
                                    >
                                        <div style={{
                                            width: "56px",
                                            height: "56px",
                                            borderRadius: "16px",
                                            backgroundColor: "rgba(255,255,255,0.1)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        }}>
                                            <Icon style={{
                                                width: "26px",
                                                height: "26px",
                                                color: "var(--primary-400)"
                                            }} />
                                        </div>
                                        <div>
                                            <h4 style={{
                                                fontWeight: 600,
                                                color: "white",
                                                fontSize: "18px",
                                                marginBottom: "8px"
                                            }}>
                                                {benefit.title}
                                            </h4>
                                            <p style={{
                                                fontSize: "15px",
                                                color: "rgba(255,255,255,0.7)",
                                                lineHeight: 1.6
                                            }}>
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Use Cases */}
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "16px",
                            marginBottom: "56px"
                        }}>
                            {useCases.map((useCase, index) => (
                                <span
                                    key={index}
                                    style={{
                                        padding: "14px 24px",
                                        borderRadius: "9999px",
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        color: "white",
                                        fontSize: "14px",
                                        fontWeight: 500
                                    }}
                                >
                                    {useCase}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/plant-rental"
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
                            Explore Plant Rental
                            <ArrowRight style={{ width: "20px", height: "20px" }} />
                        </Link>
                    </motion.div>

                    {/* Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "24px"
                        }}>
                            {/* Main Image */}
                            <div style={{
                                gridColumn: "span 2",
                                position: "relative",
                                height: "420px",
                                borderRadius: "32px",
                                overflow: "hidden"
                            }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Indoor plants display"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            {/* Side Images */}
                            <div style={{
                                position: "relative",
                                height: "240px",
                                borderRadius: "32px",
                                overflow: "hidden"
                            }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Event plant decoration"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div style={{
                                position: "relative",
                                height: "240px",
                                borderRadius: "32px",
                                overflow: "hidden"
                            }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Office plant setup"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                {/* Price Badge */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "24px",
                                    right: "24px",
                                    backgroundColor: "white",
                                    borderRadius: "20px",
                                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)",
                                    padding: "20px 28px",
                                    textAlign: "center"
                                }}>
                                    <div
                                        style={{
                                            fontSize: "32px",
                                            fontWeight: 700,
                                            color: "var(--primary-700)"
                                        }}
                                    >
                                        ₹99
                                    </div>
                                    <div style={{
                                        fontSize: "13px",
                                        color: "var(--text-muted)"
                                    }}>
                                        Starting/day
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
