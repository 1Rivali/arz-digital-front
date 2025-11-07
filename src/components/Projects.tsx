import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "./ScrollReveal";
import { TextReveal } from "./TextReveal";
import { GlowCard } from "./GlowCard";
import { AnimatedGradient } from "./AnimatedGradient";

const projects = [
  {
    title: "Enterprise Resource Platform",
    category: "Web Application",
    description:
      "Full-stack ERP system managing operations for 10,000+ users across multiple regions.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "FinTech Mobile App",
    category: "Mobile",
    description:
      "Secure banking application with real-time transactions and biometric authentication.",
    tags: ["React Native", "TypeScript", "Blockchain"],
  },
  {
    title: "Healthcare Analytics",
    category: "Data Platform",
    description:
      "AI-powered analytics platform processing millions of medical records daily.",
    tags: ["Python", "TensorFlow", "GCP", "BigQuery"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <AnimatedGradient speed={0.2} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient neon-glow">Projects</span>
          </TextReveal>
          <TextReveal
            as="p"
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            delay={200}
          >
            A glimpse into the transformative solutions we've delivered
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <GlowCard intensity="high" className="h-full">
                <Card className="card-shadow glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 h-full relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative z-10">
                    <div className="mb-2">
                      <Badge
                        variant="secondary"
                        className="text-xs glass-effect border-primary/30"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
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

export default Projects;
