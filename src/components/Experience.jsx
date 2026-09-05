import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';

const Experience = () => {
    const { lang } = useLanguage();
    const experiences = data.experience;

    const title = lang === 'en' ? 'Experience' : 'Experiencia';

    const content = {
        en: [
            {
                title: experiences[0].title,
                company: experiences[0].company,
                period: experiences[0].period,
                description: experiences[0].description
            },
            {
                title: experiences[1].title,
                company: experiences[1].company,
                period: experiences[1].period,
                description: experiences[1].description
            },
            {
                title: experiences[2].title,
                company: experiences[2].company,
                period: experiences[2].period,
                description: experiences[2].description
            }
        ],
        es: [
            {
                title: "Desarrollador Full Stack Junior",
                company: "Cerebiia",
                period: "06/2026 - 07/2026",
                description: "Se construyó un software ERP orientado a la centralización de datos y la mejora de los procesos de fabricación, cuyo backend fue desarrollado bajo arquitectura hexagonal utilizando el framework Django junto con bases de datos PostgreSQL, mientras que el frontend se implementó con React y TypeScript, haciendo uso de web components y hooks para el consumo de APIs; adicionalmente, el ciclo de vida del desarrollo se gestionó con Git, aplicando buenas prácticas como conventional commits y manejo de ramas, y se realizaron pruebas y validación de los endpoints de la API mediante Postman, complementando la gestión de tareas ágiles a través de Jira."
            },
            {
                title: "Desarrollador de Software",
                company: "Colegio Ebenezer",
                period: "01/2025 - 02/2026",
                description: "Se desarrollaron y optimizaron sitios web institucionales y proyectos internos utilizando PHP, HTML, CSS y JavaScript, al mismo tiempo que se gestionó de forma integral la infraestructura en la nube, administrando servidores en Hostinger, dominios y correos corporativos; asimismo, se administraron y configuraron plataformas educativas basadas en Moodle, incluyendo la gestión de usuarios y contenidos, se diseñaron, administraron y consultaron bases de datos relacionales estructuradas para el soporte de aplicaciones, y se brindó soporte técnico integral para la optimización del rendimiento de hardware y software de la infraestructura tecnológica."
            },
            {
                title: "Apoyo Logístico",
                company: "Plan B Investments S.A.S",
                period: "09/2023 - 12/2024",
                description: "Se realizó el análisis y la gestión de datos de productividad del personal e inventarios mediante el sistema ERP SIESA, enfocando la optimización de los procesos administrativos en la mejora de la eficiencia del flujo de operaciones; asimismo, se llevó a cabo el control digital de inventarios y el monitoreo de variables críticas para asegurar la integridad de la información, se supervisaron los despachos bajo estándares de calidad garantizando el cumplimiento de los procesos operativos, logrando así la promoción al cargo de Apoyo Logístico gracias al alto desempeño en la resolución de problemas y organización."
            }
        ]
    };

    const translated = content[lang] || content.en;

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="experience-card">
                            <div className="experience-image">
                                <img src={exp.image} alt={translated[index].title} loading="lazy" />
                            </div>
                            <div className="experience-content">
                                <h3>{translated[index].title}</h3>
                                <h4>{translated[index].company}</h4>
                                <span className="period">{translated[index].period}</span>
                                <p>{translated[index].description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;