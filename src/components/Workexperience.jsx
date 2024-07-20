import { motion } from "framer-motion";
import { Section } from "./Interface";


const aviationExperience = [
	{
	  role: "Air Safety Officer",
	  company: "Directorate General of Civil Aviation (DGCA), India",
	  period: "2010 - 2012",
	  description: "Conducted safety inspections, audits, and investigations. Ensured compliance with aviation regulations and safety standards."
	},
	{
	  role: "Technical Assistant",
	  company: "Air Works, Mumbai, India",
	  period: "2009 - 2009",
	  description: "Assisted in aircraft maintenance, repair, and overhaul (MRO) activities. Ensured compliance with aviation regulations and safety standards."
	},
	{
	  role: "Quality Control & Technical Services Intern",
	  company: "Air India, Mumbai, India",
	  period: "2009 - 2010",
	  description: "Assisted in quality control, technical services, and aircraft maintenance activities. Ensured compliance with aviation regulations and safety standards."
	},
	// Add more aviation experiences here if needed
  ];
  
  const entrepreneurshipExperience = [
	{
	  role: "Full Stack Developer",
	  company: "Freelance",
	  period: "2018 - present",
	  description: "Developed web applications for clients using various frameworks and techologies. Managed end-to-end project delivery and client communication."
	},
	{
	  role: "Director",
	  company: "Seed Innovations, Kerala, India",
	  period: "2023 - present",
	  description: "Managing a team for developing innovative products and services. Leading the company's vision, strategy, and growth."
	},
	{
	  role: "Managing Partner",
	  company: "Blue Diamond Garments, Kerala, India",
	  period: "2019 - present",
	  description: "Blue Diamond Garments focus on manufacturing and marketing infant beds, baby carriers, clothing, and other baby products."
	},
	{
	  role: "Managing Partner",
	  company: "Blue Diamond Tailoring LLC, Abu Dhabi, UAE",
	  period: "2013 - present",
	  description: "Blue Diamond Tailoring LLC is my family business that specializes in manufacture, wholesale and reatil of abayas and sheilas all over the GCC."
	},
	// Add more entrepreneurship experiences here if needed
  ];


  const ExperienceTimeline = ({ experiences, title }) => {
	return (
	  <div className="w-full max-w-2xl md:max-w-5xl mx-auto mb-8 md:mb-20 p-2 md:p-4">
		<h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-12 text-center">{title}</h3>
		<div className="relative">
		  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-700 hidden md:block"></div>
		  {experiences.map((exp, index) => (
			<motion.div
			  key={index}
			  className={`mb-1 md:mb-12 flex flex-col md:flex-row items-center md:items-start w-full ${index % 2 === 0 ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}
			  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
			  whileInView={{ opacity: 1, x: 0 }}
			  transition={{ duration: 0.8, delay: index * 0.2 }}
			>
			  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-center md:text-right md:pr-8' : 'text-center md:text-left md:pl-8'}`}>
				<p className="text-base md:text-xl text-white font-semibold">{exp.role}</p>
				<p className="text-sm md:text-lg text-indigo-400 italic">{exp.company}</p>
			  </div>
			  <div className="w-full md:w-3/12 flex flex-col items-center">
				<div className="w-2.5 md:w-4 h-2.5 md:h-4 bg-indigo-500 rounded-full border-2 md:border-4 border-indigo-700"></div>
				<div className="w-0.5 h-full bg-gray-800"></div>
				<p className={`bg-indigo-700 text-gray-100 text-xs md:text-sm py-0.5 md:py-1 px-1 md:px-3 rounded mt-1 md:mt-2 ${exp.period.includes("present") ? 'ml-1 md:ml-4' : ''}`}>
				  {exp.period}
				</p>
			  </div>
			  <div className={`w-full md:w-5/12 bg-gray-100 p-2 md:p-6 rounded-lg shadow-sm md:shadow-lg ${index % 2 === 0 ? 'text-center md:text-left md:pl-8' : 'text-center md:text-right md:pr-8'}`}>
				<p className="text-xs  md:text-md md:font-semibold text-gray-800">{exp.description}</p>
			  </div>
			</motion.div>
		  ))}
		</div>
	  </div>
	);
  };
  
  

export default ExperienceTimeline;

  
const AviationWorkExperienceSection = () => {
	return (
		<Section>
		<div className="flex flex-col md:flex-row w-full items-center md:items-start md:mt-12 md:pt-10 scale-80">
		  <motion.div className="w-full md:w-1/2" whileInView={"visible"}>
			<h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-left">
			  Aviation Experience
			</h2>
			<div className=" md:space-y-16 w-1/2 md:w-full">
			  <ExperienceTimeline experiences={aviationExperience} />
			</div>
		  </motion.div>
		</div>
	  </Section>
	);
  };
 const EnterpreunershipWorkExperienceSection = () => {
  return (
    <Section mobileTop={true}>
      <div className="flex flex-col md:flex-row w-full items-start md:items-start md:mt-12 md:pt-10">
        <motion.div className="w-full md:w-1/2 h-3/4 md:h-full" whileInView="visible">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
            My Business Ventures
          </h2>
          <div className=" w-3/4 md:w-full ">
            <ExperienceTimeline experiences={entrepreneurshipExperience} />
          </div>
        </motion.div>
      </div>

    </Section>
  );
};
  

export { AviationWorkExperienceSection, EnterpreunershipWorkExperienceSection };