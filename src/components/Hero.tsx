import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Parallax } from "./Parallax";
import { TextReveal } from "./TextReveal";
import { AnimatedGradient } from "./AnimatedGradient";
import { GridPattern } from "./GridPattern";
import { HolographicText } from "./HolographicText";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <AnimatedGradient speed={0.5} />

      {/* Background Image with Parallax */}
      <Parallax speed={0.3} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </Parallax>

      {/* Animated Grid Pattern */}
      <GridPattern size={60} opacity={0.15} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Floating Orbs with Glow */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-cyan-400/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-amber-400/20 to-primary/30 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/25 to-primary/20 blur-2xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div>
          {/* Main Heading with Holographic Effect */}
          <TextReveal delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 max-w-5xl mx-auto">
              <HolographicText as="span" className="block mb-4">
                ARZ digital
              </HolographicText>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mt-4">
                Elite software development
              </span>
            </h1>
          </TextReveal>

          <TextReveal
            as="p"
            className="text-lg md:text-xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            delay={300}
          >
            We build large-scale web and mobile applications that set industry
            standards. Where innovation meets excellence.
          </TextReveal>

          <TextReveal delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              {/* <Button
                size="lg"
                variant="hero"
                className="text-white group relative overflow-hidden glass-effect border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:text-black"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="group glass-effect border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#tech">
                  <Sparkles className="mr-2 h-5 w-5 text-primary group-hover:animate-pulse" />
                  View Our Work
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="group glass-effect hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </TextReveal>
        </div>
      </div>

      {/* Bottom Fade with Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
