import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { data } from '../data';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const { lang } = useLanguage();
    const contact = data.contact;
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const title = lang === 'en' ? 'Contact Me' : 'Contáctame';

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: contact.github,
            color: '#6e5494'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: contact.linkedin,
            color: '#0a66c2'
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp />,
            url: contact.whatsapp,
            color: '#25D366'
        },
        {
            name: 'Gmail',
            icon: <FaEnvelope />,
            url: contact.gmail,
            color: '#EA4335',
            email: contact.email
        }
    ];

    const handleCopyEmail = (email) => {
        navigator.clipboard.writeText(email).then(() => {
            setToastMessage('¡Correo copiado! / Email copied!');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2500);
        }).catch(() => {
            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setToastMessage('¡Correo copiado! / Email copied!');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2500);
        });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="contact-icons-grid">
                    {socialLinks.map((item, index) => (
                        <div key={index} className="contact-icon-card-wrapper">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-icon-card"
                                style={{ '--icon-color': item.color }}
                                aria-label={item.name}
                            >
                                <div className="contact-icon">{item.icon}</div>
                                <span className="contact-icon-name">{item.name}</span>
                                {item.email && (
                                    <span
                                        className="contact-email-inline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleCopyEmail(item.email);
                                        }}
                                    >
                                        {item.email}
                                    </span>
                                )}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* Toast */}
            {showToast && (
                <div className="toast-message">
                    {toastMessage}
                </div>
            )}
        </section>
    );
};

export default Contact;