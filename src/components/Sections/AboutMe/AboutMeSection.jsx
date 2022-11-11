import React from "react";
import avatar from '../../../assets/img/zorzin-avatar.webp';
import { useApiContext } from '../../../context/Context';
import english from '../../../translations/en/global.json';
import spanish from '../../../translations/es/global.json';
import './AboutMeSection.scss';

const AboutMeSection = () => {
    // Get Language
    const { language } = useApiContext();
    return (
        <div className="section about-me">
            <div className="titles-lucas col-12">
                <h2>
                    {language === 'es' ? `${spanish.aboutMe.tag}` : `${english.aboutMe.tag}`}
                </h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 about">
                    <span className="about__h4">{language === 'es' ? `${spanish.aboutMe.iam}` : `${english.aboutMe.iam}`}</span>
                    <h2 className="about__h2">Lucas Zorzin</h2>
                    <h3 className="about__h3">{language === 'es' ? `${spanish.aboutMe.position}` : `${english.aboutMe.position}`}</h3>
                    <p className="about__p">
                        {language === 'es' ? `${spanish.aboutMe.about}` : `${english.aboutMe.about}`}
                    </p>
                    <a href="https://drive.google.com/uc?id=1uTu-V81PQ3h6BzMIjRI2WU58nBPWeLtl" target="_blank" rel="noreferrer" className="about-cv">
                        <button className="about-cv__btn about-cv__btn--animated"><span>{language === 'es' ? `${spanish.aboutMe.download}` : `${english.aboutMe.download}`}</span></button>
                    </a>

                </div>

                <div className="col about-img">
                    <img src={avatar} alt="Lucas Zorzin - Avatar" />
                </div>

            </div>
        </div>
    )
}

export default AboutMeSection;