import Link from "next/link";
import {
    Leaf,
    Phone,
    Mail,
    MapPin,
    Instagram,
} from "lucide-react";

const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Plant Rental", href: "/plant-rental" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
];

const services = [
    { label: "Landscaping", href: "/services#landscaping" },
    { label: "Garden Maintenance", href: "/services#gardening-maintenance" },
    { label: "Lawn Development", href: "/services#lawn-ground" },
    { label: "Water Features", href: "/services#water-features" },
    { label: "Vertical Gardens", href: "/services#vertical-green" },
    { label: "Pergola & Gazebo", href: "/services#structural-decorative" },
];

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/mygardenspace7?igsh=MW04MG50cjF5cjNmaA==", label: "Instagram" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: "var(--primary-950)" }}>
            {/* Main Footer */}
            <div style={{
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "120px 40px"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    gap: "64px"
                }} className="md:!grid-cols-2 lg:!grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <Link href="/" style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginBottom: "40px",
                            textDecoration: "none"
                        }}>
                            <div style={{
                                width: "60px",
                                height: "60px",
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Leaf style={{ width: "30px", height: "30px", color: "white" }} />
                            </div>
                            <span
                                style={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    color: "white"
                                }}
                            >
                                My Garden Space
                            </span>
                        </Link>
                        <p style={{
                            color: "rgba(255,255,255,0.75)",
                            marginBottom: "40px",
                            fontSize: "16px",
                            lineHeight: 1.7
                        }}>
                            We transform outdoor spaces into beautiful, sustainable gardens.
                            From design to maintenance, we bring your green vision to life.
                        </p>
                        {/* Social Links */}
                        <div style={{ display: "flex", gap: "16px" }}>
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                            backgroundColor: "rgba(255,255,255,0.1)",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "background 0.2s ease"
                                        }}
                                        aria-label={social.label}
                                    >
                                        <Icon style={{ width: "22px", height: "22px", color: "white" }} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "white",
                            marginBottom: "40px"
                        }}>
                            Quick Links
                        </h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {quickLinks.map((link) => (
                                <li key={link.href} style={{ marginBottom: "20px" }}>
                                    <Link
                                        href={link.href}
                                        style={{
                                            color: "rgba(255,255,255,0.75)",
                                            textDecoration: "none",
                                            fontSize: "16px",
                                            transition: "color 0.2s ease"
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "white",
                            marginBottom: "40px"
                        }}>
                            Our Services
                        </h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {services.map((service) => (
                                <li key={service.href} style={{ marginBottom: "20px" }}>
                                    <Link
                                        href={service.href}
                                        style={{
                                            color: "rgba(255,255,255,0.75)",
                                            textDecoration: "none",
                                            fontSize: "16px",
                                            transition: "color 0.2s ease"
                                        }}
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "white",
                            marginBottom: "40px"
                        }}>
                            Contact Us
                        </h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: "24px" }}>
                                <a
                                    href="tel:+919538527433"
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "20px",
                                        color: "rgba(255,255,255,0.75)",
                                        textDecoration: "none"
                                    }}
                                >
                                    <Phone style={{
                                        width: "24px",
                                        height: "24px",
                                        marginTop: "2px",
                                        color: "var(--primary-400)"
                                    }} />
                                    <span style={{ fontSize: "16px" }}>+91 95385 27433</span>
                                </a>
                            </li>
                            <li style={{ marginBottom: "24px" }}>
                                <a
                                    href="mailto:mygardenspace11@gmail.com"
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "20px",
                                        color: "rgba(255,255,255,0.75)",
                                        textDecoration: "none"
                                    }}
                                >
                                    <Mail style={{
                                        width: "24px",
                                        height: "24px",
                                        marginTop: "2px",
                                        color: "var(--primary-400)"
                                    }} />
                                    <span style={{ fontSize: "16px" }}>mygardenspace11@gmail.com</span>
                                </a>
                            </li>
                            <li style={{
                                marginBottom: "24px",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "20px",
                                color: "rgba(255,255,255,0.75)"
                            }}>
                                <MapPin style={{
                                    width: "24px",
                                    height: "24px",
                                    marginTop: "2px",
                                    color: "var(--primary-400)",
                                    flexShrink: 0
                                }} />
                                <span style={{ fontSize: "16px" }}>
                                    Bhoopasandra Main Rd, RMS Colony, Central Excise Layout, Sanjayanagara, Bengaluru, Karnataka 560094
                                </span>
                            </li>
                        </ul>

                        <a
                            href="https://wa.me/919538527433?text=Hi%2C%20I%27m%20interested%20in%20your%20gardening%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "12px",
                                marginTop: "20px",
                                padding: "18px 32px",
                                backgroundColor: "#22c55e",
                                borderRadius: "9999px",
                                fontWeight: 600,
                                fontSize: "15px",
                                color: "white",
                                textDecoration: "none",
                                transition: "background 0.2s ease"
                            }}
                        >
                            <svg
                                style={{ width: "22px", height: "22px" }}
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
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px"
                }} className="md:!flex-row">
                    <p style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "15px",
                        textAlign: "center"
                    }}>
                        © {currentYear} My Garden Space. All rights reserved.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
                        <Link
                            href="/privacy-policy"
                            style={{
                                color: "rgba(255,255,255,0.6)",
                                textDecoration: "none",
                                fontSize: "15px"
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            style={{
                                color: "rgba(255,255,255,0.6)",
                                textDecoration: "none",
                                fontSize: "15px"
                            }}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
