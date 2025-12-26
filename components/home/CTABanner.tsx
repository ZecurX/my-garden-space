"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
    return (
        <section style={{
            position: "relative",
            padding: "160px 0",
            overflow: "hidden"
        }}>
            {/* Background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
            />
            {/* Dark overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.65)"
            }} />

            <div style={{
                position: "relative",
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "0 40px",
                textAlign: "center"
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
                        Get Started Today
                    </span>

                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 64px)",
                            fontWeight: 700,
                            color: "white",
                            marginBottom: "40px",
                            lineHeight: 1.1
                        }}
                    >
                        Ready to Create Your
                        <br />
                        <span style={{
                            color: "var(--primary-400)",
                            fontWeight: 700
                        }}>
                            Dream Garden?
                        </span>
                    </h2>

                    <p style={{
                        fontSize: "18px",
                        color: "rgba(255,255,255,0.85)",
                        marginBottom: "56px",
                        maxWidth: "600px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        lineHeight: 1.7
                    }}>
                        Let&apos;s discuss your project and bring your outdoor vision to
                        life. Get a free consultation and quote today.
                    </p>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        alignItems: "center",
                        justifyContent: "center"
                    }} className="sm:!flex-row">
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
                            Get Free Quote
                            <ArrowRight style={{ width: "20px", height: "20px" }} />
                        </Link>
                        <a
                            href="tel:+919538527433"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "22px 44px",
                                backgroundColor: "transparent",
                                color: "white",
                                border: "2px solid rgba(255,255,255,0.4)",
                                borderRadius: "9999px",
                                fontWeight: 600,
                                fontSize: "16px",
                                textDecoration: "none",
                                transition: "all 0.2s ease"
                            }}
                        >
                            <Phone style={{ width: "20px", height: "20px" }} />
                            Call Now
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
