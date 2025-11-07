import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  threshold?: number;
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    triggerOnce,
    delay,
  });

  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    fade: "",
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
    >
      {children}
    </div>
  );
}

