/**
 * Centralized theme constants to ensure consistency across CSS and Framer Motion animations.
 * These values are used to satisfy technical requirements (like Framer Motion's need for resolved colors)
 * while maintaining a single source of truth.
 */

export const THEME = {
  colors: {
    // Primary gold accent
    accentGold: "#D4B246",
    accentGoldRaw: "212, 178, 70",
    
    // Transparent versions for smooth color transitions in Framer Motion
    accentGoldTransparent: "rgba(212, 178, 70, 0)",
    
    // Backgrounds
    obsidian: "#050505",
    obsidianTransparent: "rgba(5, 5, 5, 0)",
    
    // White/Text
    white: "#FFFFFF",
    whiteTransparent: "rgba(255, 255, 255, 0)",
    textPrimary: "#E4DFD8",
  },
  animations: {
    duration: {
      fast: 0.15,
      normal: 0.3,
      slow: 0.8,
    },
    ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
  },
};
