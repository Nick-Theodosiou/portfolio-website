"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { THEME } from "@/constants/theme";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        'default_service',
        'template_tp3lmtb',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        {
          publicKey: 'L-9SKgKDZw3pBLo1i'
        }
      );
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      console.error("Failed to send message:", errorMessage);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-16 md:py-32 px-6 md:px-12 bg-background-obsidian relative overflow-hidden"
    >
      {/* Background Grid & Ambient */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-accent-gold/5 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-display text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-accent-gold/80 mb-8 block font-medium">
              06 — Contact
            </span>

            <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-[1.1]">
              Let&apos;s build <br />
              <span className="italic text-accent-gold font-light">
                something together
              </span>
            </h2>

            <p className="text-text-muted text-lg mb-12 max-w-md leading-relaxed">
              I’m always open to new opportunities. Whether you have a question
              or just want to say hi, I’ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:nicolas.theodosiou.cy@gmail.com"
                className="group flex items-center gap-4 text-white hover:text-accent-gold transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-gold/50 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-serif text-xl italic border-b border-transparent group-hover:border-accent-gold/30 pb-1">
                  nicolas.theodosiou.cy@gmail.com
                </span>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Nick-Theodosiou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accent-gold/50 hover:text-accent-gold transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolas-theodosiou-29b93723a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accent-gold/50 hover:text-accent-gold transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 border border-border-subtle bg-surface-slate/30 glass rounded-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-display text-[10px] uppercase tracking-widest text-text-dim"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50 transition-colors rounded-[2px]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-display text-[10px] uppercase tracking-widest text-text-dim"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your email"
                  className="w-full bg-white/5 border border-white/10 p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50 transition-colors rounded-[2px]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-display text-[10px] uppercase tracking-widest text-text-dim"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What's on your mind?"
                  className="w-full bg-white/5 border border-white/10 p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50 transition-colors rounded-[2px] resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { 
                  backgroundColor: THEME.colors.accentGoldTransparent,
                  color: THEME.colors.accentGold 
                } : {}}
                whileTap={!isSubmitting ? { 
                  scale: 0.95,
                  backgroundColor: THEME.colors.accentGoldTransparent,
                  color: THEME.colors.accentGold
                } : {}}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className={`w-full py-5 font-display text-[11px] uppercase tracking-[0.3em] font-bold rounded-[2px] transition-all duration-150 mt-4 border ${
                  submitStatus === "success" 
                    ? "bg-green-500/20 text-green-400 border-green-500/50"
                    : submitStatus === "error"
                    ? "bg-red-500/20 text-red-400 border-red-500/50"
                    : isSubmitting
                    ? "bg-transparent text-accent-gold border-accent-gold/50 cursor-wait opacity-70"
                    : "bg-accent-gold text-background-obsidian border-accent-gold cursor-pointer hover:bg-transparent hover:text-accent-gold"
                }`}
              >
                {isSubmitting ? "Sending..." : submitStatus === "success" ? "Message Sent!" : submitStatus === "error" ? "Try Again" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
