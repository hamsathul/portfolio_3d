import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { currentProjectAtom, projects, selectedLanguageAtom } from './Projects';
import { useForm, ValidationError } from '@formspree/react';
import {  EnterpreunershipWorkExperienceSection, AviationWorkExperienceSection } from './Workexperience';
import { EducationSection } from './Education';


export const Section = (props) => {
	const { children,  mobileTop} = props;

	return (
		<motion.section className={`
			h-screen w-screen p-8 max-w-screen-2xl mx-auto
			flex flex-col items-start
			${mobileTop ? "justify-start md:justify-center" : "justify-center"}
			`}
			initial={{
				opacity: 0,
				y: 50,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			transition={{
					duration: 1,
					delay: 0.5,
				}}
			>{children}
		</motion.section>
	)
}

export const Interface = (props) => {
	const { setSection } = props;
	return (
		<>
		<div className="flex flex-col items-center w-screen">

		<AboutSection setSection={setSection}/>
		{/* <WorkExperienceSection /> */}
		
		<EnterpreunershipWorkExperienceSection />
		<AviationWorkExperienceSection />
		<SkillSection />
		<ProjectSection />
		<EducationSection />
		<ContactSection />
		</div>
		</>
	)
}

const AboutSection = (props) => {
	const { setSection } = props;
	return (
		<Section mobileTop>
			<h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 mb-3 md:mt-0">
				<span className='text-gray-100'>
				Hi, I'm
				</span>
				<br />				
				<br />
				<span className="bg-white  px-1 italic ">Hamsathul Haris</span>
			</h1>
			<motion.p className="text-lg text-gray-100 italic mt-4"
			initial={{
				opacity: 0,
				y: 25,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			transition= {{
					duration: 1,
					delay: 1,
				}}
			>
				Aeronautical engineer by training,
					<br />
				entrepreneur by vision, 
				<br /> 
				and full-stack developer by passion.
				<br/>
				I turn complex problems into streamlined solutions
			</motion.p>
			<motion.button className={`
				bg-indigo-600 text-white py-4 px-8
				roundef-lg font-bold text-lg mt-4 md:mt-16
				`}
				initial={{
					opacity: 0,
					y: 25,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
					transition={{
						duration: 1,
						delay: 1.5,
					}}
					onClick={() => setSection(3)}
				>
				Contact Me
			</motion.button>
		</Section>
	)
}

const skills = [
	{
		title: "React/ Nextjs",
		level: 90
	},
	{
		title: "Nodejs/ Expressjs",
		level: 70
	},

	{
		title: "Python/ Django",
		level: 75
	},
	{
		title: "Threejs/ React Three Fiber",
		level: 60
	},
	{
		title: "C/C++",
		level: 80
	},
	{
		title: "PHP/ Laravel",
		level: 60
	},
	{
		title: "Docker",
		level: 80
	},
]

const languages = [
	{
		title: "English",
		level: 100
	},
	{
		title: "Arabic",
		level: 30
	},
	{
		title: "Hindi",
		level: 100
	},
	{
		title: "Malayalam",
		level: 100
	},
]
const SkillSection = () => {
    return (
        <Section>
            <div className="flex flex-col md:flex-row w-full">
                <motion.div className="w-full md:w-5/12" whileInView={"visible"}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Skills
                    </h2>
                    <div className="mt-8 space-y-4">
                        {skills.map((skill, index) => (
                            <div className="w-full" key={index}>
                                <motion.h3 
                                    className="text-lg md:text-xl font-bold text-gray-100"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            }
                                        } 
                                    }}
                                >
                                    {skill.title}
                                </motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div 
                                        className="h-full bg-indigo-500 rounded-full"
                                        style={{width: `${skill.level}%`}}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 1 + index * 0.2,
                                                }
                                            }
                                        }}
                                    />								
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Central gap */}
                <div className="hidden md:block w-5/12" />
                
                <motion.div className='w-full md:w-5/12' whileInView={"visible"}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-8 md:mt-0">
                        Languages
                    </h2>
                    <div className="mt-8 space-y-4">
                        {languages.map((lng, index) => (
                            <div className="w-full" key={index}>
                                <motion.h3 
                                    className="text-lg md:text-xl font-bold text-gray-100"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            }
                                        } 
                                    }}
                                >
                                    {lng.title}
                                </motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div 
                                        className="h-full bg-indigo-500 rounded-full"
                                        style={{width: `${lng.level}%`}}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 1 + index * 0.2,
                                                }
                                            }
                                        }}
                                    />								
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}
import { useState, useEffect } from 'react';


const ProjectSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
    const [selectedLanguage, setSelectedLanguage] = useAtom(selectedLanguageAtom);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const languages = ["All", ...new Set(projects.flatMap(p => p.languages))];

    useEffect(() => {
        const newFilteredProjects = selectedLanguage === "All"
            ? projects
            : projects.filter(project => project.languages.includes(selectedLanguage));
        setFilteredProjects(newFilteredProjects);
        
        // Reset current project to the first in the filtered list
        if (newFilteredProjects.length > 0) {
            setCurrentProject(projects.indexOf(newFilteredProjects[0]));
        }
    }, [selectedLanguage, setCurrentProject]);

    const nextProject = () => {
        const currentIndexInFiltered = filteredProjects.findIndex(p => p === projects[currentProject]);
        const nextIndex = (currentIndexInFiltered + 1) % filteredProjects.length;
        setCurrentProject(projects.indexOf(filteredProjects[nextIndex]));
    };

    const previousProject = () => {
        const currentIndexInFiltered = filteredProjects.findIndex(p => p === projects[currentProject]);
        const prevIndex = (currentIndexInFiltered - 1 + filteredProjects.length) % filteredProjects.length;
        setCurrentProject(projects.indexOf(filteredProjects[prevIndex]));
    };

    return (
        <Section>
            <div className='flex flex-col w-full h-full gap-8 items-center justify-center'>
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

const ContactSection = () => {

	const [state, handleSubmit] = useForm("xwpeekwz");

	return (
		<Section>
			<h2 className="text-3xl md:text-5xl text-white font-bold">Contact Me</h2>
			<div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
					{state.succeeded ? (<p className="text-green-500">Thank you for your message. I will get back to you soon.</p>)
					: (

				<form onSubmit={handleSubmit}>
					<label for="name" className="font-medium text-gray-100 black my-1">
						Name
					</label>
					<input 
					type="text"
					name="name"
					id="name" 
					className="block w-full rounded-md border-0 text-gray-100 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					<label for="email" className="font-medium text-gray-100 black my-1">
						E-mail
					</label>
					<input 
					type="email"
					name="email"
					id="email" 
					className="block w-full rounded-md border-0 text-gray-100 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					<ValidationError className="mt-1 text-red-500" errors={state.errors}
      />
					<label for="name" className="font-medium text-gray-100 black my-1">
						Message
					</label>
					<textarea
					name="message"
					id="name" 
					className="h-32 block w-full rounded-md border-0 text-gray-100 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					 <ValidationError className="mt-1 text-red-500" errors={state.errors}
      />
					<button className={`
						bg-indigo-600 text-white py-4 px-8
						rounded-lg font-bold text-lg mt-16
						`}
						disabled={state.submitting}
						>
						Submit
					</button>
				</form>
					)}
			</div>
		</Section>
	)
}


