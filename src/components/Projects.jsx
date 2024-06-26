import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState, useMemo } from "react";

export const projects = [
	{
		title: "Project 1",
		url: "https://mamaschoice.in/",
		image: "/projects/project1.jpeg",
		description: "This is project 1",
		languages: ["JavaScript", "React"],
		
	},
	{
		title: "Project 2",
		url: "https://example.com/project2",
		image: "/projects/project2.jpg",
		description: "This is project 2",
		languages: ["Python", "Django"],
	},
	{
		title: "Project 3",
		url: "https://example.com/project2",
		image: "/projects/project3.jpeg",
		description: "This is project 3",
		languages: ["JavaScript", "Node.js"],
	},
	{
		title: "Project 4",
		url: "https://example.com/project2",
		image: "/projects/project4.jpg",
		description: "This is project 4",
		languages: ["JavaScript", "Node.js"],
	},
	{
		title: "Project 5",
		url: "https://example.com/project2",
		image: "/projects/project5.jpeg",
		description: "This is project 5",
		languages: ["JavaScript", "Node.js"],
	},
	// {
	// 	title: "Project 6",
	// 	url: "https://example.com/project2",
	// 	image: "/projects/project6.jpg",
	// 	description: "This is project 6",
	// },
	// Add more projects here if needed
];

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
  
  export const currentProjectAtom = atom(Math.floor(projects.length / 2));
export const selectedLanguageAtom = atom("All");

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);
  const [selectedLanguage] = useAtom(selectedLanguageAtom);

  const filteredProjects = selectedLanguage === "All"
    ? projects
    : projects.filter(project => project.languages.includes(selectedLanguage));

  return (
    <group position-y={-viewport.height * 4 + 1}>
      {projects.map((project, index) => {
        const isVisible = filteredProjects.includes(project);
        
        if (!isVisible) return null; // Hide projects that are not in the filtered list

        const filteredIndex = filteredProjects.indexOf(project);
        
        return (
          <motion.group
            key={"project_" + index}
            position={[filteredIndex * 2.5, 0, -3]}
            animate={{
              x: 0 + (filteredIndex - filteredProjects.indexOf(projects[currentProject])) * 2.5,
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