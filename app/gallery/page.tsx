import { Metadata } from "next";
import { Images } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Browse our portfolio of completed gardening and landscaping projects in Bangalore. See transformations across residential, commercial, and event spaces.",
};

export default function GalleryPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-b from-[var(--primary-50)] to-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium mb-8">
                            <Images className="w-4 h-4" />
                            Our Work
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--text-primary)] leading-tight">
                            Project
                            <br />
                            <span className="text-[var(--primary-600)]">Gallery</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                            Explore our portfolio of completed projects. From backyard
                            transformations to corporate green spaces, see the quality of our
                            work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <GalleryGrid />
                </div>
            </section>
        </>
    );
}
