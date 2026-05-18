import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Technical from './components/Technical.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Marquee from './components/Marquee.jsx';
import { useActiveSection } from './components/useActiveSection.js';
import { usePointerGlow } from './components/usePointerGlow.js';
import { useRevealSections } from './components/useRevealSections.js';
import { navItems } from './data/content.js';

export default function App() {
  usePointerGlow();
  useRevealSections();
  const activeSection = useActiveSection(navItems.map((item) => item.href.slice(1)));

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Technical />
        <Education />
        <Contact />
      </main>
      <footer className="wrap footer">
        &copy; 2026 Cooper Timmins. Personal resume and portfolio website.
      </footer>
    </>
  );
}
