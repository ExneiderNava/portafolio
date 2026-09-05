import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { lang, toggleLang } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = {
        en: ['Home', 'About', 'Experience', 'Projects', 'Contact'],
        es: ['Inicio', 'Sobre mí', 'Experiencia', 'Proyectos', 'Contacto']
    };

    const links = navLinks[lang] || navLinks.en;

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
                        <img src="./perfil.webp" alt="logo" className='navbar-logo-img' />
                    </a>
                </div>
                <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    {links.map((text, index) => {
                        const ids = ['home', 'about', 'experience', 'projects', 'contact'];
                        return (
                            <li key={index}>
                                <a href={`#${ids[index]}`} onClick={(e) => handleLinkClick(e, ids[index])}>
                                    {text}
                                </a>
                            </li>
                        );
                    })}
                    <li>
                        <button className="lang-btn" onClick={toggleLang}>
                            {lang === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;