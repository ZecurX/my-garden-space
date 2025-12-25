"use client";

import { useEffect, useState, useRef, ReactNode, useCallback } from "react";
import { motion, useMotionValue, useAnimation, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    baseWidth: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
    children?: ReactNode[];
}

export default function Carousel({
    baseWidth,
    autoplay = true,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = true,
    round = false,
    children = [],
}: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const x = useMotionValue(0);
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    // Calculate total width of all items
    const totalWidth = children.length * baseWidth;

    // Update container width on mount/resize
    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = useCallback(() => {
        const currentX = x.get();
        // Snap to grid
        const snappedX = Math.round(currentX / baseWidth) * baseWidth;
        const nextX = snappedX - baseWidth;

        // Calculate bounds
        const viewportWidth = containerWidth || 0; // Fallback
        const minX = -totalWidth + viewportWidth;

        // If we are about to scroll past the end
        if (nextX < minX) {
            if (loop) {
                // Loop back to start
                controls.start({ x: 0, transition: { duration: 0.8, ease: "easeInOut" } });
            } else {
                // Just bounce at end or stay
                controls.start({ x: minX, transition: { duration: 0.3, ease: "easeOut" } });
            }
        } else {
            controls.start({ x: nextX, transition: { duration: 0.5, ease: "easeOut" } });
        }
    }, [baseWidth, containerWidth, totalWidth, loop, controls, x]);

    const handlePrev = useCallback(() => {
        const currentX = x.get();
        const snappedX = Math.round(currentX / baseWidth) * baseWidth;
        const nextX = snappedX + baseWidth;

        if (nextX > 0) {
            if (loop) {
                const viewportWidth = containerWidth || 0;
                const minX = -totalWidth + viewportWidth;
                // Jump to end
                const target = minX > 0 ? 0 : minX;
                controls.start({ x: target, transition: { duration: 0.8, ease: "easeInOut" } });
            } else {
                controls.start({ x: 0, transition: { duration: 0.3, ease: "easeOut" } });
            }
        } else {
            controls.start({ x: nextX, transition: { duration: 0.5, ease: "easeOut" } });
        }
    }, [baseWidth, containerWidth, totalWidth, loop, controls, x]);

    // Autoplay logic
    useEffect(() => {
        if (!autoplay || (pauseOnHover && isHovered)) return;

        const interval = setInterval(handleNext, autoplayDelay);

        return () => clearInterval(interval);
    }, [autoplay, autoplayDelay, pauseOnHover, isHovered, handleNext]); // handleNext is memoized now


    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const currentX = x.get();
        const snapX = Math.round(currentX / baseWidth) * baseWidth;

        const viewportWidth = containerWidth || 0;
        const minX = -totalWidth + viewportWidth;

        const targetX = Math.max(minX, Math.min(0, snapX));

        controls.start({ x: targetX, transition: { duration: 0.5 } });
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden w-full h-full flex items-center group ${totalWidth < containerWidth ? "justify-center" : "justify-start"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="flex"
                drag="x"
                dragConstraints={{
                    left: -totalWidth + (containerWidth || 0),
                    right: 0
                }}
                onDragEnd={handleDragEnd}
                animate={controls}
                style={{ x, cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}
            >
                {children?.map((child, index) => (
                    <div
                        key={index}
                        style={{
                            width: baseWidth,
                            flexShrink: 0,
                            padding: "0 10px", // Gutter
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        {child}
                    </div>
                ))}
            </motion.div>

            {/* Navigation Arrows */}
            <>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                    }}
                    className="absolute left-4 z-50 p-3 rounded-full bg-white shadow-lg border border-neutral-200 text-neutral-700 hover:bg-[var(--primary-600)] hover:text-white transition-all duration-300 pointer-events-auto"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                    }}
                    className="absolute right-4 z-50 p-3 rounded-full bg-white shadow-lg border border-neutral-200 text-neutral-700 hover:bg-[var(--primary-600)] hover:text-white transition-all duration-300 pointer-events-auto"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </>
        </div>
    );
}
