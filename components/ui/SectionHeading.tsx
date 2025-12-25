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
            className={cn(
                "max-w-3xl mb-14",
                alignClasses[align],
                align === "center" && "mx-auto",
                className
            )}
            style={align === "center" ? { textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" } : undefined}
            {...props}
        >
            {label && (
                <span
                    className={cn(
                        "inline-block text-xs font-semibold uppercase tracking-widest mb-4",
                        dark
                            ? "text-white/60"
                            : "text-[var(--primary-600)]"
                    )}
                    style={align === "center" ? { textAlign: "center" } : undefined}
                >
                    {label}
                </span>
            )}
            <h2
                className={cn(
                    "text-3xl md:text-4xl font-bold mb-5",
                    dark ? "text-white" : "text-[var(--text-primary)]"
                )}
                style={align === "center" ? { textAlign: "center" } : undefined}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "text-lg leading-relaxed max-w-2xl",
                        align === "center" && "mx-auto text-center",
                        dark ? "text-white/65" : "text-[var(--text-secondary)]"
                    )}
                    style={align === "center" ? { textAlign: "center" } : undefined}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
