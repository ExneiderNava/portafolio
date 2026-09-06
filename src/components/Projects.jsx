import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';

const Projects = () => {
    const { lang } = useLanguage();
    const projects = data.projects;

    const translations = {
        en: {
            title: "Projects",
            items: projects.map(proj => ({
                title: proj.title,
                description: proj.description,
                link: proj.link
            }))
        },
        es: {
            title: "Proyectos",
            items: [
                {
                    title: "Uniformes Activa - Software ERP",
                    description: "Se desarrolló un sistema integral de gestión empresarial (ERP) orientado a centralizar datos y optimizar los procesos de cotización y fabricación de prendas de vestir, cuya arquitectura backend fue diseñada bajo un patrón de arquitectura hexagonal utilizando el framework Django y PostgreSQL para la persistencia de datos y el manejo de migraciones; para el entorno de interfaz de usuario frontend se implementó React con TypeScript, haciendo uso de web components y hooks para el consumo eficiente de los endpoints de la API, mientras que el desarrollo incluyó además el prototipado en Lovable, la validación de servicios en Postman y una gestión colaborativa bajo metodologías ágiles con Jira, con control de versiones en Git.",
                    link: "#"
                },
                {
                    title: "ventacucuta.com",
                    description: "Se diseñó una plataforma propia de comercio electrónico para la venta en línea, con un ecosistema completo que soporta desde la selección de productos hasta el pago y el envío, desarrollada utilizando WordPress y Hostinger y dotada de funcionalidades y características personalizadas mediante plugins basados en PHP y JavaScript; el proyecto incluyó además la integración de pasarelas de pago, la optimización de la experiencia de usuario y la aplicación de buenas prácticas de SEO y marketing digital, orientadas a la operación técnica y el mantenimiento del sitio.",
                    link: "https://ventacucuta.com/"
                },
                {
                    title: "Smart Flow",
                    description: "Se diseñó un sistema de gestión y organización de reservas de aulas para el Colegio Ebenezer, con el fin de optimizar el control de los espacios institucionales, construido utilizando el framework Laravel basado en PHP para toda la lógica de negocio del backend; para el entorno de interfaz de usuario frontend se implementaron HTML, CSS y JavaScript, soportando el almacenamiento y la persistencia de los datos mediante una base de datos relacional estructurada en SQL.",
                    link: "https://github.com/ExneiderNava/SmartFlow.git"
                }
            ]
        }
    };

    const current = translations[lang] || translations.en;
    const title = current.title;
    const items = current.items;

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="projects-grid">
                    {items.map((proj, index) => (
                        <div key={index} className="project-card">
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