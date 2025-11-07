import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";

import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <Hero />
      <Clients />
      {/* <Stats /> */}
      <section id="services">
        <Services />
      </section>
      <WhyChooseUs />
      <section id="tech">
        <TechStack />
      </section>
      <Process />
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
