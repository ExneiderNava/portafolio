import './App.css'
import { useEffect } from 'react'
import ParticlesBackground from './particlesBackgroun'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  // --- LÓGICA PARA EL GLOW (se mantiene igual) ---
  useEffect(() => {
    const portfolioContainer = document.querySelector('.portfolio');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = portfolioContainer.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      portfolioContainer.style.setProperty('--x', `${x}px`);
      portfolioContainer.style.setProperty('--y', `${y}px`);
    };

    portfolioContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      portfolioContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="portfolio">
        <ParticlesBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App