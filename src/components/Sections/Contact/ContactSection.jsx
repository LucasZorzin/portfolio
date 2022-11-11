import React from "react";
import { useApiContext } from '../../../context/Context';
import english from '../../../translations/en/global.json';
import spanish from '../../../translations/es/global.json';
import './ContactSection.scss';

const ContactSection = () => {
    // Get Language
    const { language } = useApiContext();
    return (
        <div className="section contact">
            <div className="titles-lucas col-12">
                <h2>{language === 'es' ? `${spanish.contact.tag}` : `${english.contact.tag}`}</h2>
            </div>
            {/* <!-- E-mail --> */}
            <div className="contact-container center">
                <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-gmail"
                        width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path stroke="#00c59e" d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z"></path>
                        <path stroke="#00c59e" d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"></path>
                        <path stroke="#00c59e" d="M16 4l-4 4l-4 -4"></path>
                        <path stroke="#00c59e" d="M4 6.5l8 7.5l8 -7.5"></path>
                    </svg>
                </div>
                <div className="links-contact">
                    <h3 className="contact-info">lucaszorzincml@gmail.com</h3>
                    <a href="mailto:lucaszorzincml@gmail.com" target="_blank" rel="noreferrer">
                        <button className="btn-contact">{language === 'es' ? `ENVIAR E-MAIL` : `SEND E-MAIL`}
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                                className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                <path fillRule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                            </svg>
                        </button>
                    </a>

                </div>
            </div>
            {/* <!-- Linkedin --> */}
            <div className="pt-5 pt-lg-0 contact-container center">

                <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin"
                        width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect stroke="#00c59e" x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line stroke="#00c59e" x1="8" y1="11" x2="8" y2="16"></line>
                        <line stroke="#00c59e" x1="8" y1="8" x2="8" y2="8.01"></line>
                        <line stroke="#00c59e" x1="12" y1="16" x2="12" y2="11"></line>
                        <path stroke="#00c59e" d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                </div>
                <div className="links-contact">
                    <h3 className="contact-info">linkedin.com/in/lucaszorzin</h3>
                    <a href="https://www.linkedin.com/in/lucaszorzin" target="_blank" rel="noreferrer">
                        <button className="btn-contact">{language === 'es' ? `VISITAR PERFIL` : `VISIT PROFILE`}
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                                className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                <path fillRule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                            </svg>
                        </button>
                    </a>

                </div>
            </div>
            {/* <!-- Github --> */}
            <div className="pt-5 pt-lg-0 contact-container center">
                <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github"
                        width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path stroke="#00c59e"
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                        </path>
                    </svg>
                </div>
                <div className="links-contact">
                    <h3 className="contact-info">github.com/LucasZorzin</h3>
                    <a href="https://www.github.com/LucasZorzin" target="_blank" rel="noreferrer">
                        <button className="btn-contact">{language === 'es' ? `VISITAR PERFIL` : `VISIT PROFILE`}
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                                className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                <path fillRule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ContactSection;