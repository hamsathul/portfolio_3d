import { motion } from "framer-motion";
import { Section } from "./Interface";

const aviationExperience = [
	{
	  role: "Air Safety Officer",
	  company: "Directorate General of Civil Aviation (DGCA), India",
	  period: "2010 - 2012",
	  description: "Managed flight planning, weather analysis, and crew briefings. Ensured compliance with aviation regulations and safety standards."
	},
	{
	  role: "Technical Assistant",
	  company: "Air Works, Mumbai, India",
	  period: "2009 - 2009",
	  description: "Managed flight planning, weather analysis, and crew briefings. Ensured compliance with aviation regulations and safety standards."
	},
	{
	  role: "Quality Control & Technical Services Intern",
	  company: "Air India, Mumbai, India",
	  period: "2009 - 2010",
	  description: "Managed flight planning, weather analysis, and crew briefings. Ensured compliance with aviation regulations and safety standards."
	},
	// Add more aviation experiences here if needed
  ];
  
  const entrepreneurshipExperience = [
	{
	  role: "Full Stack Developer",
	  company: "Freelance",
	  period: "2018 - present",
	  description: "Founded and led a technology startup focusing on AI-driven solutions for the aviation industry. Managed a team of 15 and secured seed funding."
	},
	{
	  role: "Director",
	  company: "Seed Innovations",
	  period: "2023 - present",
	  description: "Founded and led a technology startup focusing on AI-driven solutions for the aviation industry. Managed a team of 15 and secured seed funding."
	},
	{
	  role: "Managing Partner",
	  company: "Blue Diamond Garments",
	  period: "2019 - present",
	  description: "Founded and led a technology startup focusing on AI-driven solutions for the aviation industry. Managed a team of 15 and secured seed funding."
	},
	{
	  role: "Managing Partner",
	  company: "Blue Diamond Tailoring LLC",
	  period: "2013 - present",
	  description: "Founded and led a technology startup focusing on AI-driven solutions for the aviation industry. Managed a team of 15 and secured seed funding."
	},
	// Add more entrepreneurship experiences here if needed
  ];


const ExperienceTimeline = ({ experiences, title }) => {
  return (
    <div className="w-full max-w-5xl mx-auto mb-20">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{title}</h3>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-700"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <p className="text-xl text-white font-semibold">{exp.role}</p>
              <p className="text-lg text-gray-400 italic">{exp.company}</p>
            </div>
            <div className="w-2/12 flex flex-col items-center">
              <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-indigo-700"></div>
              <div className="w-0.5 h-full bg-gray-800"></div>
              <p className={`bg-indigo-700 text-gray-100 text-sm py-1 px-3 rounded mt-2 ${exp.period.includes("present") ? 'ml-4' : ''}`}>
                {exp.period}
              </p>
            </div>
            <div className={`w-5/12 bg-gray-100 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
              <p className="text-md text-gray-800">{exp.description}</p>
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
		<motion.div className="w-full" whileInView={"visible"}>
		  <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
			Aviation Experience
		  </h2>
		  <div className="space-y-16">
			<ExperienceTimeline experiences={aviationExperience} />

		  </div>
		</motion.div>
	  </Section>
	);
  };
  const EnterpreunershipWorkExperienceSection = () => {
	return (
	    <Section>
		<motion.div className="w-full" whileInView={"visible"}>
		  <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
		  Freelance and Entrepreneurial Ventures
		  </h2>
		  <div className="space-y-16">
		
			<ExperienceTimeline experiences={entrepreneurshipExperience} />
			</div>
		
		</motion.div>
	  </Section>
	);
  };
  

export { AviationWorkExperienceSection, EnterpreunershipWorkExperienceSection };