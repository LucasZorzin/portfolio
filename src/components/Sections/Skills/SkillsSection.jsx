import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import loading from '../../../assets/img/loading.gif';
import Typed from 'react-typed';
import useWindowSize from "../../../size/useWindowSize";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../../assets/img/fontello.css';
import responsiveLogo from '../../../assets/img/responsive.svg';
import './SkillsSection.scss';
import { useApiContext } from '../../../context/Context';
import english from '../../../translations/en/global.json';
import spanish from '../../../translations/es/global.json';

const SkillsSection = () => {

    // Get Language
    const { language } = useApiContext();

    // Navigation carousel config
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    // Get all skills data
    const { dataSkills } = useApiContext();
    const { skillSelected, setSkillSelected } = useApiContext();

    // OnHover changes the color of the card
    const skillsBorderColor = (card, color) => {
        const cardElement = document.getElementsByClassName(`skills-container--${card}`)
        cardElement[0].style.borderBottom = `10px solid ${color}`;
    }
    const skillsLogoColor = (card, color) => {
        const cardElement = document.getElementsByClassName(`skills-container__logo--${card}`)
        cardElement[0].style.backgroundColor = color;
    }

    // get screen size
    const size = useWindowSize();

    // Render different components depending on what type of skill the user selects
    const swiperSkills = (type) => {
        // PC
        if (size.width > 992) {
            return dataSkills.filter(skill => skill.type.includes(type)).map((skill) => (
                <SwiperSlide className="swiper-slide--skills" key={skill.id}>
                    <div className={`skills-container skills-container--${skill.id}`} onMouseEnter={() => { skillsBorderColor(skill.id, skill.color); skillsLogoColor(skill.id, skill.color) }} onMouseLeave={() => { skillsBorderColor(skill.id, '#00c59e'); skillsLogoColor(skill.id, '#00c59e') }}>
                        <div class={`skills-container__logo skills-container__logo--${skill.id}`}><img src={require(`../../../assets/img/skills/${skill.picture}`)} alt={skill.title} width='746px' height='747px' /></div>
                        <h4>{skill.title}</h4>
                    </div>
                </SwiperSlide>
            ));
        }
        else {
            //  TABLET AND SMARTPHONE 
            return dataSkills.filter(skill => skill.type.includes(type)).map((skill) => (
                <SwiperSlide className="swiper-slide--skills" key={skill.id}>
                    <div className={`skills-container skills-container--${skill.id}`} onLoad={() => { skillsBorderColor(skill.id, skill.color); skillsLogoColor(skill.id, skill.color) }}>
                        <div class={`skills-container__logo skills-container__logo--${skill.id}`}><img src={require(`../../../assets/img/skills/${skill.picture}`)} alt={skill.title} width='746px' height='747px' /></div>
                        <h4>{skill.title}</h4>
                    </div>
                </SwiperSlide>
            ));
        }
    }
    const skills = () => {
        switch (skillSelected) {
            case "front": return swiperSkills(skillSelected);
            case "back": return swiperSkills(skillSelected);
            case "databases": return swiperSkills(skillSelected);
            case "design": return swiperSkills(skillSelected);
            case "cms": return swiperSkills(skillSelected);
            case "others": return swiperSkills(skillSelected);
            default: return swiperSkills(skillSelected); //all
        }
    }
    const skillSelectedText = (type) => {
        setSkillSelected(type);
        const types = document.getElementsByClassName('skill-types');
        // Checks what type of skill the user selects and underlines it
        switch (type) { case '': types[0].style.textDecoration = "underline"; types[0].style.color = "white"; types[1].style.color = "#bfbfbf71"; types[1].style.textDecoration = "none"; types[2].style.color = "#bfbfbf71"; types[2].style.textDecoration = "none"; types[3].style.color = "#bfbfbf71"; types[3].style.textDecoration = "none"; types[4].style.color = "#bfbfbf71"; types[4].style.textDecoration = "none"; types[5].style.color = "#bfbfbf71"; types[5].style.textDecoration = "none"; types[6].style.color = "#bfbfbf71"; types[6].style.textDecoration = "none"; break; case 'front': types[1].style.textDecoration = "underline"; types[1].style.color = "white"; types[0].style.color = "#bfbfbf71"; types[0].style.textDecoration = "none"; types[2].style.color = "#bfbfbf71"; types[2].style.textDecoration = "none"; types[3].style.color = "#bfbfbf71"; types[3].style.textDecoration = "none"; types[4].style.color = "#bfbfbf71"; types[4].style.textDecoration = "none"; types[5].style.color = "#bfbfbf71"; types[5].style.textDecoration = "none"; types[6].style.color = "#bfbfbf71"; types[6].style.textDecoration = "none"; break; case 'back': types[2].style.textDecoration = "underline"; types[2].style.color = "white"; types[0].style.color = "#bfbfbf71"; types[0].style.textDecoration = "none"; types[1].style.color = "#bfbfbf71"; types[1].style.textDecoration = "none"; types[3].style.color = "#bfbfbf71"; types[3].style.textDecoration = "none"; types[4].style.color = "#bfbfbf71"; types[4].style.textDecoration = "none"; types[5].style.color = "#bfbfbf71"; types[5].style.textDecoration = "none"; types[6].style.color = "#bfbfbf71"; types[6].style.textDecoration = "none"; break; case 'database': types[3].style.textDecoration = "underline"; types[3].style.color = "white"; types[0].style.color = "#bfbfbf71"; types[0].style.textDecoration = "none"; types[2].style.color = "#bfbfbf71"; types[2].style.textDecoration = "none"; types[1].style.color = "#bfbfbf71"; types[1].style.textDecoration = "none"; types[4].style.color = "#bfbfbf71"; types[4].style.textDecoration = "none"; types[5].style.color = "#bfbfbf71"; types[5].style.textDecoration = "none"; types[6].style.color = "#bfbfbf71"; types[6].style.textDecoration = "none"; break; case 'design': types[4].style.textDecoration = "underline"; types[4].style.color = "white"; types[0].style.color = "#bfbfbf71"; types[0].style.textDecoration = "none"; types[2].style.color = "#bfbfbf71"; types[2].style.textDecoration = "none"; types[1].style.color = "#bfbfbf71"; types[1].style.textDecoration = "none"; types[3].style.color = "#bfbfbf71"; types[3].style.textDecoration = "none"; types[5].style.color = "#bfbfbf71"; types[5].style.textDecoration = "none"; types[6].style.color = "#bfbfbf71"; types[6].style.textDecoration = "none"; break; case 'cms': types[5].style.textDecoration = "underline"; types[5].style.color = "white"; types[0].style.color = "#bfbfbf71"; types[0].style.textDecoration = "none"; types[2].style.color = "#bfbfbf71"; types[2].style.textDecoration = "none"; types[1].style.color = "#bfbfbf71"; types[1].style.textDecoration = "none"; types[4].style.color = "#bfbfbf71"; types[4].style.textDecoration = "none"; types[3].style.color = "#bfbfbf71"; types[3].style.textDecoration = "none"; types[6].style.color = "#bfbfbf71"; types[6].style.textDecoration = "none"; break; case 'others': types[6].style.textDecoration = "underline"; types[6].style.color = "white"; types[0].style.color = "#bfbfbf71"; types[0].style.textDecoration = "none"; types[2].style.color = "#bfbfbf71"; types[2].style.textDecoration = "none"; types[1].style.color = "#bfbfbf71"; types[1].style.textDecoration = "none"; types[4].style.color = "#bfbfbf71"; types[4].style.textDecoration = "none"; types[5].style.color = "#bfbfbf71"; types[5].style.textDecoration = "none"; types[3].style.color = "#bfbfbf71"; types[3].style.textDecoration = "none"; break; default: break }
    }

    return (
        <section className="section skills">
            <div className="titles-lucas col-12">
                <h2>{language === 'es' ? `${spanish.skills.tag}` : `${english.skills.tag}`}</h2>
            </div>

            {/* ICONS PC */}
            <div class="row services-position">
                <div class="col-3 services">
                    <div class="svg">
                        <i class="icon-gauge"></i>
                    </div>
                    <h4>{language === 'es' ? `${spanish.skills.fast}` : `${english.skills.fast}`}</h4>
                    <p>{language === 'es' ? `${spanish.skills.fastP}` : `${english.skills.fastP}`}</p>
                </div>

                <div class="col-3 services">
                    <div class="svg"><img src={responsiveLogo} alt="icon" /></div>
                    <h4>{language === 'es' ? `${spanish.skills.responsive}` : `${english.skills.responsive}`}</h4>
                    <p>{language === 'es' ? `${spanish.skills.responsiveP}` : `${english.skills.responsiveP}`}</p>
                </div>

                <div class="col-3 services">
                    <div class="svg">
                        <i class="icon-lightbulb"></i>
                    </div>
                    <h4>{language === 'es' ? `${spanish.skills.intuitive}` : `${english.skills.intuitive}`}</h4>
                    <p>{language === 'es' ? `${spanish.skills.intuitiveP}` : `${english.skills.intuitiveP}`}</p>
                </div>

                <div class="col-3 services">
                    <div class="svg">
                        <i class="icon-heart-empty"></i>
                    </div>
                    <h4>{language === 'es' ? `${spanish.skills.retailer}` : `${english.skills.retailer}`}</h4>
                    <p>{language === 'es' ? `${spanish.skills.retailerP}` : `${english.skills.retailerP}`}</p>
                </div>
            </div>

            {/* TYPED SMARTPHONE */}
            <div className="typed-skills skills-title">




                {(() => {
                    if (language === 'en') {
                        return (
                            <>
                                Skills and tools
                                <Typed
                                    strings={['that I know.', 'that I use on a daily basis.']}
                                    typeSpeed={45}
                                    backSpeed={65}
                                    startDelay={200}
                                    backDelay={1500}
                                    loop
                                />
                            </>
                        )
                    }
                    else if (language === 'es') {
                        return (
                            <>
                                <Typed
                                    strings={['Conocimientos adquiridos.', 'Herramientas que utilizo en mi día a día.']}
                                    typeSpeed={45}
                                    backSpeed={65}
                                    startDelay={200}
                                    backDelay={1500}
                                    loop
                                />
                            </>
                        )
                    }
                })()}
            </div>

            {/* Type skills selector */}
            <div className="selector-container">
                <span className="skill-types" onClick={() => { skillSelectedText('') }}>{language === 'es' ? `Todos` : `All`}</span>
                <span className="skill-types" onClick={() => { skillSelectedText('front') }}>Front-End</span>
                <span className="skill-types" onClick={() => { skillSelectedText('back') }}>Back-End</span>
                <span className="skill-types" onClick={() => { skillSelectedText('database') }}>{language === 'es' ? `Base de Datos` : `Databases`}</span>
                <span className="skill-types" onClick={() => { skillSelectedText('design') }}>{language === 'es' ? `Diseño` : `Design`}</span>
                <span className="skill-types" onClick={() => { skillSelectedText('cms') }}>CMS</span>
                <span className="skill-types" onClick={() => { skillSelectedText('others') }}>{language === 'es' ? `Otros` : `Others`}</span>
            </div>

            {/* SKILLS CAROUSEL */}
            <div className="carousel-skills">
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    centeredSlides={false}
                    centerInsufficientSlides={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        1: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {dataSkills.length > 0 ? <div>{skills()}</div> : <div className='center'><img width={'50px'} src={loading} alt="loading" /></div>}

                </Swiper>
                <div className='arrow-back arrow--skills' ref={navigationPrevRef}>{`{`}</div>
                <div className='arrow-next arrow--skills' ref={navigationNextRef}>{`}`}</div>
            </div>

        </section>
    )

}

export default SkillsSection;