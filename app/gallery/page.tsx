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
            <section className="relative pt-32 pb-16 bg-gradient-to-b from-[var(--primary-50)] to-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium mb-6">
                            <Images className="w-4 h-4" />
                            Our Work
                        </span>
                        <h1 className="font-serif mb-6">
                            Project
                            <br />
                            <span className="text-[var(--primary-600)]">Gallery</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)]">
                            Explore our portfolio of completed projects. From backyard
                            transformations to corporate green spaces, see the quality of our
                            work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <GalleryGrid />
                </div>
            </section>
        </>
    );
}
