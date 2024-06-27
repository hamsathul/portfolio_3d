import { motion } from "framer-motion";
import { Section } from "./Interface";

const educationData = [
	{
		institution: "Harvard University",
		degree: "Bachelor of Science in Computer Science",
		year: "2015 - present",
		description: "Focused on software engineering, algorithms, and data structures."
	},
	{
		institution: "MIT",
		degree: "Master of Science in Aeronautical Engineering",
		year: "2019 - 2021",
		description: "Specialized in aerodynamics and computational fluid dynamics."
	},
	{
		institution: "MIT",
		degree: "Master of Science in Aeronautical Engineering",
		year: "2019 - 2021",
		description: "Specialized in aerodynamics and computational fluid dynamics."
	}
];


const Education = ( {educationData}) => {
	return (
		
		<div className="w-full max-w-5xl mx-auto mb-20">
		  
		  <div className="relative">
			<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-700"></div>
			{educationData.map((edu, index) => (
			  <motion.div
				key={index}
				className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
				initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: index * 0.2 }}
			  >
				<div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
				  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
				  <p className="text-xl text-indigo-300 italic">{edu.degree}</p>
				  
				</div>
				<div className="w-2/12 flex flex-col items-center">
				<div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-indigo-700"></div>
				  <div className="w-0.5 h-full bg-gray-800"></div>
				  <p className={`bg-indigo-700 text-gray-100 text-sm py-1 px-3 rounded mt-2 ${edu.year.includes("present") ? 'ml-4' : ''}`}>
                {edu.year}
              </p>
				</div>
				<div className={`w-5/12 bg-gray-100 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
				<p className="text-md text-gray-800">{edu.description}</p>
				</div>
			  </motion.div>
			))}
		  </div>
		</div>
		
	  );
	};

	const EducationSection = () => {
		return (
			<Section>
			<motion.div className="w-full" whileInView={"visible"}>
			  <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
				Education & Certifications
			  </h2>
			  <div className="space-y-16">
				<Education educationData={educationData} />
	
			  </div>
			</motion.div>
		  </Section>
		);
	  };

export  {EducationSection};