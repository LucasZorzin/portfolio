import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import HomeSection from "./Home/HomeSection";
import AboutMeSection from "./AboutMe/AboutMeSection";
import WorksSection from "./Works/WorksSection";
import SkillsSection from "./Skills/SkillsSection";
import ContactSection from "./Contact/ContactSection";
import './Sections.scss';

const anchors = ["home", "about-me", "my-works", "skills", "contact"];

const Sections = () => (
    <ReactFullpage
        anchors={anchors}
        arrowNavigation
        scrollBar
        onLeave={(origin, destination, direction) => {}}
        render={({ state, fullpageApi }) => {
            return (
                <>
                    <HomeSection/>
                    <AboutMeSection/>
                    <WorksSection/>
                    <SkillsSection/>
                    <ContactSection/>
                </>
            );
        }}
    />
);
export default Sections;