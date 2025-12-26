import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    Flower2,
    Calendar,
    Truck,
    Sparkles,
    ArrowRight,
    Building,
    Home,
    PartyPopper,
    Store,
    CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
    title: "Plant Rental",
    description:
        "Rent beautiful plants for events, offices, homes, and exhibitions. Flexible durations with delivery, setup, and maintenance included.",
};

const useCases = [
    {
        icon: PartyPopper,
        title: "Events & Weddings",
        description:
            "Create stunning floral atmospheres for weddings, parties, and corporate events.",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Building,
        title: "Offices & Coworking",
        description:
            "Boost productivity and air quality with green plants in your workspace.",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Home,
        title: "Homes & Apartments",
        description:
            "Add greenery to your living space without long-term commitment.",
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: Store,
        title: "Exhibitions & Showrooms",
        description:
            "Enhance your display with professionally arranged plant decor.",
        image:
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
];

const plantCategories = [
    {
        title: "Indoor Plants",
        description: "Low-light tolerant plants perfect for interior spaces",
        examples: "Peace Lily, Snake Plant, Pothos, Ferns",
        priceFrom: 99,
    },
    {
        title: "Outdoor Plants",
        description: "Sun-loving plants for patios, gardens, and terraces",
        examples: "Palms, Hibiscus, Bougainvillea, Crotons",
        priceFrom: 149,
    },
    {
        title: "Decorative & Flowering",
        description: "Colorful blooms and ornamental plants for special occasions",
        examples: "Orchids, Anthuriums, Bromeliads, Chrysanthemums",
        priceFrom: 199,
    },
    {
        title: "Large Statement Plants",
        description: "Impressive foliage plants that make a bold statement",
        examples: "Ficus, Areca Palm, Monstera, Rubber Plant",
        priceFrom: 299,
    },
];

const included = [
    {
        icon: Truck,
        title: "Free Delivery",
        description: "We deliver plants to your location at no extra cost",
    },
    {
        icon: Sparkles,
        title: "Professional Setup",
        description: "Our team arranges plants for optimal visual impact",
    },
    {
        icon: Flower2,
        title: "Maintenance Included",
        description: "Regular watering and care during the rental period",
    },
    {
        icon: Calendar,
        title: "Flexible Pickup",
        description: "Convenient pickup at the end of your rental period",
    },
];

export default function PlantRentalPage() {
    return (
        <>
            {/* Hero Section - Cream style like About page */}
            <section style={{ padding: "180px 0 100px", backgroundColor: "white" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--primary-600)",
                            marginBottom: "24px"
                        }}>
                            Plant Rental Service
                        </span>

                        <h1 style={{
                            fontSize: "clamp(40px, 5vw, 64px)",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "32px",
                            lineHeight: 1.1
                        }}>
                            Rent Plants for
                            <br />
                            <span style={{ color: "var(--primary-600)" }}>Any Occasion</span>
                        </h1>

                        <p style={{
                            fontSize: "18px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                            maxWidth: "600px",
                            margin: "0 auto 48px"
                        }}>
                            Transform any space with beautiful plants. No long-term
                            commitment, no hassle. We handle everything from delivery to
                            maintenance.
                        </p>

                        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="#inquiry-form" className="btn btn-primary btn-lg">
                                Request Plants
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="tel:+919880220257" className="btn btn-outline btn-lg">
                                Call to Discuss
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section style={{ padding: "100px 0", backgroundColor: "white" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
                    <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
                        <SectionHeading
                            label="Use Cases"
                            title="Perfect for Every Occasion"
                            subtitle="From weddings to workspaces, our plants add life to any environment."
                            align="center"
                        />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl overflow-hidden h-[400px]"
                                    style={{ borderRadius: "24px", boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)" }}
                                >
                                    <Image
                                        src={useCase.image}
                                        alt={useCase.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Gradient Overlay - darker for better text contrast */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/20">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                            {useCase.title}
                                        </h3>
                                        <p className="text-white/80 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Plant Categories */}
            <section style={{ padding: "100px 0", backgroundColor: "var(--bg-secondary)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
                    <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
                        <SectionHeading
                            label="What We Offer"
                            title="Rental Categories"
                            subtitle="Choose from our wide selection of plants for any setting."
                            align="center"
                        />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
                        {plantCategories.map((category, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "24px",
                                    padding: "32px",
                                    transition: "all 0.3s ease",
                                    border: "1px solid rgba(0,0,0,0.05)"
                                }}
                                className="hover:shadow-xl"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                                    {category.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                                    {category.description}
                                </p>
                                <p className="text-xs text-[var(--text-muted)] mb-6 bg-[var(--neutral-50)] p-3 rounded-lg">
                                    <strong>Examples:</strong> {category.examples}
                                </p>
                                <div className="pt-4 border-t border-[var(--neutral-100)] flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-[var(--primary-600)]">
                                        ₹{category.priceFrom}
                                    </span>
                                    <span className="text-[var(--text-muted)] text-sm">/day</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section style={{ padding: "100px 0", backgroundColor: "white" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
                    <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
                        <span style={{
                            display: "block",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--primary-600)",
                            marginBottom: "16px"
                        }}>
                            All Inclusive
                        </span>
                        <h2 style={{
                            display: "block",
                            textAlign: "center",
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "16px"
                        }}>
                            What's Included
                        </h2>
                        <p style={{
                            display: "block",
                            textAlign: "center",
                            fontSize: "18px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                            margin: "0 auto"
                        }}>
                            Our rental service covers everything you need for a hassle-free experience.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
                        {included.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--primary-50)] mb-6 text-[var(--primary-600)]">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Rental Info - Minimalist / No Cards */}
            <section style={{ padding: "100px 0", backgroundColor: "var(--primary-50)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>

                    {/* How It Works - Minimalist */}
                    <div style={{ marginBottom: "96px", textAlign: "center" }}>
                        <div style={{ maxWidth: "768px", margin: "0 auto 64px", textAlign: "center" }}>
                            <SectionHeading
                                label="Simple Process"
                                title="How It Works"
                                subtitle="Get your plants in 4 easy steps"
                                align="center"
                            />
                        </div>

                        <div className="relative">
                            {/* Subtle line */}
                            <div className="hidden lg:block absolute top-[20px] left-0 right-0 h-[2px] bg-[var(--primary-200)] w-[85%] mx-auto z-0" style={{ opacity: 0.5 }} />

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
                                {[
                                    {
                                        step: "1",
                                        title: "Tell us your needs",
                                        description: "Fill out the inquiry form with your event details."
                                    },
                                    {
                                        step: "2",
                                        title: "Get a custom quote",
                                        description: "We'll recommend the best plants and pricing."
                                    },
                                    {
                                        step: "3",
                                        title: "Delivery & setup",
                                        description: "Our team delivers and arranges the plants."
                                    },
                                    {
                                        step: "4",
                                        title: "Enjoy & pickup",
                                        description: "Use the plants, and we'll pick them up later."
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        {/* Minimal Circle - No shadow, flat color */}
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary-600)] text-white font-bold flex items-center justify-center mb-6 relative z-10">
                                            {item.step}
                                        </div>

                                        {/* Text directly on background */}
                                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[200px] mx-auto">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Rental Information - Minimalist Grid */}
                    <div style={{ textAlign: "center" }}>
                        <div style={{ maxWidth: "768px", margin: "0 auto 64px", textAlign: "center" }}>
                            <SectionHeading
                                label="Details"
                                title="Key Information"
                                align="center"
                            />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "48px", maxWidth: "1200px", margin: "0 auto" }}>
                            {[
                                {
                                    label: "Flexible Duration",
                                    value: "Daily, Weekly, and Monthly plans tailored to your specific timeline.",
                                    icon: Calendar
                                },
                                {
                                    label: "Minimum Order",
                                    value: "5 plants for events, 10 for offices. Custom packages available.",
                                    icon: Store
                                },
                                {
                                    label: "Service Area",
                                    value: "Bangalore and surrounding metro areas. Travel fees may apply for outskirts.",
                                    icon: Truck
                                },
                                {
                                    label: "Advance Notice",
                                    value: "2-3 days for small orders. 1 week for large events to ensure availability.",
                                    icon: CheckCircle2
                                }
                            ].map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                        {/* Simple Icon */}
                                        <div style={{ marginBottom: "16px", color: "var(--primary-600)" }}>
                                            <Icon className="w-10 h-10" />
                                        </div>
                                        <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px", textAlign: "center" }}>
                                            {info.label}
                                        </h3>
                                        <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.6, textAlign: "center" }}>
                                            {info.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form CTA - Dark Green to stay punchy */}
            <section id="inquiry-form" style={{ padding: "100px 0", backgroundColor: "var(--primary-900)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "white", marginBottom: "24px" }}>
                            Ready to Rent Plants?
                        </h2>
                        <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "48px", lineHeight: 1.6 }}>
                            Contact us with your requirements and we&apos;ll provide a
                            customized quote within 24 hours.
                        </p>
                        <Link
                            href="/contact"
                            className="btn btn-white btn-lg inline-flex group"
                        >
                            Get a Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Visual Spacer */}
            <div style={{ height: "100px", backgroundColor: "var(--bg-cream)" }} />
        </>
    );
}
