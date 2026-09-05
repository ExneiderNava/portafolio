import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';

const About = () => {
    const { lang } = useLanguage();
    const aboutData = data.about;

    const title = lang === 'en' ? aboutData.title : 'Sobre mí';
    const description = lang === 'en' ? aboutData.description : 'Desarrollador de Software con experiencia real en producción, especializado en la creación, mantenimiento y optimización de plataformas web y sistemas de comercio electrónico. Competente en entornos backend y frontend utilizando PHP, JavaScript, HTML, CSS y Python. Cuento con destreza en la gestión de servidores, configuración de dominios, bases de datos (MySQL, phpMyAdmin) y soporte técnico integral. Proactivo, con capacidad de liderazgo y habituado a trabajar en equipo bajo estándares de alta eficiencia.';

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="about-grid">
                    <div className="about-image">
                        <img src={aboutData.image} alt="Profile" loading="lazy" />
                    </div>
                    <div className="about-text">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;