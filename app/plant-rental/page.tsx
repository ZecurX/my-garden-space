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
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-[var(--primary-800)] to-[var(--primary-900)]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                                <Flower2 className="w-4 h-4 text-[var(--primary-300)]" />
                                Plant Rental Service
                            </span>
                            <h1 className="font-serif text-white mb-6">
                                Rent Plants for
                                <br />
                                <span className="text-[var(--primary-300)]">Any Occasion</span>
                            </h1>
                            <p className="text-lg text-white/80 mb-8">
                                Transform any space with beautiful plants. No long-term
                                commitment, no hassle. We handle everything from delivery to
                                maintenance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="#inquiry-form" className="btn btn-white btn-lg">
                                    Request Plants
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a href="tel:+919880220257" className="btn btn-lg !border-white !text-white hover:!bg-white/10 bg-transparent border-2">
                                    Call to Discuss
                                </a>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="relative h-[400px] rounded-3xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Plant rental display"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                                <div className="text-3xl font-bold text-[var(--primary-600)]">
                                    ₹99
                                </div>
                                <div className="text-sm text-[var(--text-secondary)]">
                                    Starting per day
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        label="Use Cases"
                        title="Perfect for Every Occasion"
                        subtitle="From weddings to workspaces, our plants add life to any environment."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => {
                            const Icon = useCase.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl overflow-hidden h-[300px]"
                                >
                                    <Image
                                        src={useCase.image}
                                        alt={useCase.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {useCase.title}
                                        </h3>
                                        <p className="text-white/70 text-sm">
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
            <section className="section-padding bg-[var(--bg-secondary)]">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        label="What We Offer"
                        title="Rental Categories"
                        subtitle="Choose from our wide selection of plants for any setting."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plantCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                                    {category.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm mb-4">
                                    {category.description}
                                </p>
                                <p className="text-xs text-[var(--text-muted)] mb-4">
                                    <strong>Examples:</strong> {category.examples}
                                </p>
                                <div className="pt-4 border-t border-[var(--neutral-200)]">
                                    <span className="text-2xl font-bold text-[var(--primary-600)]">
                                        ₹{category.priceFrom}
                                    </span>
                                    <span className="text-[var(--text-muted)]">/day</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        label="All Inclusive"
                        title="What's Included"
                        subtitle="Our rental service covers everything you need for a hassle-free experience."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {included.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--primary-100)] mb-4">
                                        <Icon className="w-8 h-8 text-[var(--primary-600)]" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)]">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Rental Info */}
            <section className="section-padding bg-[var(--primary-50)]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeading
                                label="Rental Details"
                                title="How It Works"
                                align="left"
                            />
                            <div className="space-y-4">
                                {[
                                    {
                                        step: "1",
                                        title: "Tell us your needs",
                                        description:
                                            "Fill out the inquiry form with your event details and plant preferences.",
                                    },
                                    {
                                        step: "2",
                                        title: "Get a custom quote",
                                        description:
                                            "We'll recommend the best plants and provide pricing within 24 hours.",
                                    },
                                    {
                                        step: "3",
                                        title: "Delivery & setup",
                                        description:
                                            "Our team delivers and arranges the plants at your location.",
                                    },
                                    {
                                        step: "4",
                                        title: "Enjoy & pickup",
                                        description:
                                            "Use the plants for your event. We'll pick them up afterward.",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary-600)] text-white flex items-center justify-center font-bold flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[var(--text-primary)]">
                                                {item.title}
                                            </h4>
                                            <p className="text-[var(--text-secondary)] text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="text-2xl font-serif font-semibold mb-6 text-[var(--text-primary)]">
                                Rental Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-600)] mt-0.5" />
                                    <div>
                                        <strong>Duration Options:</strong> Daily, Weekly, Monthly
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-600)] mt-0.5" />
                                    <div>
                                        <strong>Minimum Order:</strong> 5 plants for events, 10 for
                                        offices
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-600)] mt-0.5" />
                                    <div>
                                        <strong>Service Area:</strong> Bangalore and surrounding
                                        areas
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-600)] mt-0.5" />
                                    <div>
                                        <strong>Advance Notice:</strong> 2-3 days for small orders,
                                        1 week for large events
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form CTA */}
            <section id="inquiry-form" className="section-padding bg-[var(--primary-900)]">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        Ready to Rent Plants?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
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
            </section>
        </>
    );
}
