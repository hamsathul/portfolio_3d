import { ContactShadows, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Office } from "./Office";
import { motion } from 'framer-motion-3d'
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../../config";
import * as THREE from 'three';
import { useScroll } from "@react-three/drei";
import { Projects } from "./Projects";
import { Background } from "./Background";


export const Experience = (props) => {

	
	const { menuOpened } = props;
	const { viewport } = useThree();
	const data = useScroll();

	const [section, setSection] = useState(0);
	const [characterAnimation, setCharacterAnimation] = useState("Typing");
	const cameraPositionX = useMotionValue();
	const cameraLookAtX = useMotionValue();

	const characterContainerAboutRef = useRef();
	
	useEffect(() => {
		animate(cameraPositionX, menuOpened ? -5 : 0,{
			...framerMotionConfig
		});
		animate(cameraLookAtX, menuOpened ? 5 : 0,{
			...framerMotionConfig
		});
	}, [menuOpened])

	useEffect(() => {
		setCharacterAnimation("Falling");
		setTimeout(() => {
			setCharacterAnimation(section === 0 ? "Typing" : "Standing");
		},600);
	}, [section]);

	useFrame((state) => {
		state.camera.position.x = cameraPositionX.get();
		state.camera.lookAt(cameraLookAtX.get(), 0,0);

		let curSection = Math.floor(data.scroll.current * data.pages);

		if (curSection > 3){
			curSection = 3;
		}

		if (curSection !== section){
			setSection(curSection);
		}

		// const position = new THREE.Vector3();
		// characterContainerAboutRef.current.getWorldPosition(position);
		// console.log(position.x, position.y, position.z);

		// const quaternion = new THREE.Quaternion();
		// characterContainerAboutRef.current.getWorldQuaternion(quaternion);
		// const euler = new THREE.Euler();
		// euler.setFromQuaternion(quaternion, 'XYZ');
		// console.log(euler.x, euler.y, euler.z);
		// console.log(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
	});


  return (
    <>
	<Background />
	<motion.group 
	position={[1.8964747722112971, 0.20700000000000002, 2.5398856174819135]} 
	rotation={[-3.1415926535897927, 1.3153981633974485, 3.141592653589793]}
	animate={"" + section}
	transition={{
		duration: 0.5,
	}}
	variants={{
		0: {
			scaleX: 0.9,
			scaleY: 0.9,
			scaleZ: 0.9,
		},
		1: {
			y: -viewport.height + 0.5,
			x: 0,
			z: 7,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
		},
		2: {
			x: -2,
			y: -viewport.height *2 + 0.5,
			z: 0,
			rotateX: 0,
			rotateY: Math.PI / 2,
			rotateZ: 0,
		},
		3: {
			x: 0.3,
			y: -viewport.height *3 + 1,
			z: 8.5,
			rotateX: 0,
			rotateY: -Math.PI/4,
			rotateZ: 0,
		},

	}}
	>
	  <Avatar animation={characterAnimation}/>

	</motion.group>
      {/* <OrbitControls /> */}
	  <ambientLight intensity={1} />
	  <motion.group 
	  position={[1.5,2,3]}
	  scale={[0.9,0.9,0.9]}
	rotation-y={-Math.PI / 4}
		animate={{
			y: section === 0 ? 0 : -1,
		}}
	>
	  <Office section={section}/>
	  <group 
	  ref={characterContainerAboutRef}
	  name="CharacterSpot" 
	  position={[-0.05, 0.23, -0.673]} 
	  rotation={[-Math.PI, 0.53, -Math.PI]}>
	</group>
	  </motion.group>

		<motion.group position={[0, -1.5, -10]}
		animate={{
			z: section === 1 ? 0 : -10,
			y: section === 1 ? -viewport.height : -1.5,
		}}
		>
		<directionalLight position={[-5,3,5]} intensity={0.4} />
		<Float>
			<mesh position={[1, -3, -15]} scale={[2,2,2]}>
				<sphereGeometry />
				<MeshDistortMaterial
				opacity={0.8}
				transparent
				distort={0.4}
				speed={4}
				color="red"
				/>
			</mesh>
		</Float>
		<Float>
			<mesh position={[3, 1, -18]} scale={[3,3,3]}>
				<sphereGeometry />
				<MeshDistortMaterial
				opacity={0.8}
				transparent
				distort={1}
				speed={5}
				color="yellow"
				/>
			</mesh>
		</Float>
		<Float>
			<mesh position={[-3, -1, -11]} scale={[1.4,1.4,1.4]}>
				<boxGeometry />
				<MeshWobbleMaterial
				opacity={0.8}
				transparent
				factor={1}
				speed={4}
				color="blue"
				/>
			</mesh>
		</Float>

		</motion.group>
		<Projects />

    </>
  );
};
