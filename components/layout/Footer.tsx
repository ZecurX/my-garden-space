import Link from "next/link";
import {
    Leaf,
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
} from "lucide-react";

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Plant Rental", href: "/plant-rental" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
];

const services = [
    { label: "Landscaping", href: "/services/landscaping" },
    { label: "Garden Maintenance", href: "/services/gardening-maintenance" },
    { label: "Lawn Development", href: "/services/lawn-ground" },
    { label: "Water Features", href: "/services/water-features" },
    { label: "Vertical Gardens", href: "/services/vertical-green" },
    { label: "Pergola & Gazebo", href: "/services/structural-decorative" },
];

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--primary-900)] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold font-serif text-white">
                                    My Garden Space
                                </span>
                                <span className="text-xs text-white/60 -mt-1">
                                    Transform Your Outdoor Space
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 mb-6 text-sm leading-relaxed">
                            We transform outdoor spaces into beautiful, sustainable gardens.
                            From design to maintenance, we bring your green vision to life.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--primary-600)] transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[var(--primary-500)] -mb-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-white hover:pl-2 transition-all text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[var(--primary-500)] -mb-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-white/70 hover:text-white hover:pl-2 transition-all text-sm"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[var(--primary-500)] -mb-2"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+919880220257"
                                    className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                                >
                                    <Phone className="w-5 h-5 mt-0.5 text-[var(--primary-400)] group-hover:text-[var(--primary-300)]" />
                                    <span className="text-sm">+91 98802 20257</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@mygardenspace.com"
                                    className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                                >
                                    <Mail className="w-5 h-5 mt-0.5 text-[var(--primary-400)] group-hover:text-[var(--primary-300)]" />
                                    <span className="text-sm">info@mygardenspace.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-white/70">
                                <MapPin className="w-5 h-5 mt-0.5 text-[var(--primary-400)] flex-shrink-0" />
                                <span className="text-sm">
                                    Bangalore, Karnataka, India
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-white/70">
                                <Clock className="w-5 h-5 mt-0.5 text-[var(--primary-400)] flex-shrink-0" />
                                <span className="text-sm">
                                    Mon - Sat: 9:00 AM - 6:00 PM
                                </span>
                            </li>
                        </ul>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/919880220257?text=Hi%2C%20I%27m%20interested%20in%20your%20gardening%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
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
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/60 text-sm text-center md:text-left">
                        © {currentYear} My Garden Space. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-white/60 hover:text-white text-sm transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-white/60 hover:text-white text-sm transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
