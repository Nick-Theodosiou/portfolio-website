"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME } from "@/constants/theme";

import ProjectCarousel from "./ProjectCarousel";

const projects = [
  {
    title: "Padel Point Cy",
    year: "2026",
    description: [
      "Lead developer and technical owner of the largest padel e-commerce store in Cyprus",
      "Built and maintain a WordPress/WooCommerce multisite setup with stock synchronization",
      "Manage hosting, DNS configuration, and infrastructure changes",
      "Handled incident response and mitigation of DDoS attacks for stability",
      "Manage Google Ads and Analytics conversion tracking for sales growth",
    ],
    images: [
      "/images/Padelpoint/img1.webp",
      "/images/Padelpoint/img2.webp",
      "/images/Padelpoint/img3.webp",
      "/images/Padelpoint/img4.webp",
      "/images/Padelpoint/img5.webp",
    ],
    tags: ["Wordpress", "Woocommerce", "Cloudflare"],
    link: "https://www.padelpointcy.com/",
    isMobile: false,
  },
  {
    title: "Alfa Foods",
    year: "2026",
    description: [
      "Website development for a leading frozen food manufacturer in Cyprus",
      "Built with React and Next.js for high-performance and SEO",
      "Manage and optimize Google Business Profile to drive local B2B and retail traffic",
    ],
    images: [
      "/images/Alfafoods/img1.webp",
      "/images/Alfafoods/img2.webp",
      "/images/Alfafoods/img3.webp",
      "/images/Alfafoods/img4.webp",
      "/images/Alfafoods/img5.webp",
    ],
    tags: ["Next.js", "SEO", "Google Business"],
    link: "https://www.alfafoodscy.com/",
    isMobile: false,
  },
  {
    title: "Personal Trainer",
    year: "2025",
    description: [
      "Custom design in Figma followed by React/Next.js development",
      "Deployed on Vercel with integrated analytics and performance monitoring",
      "SEO optimized for local personal training client acquisition",
    ],
    images: [
      "/images/Pt-Website/image1.webp",
      "/images/Pt-Website/image2.webp",
      "/images/Pt-Website/image3.webp",
      "/images/Pt-Website/image4.webp",
      "/images/Pt-Website/image5.webp",
      "/images/Pt-Website/image6.webp",
      "/images/Pt-Website/image7.webp",
    ],
    tags: ["React", "Next.js", "Vercel"],
    link: "https://www.gpapanikolifts.com/",
    isMobile: false,
  },
  {
    title: "Shoppy",
    year: "2022",
    description: [
      "Cross-platform grocery app surfacing supermarket discounts",
      "Led a cross-functional team of 6 developers and designers",
      "Selected as a SINN 2022 Finalist for innovation",
    ],
    images: [
      "/images/Shoppy/img1.webp",
      "/images/Shoppy/img2.webp",
      "/images/Shoppy/img3.webp",
      "/images/Shoppy/img4.webp",
      "/images/Shoppy/img5.webp",
      "/images/Shoppy/img6.webp",
    ],
    tags: ["Flutter", "MariaDB", "Team Leadership"],
    link: "https://github.com/Nick-Theodosiou/shoppy",
    isMobile: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-32 px-6 md:px-12 bg-background-obsidian overflow-hidden"
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
            02 — Projects
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Things I&apos;ve{" "}
            <span className="italic text-accent-gold">shipped</span>
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              whileTap={{
                scale: 0.98,
                borderColor: THEME.colors.accentGold,
                backgroundColor: "rgba(10, 10, 10, 0.6)",
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group flex flex-col items-center lg:items-center gap-10 p-5 md:p-12 border border-white/5 bg-surface-slate/20 glass rounded-sm hover:border-accent-gold/40 hover:bg-surface-slate/40 transition-all duration-700 cursor-default overflow-hidden",
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row",
              )}
            >
              <div className="flex-1 w-full relative order-2 lg:order-none">
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                  isMobile={project.isMobile}
                />
              </div>

              <div className="flex-1 w-full min-w-0 flex flex-col justify-center order-1 lg:order-none">
                <h3 className="font-serif text-3xl md:text-5xl text-white group-hover:text-accent-gold transition-colors duration-500 leading-tight mb-6">
                  {project.title}
                </h3>

                <div className="flex items-center gap-6 w-full mb-6">
                  <div className="flex items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar py-1 shrink-0">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-display text-[11px] md:text-[13px] uppercase tracking-widest text-text-muted transition-colors duration-500 group-hover:text-white whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <ul className="space-y-3 mb-8 max-w-xl">
                  {project.description.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex gap-4 text-text-muted text-[15px] md:text-[17px] leading-relaxed group-hover:text-white/80 transition-colors duration-500"
                    >
                      <span className="text-accent-gold shrink-0 mt-[0.6em] w-1 h-1 rounded-full bg-accent-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore case study for ${project.title}`}
                    className="inline-flex items-center gap-4 font-display text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-accent-gold hover:text-white transition-all duration-300 group/link cursor-pointer"
                  >
                    <span>Explore case study</span>
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
