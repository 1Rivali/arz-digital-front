import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Rocket, BarChart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { GlowCard } from "./GlowCard";
import { AnimatedGradient } from "./AnimatedGradient";
import { GridPattern } from "./GridPattern";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, technical requirements, and user needs to craft a comprehensive roadmap.",
    number: "01",
  },
  {
    icon: Code,
    title: "Design & Development",
    description:
      "Our expert team builds scalable, high-performance solutions using cutting-edge technologies and best practices.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Launch & Deployment",
    description:
      "Seamless deployment to production with comprehensive testing, monitoring, and optimization for peak performance.",
    number: "03",
  },
  {
    icon: BarChart,
    title: "Growth & Scale",
    description:
      "Continuous improvement, monitoring, and scaling to ensure your solution grows with your business needs.",
    number: "04",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <AnimatedGradient speed={0.25} />
      <GridPattern size={45} opacity={0.08} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient neon-glow">Process</span>
          </TextReveal>
          <TextReveal
            as="p"
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            delay={200}
          >
            A proven methodology that delivers exceptional results every time
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <GlowCard intensity="low" className="h-full">
                <Card className="card-shadow glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2 h-full flex flex-col">
                  {/* Number Background with Glow */}
                  <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5 leading-none -mr-4 -mt-4 group-hover:text-primary/10 group-hover:drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    {step.number}
                  </div>

                  <CardContent className="pt-8 pb-6 relative z-10">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {step.description}
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

export default Process;
