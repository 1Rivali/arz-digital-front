import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  stagger = 0,
  as: Component = "div",
}: TextRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: true,
    delay: delay + stagger,
  });

  return (
    <Component
      ref={ref as any}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </Component>
  );
}

