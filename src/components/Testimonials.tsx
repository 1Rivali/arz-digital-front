import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { GlowCard } from "./GlowCard";
import { AnimatedGradient } from "./AnimatedGradient";
import { GridPattern } from "./GridPattern";

const testimonials = [
  {
    quote:
      "ARZ digital transformed our legacy systems into a modern, scalable platform. Their expertise in handling complex enterprise architecture is unmatched.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Fortune 500 Financial",
  },
  {
    quote:
      "Working with ARZ digital was a game-changer. They delivered a mobile app that handles millions of transactions daily with zero downtime.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "Global Healthcare",
  },
  {
    quote:
      "The level of craftsmanship and attention to detail is exceptional. They don't just build software—they engineer solutions that drive business growth.",
    author: "Emily Watson",
    role: "Chief Product Officer",
    company: "Tech Unicorn",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <AnimatedGradient speed={0.25} />
      <GridPattern size={50} opacity={0.1} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-bold mb-4">
            Client <span className="text-gradient neon-glow">Testimonials</span>
          </TextReveal>
          <TextReveal
            as="p"
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            delay={200}
          >
            Hear from the leaders who trust us with their most critical projects
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <GlowCard intensity="medium" className="h-full">
                <Card className="card-shadow glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 relative hover:-translate-y-2 group h-full overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Glowing border on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                  <CardContent className="pt-8 pb-6 relative z-10">
                    {/* Quote icon with glow effect */}
                    <div className="mb-4 relative">
                      <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/60 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />
                      <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Stars with enhanced glow */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-all duration-300"
                          style={{ animationDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-muted-foreground mb-6 leading-relaxed italic group-hover:text-foreground/90 transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>

                    {/* Author info with glassmorphic border */}
                    <div className="border-t border-primary/20 group-hover:border-primary/40 pt-4 transition-colors duration-300">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary mt-1 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
