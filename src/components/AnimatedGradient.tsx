import { useEffect, useRef } from "react";

interface AnimatedGradientProps {
  className?: string;
  speed?: number;
}

export function AnimatedGradient({ className = "", speed = 1 }: AnimatedGradientProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let animationId: number;
    let time = 0;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;
      
      time += delta * speed * 0.5; // Smooth time progression
      const x = Math.sin(time) * 50 + 50;
      const y = Math.cos(time * 0.7) * 50 + 50;
      
      // Use transform for better performance
      element.style.backgroundPosition = `${x}% ${y}%`;
      element.style.willChange = "background-position";
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      element.style.willChange = "auto";
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 opacity-30 ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 50%, hsl(42 78% 80% / 0.3) 0%, transparent 50%),
                     radial-gradient(circle at 30% 70%, hsl(189 97% 55% / 0.2) 0%, transparent 50%),
                     radial-gradient(circle at 70% 30%, hsl(42 78% 80% / 0.2) 0%, transparent 50%)`,
        backgroundSize: "200% 200%",
        backgroundPosition: "50% 50%",
        filter: "blur(60px)",
      }}
    />
  );
}

