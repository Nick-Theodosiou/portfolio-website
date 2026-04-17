"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Jinius by Bank of Cyprus",
    role: "Full Stack Developer",
    period: "07/2025 — Present",
    current: true,
  },
  {
    company: "TSYS",
    role: "Software Engineer",
    period: "08/2024 — 07/2025",
    bullets: [
      "Developed and maintained database solutions using PL/SQL and Oracle Database.",
      "Designed and implemented RESTful APIs with Spring Boot.",
      "Leveraged CI/CD pipelines to automate deployment and testing.",
    ],
  },
  {
    company: "Algolysis Ltd.",
    role: "Software Developer",
    period: "11/2023 — 05/2024",
    bullets: [
      "Built a responsive web app for poultry farms using React and Next.js.",
      "Created a charting package with Laravel for dynamic data visualisations.",
      "Optimised expensive queries via InfluxQL, improving system-wide efficiency.",
    ],
  },
  {
    company: "Bank of Cyprus",
    role: "Software Developer Intern",
    period: "06/2023 — 08/2023",
    bullets: [
      "Developed screens for the 1bank quick loans section, enabling fully digital signing.",
      "Built and integrated REST APIs with Spring Boot.",
      "Collaborated with designers to modernise legacy iFrames.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-32 px-6 md:px-12 bg-surface-slate border-y border-border-subtle overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-accent-gold/80 mb-4 block font-medium">
            01 — Experience
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Where I&apos;ve{" "}
            <span className="italic text-accent-gold">done my work</span>
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-20">
          <div className="absolute left-[1px] md:left-[3px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent-gold via-accent-gold/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group cursor-default"
              >
                <div
                  className={cn(
                    "absolute -left-[32px] md:-left-[81px] top-8 w-3 h-3 rounded-full border-2 border-accent-gold bg-background-obsidian z-10 transition-all duration-700 group-hover:bg-accent-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]",
                    exp.current &&
                      "bg-accent-gold shadow-[0_0_20px_rgba(212,175,55,0.6)]",
                  )}
                />

                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="p-8 md:p-12 border border-white/5 bg-surface-slate/40 glass rounded-sm transition-all duration-700 hover:border-accent-gold/40 hover:bg-surface-slate/60"
                >
                  <div
                    className={cn(
                      "flex flex-col md:flex-row md:items-center justify-between gap-6",
                      exp.bullets && "mb-8",
                    )}
                  >
                    <div>
                      <h3 className="font-serif text-3xl md:text-5xl text-white mb-3 group-hover:text-accent-gold transition-colors duration-500">
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-5">
                        <span className="font-display text-sm md:text-base uppercase tracking-widest text-text-muted transition-colors duration-500 group-hover:text-white">
                          {exp.role}
                        </span>
                        <span className="hidden md:block w-8 h-[1px] bg-border-subtle" />
                        <span className="font-display text-sm md:text-base uppercase tracking-widest text-accent-gold font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="self-start md:self-center px-5 py-2 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold font-display text-[11px] uppercase tracking-widest font-bold rounded-full">
                        Currently Active
                      </span>
                    )}
                  </div>

                  {exp.bullets && (
                    <ul className="space-y-4 max-w-3xl">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-text-muted text-lg leading-relaxed flex items-start gap-4"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 mt-2.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
