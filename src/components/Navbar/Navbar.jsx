import React from "react";
import { useApiContext } from '../../context/Context';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.scss";

const Navbar = () => {

    // Get Language
    const { language, setLanguage } = useApiContext();
    function languages(lang) {
        setLanguage(lang);
        localStorage.setItem('lang', JSON.stringify(lang));
        const contenedor = document.getElementById('loader');
        navIconClick()
        contenedor.style.visibility = "initial";
        setTimeout(() => {
            contenedor.style.visibility = "hidden";
        }, 370);
    }

    function navIconClick() {
        const navIcon = document.querySelector("#nav-icon");
        const navBar = document.querySelector(".navbar");
        const span = document.getElementsByClassName("nav-span");
        navIcon.classList.toggle('open');
        navBar.classList.toggle('open-nav');
        span[0].classList.toggle('menu-clicked');
        span[2].classList.toggle('menu-clicked');
    }

    function navIconClickMouseLeave() {
        const navIcon = document.querySelector("#nav-icon");
        const navBar = document.querySelector(".navbar");
        const span = document.getElementsByClassName("nav-span");
        navIcon.classList.remove('open');
        navBar.classList.remove('open-nav');
        span[0].classList.remove('menu-clicked');
        span[2].classList.remove('menu-clicked');
    }

    function navBarItemLinkClick() {
        const navIcon = document.querySelector("#nav-icon");
        const navBar = document.querySelector(".navbar");
        const span = document.getElementsByClassName("nav-span");
        navBar.classList.toggle('open-nav');
        navIcon.classList.toggle('open');
        span[0].classList.toggle('menu-clicked');
        span[2].classList.toggle('menu-clicked');
    }

    return (
        <header>
            <nav>
                {/* Btn */}
                <div onClick={navIconClick} id="nav-icon" className="nav-icon">
                    <span className="nav-span"></span>
                    <span className="nav-span"></span>
                    <span className="nav-span"></span>
                </div>

                {/* Navbar */}
                <ul className="navbar" onMouseLeave={navIconClickMouseLeave}>
                    <li className="navbar__item"><a onClick={navBarItemLinkClick} className="navbar__item-link" href="#home">{language === 'es' ? `INICIO` : `HOME`}</a> </li>
                    <li className="navbar__item"><a onClick={navBarItemLinkClick} className="navbar__item-link" href="#about-me">{language === 'es' ? `SOBRE MÍ` : `ABOUT ME`}</a> </li>
                    <li className="navbar__item"><a onClick={navBarItemLinkClick} className="navbar__item-link" href="#my-works">{language === 'es' ? `TRABAJOS` : `MY WORKS`}</a></li>
                    <li className="navbar__item"><a onClick={navBarItemLinkClick} className="navbar__item-link" href="#skills">{language === 'es' ? `CONOCIMIENTOS` : `SKILLS`}</a></li>
                    <li className="navbar__item"><a onClick={navBarItemLinkClick} className="navbar__item-link" href="#contact">{language === 'es' ? `CONTACTO` : `CONTACT`}</a></li>

                    {/* Language Selector */}
                    {language === 'es'
                        ?
                        <Dropdown>
                            <Dropdown.Toggle className="language-selector" id="dropdown-basic">
                                {language}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => languages('en')}>En</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        :

                        <Dropdown>
                            <Dropdown.Toggle className="language-selector" id="dropdown-basic">
                                {language}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => languages('es')}>Es</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;