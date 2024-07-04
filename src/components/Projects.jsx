import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState, useMemo } from "react";
import { projectsData } from "../../utils/projects.js";


const Project = (props) => {
	const { project, highlighted } = props;
  
	const background = useRef();
	const bgOpacity = useMotionValue(0.4);
	const scale = useMotionValue(1);
  
	useEffect(() => {
	  animate(bgOpacity, highlighted ? 0.7 : 0.4);
	  animate(scale, highlighted ? 1.05 : 1);
	}, [highlighted]);
  
	useFrame(() => {
	  background.current.material.opacity = bgOpacity.get();
	});
  
	return (
	  <motion.group
		{...props}
		scale={scale}
		onClick={() => window.open(project.url, "_blank")}
	  >
		<mesh position-z={-0.001} ref={background}>
		  <planeGeometry args={[2.2, 2]} />
		  <meshBasicMaterial color={"black"} transparent opacity={0.4} />
		</mesh>
		<Image
		  scale={[2, 1.2, 1]}
		  url={project.image}
		  toneMapped={false}
		  position-y={0.3}
		/>
		<Text
		  maxWidth={2}
		  anchorX={"left"}
		  anchorY={"top"}
		  fontSize={0.2}
		  position={[-1, -0.4, 0]}
		>
		  {project.title.toUpperCase()}
		</Text>
		<Text
		  maxWidth={2}
		  anchorX={"left"}
		  anchorY={"top"}
		  fontSize={0.1}
		  position={[-1, -0.6, 0]}
		>
		  {project.description}
		</Text>
	  </motion.group>
	);
  };
  
  export const currentProjectAtom = atom(Math.floor(projectsData.length / 2));
export const selectedLanguageAtom = atom("All");

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);
  const [selectedLanguage] = useAtom(selectedLanguageAtom);

  const filteredProjects = selectedLanguage === "All"
    ? projectsData
    : projectsData.filter(project => project.languages.includes(selectedLanguage));

  return (
    <group position-y={-viewport.height * 4 + 1}>
      {projectsData.map((project, index) => {
        const isVisible = filteredProjects.includes(project);
        
        if (!isVisible) return null; // Hide projects that are not in the filtered list

        const filteredIndex = filteredProjects.indexOf(project);
        
        return (
          <motion.group
            key={"project_" + index}
            position={[filteredIndex * 2.5, 0, -3]}
            animate={{
              x: 0 + (filteredIndex - filteredProjects.indexOf(projectsData[currentProject])) * 2.5,
              y: currentProject === index ? 0 : -0.1,
              z: currentProject === index ? -2 : -3,
              rotateX: currentProject === index ? 0 : -Math.PI / 3,
              rotateZ: currentProject === index ? 0 : Math.PI / 3,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        );
      })}
    </group>
  );
};