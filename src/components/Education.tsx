"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Medal, Globe } from "lucide-react";

const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "University of Cyprus",
  period: "2020 — 2024",
  stats: ["GPA: 8.86 / 10", "Distinction Award", "Top 10 of Class"],
};

const certifications = [
  {
    title: "Web Development Certificate",
    description: "HTML5, CSS3, jQuery, JavaScript, WordPress and SEO.",
    icon: Globe,
  },
  {
    title: "SINN 2022 Finalist",
    description:
      "Student Innovators Competition. Finalist with Shoppy groceries app.",
    icon: Medal,
  },
  {
    title: "IGCSE English — Grade A",
    description:
      "University of Cambridge. Advanced proficiency in academic English.",
    icon: Award,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 px-6 md:px-12 bg-surface-slate border-y border-border-subtle"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-accent-gold/80 mb-4 block font-medium">
              03 — Education
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12">
              Academic{" "}
              <span className="italic text-accent-gold">background</span>
            </h2>

            <motion.div
              whileTap={{ scale: 0.98 }}
              className="p-8 md:p-12 border border-border-subtle bg-background-obsidian relative group cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-gold to-transparent" />
              <GraduationCap className="text-accent-gold mb-6" size={32} />

              <span className="font-display text-[10px] uppercase tracking-[0.2em] text-text-dim block mb-3">
                {education.period}
              </span>
              <h3 className="font-serif text-2xl md:text-4xl text-white mb-2">
                {education.degree}
              </h3>
              <p className="font-display text-[12px] md:text-sm uppercase tracking-[0.2em] text-text-muted mb-8 italic">
                {education.school}
              </p>

              <div className="flex flex-wrap gap-3">
                {education.stats.map((stat) => (
                  <span
                    key={stat}
                    className="px-4 py-2 border border-accent-gold/20 bg-accent-gold/5 text-accent-gold font-display text-[9px] uppercase tracking-widest rounded-sm"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-accent-gold/80 mb-4 block font-medium">
              04 — Certifications
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12">
              Professional{" "}
              <span className="italic text-accent-gold">recognition</span>
            </h2>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-6 md:p-8 border border-white/5 bg-background-obsidian hover:border-accent-gold/30 transition-[border-color] duration-500 rounded-sm group cursor-default"
                >
                  <cert.icon className="text-accent-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-serif text-xl text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
