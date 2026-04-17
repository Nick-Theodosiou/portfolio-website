"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 md:py-24 px-6 md:px-12 border-t border-border-subtle bg-background-obsidian pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="font-display text-[11px] md:text-sm uppercase tracking-[0.15em] text-text-dim order-2 md:order-1">
          © {new Date().getFullYear()} Nicolas Theodosiou. All rights reserved.
        </p>
        
        <ul className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4 order-1 md:order-2">
          <li>
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Nick-Theodosiou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-display text-[11px] md:text-sm uppercase tracking-[0.15em] text-text-muted hover:text-accent-gold transition-colors cursor-pointer block"
            >
              GitHub
            </motion.a>
          </li>
          <li>
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/nicolas-theodosiou-29b93723a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-display text-[11px] md:text-sm uppercase tracking-[0.15em] text-text-muted hover:text-accent-gold transition-colors cursor-pointer block"
            >
              LinkedIn
            </motion.a>
          </li>
          <li>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-[11px] md:text-sm uppercase tracking-[0.2em] text-accent-gold hover:text-white transition-all duration-300 flex items-center gap-3 group cursor-pointer"
            >
              <span className="relative overflow-hidden inline-flex items-center h-[14px] md:h-5">
                <span className="transition-transform duration-500 group-hover:-translate-y-full">Back to top</span>
                <span className="absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full">Back to top</span>
              </span>
              <div className="w-8 h-8 rounded-full border border-accent-gold/20 flex items-center justify-center group-hover:border-accent-gold transition-all duration-500">
                <ArrowUp size={14} className="transition-transform duration-500 group-hover:-translate-y-1" />
              </div>
            </motion.button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
