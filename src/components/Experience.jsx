
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Office } from "./Office";
import { motion } from 'framer-motion-3d'
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState, Suspense } from "react";
import { framerMotionConfig } from "../../config";
import * as THREE from 'three';
import { useScroll, useProgress, Html } from "@react-three/drei";
import { Projects } from "./Projects";
import { Background } from "./Background";
import { Airplane } from "./Airplane";
import { LoaderPinwheelIcon } from "lucide-react";

function LoadingSpinner() {
	const { active, progress } = useProgress();
	return active && (
	  <Html center>
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
		  <LoaderPinwheelIcon size={32} className="text-indigo-600 animate-spin" />
		  <p style={{ marginTop: '10px' }}>Loading: {progress.toFixed(0)}%</p>
		</div>
	  </Html>
	);
  }

export const Experience = (props) => {
	const { menuOpened } = props;
	const { viewport } = useThree();
	const data = useScroll();

	const [section, setSection] = useState(0);

	const isMobile = window.innerWidth < 768;
	const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
	const responsiveRatio = viewport.width / 12;
	const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));
	const [characterAnimation, setCharacterAnimation] = useState("Typing");
	const cameraPositionX = useMotionValue();
	const cameraLookAtX = useMotionValue();

	const characterContainerAboutRef = useRef();
	const characterGroup = useRef();

	const sectionAnimations = {
		0: { cameraPosX: -5, cameraLookX: 5 },
		1: { cameraPosX: -4, cameraLookX: 0 },
		2: { cameraPosX: -5, cameraLookX: 5 },
		3: { cameraPosX: 0, cameraLookX: 0 },
		4: { cameraPosX: 0, cameraLookX: 0 },
		5: { cameraPosX: -4, cameraLookX: 0 },
		6: { cameraPosX: -1, cameraLookX: 7 },
	};

	useEffect(() => {
		const { cameraPosX, cameraLookX} = sectionAnimations[section]
		animate(cameraPositionX, menuOpened ? cameraPosX : 0,{
			...framerMotionConfig
		});
		animate(cameraLookAtX, menuOpened ? cameraLookX: 0,{
			...framerMotionConfig
		});
	}, [menuOpened, section]);

	useEffect(() => {
		setCharacterAnimation("Falling");
		setTimeout(() => {
			if (section === 0) {
				setCharacterAnimation('Typing');
			} else if (section === 1) {
				setCharacterAnimation('Happy');
			} else if (section === 2) {
				setCharacterAnimation('KneelingInspection');
			} else if (section === 3) {
				setCharacterAnimation('Bored');
			} else if (section === 4) {
				setCharacterAnimation('Sitting');
			} else if (section === 5) {
				setCharacterAnimation('Happy');
			} else if (section === 6) {
				setCharacterAnimation('Waving');
			}
		},600);
	}, [section]);

	useFrame((state) => {
		state.camera.position.x = cameraPositionX.get();
		const lookAtVector = new THREE.Vector3(cameraLookAtX.get(), 0, 0);
		state.camera.lookAt(lookAtVector);

		let curSection = Math.floor(data.scroll.current * data.pages);

		if (curSection > 6) {
			curSection = 6;
		}

		if (curSection !== section) {
			setSection(curSection);
		}

		if (section === 0) {
			characterContainerAboutRef.current.getWorldPosition(characterGroup.current.position);
		}
	});

	return (
		<>
			<motion.group 
				ref={characterGroup}
				position={[1.8964747722112971, 0.20700000000000002, 2.5398856174819135]} 
				rotation={[-3.1415926535897927, 1.3153981633974485, 3.141592653589793]}
				scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
				animate={"" + section}
				transition={{
					duration: 0.5,
				}}
				variants={{
					0: {
						scaleX: officeScaleRatio,
						scaleY: officeScaleRatio,
						scaleZ: officeScaleRatio,
					},
					1: {
						y: isMobile ? -viewport.height + 1.6 : isTablet ? -viewport.height + 1.4 : -viewport.height + 1.2,
						x: isMobile ? 0.4 : isTablet ? 0.7 : 1.6,
						z: 7,
						rotateX: 0,
						rotateY: isMobile ? -Math.PI / 12 : isTablet ? -Math.PI / 8 : -Math.PI / 4,
						rotateZ: 0,
						scaleX: isMobile ? 0.4 : isTablet ? 0.6 : 0.75,
						scaleY: isMobile ? 0.4 : isTablet ? 0.6 : 0.75,
						scaleZ: isMobile ? 0.4 : isTablet ? 0.6 : 0.75,
					},
					2: {
						y: isMobile ? -viewport.height * 2 + -0.3 : isTablet ? -viewport.height * 2 -1.5 : -viewport.height * 2 + 0.8,
						x: isMobile ? -0.3 : isTablet ? -1.1 : 1.8,
						z: isMobile ? 5 : isTablet ? 4.8: 5.7,
						rotateX: 0,
						rotateY: isMobile ? -Math.PI / 2 : isTablet ? -Math.PI / 2 : Math.PI / 2,
						rotateZ: 0,
						scaleX: isMobile ? 0.1 : isTablet ? 0.15 : 0.25,
						scaleY: isMobile ? 0.1 : isTablet ? 0.15 : 0.2,
						scaleZ: isMobile ? 0.1 : isTablet ? 0.15 : 0.25,
					},
					3: {
						y: isMobile ? -viewport.height * 3 + 1.6 : isTablet ? -viewport.height * 3 + 1.2 : -viewport.height * 3 + 0.9,
						x: isMobile ? 0.4 : isTablet ? 0.2 : 0,
						z: 7,
						rotateX: 0,
						rotateY: isMobile ? -Math.PI / 12 : isTablet ? -Math.PI / 16 : 0,
						rotateZ: 0,
						scaleX: isMobile ? 0.5 : isTablet ? 0.65 : 0.75,
						scaleY: isMobile ? 0.5 : isTablet ? 0.65 : 0.75,
						scaleZ: isMobile ? 0.5 : isTablet ? 0.65 : 0.75,
					},
					4: {
						x: isMobile ? -0.5 : isTablet ? -2 : -3.5,
						y: isMobile ?  -viewport.height * 4 - 0.8 :-viewport.height * 4 - 1,
						z: 0,
						rotateX: 0,
						rotateY: isMobile ? Math.PI/4 : Math.PI / 2,
						rotateZ: 0,
						scaleX: isMobile ? 0.8 : isTablet ? 1 : 1,
						scaleY: isMobile ? 0.8 : isTablet ? 1 : 1,
						scaleZ: isMobile ? 0.8 : isTablet ? 1 : 1,
					},
					5: {
						y: isMobile ? -viewport.height * 5 + 1.5 : isTablet ? -viewport.height * 5 + 1.3 : -viewport.height * 5 + 1.5,
						x: isMobile ? 0.4 : isTablet ? 0.7 : 1.4,
						z: 7,
						rotateX: 0,
						rotateY: isMobile ? -Math.PI / 12 : isTablet ? -Math.PI / 8 : -Math.PI / 4,
						rotateZ: 0,
						scaleX: isMobile ? 0.5 : isTablet ? 0.65 : 0.75,
						scaleY: isMobile ? 0.5 : isTablet ? 0.65 : 0.75,
						scaleZ: isMobile ? 0.5 : isTablet ? 0.65 : 0.75,
					},
					6: {
						x: isMobile ? 0.3 : isTablet ? 0.4 : 0.5,
						y: isMobile ? -viewport.height * 6 + 2.6 : isTablet ? -viewport.height * 6 + 1.65 : -viewport.height * 6 + 1.5,
						z: 7.5,
						rotateX: 0,
						rotateY: isMobile ? -Math.PI / 8 : isTablet ? -Math.PI / 6 : -Math.PI / 5,
						rotateZ: 0,
						scaleX: isMobile ? 0.15 : isTablet ? 0.6 : 0.75,
						scaleY: isMobile ? 0.15 : isTablet ? 0.6 : 0.75,
						scaleZ: isMobile ? 0.15 : isTablet ? 0.6 : 0.75,
					},
				}}
			>
				<Avatar animation={characterAnimation}/>
			</motion.group>

			<ambientLight intensity={1} />
			
			<motion.group
				position={[
					isMobile ? 0 : isTablet ? 1.2 : 1.5 * officeScaleRatio,
					isMobile ? -viewport.height / 6 : isTablet ? 1.8 : 2,
					3
				]}
				scale={[
					officeScaleRatio,
					officeScaleRatio,
					officeScaleRatio
				]}
				rotation-y={-Math.PI / 4}
				animate={{
					y: isMobile ? -viewport.height / 6 : 0,
				}}
				transition={{
					duration: 0.8,
				}}
			>
				<Suspense fallback={<LoadingSpinner />}>
					<Office section={section} />
					<group 
						ref={characterContainerAboutRef}
						name="CharacterSpot" 
						position={[-0.05, 0.23, -0.673]} 
						rotation={[-Math.PI, 0.53, -Math.PI]}
					/>
					</Suspense>
			</motion.group>

			<Projects section={section} isMobile={isMobile}/>
			
			<motion.group
				position={[
					isMobile ? 0 : isTablet ? 0 : 2,
					isMobile ? -viewport.height * 2 + -0.3 : isTablet ? -viewport.height * 2 + -1.5 : -viewport.height * 2 + 0.8,
					isMobile ? 4.5 : 4.5 
				]}
				scale={isMobile ? [0.017, 0.017, 0.017] : isTablet ? [0.03, 0.03, 0.03] : [0.04, 0.04, 0.04]} 
				rotation-y={isMobile ? -Math.PI / 10 : isTablet ? -Math.PI / 3 : Math.PI / 3} 
			>
				<Airplane section={section} />
			</motion.group>
		</>
	);
};
