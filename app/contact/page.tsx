import { Metadata } from "next";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with My Garden Space for gardening, landscaping, and plant rental services in Bangalore. Call, email, or visit us.",
};

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        content: "+91 98802 20257",
        href: "tel:+919880220257",
        description: "Mon-Sat, 9am-6pm",
    },
    {
        icon: Mail,
        title: "Email",
        content: "info@mygardenspace.com",
        href: "mailto:info@mygardenspace.com",
        description: "We reply within 24 hours",
    },
    {
        icon: MapPin,
        title: "Location",
        content: "Bangalore, Karnataka",
        href: "https://maps.google.com/?q=Bangalore",
        description: "Serving all areas",
    },
    {
        icon: Clock,
        title: "Business Hours",
        content: "Mon - Sat: 9AM - 6PM",
        description: "Sunday: Closed",
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-36 pb-20 bg-[var(--bg-cream)]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--primary-600)] mb-5">
                            Get In Touch
                        </span>
                        <h1 className="font-display font-normal mb-6">
                            Let&apos;s Talk About Your
                            <br />
                            <span className="text-[var(--primary-600)] italic">Dream Garden</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                            Have a project in mind? Need a quote? We&apos;d love to hear from
                            you. Reach out and we&apos;ll respond as soon as we can.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-display font-medium mb-8 text-[var(--text-primary)]">
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-display font-medium mb-8 text-[var(--text-primary)]">
                                Contact Information
                            </h2>

                            <div className="space-y-6 mb-10">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[var(--neutral-50)] flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-5 h-5 text-[var(--primary-600)]" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-[var(--text-primary)] mb-0.5">
                                                    {item.title}
                                                </h3>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="text-[var(--primary-600)] hover:text-[var(--primary-700)] transition-colors"
                                                    >
                                                        {item.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-[var(--text-primary)]">
                                                        {item.content}
                                                    </p>
                                                )}
                                                <p className="text-sm text-[var(--text-muted)] mt-0.5">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919880220257?text=Hi%2C%20I%27m%20interested%20in%20your%20gardening%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors w-full justify-center mb-10"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden h-[280px] border border-[var(--neutral-100)]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703420000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
