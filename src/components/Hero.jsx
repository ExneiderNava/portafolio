import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { lang } = useLanguage();

    const whatsappNumber = '3167221636';

    const content = {
        en: {
            badge: "Hello, I'm Exneider Nava, Software Developer",
            title: "How can I help you?",
            linkText: "Contact me, click here for chat with me on Whatsapp",
            message: "Hello%20I%20come%20from%20your%20portfolio"
        },
        es: {
            badge: "Hola, soy Exneider Nava, Desarrollador de Software",
            title: "¿Cómo puedo ayudarte?",
            linkText: "Contáctame, haz clic aquí para hablar conmigo en Whatsapp",
            message: "Hola%20vengo%20de%20tu%20portafolio"
        }
    };

    const c = content[lang] || content.en;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${c.message}`;

    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <span className="hero-badge">{c.badge}</span>
                <h1 className="hero-title">{c.title}</h1>
                <div className="hero-links">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-link">
                        {c.linkText}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;