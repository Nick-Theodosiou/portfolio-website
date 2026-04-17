"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#education" },
  { name: "Skills", href: "#skills" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navigation background opacity
      setIsScrolled(window.scrollY > 50);

      const sectionIds = ["about", "experience", "projects", "education", "skills"];
      const triggerLine = 200; // Highlight section when it crosses this Y-pixel from top
      const docHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.scrollY + window.innerHeight;

      // Bottom of page: explicitly lock to Skills
      if (scrollBottom >= docHeight - 100) {
        setActiveSection("skills");
        return;
      }

      // Top of page: clear highlights
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Greedy check: find the last section that has crossed our trigger line
      let current = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            current = id;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ borderBottom: "1px solid rgba(255, 255, 255, 0)" }}
      animate={{ 
        backgroundColor: isScrolled ? "rgba(5, 5, 5, 0.8)" : "rgba(5, 5, 5, 0)",
        backdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "blur(0px) saturate(100%)",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(255, 255, 255, 0)",
        paddingTop: isScrolled ? "12px" : "16px",
        paddingBottom: isScrolled ? "12px" : "16px"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="hover:opacity-80 transition-opacity"
        >
          <motion.span 
            whileTap={{ scale: 0.95 }}
            className="font-serif text-2xl italic tracking-tight text-accent-gold block cursor-pointer"
          >
            NT
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group",
                      activeSection === link.href.substring(1) 
                        ? "text-accent-gold" 
                        : "text-text-muted hover:text-white"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-[1px] bg-accent-gold transition-all duration-300",
                      activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="font-display text-[10px] uppercase tracking-[0.2em] text-accent-gold border border-[rgba(var(--accent-gold-raw),0.3)] px-5 py-2 hover:bg-accent-gold hover:text-background-obsidian transition-all duration-300 rounded-[2px]"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-background-obsidian/98 backdrop-blur-2xl flex flex-col items-center justify-center p-6 h-[100dvh] w-full"
          >
            <button
              className="absolute top-8 right-8 text-text-muted hover:text-white transition-colors p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: i * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "font-serif text-3xl md:text-5xl transition-colors",
                      activeSection === link.href.substring(1) ? "text-accent-gold" : "hover:text-accent-gold"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-6"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-sm uppercase tracking-[0.3em] text-accent-gold border border-[rgba(var(--accent-gold-raw),0.4)] px-10 py-4 rounded-sm hover:bg-accent-gold hover:text-background-obsidian transition-all duration-300"
                >
                  Let&apos;s talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
