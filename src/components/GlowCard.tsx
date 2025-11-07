import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlowCard({
  children,
  className,
  glowColor = "hsl(42 78% 80%)",
  intensity = "medium",
}: GlowCardProps) {
  const intensityMap = {
    low: "0 0 20px",
    medium: "0 0 40px",
    high: "0 0 60px",
  };

  return (
    <div
      className={cn(
        "relative group",
        "before:absolute before:inset-0 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-500",
        "before:bg-gradient-to-r before:from-primary/20 before:via-primary/10 before:to-transparent",
        "group-hover:before:opacity-100",
        className
      )}
      style={{
        boxShadow: `${intensityMap[intensity]} ${glowColor}20`,
      }}
    >
      <div className="relative z-10">{children}</div>
      <div
        className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${glowColor}40, transparent)`,
        }}
      />
    </div>
  );
}

