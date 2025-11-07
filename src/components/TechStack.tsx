import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { AnimatedGradient } from "./AnimatedGradient";
import { GridPattern } from "./GridPattern";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "AWS",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
];

const TechStack = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <AnimatedGradient speed={0.3} />
      <GridPattern size={40} opacity={0.12} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-bold mb-4">
            Our{" "}
            <span className="text-gradient neon-glow">Technology Stack</span>
          </TextReveal>
          <TextReveal
            as="p"
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            delay={200}
          >
            We leverage industry-leading technologies to build robust, scalable
            solutions
          </TextReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <ScrollReveal key={index} delay={index * 50} direction="fade">
              <div className="px-6 py-3 rounded-lg glass-effect border-primary/30 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110 cursor-default group relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <span className="text-sm font-medium text-foreground relative z-10 group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
