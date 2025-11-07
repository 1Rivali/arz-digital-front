import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/use-lenis";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercent = (scrolled / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progressPercent)));
    };

    if (typeof lenis.on === "function") {
      lenis.on("scroll", updateProgress);
      return () => {
        if (typeof lenis.off === "function") {
          lenis.off("scroll", updateProgress);
        }
      };
    } else {
      window.addEventListener("scroll", updateProgress, { passive: true });
      return () => window.removeEventListener("scroll", updateProgress);
    }
  }, [lenis]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-background/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-amber-200 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

