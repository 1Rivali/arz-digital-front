import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HolographicTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function HolographicText({
  children,
  className,
  as: Component = "div",
}: HolographicTextProps) {
  return (
    <Component
      className={cn(
        "relative inline-block",
        "bg-gradient-to-r from-primary via-amber-200 to-cyan-300",
        "bg-clip-text text-transparent",
        "bg-[length:200%_auto]",
        "animate-[shimmer_3s_linear_infinite]",
        className
      )}
      style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </Component>
  );
}
