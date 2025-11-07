import { useEffect, useRef } from "react";

interface GridPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export function GridPattern({
  className = "",
  size = 40,
  opacity = 0.1,
}: GridPatternProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let currentOffset = 0;
    let targetOffset = 0;

    // Use lerp for smoother grid movement
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateGrid = () => {
      if (!element) return;
      const scrollY = window.scrollY;
      targetOffset = scrollY % (size * 2);

      // Smooth interpolation for buttery smooth grid movement
      currentOffset = lerp(currentOffset, targetOffset, 0.15);
      element.style.backgroundPosition = `0 ${currentOffset}px`;
      element.style.willChange = "background-position";
    };

    window.addEventListener("scroll", updateGrid, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateGrid);
      element.style.willChange = "auto";
    };
  }, [size]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary) / ${opacity}) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary) / ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage:
          "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}
