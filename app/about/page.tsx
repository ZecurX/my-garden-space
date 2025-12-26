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
            {/* Hero & Stats Merged Section */}
            <section style={{ padding: "180px 0 100px", backgroundColor: "white" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>

                    {/* Hero Content */}
                    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--primary-600)",
                            marginBottom: "24px"
                        }}>
                            About My Garden Space
                        </span>
                        <h1 style={{
                            fontSize: "clamp(40px, 5vw, 64px)",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "32px",
                            lineHeight: 1.1
                        }}>
                            Transforming Spaces,
                            <br />
                            <span style={{ color: "var(--primary-600)" }}>Creating Dreams</span>
                        </h1>
                        <p style={{
                            fontSize: "18px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                            maxWidth: "600px",
                            margin: "0 auto 60px"
                        }}>
                            We are passionate about bringing nature closer to you. With over a
                            decade of experience, we transform outdoor spaces into beautiful,
                            sustainable gardens that enhance your quality of life.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "40px",
                        marginTop: "80px",
                        textAlign: "center",
                        borderTop: "1px solid rgba(0,0,0,0.05)",
                        paddingTop: "60px"
                    }}>
                        {stats.map((stat, index) => (
                            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div style={{
                                    fontSize: "clamp(36px, 4vw, 48px)",
                                    fontWeight: 700,
                                    color: "var(--primary-700)",
                                    marginBottom: "8px"
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "var(--text-muted)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                }}>
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
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[180px] text-center">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <Award className="w-8 h-8 text-[var(--primary-600)]" />
                                    <div className="text-3xl font-bold text-[var(--primary-700)]">
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
                                <br />
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
                            <br />

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
            <section style={{ padding: "120px 0", backgroundColor: "var(--bg-cream)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

                    {/* Centered Heading */}
                    <div style={{ maxWidth: "800px", margin: "0 auto 80px", textAlign: "center" }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--primary-600)",
                            marginBottom: "24px"
                        }}>
                            Our Values
                        </span>
                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "16px"
                        }}>
                            What We Stand For
                        </h2>
                        <p style={{
                            fontSize: "18px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.6
                        }}>
                            The principles that guide everything we do at My Garden Space.
                        </p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "32px"
                    }}>
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: "24px",
                                        padding: "40px",
                                        textAlign: "center",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                        border: "1px solid var(--neutral-100)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        height: "100%", // Uniform height
                                    }}
                                >
                                    <div style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "20px",
                                        backgroundColor: "var(--neutral-50)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "24px"
                                    }}>
                                        <Icon style={{ width: "28px", height: "28px", color: "var(--primary-600)" }} />
                                    </div>
                                    <h3 style={{
                                        fontSize: "20px",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        marginBottom: "16px"
                                    }}>
                                        {value.title}
                                    </h3>
                                    <p style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "15px",
                                        lineHeight: 1.6
                                    }}>
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: "100px 0", backgroundColor: "var(--primary-950)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "var(--primary-400)",
                            marginBottom: "20px"
                        }}>
                            Let&apos;s Work Together
                        </span>
                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "white",
                            marginBottom: "24px"
                        }}>
                            Ready to Transform Your Space?
                        </h2>
                        <p style={{
                            fontSize: "18px",
                            color: "rgba(255,255,255,0.7)",
                            lineHeight: 1.6,
                            marginBottom: "40px"
                        }}>
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
                </div>
            </section>

            {/* Visual Spacer */}
            <div style={{ height: "100px", backgroundColor: "var(--bg-cream)" }} />
        </>
    );
}
