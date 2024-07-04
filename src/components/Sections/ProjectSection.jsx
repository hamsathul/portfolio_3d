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
        <Section>
            <div className='flex flex-col w-full h-full gap-8 items-center justify-center mt-20'>
                <div className='flex gap-4'>
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            className={`px-4 py-2 rounded ${
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
                <div className='flex w-full gap-8 items-center justify-center'>
                    <button
                        className='hover:text-indigo-600 transition-colors text-white'
                        onClick={previousProject}
                        disabled={filteredProjects.length <= 1}
                    >
                        ← Previous
                    </button>
                    <h2 className='text-3xl md:text-5xl font-bold text-white'>Projects</h2>
                    <button
                        className='hover:text-indigo-600 transition-colors text-white'
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