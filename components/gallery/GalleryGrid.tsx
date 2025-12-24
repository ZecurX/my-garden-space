"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Backyard Landscaping",
        category: "residential",
        location: "Whitefield, Bangalore",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Garden Maintenance",
        category: "residential",
        location: "Koramangala, Bangalore",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Corporate Office Plants",
        category: "commercial",
        location: "MG Road, Bangalore",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Wedding Plant Decor",
        category: "events",
        location: "Palace Grounds",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Vertical Garden",
        category: "commercial",
        location: "Indiranagar, Bangalore",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Pergola Installation",
        category: "residential",
        location: "HSR Layout",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Water Fountain",
        category: "residential",
        location: "Jayanagar, Bangalore",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Indoor Plant Setup",
        category: "commercial",
        location: "Electronic City",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Showroom Plants",
        category: "events",
        location: "Marathahalli",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1558635924-f34f3d1f8ea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Lawn Development",
        category: "residential",
        location: "Sarjapur Road",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Terrace Garden",
        category: "balcony",
        location: "Malleshwaram",
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Drip Irrigation System",
        category: "residential",
        location: "Yelahanka",
    },
];

const categories = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "events", label: "Events" },
    { key: "balcony", label: "Balcony/Terrace" },
];

export default function GalleryGrid() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages =
        activeFilter === "all"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeFilter);

    const currentImageIndex = selectedImage
        ? filteredImages.findIndex((img) => img.id === selectedImage)
        : -1;

    const goToNext = () => {
        if (currentImageIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentImageIndex + 1].id);
        }
    };

    const goToPrev = () => {
        if (currentImageIndex > 0) {
            setSelectedImage(filteredImages[currentImageIndex - 1].id);
        }
    };

    return (
        <>
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => setActiveFilter(cat.key)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat.key
                                ? "bg-[var(--primary-600)] text-white shadow-md"
                                : "bg-[var(--neutral-100)] text-[var(--text-secondary)] hover:bg-[var(--neutral-200)]"
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
                <AnimatePresence>
                    {filteredImages.map((image) => (
                        <motion.div
                            key={image.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedImage(image.id)}
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                                <h3 className="text-white font-semibold">{image.title}</h3>
                                <p className="text-white/70 text-sm">{image.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Navigation */}
                        {currentImageIndex > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                                className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        )}
                        {currentImageIndex < filteredImages.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        )}

                        {/* Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative max-w-5xl max-h-[85vh] w-full h-full m-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {filteredImages.find((img) => img.id === selectedImage) && (
                                <>
                                    <Image
                                        src={
                                            filteredImages.find((img) => img.id === selectedImage)!
                                                .src
                                        }
                                        alt={
                                            filteredImages.find((img) => img.id === selectedImage)!
                                                .title
                                        }
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-white text-xl font-semibold">
                                            {
                                                filteredImages.find((img) => img.id === selectedImage)!
                                                    .title
                                            }
                                        </h3>
                                        <p className="text-white/70">
                                            {
                                                filteredImages.find((img) => img.id === selectedImage)!
                                                    .location
                                            }
                                        </p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
