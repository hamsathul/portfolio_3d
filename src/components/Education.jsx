import { motion } from "framer-motion";
import { Section } from "./Interface";

const educationData = [
	{
		institution: "42 Abudhabi",
		degree: "Computer Science",
		year: "2022 - present",
		description: "42 network of schools is rated as the top coding school in the world for software development."
	},
	{
		institution: "NALSAR University of Law, Hyderabad, India",
		degree: "PGDM in Aviation Law and Air Transport Management",
		year: "2012 - 2013",
		description: "Specialized in aviation law, air transport management, and aviation safety."
	},
	{
		institution: "Emirates Aviation University, Dubai, UAE",
		degree: "Flight Operations Management",
		year: "2008 - 2008",
		description: "Specialized in flight operations management, aviation safety, and air traffic control."
	},
	{
		institution: "Hindustan College of Engineering, Chennai, India",
		degree: "Bachelor of Engineering in Aeronautical Engineering",
		year: "2004 - 2008",
		description: "Specialized in aeronautical engineering, aircraft design, and aviation safety."
	},
	
];


const Education = ( {educationData}) => {
	return (
		
		<div className="w-full max-w-2xl md:max-w-5xl mx-auto mb-8 md:mb-20 p-2 md:p-4">
		  
		  <div className="relative">
			<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-700 hidden md:block"></div>
			{educationData.map((edu, index) => (
			  <motion.div
				key={index}
				className={`mb-4 md:mb-12 flex flex-col md:flex-row items-center md:items-start w-full ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
				initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: index * 0.2 }}
			  >
				<div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right md:pr-8' : 'text-left md:pl-8'}`}>
				<p className="text-base md:text-xl text-white font-semibold">{edu.institution}</p>
				  <p className="text-sm md:text-lg text-indigo-400 italic">{edu.degree}</p>
				  
				</div>
				<div className="w-full md:w-3/12 flex flex-col items-center">
				<div className="w-2.5 md:w-4 h-2.5 md:h-4 bg-indigo-500 rounded-full border-2 md:border-4 border-indigo-700"></div>
				<div className="w-0.5 h-full bg-gray-800"></div>
				<p className={`bg-indigo-700 text-gray-100 text-xs md:text-sm py-0.5 md:py-1 px-1 md:px-3 rounded mt-1 md:mt-2 ${edu.year.includes("present") ? 'ml-1 md:ml-4' : ''}`}>
                {edu.year}
              </p>
				</div>
				<div className={`w-full md:w-5/12 bg-gray-100 p-2 md:p-6 rounded-lg shadow-sm md:shadow-lg ${index % 2 === 0 ? 'text-left md:pl-8' : 'text-right md:pr-8'}`}>
				<p className="text-xs  md:text-md md:font-semibold text-gray-800">{edu.description}</p>
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
				<div className="flex flex-col md:flex-row w-full items-center md:items-start md:mt-12 md:pt-10">
			<motion.div className="w-full md:w-1/2 h-3/4 md:h-full" whileInView={"visible"}>
			  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
				Education & Certifications
			  </h2>
			  <div className=" w-1/2 md:w-full">
				<Education educationData={educationData} />
	
			  </div>
			</motion.div>
			
			</div>
		  </Section>
		);
	  };

export  {EducationSection};