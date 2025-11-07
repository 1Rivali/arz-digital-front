import { Code2, Smartphone, Cloud, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { GlowCard } from "./GlowCard";
import { AnimatedGradient } from "./AnimatedGradient";
import { GridPattern } from "./GridPattern";

const services = [
  {
    icon: Code2,
    title: "Web Applications",
    description: "High-performance, scalable web solutions built with cutting-edge technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver seamless experiences across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Enterprise-grade cloud infrastructure designed for reliability, security, and optimal performance.",
  },
  {
    icon: Layers,
    title: "System Integration",
    description: "Complex system integrations that connect your ecosystem with precision and efficiency.",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <AnimatedGradient speed={0.3} />
      <GridPattern size={50} opacity={0.1} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-bold mb-4">
            What We <span className="text-gradient neon-glow">Deliver</span>
          </TextReveal>
          <TextReveal as="p" className="text-muted-foreground text-lg max-w-2xl mx-auto" delay={200}>
            Comprehensive solutions designed for the demands of modern enterprise
          </TextReveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <GlowCard intensity="medium" className="h-full">
                <Card 
                  className="card-shadow glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden h-full"
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                  
                  <CardContent className="pt-6 relative z-10">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
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

export default Services;
