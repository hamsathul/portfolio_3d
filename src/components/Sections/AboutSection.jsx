import { motion } from 'framer-motion';
import { Section } from '../Interface';

export const AboutSection = (props) => {
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
					onClick={() => setSection(6)}
				>
				Contact Me
			</motion.button>
		</Section>
	)
}

