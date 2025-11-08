import { TextReveal } from "./TextReveal";
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import shattibLogo from "@/assets/svg/companies/shattib-logo.svg";
import pcaLogo from "@/assets/svg/companies/pca-logo.svg";
import fcLogo from "@/assets/svg/companies/fc-logo.svg";
import awaedLogo from "@/assets/svg/companies/awaed-logo.svg";
import alphaLogo from "@/assets/svg/companies/alpha-logo.svg";
import pscLogo from "@/assets/svg/companies/PSC-logo.svg";
import nanaLogo from "@/assets/svg/companies/nana-logo-trasnparent 1.svg";
import candlesLogo from "@/assets/svg/companies/candles-logo.svg";
import electricLogo from "@/assets/svg/companies/electric-logo.svg";
import morphiosLogo from "@/assets/svg/companies/morphios-logo.svg";
const clients = [
  { name: "nana", logo: nanaLogo, url: "https://nana.sa" },
  { name: "Awaed", logo: awaedLogo, url: "https://awaed.capital" },
  { name: "PSC", logo: pscLogo, url: "https://www.palmspringsarabia.com" },
  { name: "Morphicarts", logo: morphiosLogo, url: "https://www.morphicarts.sa" },
  { name: "electrical ways", logo: electricLogo, url: "https://electricalways.com" },
  { name: "Shattib", logo: shattibLogo, url: "https://shatib.sa" },
  { name: "Alpha", logo: alphaLogo, url: "https://etatweer.com" },
  { name: "FC", logo: fcLogo, },
  { name: "PCA", logo: pcaLogo, },
  { name: "candles", logo: candlesLogo, },
];

const SCROLL_AMOUNT = 300; // pixels to scroll per click

const Clients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const animationRef = useRef<number>();
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  // Auto-scroll effect
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused || isStopped) return;

    const container = scrollContainerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let scrollSpeed = 3; // pixels per frame (increased from 1.5)
    let currentScroll = container.scrollLeft;
    let direction = 1; // 1 for right, -1 for left

    const animate = () => {
      if (isPaused) return;

      currentScroll += scrollSpeed * direction;

      // Reverse direction at boundaries
      if (currentScroll <= 0) {
        currentScroll = 0;
        direction = 1;
      } else if (currentScroll >= maxScroll) {
        currentScroll = maxScroll;
        direction = -1;
      }

      container.scrollTo({
        left: currentScroll,
        behavior: 'auto'
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    // Stop auto-scroll permanently when manually navigating
    setIsStopped(true);

    const container = scrollContainerRef.current;
    const scrollAmount = SCROLL_AMOUNT;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const isAtStart = currentScroll <= 0;
    const isAtEnd = currentScroll >= maxScroll - 5;

    let newPosition: number;

    if (direction === 'left') {
      newPosition = isAtStart ? maxScroll : Math.max(0, currentScroll - scrollAmount);
    } else {
      newPosition = isAtEnd ? 0 : Math.min(maxScroll, currentScroll + scrollAmount);
    }

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    // No auto-resume after manual navigation
  };

  return (
    <section className="py-16 px-6 border-y border-border/30 relative overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <TextReveal
          as="p"
          className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-12"
        >
          Trusted by Industry Leaders
        </TextReveal>

        <div className="relative" ref={containerRef}>
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              setIsPaused(true);
              handleScroll('left');
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !isStopped && setIsPaused(false)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => {
              setIsPaused(true);
              handleScroll('right');
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !isStopped && setIsPaused(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex py-4 select-none overflow-x-auto scrollbar-hide items-center px-12 md:px-16 touch-pan-x"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !isStopped && setIsPaused(false)}
            onTouchStart={() => {
              isScrolling.current = true;
              setIsPaused(true);
            }}
            onTouchEnd={() => {
              isScrolling.current = false;
              if (!isStopped) {
                setIsPaused(false);
              }
            }}
            onScroll={() => {
              if (isScrolling.current) {
                setIsStopped(true);
                if (scrollTimeout.current) {
                  clearTimeout(scrollTimeout.current);
                }
                scrollTimeout.current = setTimeout(() => {
                  isScrolling.current = false;
                }, 100);
              }
            }}
          >
            <div className="flex mx-auto md:mx-0 pl-4 pr-4">
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center h-16 md:h-20 px-4 md:px-8 mx-2 md:mx-4 opacity-80 hover:opacity-100 transition-all duration-300 flex-shrink-0 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                >
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                    aria-label={`Visit ${client.name} website`}
                  >
                    <div className="relative w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-[80%] max-w-[90%] w-auto h-auto object-contain object-center pointer-events-none"
                        draggable="false"
                        loading={index > clients.length * 2 ? "eager" : "lazy"}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            @media (max-width: 768px) {
              .scrollbar-hide > div {
                margin: 0 auto;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Clients;
