import { TextReveal } from "./TextReveal";
import { useRef, useState, useEffect } from 'react';
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

const Clients = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 5; // Increased for faster autoplay
  const animationRef = useRef<number>();
  const lastFrameTime = useRef<number>(0);
  const frameDuration = 1000 / 60; // 60fps

  // Auto-scroll effect
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    let animationId: number;
    let isScrolling = true;
    let isUserScrolling = false;
    let resumeTimeout: NodeJS.Timeout;

    const pauseAutoscroll = () => {
      isUserScrolling = true;
      setIsPaused(true);
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isUserScrolling = false;
        setIsPaused(false);
      }, 3000); // Resume autoscroll after 3 seconds of inactivity
    };

    const handleWheel = () => {
      if (!isUserScrolling) {
        pauseAutoscroll();
      }
    };

    const animate = (timestamp: number) => {
      if (!lastFrameTime.current) lastFrameTime.current = timestamp;
      const deltaTime = timestamp - lastFrameTime.current;

      if (!isPaused && !isDown && deltaTime > frameDuration) {
        lastFrameTime.current = timestamp;

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          // Reset to start immediately when reaching the end (no smooth to prevent stutter)
          slider.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          // Use requestAnimationFrame for smoother animation
          const currentScroll = slider.scrollLeft;
          slider.scrollTo({
            left: currentScroll + scrollSpeed,
            behavior: 'auto' // Using 'auto' for smoother performance
          });
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    // Add wheel event for mouse wheel scrolling
    slider.addEventListener('wheel', handleWheel);

    // Start animation with timestamp
    animationId = requestAnimationFrame((timestamp) => {
      lastFrameTime.current = timestamp;
      animate(timestamp);
    });

    // Handle hover
    const handleMouseEnter = () => {
      if (!isUserScrolling) {
        setIsPaused(true);
      }
    };

    const handleMouseLeave = () => {
      if (!isUserScrolling) {
        setIsPaused(false);
      }
      setIsDown(false);
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resumeTimeout);
      slider.removeEventListener('wheel', handleWheel);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPaused, isDown]);

  // Handle click and drag
  const handleStart = (clientX: number) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setIsPaused(true);
    setStartX(clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleEnd = () => {
    setIsDown(false);
    // Don't resume autoscroll immediately after drag ends
    // It will be handled by the resumeTimeout in the effect
  };

  const handleMove = (clientX: number) => {
    if (!isDown || !sliderRef.current) return;
    const x = clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.pageX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    handleMove(e.pageX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    setIsDown(true);
    setIsPaused(true);
    setStartX(touch.clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDown(false);
    // Let the effect handle resuming autoscroll after delay
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDown || !sliderRef.current) return;
    const touch = e.touches[0];
    const x = touch.clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Reduced multiplier for better touch control
    sliderRef.current.scrollLeft = scrollLeft - walk;
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

        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={sliderRef}
            className="flex py-4 cursor-grab select-none will-change-transform custom-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
              overflowX: 'auto',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',

            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchCancel={handleTouchEnd}
          >
            <div className="flex">
              {[...clients, ...clients].map((client, index) => (
                <a
                  key={`${client.name}-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-20 px-8 mx-4 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 flex-shrink-0 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                  aria-label={`Visit ${client.name} website`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto object-contain max-w-[150px] pointer-events-none"
                    draggable="false"
                  />
                </a>
              ))}
            </div>
          </div>
          <style>{`
            [class*="overflow-x"], .custom-scrollbar {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            [class*="overflow-x"]::-webkit-scrollbar,
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Clients;
