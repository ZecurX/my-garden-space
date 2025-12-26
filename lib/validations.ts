import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number is too long")
        .regex(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message is too long"),
});

// Service Inquiry Form Schema
export const serviceInquirySchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
    message: z
        .string()
        .min(10, "Tell us about your requirements")
        .max(1000, "Message is too long"),
    service_id: z
        .string()
        .uuid("Invalid service selected"),
});

// Rental Inquiry Form Schema
export const rentalInquirySchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
    use_case: z.enum(["event", "office", "home", "exhibition"], {
        message: "Please select a use case",
    }),
    rental_start_date: z
        .string()
        .min(1, "Please select a start date"),
    rental_end_date: z
        .string()
        .min(1, "Please select an end date"),
    quantity: z
        .number()
        .min(1, "Minimum 1 plant required")
        .max(500, "Please contact us for large orders"),
    plant_preference: z
        .string()
        .max(500, "Too long")
        .optional(),
    location: z
        .string()
        .min(5, "Please provide your location")
        .max(255, "Location is too long"),
    notes: z
        .string()
        .max(1000, "Notes are too long")
        .optional(),
});

// Admin Service Form Schema
export const serviceFormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    slug: z.string().min(2, "Slug is required"),
    category_id: z.string().uuid("Please select a category"),
    short_description: z.string().optional(),
    full_description: z.string().optional(),
    use_cases: z.array(z.string()).optional(),
    starting_price: z.string().optional(),
    featured_image: z.string().url().optional().or(z.literal("")),
    is_featured: z.boolean().default(false),
    is_active: z.boolean().default(true),
    display_order: z.number().default(0),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
});

// Admin Gallery Item Form Schema
export const galleryItemFormSchema = z.object({
    title: z.string().min(2, "Title is required"),
    caption: z.string().optional(),
    image_url: z.string().url("Please provide a valid image URL"),
    thumbnail_url: z.string().url().optional().or(z.literal("")),
    tags: z.array(z.string()).optional(),
    project_type: z.string().optional(),
    location: z.string().optional(),
    service_id: z.string().uuid().optional().or(z.literal("")),
    is_before_after: z.boolean().default(false),
    before_image_url: z.string().url().optional().or(z.literal("")),
    is_active: z.boolean().default(true),
    display_order: z.number().default(0),
});

// Admin Testimonial Form Schema
export const testimonialFormSchema = z.object({
    client_name: z.string().min(2, "Client name is required"),
    client_title: z.string().optional(),
    client_company: z.string().optional(),
    client_photo: z.string().url().optional().or(z.literal("")),
    rating: z.number().min(1).max(5),
    quote: z.string().min(10, "Quote must be at least 10 characters"),
    project_type: z.string().optional(),
    is_featured: z.boolean().default(false),
    is_active: z.boolean().default(true),
    display_order: z.number().default(0),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ServiceInquiryData = z.infer<typeof serviceInquirySchema>;
export type RentalInquiryData = z.infer<typeof rentalInquirySchema>;
export type ServiceFormData = z.infer<typeof serviceFormSchema>;
export type GalleryItemFormData = z.infer<typeof galleryItemFormSchema>;
export type TestimonialFormData = z.infer<typeof testimonialFormSchema>;
