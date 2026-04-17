"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Target, Zap, Layers } from "lucide-react";
import { THEME } from "@/constants/theme";

const skills = {
  technical: [
    "JavaScript",
    "React",
    "Next.js",
    "Flutter",
    "Salesforce",
    "Wordpress",
    "Java",
    "Spring Boot",
    "Laravel",
    "Python",
    "SQL",
    "Oracle DB",
    "Postman",
    "Git",
    "Figma",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "Android Studio",
  ],
  personal: [
    "Team Leadership",
    "Problem Solving",
    "Agile / Scrum",
    "Creative Thinking",
    "Organisational Planning",
  ],
};

const principles = [
  {
    icon: <Target className="text-accent-gold" size={24} />,
    title: "Precision",
    desc: "Deep attention to detail. I build clean systems that are easy to read and simple to maintain.",
  },
  {
    icon: <Zap className="text-accent-gold" size={24} />,
    title: "Performance",
    desc: "Speed isn't an afterthought. I optimize for the best possible user experience from the start.",
  },
  {
    icon: <Layers className="text-accent-gold" size={24} />,
    title: "Scalability",
    desc: "Future-proof architecture. Writing code that stays flexible as your project and user base grows.",
  },
];
export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackWidthRef = useRef(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 3;
      trackWidthRef.current = width;
      // Start at the middle segment for maximum drag runway
      x.set(-width);
    }
  }, [x]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        trackWidthRef.current = trackRef.current.scrollWidth / 3;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll loop
  useAnimationFrame((time, delta) => {
    if (!trackWidthRef.current) return;

    const trackWidth = trackWidthRef.current;
    let currentX = x.get();

    // 1. Apply auto-scroll (only if not interacting)
    if (!isHovered && !isDragging) {
      const scrollSpeed = 0.05;
      currentX -= delta * scrollSpeed;
    }

    // 2. Always apply wrapping logic (even during drag/hover)
    if (currentX <= -trackWidth * 2) {
      currentX += trackWidth;
    } else if (currentX >= -trackWidth * 0.5) {
      currentX -= trackWidth;
    }

    x.set(currentX);
  });

  return (
    <section
      id="skills"
      className="py-16 md:py-32 px-6 md:px-12 bg-background-obsidian relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-indigo/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-accent-gold/80 mb-4 block font-medium">
              05 — Skills
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-7xl leading-tight">
            Engineering{" "}
            <span className="italic text-accent-gold">Expertise</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-10 flex items-center gap-4 px-1">
              <span className="w-8 h-[1px] bg-accent-gold/50" />
              Technical Stack
            </h3>

            <div
              className="relative py-10 border-y border-white/5 bg-surface-slate/20 rounded-sm overflow-hidden select-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
            >
              <motion.div
                ref={trackRef}
                style={{
                  x,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                drag="x"
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                className="flex gap-4 md:gap-6 whitespace-nowrap items-center cursor-grab active:cursor-grabbing will-change-transform"
              >
                {/* Tripled list for a absolute seamless loop on all device widths */}
                {[
                  ...skills.technical,
                  ...skills.technical,
                  ...skills.technical,
                ].map((skill, i) => (
                  <motion.div
                    key={`${skill}-${i}`}
                    whileTap={{ scale: 0.95 }}
                    style={{ backfaceVisibility: "hidden" }}
                    className="p-4 md:p-8 min-w-[120px] md:min-w-[200px] border border-white/[0.05] bg-surface-slate/80 rounded-sm hover:border-accent-gold/40 hover:bg-surface-slate/90 transition-all duration-700 flex flex-col items-center justify-center gap-3 md:gap-4 group cursor-inherit"
                  >
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/[0.03] group-hover:bg-accent-gold/10 flex items-center justify-center transition-all duration-500">
                      <span className="text-[9px] md:text-xs text-accent-gold group-hover:scale-110 transition-transform font-bold uppercase">
                        {skill.substring(0, 2)}
                      </span>
                    </div>
                    <span className="font-display text-[10px] md:text-sm uppercase tracking-widest text-text-muted group-hover:text-white transition-colors duration-500">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="absolute top-0 left-0 w-12 md:w-40 h-full bg-gradient-to-r from-background-obsidian to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-12 md:w-40 h-full bg-gradient-to-l from-background-obsidian to-transparent z-10 pointer-events-none" />
            </div>
            <p className="mt-4 font-display text-[9px] uppercase tracking-[0.2em] text-text-dim/60 text-center">
              Auto-scrolling • Swipe to explore
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-8">
              <h3 className="font-serif text-3xl text-white mb-10 flex items-center gap-6">
                Core Principles
                <div className="h-[1px] flex-1 bg-border-subtle" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {principles.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="p-8 border border-white/5 bg-surface-slate/20 rounded-sm hover:border-accent-gold/20 transition-all duration-500 group cursor-default"
                  >
                    <div className="mb-6 w-12 h-12 rounded-sm bg-accent-gold/5 flex items-center justify-center group-hover:bg-accent-gold/10 transition-colors">
                      {p.icon}
                    </div>
                    <h4 className="font-serif text-xl text-white mb-3 group-hover:text-accent-gold transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col">
              <h3 className="font-serif text-3xl text-white mb-10 flex items-center gap-6">
                Approach
                <div className="h-[1px] flex-1 bg-border-subtle" />
              </h3>
              <div className="space-y-3 flex-1">
                {skills.personal.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                      x: 5,
                      scale: 1.02,
                      borderColor: THEME.colors.accentGold,
                    }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-5 border border-white/[0.05] bg-surface-slate/80 shadow-xl rounded-sm group transition-all duration-700 cursor-default"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-2 h-2 rounded-full bg-accent-gold group-hover:shadow-[0_0_15px_rgba(var(--accent-gold-raw),1)] transition-all duration-500" />
                      <span className="font-display text-sm md:text-base uppercase tracking-widest text-white/90 group-hover:text-accent-gold transition-colors duration-500">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
