import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Award,
    Users,
    Leaf,
    Target,
    Heart,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about My Garden Space - your trusted partner for professional gardening and landscaping services in Bangalore with over 10 years of experience.",
};

const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Expert Gardeners" },
];

const values = [
    {
        icon: Target,
        title: "Excellence",
        description:
            "We strive for perfection in every project, ensuring the highest quality results.",
    },
    {
        icon: Heart,
        title: "Passion",
        description:
            "Our love for plants and nature drives us to create beautiful outdoor spaces.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description:
            "Eco-friendly practices that are good for your garden and the environment.",
    },
    {
        icon: Users,
        title: "Customer Focus",
        description:
            "Your vision is our priority. We work closely with you to bring your dreams to life.",
    },
];

const services = [
    "Landscaping & Garden Design",
    "Garden Maintenance",
    "Plant Rental Services",
    "Vertical Gardens",
    "Water Features",
    "Pergola & Gazebo Installation",
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-36 pb-24 bg-[var(--bg-cream)]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--primary-600)] mb-5">
                            About My Garden Space
                        </span>
                        <h1 className="font-display font-normal mb-6">
                            Transforming Spaces,
                            <br />
                            <span className="text-[var(--primary-600)] italic">Creating Dreams</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                            We are passionate about bringing nature closer to you. With over a
                            decade of experience, we transform outdoor spaces into beautiful,
                            sustainable gardens that enhance your quality of life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white border-b border-[var(--neutral-100)]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-display font-normal text-[var(--primary-700)] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--text-muted)] font-medium tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="relative">
                            <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Our team working on a garden"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[180px]">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="w-8 h-8 text-[var(--primary-600)]" />
                                    <div className="text-3xl font-display font-normal text-[var(--primary-700)]">
                                        10+
                                    </div>
                                </div>
                                <p className="text-xs text-[var(--text-muted)]">
                                    Years of Excellence in Gardening
                                </p>
                            </div>
                        </div>

                        <div>
                            <SectionHeading
                                label="Our Story"
                                title="A Passion for Green Spaces"
                                align="left"
                            />
                            <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Founded in 2014, My Garden Space began with a simple vision:
                                    to bring the beauty of nature into every home and business.
                                    What started as a small gardening service has grown into a
                                    comprehensive landscaping and plant rental company serving
                                    clients across Bangalore.
                                </p>
                                <p>
                                    Our journey has been driven by a deep love for plants and an
                                    unwavering commitment to customer satisfaction. We believe
                                    that everyone deserves a beautiful outdoor space, whether
                                    it&apos;s a sprawling garden or a cozy balcony.
                                </p>
                                <p>
                                    Today, we pride ourselves on our team of skilled gardeners,
                                    landscape designers, and plant care specialists who bring
                                    expertise and creativity to every project.
                                </p>
                            </div>

                            {/* Services List */}
                            <div className="mt-10 grid grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--primary-600)] flex-shrink-0" />
                                        <span className="text-sm text-[var(--text-primary)] font-medium">
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-[var(--bg-cream)]">
                <div className="container mx-auto px-6 lg:px-12">
                    <SectionHeading
                        label="Our Values"
                        title="What We Stand For"
                        subtitle="The principles that guide everything we do at My Garden Space."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-[var(--neutral-100)]"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--neutral-50)] mb-6">
                                        <Icon className="w-7 h-7 text-[var(--primary-600)]" />
                                    </div>
                                    <h3 className="text-xl font-display font-medium mb-3 text-[var(--text-primary)]">
                                        {value.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-[var(--primary-950)]">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--primary-400)] mb-5">
                        Let&apos;s Work Together
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-normal text-white mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Let&apos;s discuss your project and create the garden of your
                        dreams together.
                    </p>
                    <Link
                        href="/contact"
                        className="btn btn-white btn-lg inline-flex group"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </>
    );
}
