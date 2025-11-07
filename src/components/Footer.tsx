import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import arzLogo from "@/assets/arz-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Section */}


        {/* Footer Bottom */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <img
                src={arzLogo}
                alt="ARZ Digital Co"
                className="h-32 w-auto object-contain opacity-80"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 ARZ digital. Crafting excellence in software development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
