"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
} from "lucide-react";
import Image from "next/image";

const serviceCategories = [
    { name: "Gardening & Maintenance", slug: "gardening-maintenance" },
    { name: "Landscaping & Outdoor", slug: "landscaping" },
    { name: "Lawn & Ground Solutions", slug: "lawn-ground" },
    { name: "Structural & Decorative", slug: "structural-decorative" },
    { name: "Water Features", slug: "water-features" },
    { name: "Vertical Gardens", slug: "vertical-green" },
    { name: "Pots & Accessories", slug: "pots-accessories" },
    { name: "Irrigation & Smart", slug: "irrigation-smart" },
];

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Plant Rental", href: "/plant-rental" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    // Pages that have a light/white background hero section
    const lightBackgroundPages = ["/services", "/gallery", "/contact", "/plant-rental", "/about", "/testimonials", "/thank-you"];
    const isLightPage = lightBackgroundPages.some(page => pathname.startsWith(page));

    // For light pages, always use dark text. For dark pages, use white text until scrolled.
    const useDarkText = isLightPage || isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    return (
        <>
            {/* NAVBAR - Using inline styles for guaranteed spacing */}
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    transition: "all 0.5s ease",
                    backgroundColor: (isScrolled || isLightPage) ? "rgba(255, 255, 255, 0.97)" : "transparent",
                    backdropFilter: (isScrolled || isLightPage) ? "blur(20px)" : "none",
                    boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                    padding: isScrolled ? "20px 0" : "32px 0",
                }}
            >
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 40px",
                }}>
                    <nav style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        {/* Logo */}
                        <Link href="/" style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            textDecoration: "none"
                        }}>
                            <Image
                                src="/Screenshot_2025-12-27_153722-removebg-preview.png"
                                alt="My Garden Space Logo"
                                width={52}
                                height={52}
                                style={{
                                    objectFit: "contain"
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "22px",
                                    fontWeight: 600,
                                    letterSpacing: "-0.02em",
                                    color: useDarkText ? "var(--text-primary)" : "white",
                                    transition: "color 0.3s ease"
                                }}
                            >
                                My Garden Space
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div style={{
                            display: "none",
                            alignItems: "center",
                            gap: "12px"
                        }} className="lg:!flex">
                            {navItems.map((item) => (
                                <div
                                    key={item.href}
                                    style={{ position: "relative" }}
                                    onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                                    onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                                >
                                    <Link
                                        href={item.href}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            padding: "14px 24px",
                                            fontSize: "15px",
                                            fontWeight: 500,
                                            borderRadius: "9999px",
                                            textDecoration: "none",
                                            transition: "all 0.2s ease",
                                            color: pathname === item.href || (item.hasDropdown && pathname.startsWith("/services"))
                                                ? useDarkText ? "var(--primary-700)" : "white"
                                                : useDarkText ? "var(--text-secondary)" : "rgba(255,255,255,0.85)",
                                            backgroundColor: pathname === item.href || (item.hasDropdown && pathname.startsWith("/services"))
                                                ? useDarkText ? "var(--primary-50)" : "rgba(255,255,255,0.15)"
                                                : "transparent"
                                        }}
                                    >
                                        {item.label}
                                        {item.hasDropdown && (
                                            <ChevronDown style={{
                                                width: "16px",
                                                height: "16px",
                                                transition: "transform 0.3s ease",
                                                transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)"
                                            }} />
                                        )}
                                    </Link>

                                    {/* Dropdown */}
                                    {item.hasDropdown && (
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    style={{
                                                        position: "absolute",
                                                        top: "100%",
                                                        left: 0,
                                                        paddingTop: "16px"
                                                    }}
                                                >
                                                    <div style={{
                                                        backgroundColor: "white",
                                                        borderRadius: "20px",
                                                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                                                        border: "1px solid var(--neutral-100)",
                                                        padding: "20px",
                                                        width: "320px"
                                                    }}>
                                                        {serviceCategories.map((category) => (
                                                            <Link
                                                                key={category.slug}
                                                                href={`/services#${category.slug}`}
                                                                style={{
                                                                    display: "block",
                                                                    padding: "16px 20px",
                                                                    borderRadius: "12px",
                                                                    fontSize: "14px",
                                                                    fontWeight: 500,
                                                                    color: "var(--text-primary)",
                                                                    textDecoration: "none",
                                                                    transition: "background 0.2s ease"
                                                                }}
                                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--neutral-50)"}
                                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                                                            >
                                                                {category.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={{
                            display: "none",
                            alignItems: "center",
                            gap: "32px"
                        }} className="lg:!flex">
                            <a
                                href="tel:+919538527433"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    color: useDarkText ? "var(--text-secondary)" : "rgba(255,255,255,0.85)",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease"
                                }}
                            >
                                <Phone style={{ width: "20px", height: "20px" }} />
                                <span style={{ fontSize: "14px", fontWeight: 500 }}>+91 95385 27433</span>
                            </a>
                            <Link
                                href="/contact"
                                style={{
                                    padding: "16px 32px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    borderRadius: "9999px",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    backgroundColor: useDarkText ? "var(--primary-700)" : "white",
                                    color: useDarkText ? "white" : "var(--text-primary)"
                                }}
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{
                                display: "flex",
                                padding: "14px",
                                borderRadius: "50%",
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                color: useDarkText ? "var(--text-primary)" : "white",
                                transition: "all 0.3s ease"
                            }}
                            className="lg:!hidden"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X style={{ width: "24px", height: "24px" }} />
                            ) : (
                                <Menu style={{ width: "24px", height: "24px" }} />
                            )}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: "100%",
                            maxWidth: "400px",
                            backgroundColor: "white",
                            zIndex: 50,
                            boxShadow: "-10px 0 40px rgba(0,0,0,0.15)",
                            display: "flex",
                            flexDirection: "column"
                        }}
                        className="lg:hidden"
                    >
                        {/* Mobile Header */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "32px",
                            borderBottom: "1px solid var(--neutral-100)"
                        }}>
                            <Link href="/" style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                                textDecoration: "none"
                            }}>
                                <Image
                                    src="/Screenshot_2025-12-27_153722-removebg-preview.png"
                                    alt="My Garden Space Logo"
                                    width={48}
                                    height={48}
                                    style={{
                                        objectFit: "contain"
                                    }}
                                />
                                <span style={{
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    color: "var(--text-primary)"
                                }}>
                                    My Garden Space
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    padding: "12px",
                                    borderRadius: "50%",
                                    border: "none",
                                    background: "transparent",
                                    cursor: "pointer"
                                }}
                                aria-label="Close menu"
                            >
                                <X style={{ width: "24px", height: "24px", color: "var(--text-primary)" }} />
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <div style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "32px"
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {navItems.map((item) => (
                                    <div key={item.href}>
                                        {item.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                    style={{
                                                        width: "100%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        padding: "20px",
                                                        borderRadius: "16px",
                                                        border: "none",
                                                        background: pathname.startsWith("/services")
                                                            ? "var(--primary-50)"
                                                            : "transparent",
                                                        textAlign: "left",
                                                        fontWeight: 500,
                                                        fontSize: "16px",
                                                        cursor: "pointer",
                                                        color: pathname.startsWith("/services")
                                                            ? "var(--primary-700)"
                                                            : "var(--text-primary)"
                                                    }}
                                                >
                                                    {item.label}
                                                    <ChevronDown style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                        transition: "transform 0.3s ease"
                                                    }} />
                                                </button>
                                                <AnimatePresence>
                                                    {isServicesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                            style={{ overflow: "hidden" }}
                                                        >
                                                            <div style={{
                                                                paddingLeft: "20px",
                                                                paddingTop: "12px",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: "8px"
                                                            }}>
                                                                {serviceCategories.map((category) => (
                                                                    <Link
                                                                        key={category.slug}
                                                                        href={`/services#${category.slug}`}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        style={{
                                                                            display: "block",
                                                                            padding: "16px 20px",
                                                                            borderRadius: "12px",
                                                                            fontSize: "14px",
                                                                            color: "var(--text-secondary)",
                                                                            textDecoration: "none"
                                                                        }}
                                                                    >
                                                                        {category.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                style={{
                                                    display: "block",
                                                    padding: "20px",
                                                    borderRadius: "16px",
                                                    fontWeight: 500,
                                                    fontSize: "16px",
                                                    textDecoration: "none",
                                                    backgroundColor: pathname === item.href
                                                        ? "var(--primary-50)"
                                                        : "transparent",
                                                    color: pathname === item.href
                                                        ? "var(--primary-700)"
                                                        : "var(--text-primary)"
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Footer */}
                        <div style={{
                            padding: "32px",
                            borderTop: "1px solid var(--neutral-100)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        }}>
                            <a
                                href="tel:+919538527433"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "12px",
                                    padding: "20px",
                                    borderRadius: "9999px",
                                    backgroundColor: "var(--neutral-50)",
                                    color: "var(--text-primary)",
                                    fontWeight: 500,
                                    textDecoration: "none"
                                }}
                            >
                                <Phone style={{ width: "20px", height: "20px", color: "var(--primary-600)" }} />
                                +91 95385 27433
                            </a>
                            <Link
                                href="/contact"
                                style={{
                                    display: "block",
                                    padding: "20px",
                                    borderRadius: "9999px",
                                    backgroundColor: "var(--primary-700)",
                                    color: "white",
                                    fontWeight: 600,
                                    textAlign: "center",
                                    textDecoration: "none"
                                }}
                            >
                                Get Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.4)",
                            backdropFilter: "blur(4px)",
                            zIndex: 40
                        }}
                        className="lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
