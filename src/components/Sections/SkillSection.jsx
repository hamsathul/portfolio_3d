import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '../Interface'

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
export const SkillSection = () => {
    return (
        <Section>
            <div className="flex flex-col md:flex-row w-full">
                <motion.div className="w-full md:w-5/12" whileInView={"visible"}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Skills
                    </h2>
                    <div className="mt-8 space-y-4 w-1/2 md:w-full">
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
                    <div className="mt-8 space-y-4 w-1/2 md:w-full">
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