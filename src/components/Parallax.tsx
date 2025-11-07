import { useEffect, useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "vertical" | "horizontal";
}

export function Parallax({
  children,
  speed = 0.5,
  className = "",
  direction = "vertical",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const initialOffset = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;

    // Use lerp for smoother parallax movement
    let currentDistance = 0;
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateParallax = () => {
      if (!element) return;

      const scrolled = window.scrollY;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Only apply parallax when element is in or near viewport
      if (elementBottom >= 0 && elementTop <= windowHeight) {
        // Calculate parallax based on scroll position relative to element
        const elementCenter = initialOffset + elementHeight / 2;
        const viewportCenter = scrolled + windowHeight / 2;
        const targetDistance = (viewportCenter - elementCenter) * speed;

        // Smooth interpolation for buttery smooth parallax
        currentDistance = lerp(currentDistance, targetDistance, 0.1);

        if (direction === "vertical") {
          element.style.transform = `translate3d(0, ${currentDistance}px, 0)`;
        } else {
          element.style.transform = `translate3d(${currentDistance}px, 0, 0)`;
        }
      }
    };

    window.addEventListener("scroll", updateParallax, { passive: true });
    return () => window.removeEventListener("scroll", updateParallax);
  }, [speed, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
