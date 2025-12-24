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
    Leaf,
    TreePine,
    Flower2,
    Droplets,
    Fence,
    Waves,
    FlowerIcon,
    Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceCategories = [
    {
        name: "Gardening & Maintenance",
        slug: "gardening-maintenance",
        icon: Leaf,
    },
    {
        name: "Landscaping & Outdoor",
        slug: "landscaping",
        icon: TreePine,
    },
    {
        name: "Lawn & Ground Solutions",
        slug: "lawn-ground",
        icon: Flower2,
    },
    {
        name: "Structural & Decorative",
        slug: "structural-decorative",
        icon: Fence,
    },
    {
        name: "Water Features",
        slug: "water-features",
        icon: Waves,
    },
    {
        name: "Vertical Gardens",
        slug: "vertical-green",
        icon: FlowerIcon,
    },
    {
        name: "Pots & Accessories",
        slug: "pots-accessories",
        icon: Droplets,
    },
    {
        name: "Irrigation & Smart",
        slug: "irrigation-smart",
        icon: Wrench,
    },
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
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                                    isScrolled
                                        ? "bg-[var(--primary-600)]"
                                        : "bg-white/20 backdrop-blur-sm"
                                )}
                            >
                                <Leaf
                                    className={cn(
                                        "w-6 h-6 transition-colors",
                                        isScrolled ? "text-white" : "text-white"
                                    )}
                                />
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={cn(
                                        "text-xl font-bold font-serif transition-colors",
                                        isScrolled ? "text-[var(--primary-800)]" : "text-white"
                                    )}
                                >
                                    My Garden Space
                                </span>
                                <span
                                    className={cn(
                                        "text-xs transition-colors -mt-1",
                                        isScrolled ? "text-[var(--text-muted)]" : "text-white/70"
                                    )}
                                >
                                    Transform Your Outdoor Space
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.href}
                                    className="relative"
                                    onMouseEnter={() =>
                                        item.hasDropdown && setIsServicesOpen(true)
                                    }
                                    onMouseLeave={() =>
                                        item.hasDropdown && setIsServicesOpen(false)
                                    }
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "px-4 py-2 rounded-lg flex items-center gap-1 text-[0.9375rem] font-medium transition-all",
                                            pathname === item.href || (item.hasDropdown && pathname.startsWith("/services"))
                                                ? isScrolled
                                                    ? "text-[var(--primary-600)]"
                                                    : "text-white bg-white/20"
                                                : isScrolled
                                                    ? "text-[var(--text-secondary)] hover:text-[var(--primary-600)] hover:bg-[var(--primary-50)]"
                                                    : "text-white/90 hover:text-white hover:bg-white/10"
                                        )}
                                    >
                                        {item.label}
                                        {item.hasDropdown && (
                                            <ChevronDown
                                                className={cn(
                                                    "w-4 h-4 transition-transform",
                                                    isServicesOpen && "rotate-180"
                                                )}
                                            />
                                        )}
                                    </Link>

                                    {/* Services Mega Menu */}
                                    {item.hasDropdown && (
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                                                >
                                                    <div className="bg-white rounded-2xl shadow-xl p-6 w-[600px] grid grid-cols-2 gap-2">
                                                        {serviceCategories.map((category) => {
                                                            const Icon = category.icon;
                                                            return (
                                                                <Link
                                                                    key={category.slug}
                                                                    href={`/services/${category.slug}`}
                                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--primary-50)] transition-colors group"
                                                                >
                                                                    <div className="w-10 h-10 bg-[var(--primary-100)] rounded-lg flex items-center justify-center group-hover:bg-[var(--primary-200)] transition-colors">
                                                                        <Icon className="w-5 h-5 text-[var(--primary-600)]" />
                                                                    </div>
                                                                    <span className="text-sm font-medium text-[var(--text-primary)]">
                                                                        {category.name}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                        <Link
                                                            href="/services"
                                                            className="col-span-2 mt-2 pt-3 border-t border-[var(--neutral-200)] text-center text-[var(--primary-600)] font-medium hover:text-[var(--primary-700)] transition-colors"
                                                        >
                                                            View All Services →
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:+919880220257"
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                                    isScrolled
                                        ? "text-[var(--primary-700)] hover:bg-[var(--primary-50)]"
                                        : "text-white hover:bg-white/10"
                                )}
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-medium">+91 98802 20257</span>
                            </a>
                            <Link
                                href="/contact"
                                className="btn btn-primary btn-sm"
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 rounded-lg transition-colors",
                                isScrolled
                                    ? "text-[var(--text-primary)] hover:bg-[var(--neutral-100)]"
                                    : "text-white hover:bg-white/10"
                            )}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
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
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 shadow-2xl lg:hidden"
                    >
                        <div className="flex flex-col h-full">
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between p-4 border-b border-[var(--neutral-200)]">
                                <Link href="/" className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[var(--primary-600)] rounded-full flex items-center justify-center">
                                        <Leaf className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-lg font-bold font-serif text-[var(--primary-800)]">
                                        My Garden Space
                                    </span>
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-[var(--neutral-100)]"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6 text-[var(--text-primary)]" />
                                </button>
                            </div>

                            {/* Mobile Nav Links */}
                            <div className="flex-1 overflow-y-auto p-4">
                                <div className="space-y-1">
                                    {navItems.map((item) => (
                                        <div key={item.href}>
                                            {item.hasDropdown ? (
                                                <>
                                                    <button
                                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                        className={cn(
                                                            "w-full flex items-center justify-between p-3 rounded-xl text-left font-medium transition-colors",
                                                            pathname.startsWith("/services")
                                                                ? "bg-[var(--primary-50)] text-[var(--primary-600)]"
                                                                : "text-[var(--text-primary)] hover:bg-[var(--neutral-100)]"
                                                        )}
                                                    >
                                                        {item.label}
                                                        <ChevronDown
                                                            className={cn(
                                                                "w-5 h-5 transition-transform",
                                                                isServicesOpen && "rotate-180"
                                                            )}
                                                        />
                                                    </button>
                                                    <AnimatePresence>
                                                        {isServicesOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-4 py-2 space-y-1">
                                                                    {serviceCategories.map((category) => (
                                                                        <Link
                                                                            key={category.slug}
                                                                            href={`/services/${category.slug}`}
                                                                            className="block p-2 pl-3 rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--neutral-100)] hover:text-[var(--primary-600)]"
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
                                                    className={cn(
                                                        "block p-3 rounded-xl font-medium transition-colors",
                                                        pathname === item.href
                                                            ? "bg-[var(--primary-50)] text-[var(--primary-600)]"
                                                            : "text-[var(--text-primary)] hover:bg-[var(--neutral-100)]"
                                                    )}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Footer */}
                            <div className="p-4 border-t border-[var(--neutral-200)] space-y-3">
                                <a
                                    href="tel:+919880220257"
                                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[var(--neutral-100)] text-[var(--text-primary)] font-medium"
                                >
                                    <Phone className="w-5 h-5 text-[var(--primary-600)]" />
                                    +91 98802 20257
                                </a>
                                <Link href="/contact" className="btn btn-primary w-full">
                                    Get Quote
                                </Link>
                            </div>
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
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
