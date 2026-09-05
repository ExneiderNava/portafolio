import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';

const Projects = () => {
    const { lang } = useLanguage();
    const projects = data.projects;

    const title = lang === 'en' ? 'Projects' : 'Proyectos';

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="projects-grid">
                    {projects.map(proj => (
                        <div key={proj.id} className="project-card">
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                {lang === 'en' ? 'View Project' : 'Ver Proyecto'}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;