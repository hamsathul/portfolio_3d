import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { currentProjectAtom, projects } from './Projects';
import { useForm, ValidationError } from '@formspree/react';


const Section = (props) => {
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
		<SkillSection />
		<ProjectSection />
		<ContactSection />
		</div>
		</>
	)
}

const AboutSection = (props) => {
	const { setSection } = props;
	return (
		<Section mobileTop>
			<h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
				Hi, I'm
				<br />
				<span className="bg-white px-1 italic ">Hamsathul Haris</span>
			</h1>
			<motion.p className="text-lg text-gray-600 italic mt-4"
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
				I am an Enterprenur, 
				<br />
				a full stack developer and
				<br /> 
				an aeronautical engineer.
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
	title: "Threejs/ React Three Fiber",
	level: 80
},
{
	title: "React/ React Native",
	level: 90
},
{
	title: "Nodejs/ Expressjs",
	level: 90
},
{
	title: "Typescript",
	level: 60
},
{
	title: "3d Modelling",
	level: 40
},
]

const languages = [
	{
		title: "English",
		level: 100
	},
	{
		title: "French",
		level: 100
	},
]

const SkillSection = () => {
	return (
		<Section>
			<motion.div className="w-full" whileInView={"visible"}>
				<h2 className="text-3xl md:text-5xl font-bold text-white">
					Skills
				</h2>
				<div className="mt-8 space-y-4">
					{skills.map((skill,index) => (
						<div className="w-full md:w-64" key={index}>
							<motion.h3 className="text-lg md:text-xl font-bold text-gray-100"
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
						
							
							>{skill.title}</motion.h3>
							<div className="h-2 w-full bg-gray-200 rounded-full mt-2">
								<motion.div className="h-full bg-indigo-500 rounded-full"
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
									}}
								}}

								/>								
							</div>
						</div>
					))}
				</div>
			</motion.div>
			
			<motion.div className='w-full' whileInView={"visible"}>
				<h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
					Language
				</h2>
				<div className="mt-8 space-y-4">
					{languages.map((lng,index) => (
						<div className="w-full md:w-64" key={index}>
							<motion.h3 className="text-lg md:text-xl font-bold text-gray-100"
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
						
							
							>{lng.title}</motion.h3>
							<div className="h-2 w-full bg-gray-200 rounded-full mt-2">
								<motion.div className="h-full bg-indigo-500 rounded-full"
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
									}}
								}}

								/>								
							</div>
						</div>
					))}
				</div>
			</motion.div>

		</Section>
	)
}

const ProjectSection = () => {

	const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

	const nextProject = () => {
		setCurrentProject((currentProject + 1) % projects.length);
	
	}

	const previousProject = () => {
		setCurrentProject((currentProject - 1 + projects.length) % projects.length);
	}
	return (
		<Section>
			<div className='flex w-full h-full gap-8 items-center justify-center'>
				<button className='hover:text-indigo-600 transition-colors text-white'
				onClick={previousProject}
				>
					← Previous

				</button>
				<h2 className='text-3xl md:text-5xl font-bold text-white'>Projects</h2>
				<button className='hover:text-indigo-600 transition-colors text-white'
				onClick={nextProject}
				>Next →
					
				</button>
			</div>
		</Section>
	)
}

const ContactSection = () => {

	const [state, handleSubmit] = useForm("xwpeekwz");

	return (
		<Section>
			<h2 className="text-3xl md:text-5xl font-bold">Contact Me</h2>
			<div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
					{state.succeeded ? (<p className="text-green-500">Thank you for your message. I will get back to you soon.</p>)
					: (

				<form onSubmit={handleSubmit}>
					<label for="name" className="font-medium text-gray-900 black mb-1">
						Name
					</label>
					<input 
					type="text"
					name="name"
					id="name" 
					className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					<label for="email" className="font-medium text-gray-900 black mb-1">
						E-mail
					</label>
					<input 
					type="email"
					name="email"
					id="email" 
					className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
					/>
					<ValidationError className="mt-1 text-red-500" errors={state.errors}
      />
					<label for="name" className="font-medium text-gray-900 black mb-1">
						Message
					</label>
					<textarea
					name="message"
					id="name" 
					className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-gray-200 focus:ring-indigo-500 focus:outline-none p-2" 
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