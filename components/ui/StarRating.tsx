import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: "sm" | "md" | "lg";
    showValue?: boolean;
}

export function StarRating({
    rating,
    maxRating = 5,
    size = "md",
    showValue = false,
}: StarRatingProps) {
    const sizes = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
    };

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: maxRating }).map((_, index) => (
                <Star
                    key={index}
                    className={cn(
                        sizes[size],
                        index < rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-transparent text-[var(--neutral-300)]"
                    )}
                />
            ))}
            {showValue && (
                <span className="ml-1 text-sm text-[var(--text-secondary)]">
                    {rating}/{maxRating}
                </span>
            )}
        </div>
    );
}
