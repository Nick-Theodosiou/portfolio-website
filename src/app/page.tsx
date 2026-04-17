import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      
      <Hero />
      <div className="relative z-10 space-y-0">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
