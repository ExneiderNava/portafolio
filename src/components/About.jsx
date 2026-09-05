import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';

const About = () => {
    const { lang } = useLanguage();
    const aboutData = data.about;

    const title = lang === 'en' ? aboutData.title : 'Sobre mí';
    const description = lang === 'en' ? aboutData.description : 'Soy un desarrollador web apasionado con experiencia en la construcción de aplicaciones web modernas y responsivas. Me encanta aprender nuevas tecnologías y resolver problemas complejos.';

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