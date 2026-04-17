"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  images: string[];
  title: string;
  isMobile?: boolean;
}

export default function ProjectCarousel({
  images,
  title,
  isMobile = false,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(() => Date.now());

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Swipe detection constants
  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Auto-slide with interaction pause
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceInteraction = Date.now() - lastInteraction;
      if (timeSinceInteraction > 10000) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, lastInteraction]);

  const onInteraction = () => setLastInteraction(Date.now());

  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-sm bg-surface-slate border border-white/5 transition-colors duration-500 hover:border-accent-gold/20",
        isMobile ? "aspect-[9/16] max-w-[280px] mx-auto" : "aspect-video",
      )}
      onClick={onInteraction}
      onTouchStart={onInteraction}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={isDragging ? false : { opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={isDragging ? { opacity: 0 } : { opacity: 0, x: -100 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragStart={() => {
            setIsDragging(true);
            onInteraction();
          }}
          onDragEnd={(e, { offset, velocity }) => {
            setIsDragging(false);
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold || offset.x < -50) {
              handleNext();
            } else if (swipe > swipeConfidenceThreshold || offset.x > 50) {
              handlePrev();
            }
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center p-2 cursor-grab active:cursor-grabbing w-full h-full touch-pan-y"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            className={cn(
              "grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 pointer-events-none select-none",
              "object-contain object-center"
            )}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 pointer-events-none">
        <div className="flex gap-2 px-3 py-2 bg-background-obsidian/30 backdrop-blur-md rounded-full border border-white/5 pointer-events-auto">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                currentIndex === i
                  ? "bg-accent-gold w-4"
                  : "bg-white/20 hover:bg-white/40",
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          handlePrev();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background-obsidian/40 backdrop-blur-sm text-white/50 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer pointer-events-auto"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          handleNext();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background-obsidian/40 backdrop-blur-sm text-white/50 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer pointer-events-auto"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
