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
            {/* Minimalist Hero Section */}
            <section className="relative pt-40 pb-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium mb-6"
                        >
                            <Images className="w-4 h-4" />
                            Our Portfolio
                        </span>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)] leading-tight"
                        >
                            Our Green
                            <br />
                            <span className="text-[var(--primary-600)]">Masterpieces</span>
                        </h1>
                        <p
                            className="text-lg text-[var(--text-secondary)] leading-relaxed"
                            style={{ maxWidth: "600px" }}
                        >
                            A showcase of our finest work. Explore our collection of completed projects, from intimate home gardens to expansive corporate landscapes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Gallery Grid */}
            <section className="pb-24 pt-4 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <GalleryGrid />
                </div>
            </section>
        </>
    );
}
