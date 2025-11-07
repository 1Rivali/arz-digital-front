import { TextReveal } from "./TextReveal";
import { useRef, useEffect, useCallback, useState } from 'react';
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = SCROLL_AMOUNT;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

    const newPosition = direction === 'left'
      ? Math.max(0, currentScroll - scrollAmount)
      : Math.min(maxScroll, currentScroll + scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
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
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex py-4 select-none overflow-x-auto scrollbar-hide items-center"
          >
            <div className="flex mx-auto md:mx-0">
              {clients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center h-16 md:h-20 px-4 md:px-8 mx-2 md:mx-4 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 flex-shrink-0 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                >
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center h-full"
                    aria-label={`Visit ${client.name} website`}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto max-h-12 md:max-h-16 object-contain pointer-events-none"
                      draggable="false"
                      loading={index > clients.length * 2 ? "eager" : "lazy"}
                    />
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
