"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { THEME } from "@/constants/theme";

const roles = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Problem Solver",
  "UI/UX Thinker",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-16 px-6"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.9]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 95%)",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent-gold/12 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-indigo/15 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_max-content] gap-12 lg:gap-24 items-center relative z-10 w-full mt-[-2rem] md:mt-[-4rem]">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-accent-gold" />
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-accent-gold">
              Based in Cyprus
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight mb-8"
          >
            Nicolas
            <br />
            <span className="italic text-accent-gold">Theodosiou</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-8 mb-6 font-display text-sm md:text-base tracking-widest text-text-muted flex items-center"
          >
            <span>{displayText}</span>
            <span className="w-[2px] h-5 bg-accent-gold ml-2 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-text-muted text-base md:text-lg leading-relaxed mb-10"
          >
            Full Stack Developer specializing in architecting scalable,
            high-performance digital products, from robust backend systems to
            polished user interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              aria-label="View my projects"
              whileTap={{
                scale: 0.95,
                backgroundColor: THEME.colors.accentGoldTransparent,
                color: THEME.colors.accentGold,
              }}
              className="px-8 py-4 bg-accent-gold text-background-obsidian font-display text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[2px] transition-all duration-150 hover:bg-transparent hover:text-accent-gold border border-accent-gold cursor-pointer"
            >
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              aria-label="Contact me"
              whileHover={{
                color: "rgba(255, 255, 255, 1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{
                scale: 0.95,
                borderColor: "rgba(255, 255, 255, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "rgba(255, 255, 255, 1)",
              }}
              transition={{ duration: 0.15 }}
              className="px-8 py-4 border border-border-subtle text-text-muted font-display text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[2px] transition-all duration-150 cursor-pointer"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group hidden md:block cursor-default h-[560px] w-[420px]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent-gold/5 blur-[100px] rounded-full -z-30" />

          <div className="absolute inset-0 bg-surface-slate/60 border border-white/5 -rotate-6 rounded-sm -z-10 shadow-2xl transition-transform duration-700 group-hover:-rotate-3 group-active:-rotate-3" />
          <div className="absolute inset-4 bg-accent-gold/[0.03] border border-accent-gold/20 rotate-12 rounded-sm -z-20 transition-transform duration-700 group-hover:rotate-6 group-active:rotate-6" />

          <div className="relative z-10 transition-transform duration-700 overflow-visible h-full flex items-center justify-center">
            <Image
              src="/images/prof-nobg.png"
              alt="Nicolas Theodosiou"
              width={420}
              height={560}
              priority
              quality={100}
              unoptimized
              className="transition-all duration-700 block object-contain max-h-[500px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_20px_60px_rgba(212,175,55,0.1)]"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 lg:h-16 bg-gradient-to-b from-accent-gold/50 to-transparent" />
        <span className="font-display text-[8px] uppercase tracking-[0.4em] text-text-dim vertical-rl">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
