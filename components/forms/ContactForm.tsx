"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, type: "contact" }),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset();
                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-[var(--primary-50)] rounded-2xl p-10 text-center border border-[var(--primary-100)]">
                <div className="w-16 h-16 bg-[var(--primary-100)] rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-[var(--primary-600)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    Message Sent!
                </h3>
                <p className="text-[var(--text-secondary)]">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-group">
                <label htmlFor="name" className="form-label">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    className={`form-input ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                    placeholder="Your name"
                    {...register("name")}
                />
                {errors.name && (
                    <p className="form-error">{errors.name.message}</p>
                )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={`form-input ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                        placeholder="your@email.com"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="form-error">{errors.email.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className={`form-input ${errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
                        placeholder="9876543210"
                        {...register("phone")}
                    />
                    {errors.phone && (
                        <p className="form-error">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    className={`form-input form-textarea ${errors.message ? "border-red-500 focus:border-red-500" : ""
                        }`}
                    placeholder="Tell us about your project or inquiry..."
                    {...register("message")}
                />
                {errors.message && (
                    <p className="form-error">{errors.message.message}</p>
                )}
            </div>

            <Button
                type="submit"
                size="lg"
                className="w-full bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                    </>
                )}
            </Button>
        </form>
    );
}
