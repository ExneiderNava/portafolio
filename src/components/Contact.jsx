import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';

const Contact = () => {
    const { lang } = useLanguage();
    const contact = data.contact;

    const title = lang === 'en' ? 'Contact Me' : 'Contáctame';
    const emailLabel = lang === 'en' ? 'Email' : 'Correo';
    const messageLabel = lang === 'en' ? 'Message' : 'Mensaje';
    const sendLabel = lang === 'en' ? 'Send' : 'Enviar';

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <p><strong>{emailLabel}:</strong> {contact.email}</p>
                        <div className="social-links">
                            <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href={contact.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder={emailLabel} required />
                        <textarea rows="4" placeholder={messageLabel} required></textarea>
                        <button type="submit">{sendLabel}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;