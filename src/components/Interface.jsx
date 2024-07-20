import { motion } from 'framer-motion';
import {  EnterpreunershipWorkExperienceSection, AviationWorkExperienceSection } from './Workexperience';
import { EducationSection } from './Education';
import { AboutSection } from './Sections/AboutSection.jsx';
import { SkillSection } from './Sections/SkillSection.jsx';
import { ProjectSection } from './Sections/ProjectSection.jsx';
import { ContactSection } from './Sections/ContactSection.jsx';


export const Section = (props) => {
	const { children, mobileTop } = props;
	const isMobile = window.innerWidth < 768;
  
	return (
	  <motion.section 
		className={`
		  h-screen w-screen p-4 md:p-8 max-w-screen-2xl mx-2 md:mx-auto
		  flex flex-col items-start
		  ${mobileTop || isMobile ? "justify-start md:justify-center" : "justify-center"}
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
	  >
		{children}
	  </motion.section>
	);
  }

  export const Interface = (props) => {
	const { setSection } = props;
	const isMobile = window.innerWidth < 768;
  
	return (
	  <div className={`flex flex-col items-start md:items-center w-screen ${isMobile ? 'p-2' : 'p-8'}`}>
		<AboutSection setSection={setSection}/>    
		<EnterpreunershipWorkExperienceSection />
		<AviationWorkExperienceSection />
		<SkillSection />
		<ProjectSection />
		<EducationSection />
		<ContactSection />
	  </div>
	);
  }








