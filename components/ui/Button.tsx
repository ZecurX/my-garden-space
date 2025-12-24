import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "white" | "ghost" | "dark";
    size?: "sm" | "md" | "lg" | "xs";
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading,
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

        const variants = {
            primary:
                "bg-[var(--primary-700)] text-white shadow-md hover:bg-[var(--primary-600)] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-[var(--primary-500)]",
            secondary:
                "bg-[var(--neutral-100)] text-[var(--text-primary)] border border-[var(--neutral-200)] hover:bg-[var(--neutral-200)] hover:-translate-y-0.5 focus-visible:ring-[var(--neutral-400)]",
            outline:
                "bg-transparent text-[var(--primary-700)] border-[1.5px] border-[var(--primary-600)] hover:bg-[var(--primary-50)] hover:-translate-y-0.5 focus-visible:ring-[var(--primary-500)]",
            white:
                "bg-white text-[var(--text-primary)] shadow-md hover:bg-[var(--neutral-50)] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-[var(--neutral-400)]",
            ghost:
                "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--neutral-100)] hover:text-[var(--text-primary)] focus-visible:ring-[var(--neutral-400)]",
            dark:
                "bg-[var(--neutral-900)] text-white hover:bg-[var(--neutral-800)] hover:-translate-y-0.5 focus-visible:ring-[var(--neutral-600)]",
        };

        const sizes = {
            xs: "px-3.5 py-1.5 text-xs",
            sm: "px-5 py-2 text-sm",
            md: "px-7 py-2.5 text-[0.9375rem]",
            lg: "px-9 py-3 text-base",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
