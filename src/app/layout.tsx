import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicolastheodosiou.pages.dev/"),
  title: "Nicolas Theodosiou — Full Stack Developer, Cyprus",
  description:
    "I am a Full Stack Developer based in Cyprus, specializing in React, Next.js, Spring Boot, and modern web solutions.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Nicolas Theodosiou" }],
  keywords: [
    "Full Stack Developer",
    "Cyprus",
    "Nicolas",
    "Theodosiou",
    "React",
    "Next.js",
    "Spring Boot",
    "Software Engineer",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://nicolastheodosiou.pages.dev/",
    title: "Nicolas Theodosiou — Full Stack Developer",
    description:
      "Full Stack Developer based in Cyprus. Experienced in React, Next.js, Spring Boot, and mobile development.",
    images: [
      { url: "https://nicolastheodosiou.pages.dev/images/prof-nobg.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Theodosiou — Full Stack Developer",
    description: "Full Stack Developer based in Cyprus.",
    images: ["https://nicolastheodosiou.pages.dev/images/prof-nobg.png"],
  },
};
 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="antialiased font-body bg-background-obsidian text-text-primary selection:bg-accent-gold selection:text-background-obsidian">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
