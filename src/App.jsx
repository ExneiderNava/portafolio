import './App.css'
import { useEffect } from 'react'
import ParticlesBackground from './particlesBackgroun'

function App() {

  // --- LÓGICA PARA QUE EL GLOW SIGA AL CURSOR ---
  useEffect(() => {
    const portfolioContainer = document.querySelector('.portfolio');

    // Función que actualiza las variables CSS (--x y --y)
    const handleMouseMove = (e) => {
      // Obtenemos la posición del ratón relativa al contenedor
      const { clientX, clientY } = e;
      const { left, top } = portfolioContainer.getBoundingClientRect();
      
      const x = clientX - left;
      const y = clientY - top;

      // Actualizamos las variables CSS
      portfolioContainer.style.setProperty('--x', `${x}px`);
      portfolioContainer.style.setProperty('--y', `${y}px`);
    };

    // Escuchamos el movimiento del ratón
    portfolioContainer.addEventListener('mousemove', handleMouseMove);

    // Limpiamos el evento al desmontar el componente (buena práctica)
    return () => {
      portfolioContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className="portfolio">

      <ParticlesBackground></ParticlesBackground>

      <div className="header-badge">
        <p>Hello, I'm Exneider Nava, Software Developer</p>
      </div>

      <h1 className="main-title">How can I help you?</h1>

      <div className="services-grid">
        <div className="service-card">
          <h1>My CV</h1>
        </div>
        <div className="service-card">
          <h1>My History</h1>
        </div>
        <div className="service-card">
          <h1>My Services</h1>
        </div>
      </div>
    </div>
  )
}

export default App
