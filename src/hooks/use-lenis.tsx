import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for ultra-smooth scrolling
    const lenisInstance = new Lenis({
      duration: 1.5, // Longer duration for smoother feel
      easing: (t) => {
        // Custom easing function for buttery smooth scrolling (ease-out cubic)
        return 1 - Math.pow(1 - t, 3);
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly reduced for smoother control
      touchMultiplier: 1.5, // Optimized for touch devices
      infinite: false,
    });

    setLenis(lenisInstance);

    // Optimized animation frame loop with better performance
    let rafId: number;
    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const element = document.querySelector(href) as HTMLElement;
          if (element) {
            lenisInstance.scrollTo(element, {
              offset: -80, // Account for fixed navigation
              duration: 2, // Longer duration for smoother scroll-to
              easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Cleanup
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenisInstance.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

