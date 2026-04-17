import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/About'));
const Experience = dynamic(() => import('@/components/Experience'));
const Projects = dynamic(() => import('@/components/Projects'));
const Education = dynamic(() => import('@/components/Education'));
const Skills = dynamic(() => import('@/components/Skills'));
const Contact = dynamic(() => import('@/components/Contact'));

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
