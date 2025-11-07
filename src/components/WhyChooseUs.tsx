import { Shield, Zap, Users, Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { AnimatedGradient } from "./AnimatedGradient";
import { HolographicText } from "./HolographicText";

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level security protocols, compliance certifications, and data protection standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "Agile methodology with rapid iterations, ensuring faster time-to-market without compromising quality.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Senior engineers and architects exclusively focused on your project's success.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description:
      "Award-winning solutions recognized by industry leaders and satisfied clients worldwide.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <AnimatedGradient speed={0.2} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-bold mb-4">
            Why Choose{" "}
            <HolographicText as="span" className="text-gradient">
              ARZ digital
            </HolographicText>
          </TextReveal>
          <TextReveal
            as="p"
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            delay={200}
          >
            We don't just write code—we engineer solutions that transform
            businesses
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="left">
              <div className="flex gap-4 p-6 rounded-lg glass-effect border-primary/20 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex-shrink-0 relative z-10">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
