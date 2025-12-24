import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    label?: string;
    align?: "left" | "center" | "right";
    dark?: boolean;
}

export function SectionHeading({
    title,
    subtitle,
    label,
    align = "center",
    dark = false,
    className,
    ...props
}: SectionHeadingProps) {
    const alignClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    return (
        <div
            className={cn("max-w-3xl mb-12", alignClasses[align], align === "center" && "mx-auto", className)}
            {...props}
        >
            {label && (
                <span
                    className={cn(
                        "inline-block text-sm font-semibold uppercase tracking-wider mb-3 px-3 py-1 rounded-full",
                        dark
                            ? "bg-white/10 text-white/80"
                            : "bg-[var(--primary-100)] text-[var(--primary-700)]"
                    )}
                >
                    {label}
                </span>
            )}
            <h2
                className={cn(
                    "font-serif mb-4",
                    dark ? "text-white" : "text-[var(--text-primary)]"
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "text-lg",
                        dark ? "text-white/70" : "text-[var(--text-secondary)]"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
