"use client";

import { motion } from "framer-motion";
import { THEME } from "@/constants/theme";

const stats = [
  {
    label: "Currently",
    title: "Full Stack Developer",
    sub: "Jinius by Bank of Cyprus",
  },
  {
    label: "Education",
    title: "BSc Computer Science",
    sub: "University of Cyprus · GPA 8.86/10",
  },
  {
    label: "Location",
    title: "Cyprus",
    sub: "Open to international opportunities",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-32 px-6 md:px-12 bg-background-obsidian relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-accent-gold/80 mb-4 block font-medium">
            00 — About
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            A developer who cares about{" "}
            <span className="italic text-accent-gold">every detail</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-text-muted text-lg md:text-xl leading-relaxed lg:pt-2"
          >
            <p>
              I&apos;m a{" "}
              <strong className="text-white font-medium">
                Full Stack Developer
              </strong>{" "}
              focused on building scalable, reliable web applications end to
              end. I work across the stack — from backend architecture and APIs
              to clean, intuitive interfaces that perform well in real-world
              use.
            </p>
            <p>
              At <strong className="text-white font-medium">Jinius</strong>, I
              turn complex product and business requirements into stable,
              high-performance features, taking ownership from planning and
              architecture through delivery and iteration.
            </p>
            <p>
              I care about writing clean, pragmatic code and building products
              that feel fast, reliable, and easy to use. I hold a{" "}
              <strong className="text-white font-medium">
                BSc Computer Science
              </strong>{" "}
              from the{" "}
              <strong className="text-white font-medium">
                University of Cyprus
              </strong>
              , graduating in the top 10 of my class.
            </p>

            <div className="pt-12 border-t border-border-subtle">
              <span className="font-display text-[10px] uppercase tracking-[0.2em] text-accent-gold mb-6 block">
                Primary Expertise
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["Web Apps", "E-Commerce", "Mobile Applications"].map(
                  (tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ x: 5 }}
                      whileTap={{ 
                        scale: 0.98,
                        color: THEME.colors.accentGold 
                      }}
                      className="flex items-center gap-3 group/tech cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 group-hover/tech:bg-accent-gold transition-colors" />
                      <span className="font-display text-[11px] md:text-[13px] uppercase tracking-widest text-text-muted group-hover/tech:text-white transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  y: -5,
                  borderColor: THEME.colors.accentGold,
                  backgroundColor: "rgba(10, 10, 10, 0.6)",
                }}
                whileTap={{
                  scale: 0.98,
                  borderColor: THEME.colors.accentGold,
                  backgroundColor: "rgba(10, 10, 10, 0.6)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 border border-white/[0.05] bg-surface-slate/50 group hover:border-accent-gold/40 hover:bg-surface-slate transition-all duration-500 rounded-sm cursor-default"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-[1px] bg-accent-gold/30 group-hover:w-10 group-hover:bg-accent-gold transition-all duration-500" />
                  <span className="font-display text-[13px] md:text-sm uppercase tracking-[0.3em] text-accent-gold/70 group-hover:text-accent-gold transition-colors duration-500">
                    {stat.label}
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-white group-hover:text-accent-gold transition-colors duration-500 leading-tight">
                  {stat.title}
                </h3>
                <p className="text-text-muted text-lg mt-3 transition-colors duration-500 group-hover:text-white">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
