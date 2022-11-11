import React, { useState, createContext, useContext, useEffect } from "react";
const ApiContext = createContext([]);
export const useApiContext = () => useContext(ApiContext);

const projects = "https://script.google.com/macros/s/AKfycbxqEk6zgGKm4HYQTBLTXFRSd5GDpFvlyJXpXY10N8D61YOezfioW-faQM6taSMjVBi8zA/exec";
const skills = "https://script.google.com/macros/s/AKfycbwOw9nwB3Or9nxLIXbajZXtP1_PKXbHEuBgkTMBZXrtyqu4RcGnnuiTLVoPaE4QH-sgVg/exec";

const UseContextProvider = ({ children }) => {
    const [dataProject, setDataProject] = useState([]);
    const [dataSkills, setDataSkills] = useState([]);
    const [skillSelected, setSkillSelected] = useState('');
    const [selectedProject, setSelectedProject] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [language, setLanguage] = useState('');

    // MY WORKS DATA
    async function getProjects() {
        await fetch(projects)
            .then(response => response.json())
            .then((projects) => {
                setDataProject(projects);
            })
    }

    // SKILLS DATA
    async function getSkills() {
        await fetch(skills)
            .then(response => response.json())
            .then((skills) => {
                setDataSkills(skills);
            })
    }

    useEffect(() => {
        const languageLocalStorage = JSON.parse(localStorage.getItem('lang'));
        languageLocalStorage && setLanguage(languageLocalStorage);
        getProjects();
        getSkills();
    }, [])

    return (
        <>
            <ApiContext.Provider value={{ dataProject, setDataProject, selectedProject, setSelectedProject, showModal, setShowModal, dataSkills, setDataSkills, skillSelected, setSkillSelected, language, setLanguage }}>
                {children}
            </ApiContext.Provider>
        </>
    )
}

export default UseContextProvider;