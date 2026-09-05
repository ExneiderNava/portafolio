import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';

const Experience = () => {
    const { lang } = useLanguage();
    const experiences = data.experience;

    const title = lang === 'en' ? 'Experience' : 'Experiencia';

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="experience-grid">
                    {experiences.map(exp => (
                        <div key={exp.id} className="experience-card">
                            <div className="experience-image">
                                <img src={exp.image} alt={exp.title} loading="lazy" />
                            </div>
                            <div className="experience-content">
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <span className="period">{exp.period}</span>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;