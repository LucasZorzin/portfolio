import React from "react";
import scrollImg from '../../../assets/img/scrolldown.gif';
import Typed from 'react-typed';
import english from '../../../translations/en/global.json';
import spanish from '../../../translations/es/global.json';
import { useApiContext } from '../../../context/Context';
import './HomeSection.scss';

const HomeSection = () => {

    // Get Language
    const { language } = useApiContext();

    const parallax = (e) => {
        if (window.matchMedia("(min-width: 992px)").matches) {
            const elem = document.getElementById('parallax');
            let w = window.innerWidth;
            let h = window.innerHeight;
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let move = `${29 - (mouseX - w) * 0.030}% ${15 - (mouseY - h) * 0.095}%`;
            let x = `${move}`;
            elem.style.backgroundPosition = x;
        }
    }
    // const parallaxLeave = () => {
    //     if (window.matchMedia("(min-width: 992px)").matches) {
    //         const elem = document.getElementById('parallax');
    //         elem.style.backgroundPosition = 'center';
    //     }
    // }
    return (
        <div id="parallax" onMouseMove={(e) => parallax(e)} className="section home">
            <div className="row home__content">
                <h1 className="col-12 home__content-title">Lucas Nahuel Zorzin</h1>

                <h2 className="col-12 home__content-subtitle">
                    {(() => {
                        if (language === 'en') {
                            return (
                                <Typed
                                    strings={[`${english.home.subtitle1}`, `${english.home.subtitle2}`]}
                                    typeSpeed={45}
                                    backSpeed={65}
                                    startDelay={200}
                                    backDelay={1500}
                                    loop
                                />
                            )
                        }
                        else if (language === 'es'){
                            return (
                                <Typed
                                    strings={[`${spanish.home.subtitle1}`, `${spanish.home.subtitle2}`]}
                                    typeSpeed={45}
                                    backSpeed={65}
                                    startDelay={200}
                                    backDelay={1500}
                                    loop
                                />
                            )
                        }
                    })()}
                </h2>

                <a href="#my-works" className="col-2 mt-5 home__content-a">
                    <button className="home__content-a-btn home__content-a-btn--animated"><span>PORTFOLIO</span></button>
                </a>
            </div>
            <a href="#about-me"><img className="home__arrow" src={scrollImg} alt="scroll down" loading="lazy" width='50px' height='auto' /></a>
        </div>
    )
}

export default HomeSection;