"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const scrollToContent = () => {
        const element = document.getElementById("services-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden"
        }}>
            {/* Background Image with Overlay */}
            <div style={{ position: "absolute", inset: 0 }}>
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scale(1.05)"
                    }}
                />
                {/* Dark overlay */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.55)"
                }} />
            </div>

            {/* Content */}
            <div style={{
                position: "relative",
                zIndex: 10,
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "180px 40px 120px"
            }}>
                <div style={{ maxWidth: "900px" }}>
                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1
                            style={{
                                fontSize: "clamp(48px, 7vw, 90px)",
                                fontWeight: 300,
                                color: "white",
                                lineHeight: 1.1,
                                letterSpacing: "-0.02em"
                            }}
                            className="font-display"
                        >
                            Transform Your
                            <br />
                            <span style={{
                                color: "var(--primary-400)",
                                fontStyle: "italic",
                                fontWeight: 400
                            }}>
                                Outdoor Space
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            marginTop: "48px",
                            fontSize: "clamp(18px, 2vw, 24px)",
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "650px",
                            lineHeight: 1.7
                        }}
                    >
                        Experience the art of refined outdoor living where nature
                        seamlessly intertwines with elegance. At My Garden Space,
                        we specialize in creating stunning gardens.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            marginTop: "56px",
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: "32px"
                        }}
                    >
                        <Link
                            href="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
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
                            Contact Us
                        </Link>
                        <Link
                            href="/services"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                color: "white",
                                fontWeight: 600,
                                fontSize: "16px",
                                textDecoration: "none"
                            }}
                        >
                            Our Services
                            <ArrowRight style={{ width: "20px", height: "20px" }} />
                        </Link>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            marginTop: "100px",
                            paddingTop: "48px",
                            borderTop: "1px solid rgba(255,255,255,0.2)"
                        }}
                    >
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "72px"
                        }}>
                            {[
                                { value: "500+", label: "Projects Completed" },
                                { value: "10+", label: "Years Experience" },
                                { value: "200+", label: "Happy Clients" },
                            ].map((stat, index) => (
                                <div key={index} style={{ textAlign: "left" }}>
                                    <div
                                        style={{
                                            fontSize: "clamp(36px, 4vw, 52px)",
                                            fontWeight: 300,
                                            color: "white",
                                            letterSpacing: "-0.02em"
                                        }}
                                        className="font-display"
                                    >
                                        {stat.value}
                                    </div>
                                    <div style={{
                                        marginTop: "12px",
                                        fontSize: "15px",
                                        color: "rgba(255,255,255,0.7)",
                                        fontWeight: 500
                                    }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToContent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{
                    position: "absolute",
                    bottom: "48px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    background: "none",
                    border: "none"
                }}
                aria-label="Scroll to content"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: "28px",
                        height: "48px",
                        borderRadius: "9999px",
                        border: "2px solid rgba(255,255,255,0.4)",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        padding: "8px"
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: "6px",
                            height: "10px",
                            backgroundColor: "rgba(255,255,255,0.7)",
                            borderRadius: "9999px"
                        }}
                    />
                </motion.div>
            </motion.button>
        </section>
    );
}
