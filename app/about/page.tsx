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
            <section className="relative pt-32 pb-20 bg-gradient-to-b from-[var(--primary-50)] to-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium mb-6">
                            <Leaf className="w-4 h-4" />
                            About My Garden Space
                        </span>
                        <h1 className="font-serif mb-6">
                            Transforming Spaces,
                            <br />
                            <span className="text-[var(--primary-600)]">Creating Dreams</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)]">
                            We are passionate about bringing nature closer to you. With over a
                            decade of experience, we transform outdoor spaces into beautiful,
                            sustainable gardens that enhance your quality of life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white border-b border-[var(--neutral-200)]">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-[var(--primary-600)] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-[var(--text-secondary)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative">
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Our team working on a garden"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                                <div className="flex items-center gap-3 mb-3">
                                    <Award className="w-10 h-10 text-[var(--primary-600)]" />
                                    <div className="text-2xl font-bold text-[var(--primary-600)]">
                                        10+
                                    </div>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)]">
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
                            <div className="space-y-4 text-[var(--text-secondary)]">
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
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--primary-600)] flex-shrink-0" />
                                        <span className="text-sm text-[var(--text-primary)]">
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
            <section className="section-padding bg-[var(--bg-secondary)]">
                <div className="container mx-auto px-4 lg:px-8">
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
                                    className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--primary-100)] mb-6">
                                        <Icon className="w-8 h-8 text-[var(--primary-600)]" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
                                        {value.title}
                                    </h3>
                                    <p className="text-[var(--text-secondary)]">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-[var(--primary-900)]">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
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
