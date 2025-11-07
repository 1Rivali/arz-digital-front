import { useEffect, useRef, useState } from "react";

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatCounter = ({ end, label, suffix = "", prefix = "" }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold mb-2 text-gradient">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter end={8} label="Years of Excellence" suffix="+" />
          <StatCounter end={120} label="Projects Delivered" suffix="+" />
          <StatCounter end={50} label="Enterprise Clients" suffix="+" />
          <StatCounter end={98} label="Client Satisfaction" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
