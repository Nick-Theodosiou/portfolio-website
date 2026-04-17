"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { THEME } from "@/constants/theme";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(212, 178, 70, 0.2)",
            borderColor: THEME.colors.accentGold 
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[99] p-4 bg-background-obsidian/40 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl transition-colors duration-300 group cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="text-accent-gold group-hover:text-white transition-colors" size={20} />
          
          {/* Subtle Outer Ring Reveal */}
          <div className="absolute inset-0 rounded-full border border-[rgba(var(--accent-gold-raw),0)] group-hover:border-[rgba(var(--accent-gold-raw),0.2)] transition-all scale-125 group-hover:scale-100 opacity-0 group-hover:opacity-100 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
