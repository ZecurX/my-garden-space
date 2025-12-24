// Database Types for My Garden Space

export interface ServiceCategory {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    icon: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Service {
    id: string;
    category_id: string;
    name: string;
    slug: string;
    short_description: string | null;
    full_description: string | null;
    use_cases: string[] | null;
    process_steps: ProcessStep[] | null;
    materials_used: string[] | null;
    maintenance_info: string | null;
    starting_price: string | null;
    featured_image: string | null;
    gallery_images: string[] | null;
    is_featured: boolean;
    is_active: boolean;
    display_order: number;
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
    updated_at: string;
    // Joined data
    category?: ServiceCategory;
}

export interface ProcessStep {
    title: string;
    description: string;
    icon?: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    caption: string | null;
    image_url: string;
    thumbnail_url: string | null;
    tags: string[] | null;
    project_type: string | null;
    location: string | null;
    service_id: string | null;
    is_before_after: boolean;
    before_image_url: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
}

export interface Testimonial {
    id: string;
    client_name: string;
    client_title: string | null;
    client_company: string | null;
    client_photo: string | null;
    rating: number;
    quote: string;
    project_type: string | null;
    is_featured: boolean;
    is_active: boolean;
    display_order: number;
    created_at: string;
}

export interface RentalCategory {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    image_url: string | null;
    plants_available: number | null;
    daily_rate_from: number | null;
    is_active: boolean;
    display_order: number;
    created_at: string;
}

export type EnquiryType = "service" | "rental" | "contact";
export type EnquiryStatus = "new" | "contacted" | "quoted" | "closed";

export interface Enquiry {
    id: string;
    type: EnquiryType;
    name: string;
    email: string;
    phone: string;
    message: string | null;
    // Service enquiry fields
    service_id: string | null;
    // Rental enquiry fields
    use_case: string | null;
    rental_start_date: string | null;
    rental_end_date: string | null;
    quantity: number | null;
    plant_preference: string | null;
    location: string | null;
    status: EnquiryStatus;
    notes: string | null;
    created_at: string;
    updated_at: string;
    // Joined data
    service?: Service;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    featured_image: string | null;
    author: string | null;
    tags: string[] | null;
    is_published: boolean;
    published_at: string | null;
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
    updated_at: string;
}

export interface SiteSetting {
    key: string;
    value: Record<string, unknown>;
    updated_at: string;
}

// Form Types
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface ServiceInquiryFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    service_id: string;
}

export interface RentalInquiryFormData {
    name: string;
    email: string;
    phone: string;
    use_case: "event" | "office" | "home" | "exhibition";
    rental_start_date: string;
    rental_end_date: string;
    quantity: number;
    plant_preference?: string;
    location: string;
    notes?: string;
}

// API Response Types
export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    success: boolean;
}

// Navigation Types
export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}
