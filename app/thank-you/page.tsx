import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Home, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Thank You",
    description: "Thank you for your enquiry. We will get back to you soon.",
};

export default function ThankYouPage() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-b from-[var(--primary-50)] to-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <div className="w-20 h-20 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                        <CheckCircle className="w-10 h-10 text-[var(--primary-600)]" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 animate-fade-in-up">
                        Thank You!
                    </h1>

                    <p className="text-lg text-[var(--text-secondary)] mb-8 animate-fade-in-up delay-100">
                        Your enquiry has been submitted successfully. Our team will get back
                        to you within 24 hours.
                    </p>

                    <div className="bg-white rounded-2xl p-6 shadow-md mb-8 animate-fade-in-up delay-200">
                        <h3 className="font-semibold text-[var(--text-primary)] mb-4">
                            What happens next?
                        </h3>
                        <ul className="text-left space-y-3 text-[var(--text-secondary)]">
                            <li className="flex items-start gap-2">
                                <span className="w-6 h-6 bg-[var(--primary-100)] rounded-full flex items-center justify-center text-sm font-medium text-[var(--primary-600)] flex-shrink-0">
                                    1
                                </span>
                                Our team will review your requirements
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-6 h-6 bg-[var(--primary-100)] rounded-full flex items-center justify-center text-sm font-medium text-[var(--primary-600)] flex-shrink-0">
                                    2
                                </span>
                                We&apos;ll contact you to discuss your project
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-6 h-6 bg-[var(--primary-100)] rounded-full flex items-center justify-center text-sm font-medium text-[var(--primary-600)] flex-shrink-0">
                                    3
                                </span>
                                You&apos;ll receive a customized quote
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <Link href="/" className="btn btn-primary btn-lg">
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                        <a
                            href="tel:+919538527433"
                            className="btn btn-outline btn-lg"
                        >
                            <Phone className="w-5 h-5" />
                            Call Us Now
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-[var(--text-muted)] animate-fade-in-up delay-400">
                        Need immediate assistance?{" "}
                        <a
                            href="https://wa.me/919538527433"
                            className="text-[var(--primary-600)] hover:underline"
                        >
                            Chat with us on WhatsApp
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
