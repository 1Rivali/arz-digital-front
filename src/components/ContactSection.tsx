import { ContactForm } from "./ContactForm";
import { TextReveal } from "./TextReveal";
import { GlowCard } from "./GlowCard";
import { AnimatedGradient } from "./AnimatedGradient";
import { GridPattern } from "./GridPattern";

export function ContactSection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden" id="contact">
            {/* Background Effects */}
            <AnimatedGradient speed={0.3} />
            <GridPattern size={50} opacity={0.1} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <TextReveal as="h2" className="text-4xl md:text-6xl font-bold mb-4">
                        Get In <span className="text-gradient neon-glow">Touch</span>
                    </TextReveal>
                    <TextReveal
                        as="p"
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                        delay={200}
                    >
                        Have a project in mind or want to discuss potential collaboration?
                        We'd love to hear from you.
                    </TextReveal>
                </div>

                <div className="max-w-4xl mx-auto">
                    <GlowCard intensity="medium" className="w-full">
                        <div className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                            {/* Animated gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glowing border effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                            <div className="relative z-10">
                                <ContactForm />
                            </div>
                        </div>
                    </GlowCard>
                </div>
            </div>
        </section>
    );
}
