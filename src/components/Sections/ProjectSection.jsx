import { useState, useEffect } from 'react';
import { Section } from '../Interface.jsx';
import { useAtom } from 'jotai';
import { currentProjectAtom, selectedLanguageAtom } from '../Projects';
import { projectsData } from "../../../utils/projects.js";

export const ProjectSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
    const [selectedLanguage, setSelectedLanguage] = useAtom(selectedLanguageAtom);
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    const languages = ["All", ...new Set(projectsData.flatMap(p => p.languages))];

    useEffect(() => {
        const newFilteredProjects = selectedLanguage === "All"
            ? projectsData
            : projectsData.filter(project => project.languages.includes(selectedLanguage));
        setFilteredProjects(newFilteredProjects);
        
        // Reset current project to the first in the filtered list
        if (newFilteredProjects.length > 0) {
            setCurrentProject(projectsData.indexOf(newFilteredProjects[0]));
        }
    }, [selectedLanguage, setCurrentProject]);

    const nextProject = () => {
        const currentIndexInFiltered = filteredProjects.findIndex(p => p === projectsData[currentProject]);
        const nextIndex = (currentIndexInFiltered + 1) % filteredProjects.length;
        setCurrentProject(projectsData.indexOf(filteredProjects[nextIndex]));
    };

    const previousProject = () => {
        const currentIndexInFiltered = filteredProjects.findIndex(p => p === projectsData[currentProject]);
        const prevIndex = (currentIndexInFiltered - 1 + filteredProjects.length) % filteredProjects.length;
        setCurrentProject(projectsData.indexOf(filteredProjects[prevIndex]));
    };

    return (
        <Section mobileTop>
            <div className='flex flex-col w-full h-full gap-8 items-center justify-center px-4 py-8 mt-96 scale-75 md:scale-100'>
                <div className='flex flex-wrap gap-2 justify-center mt-12'>
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            className={`px-3 py-1.5 text-sm rounded ${
                                selectedLanguage === lang
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-200 text-black hover:bg-gray-300'
                            }`}
                            onClick={() => setSelectedLanguage(lang)}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
                <div className='flex flex-row w-full gap-4 items-center justify-center'>
                    <button
                        className='hover:text-indigo-600 transition-colors text-white text-md md:text-lg '
                        onClick={previousProject}
                        disabled={filteredProjects.length <= 1}
                    >
                        ← Previous
                    </button>
                    <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center'>
                        Projects
                    </h2>
                    <button
                        className='hover:text-indigo-600 transition-colors text-white text-md md:text-lg'
                        onClick={nextProject}
                        disabled={filteredProjects.length <= 1}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </Section>
    );
};
