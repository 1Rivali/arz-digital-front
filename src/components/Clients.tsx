import { TextReveal } from "./TextReveal";

import shattibLogo from "@/assets/svg/companies/shattib-logo.svg";
import pcaLogo from "@/assets/svg/companies/pca-logo.svg";
import fcLogo from "@/assets/svg/companies/fc-logo.svg";
import awaedLogo from "@/assets/svg/companies/awaed-logo.svg";
import alphaLogo from "@/assets/svg/companies/alpha-logo.svg";
import Marquee from "react-fast-marquee";
const clients = [
  { name: "Shattib", logo: shattibLogo },
  { name: "PCA", logo: pcaLogo },
  { name: "FC", logo: fcLogo },
  { name: "Awaed", logo: awaedLogo },
  { name: "Alpha", logo: alphaLogo },
];

const Clients = () => {
  return (
    <section className="py-16 px-6 border-y border-border/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <TextReveal
          as="p"
          className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-12"
        >
          Trusted by Industry Leaders
        </TextReveal>

        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <Marquee speed={50} gradient={false}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-20 px-8 mx-4 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 shrink-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain max-w-[150px]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Clients;
