import { ContactShadows, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Office } from "./Office";
import { motion } from 'framer-motion-3d'
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { framerMotionConfig } from "../../config";


export const Experience = (props) => {

	const { section, menuOpened } = props;
	const { viewport } = useThree();

	const cameraPositionX = useMotionValue();
	const cameraLookAtX = useMotionValue();
	
	useEffect(() => {
		animate(cameraPositionX, menuOpened ? -5 : 0,{
			...framerMotionConfig
		});
		animate(cameraLookAtX, menuOpened ? 5 : 0,{
			...framerMotionConfig
		});
	}, [menuOpened])

	useFrame((state) => {
		state.camera.position.x = cameraPositionX.get();
		state.camera.lookAt(cameraLookAtX.get(), 0,0);
	});

	// const { animation } = useControls({
	// 	animation: {
	// 	value: 'Typing',
	// 	options: ['Typing', 'Standing', 'Falling'],
	// 	},
	// })
  return (
    <>
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
		<group>
			<Avatar animation={section === 0 ? "Falling" : "Standing"}/>
		</group>
		</motion.group>









	  {/* <Sky />
	  <Environment preset="sunset" />
	  <group position-y={-1}>

		<ContactShadows opacity={0.42}
		scale={10}
		blur={1}
		far={10}
		resolution={256}
		color={"black"}
		/>

	  <Avatar animation={animation}/>
	  
	  {animation === "Typing" && (
		<mesh scale={[0.8, 0.5,0.8]} position-y={0.25}>
		<boxGeometry />
		<meshStandardMaterial color="white" />
	  </mesh>
	  )}
		<mesh
		scale={5}
		rotation-x={-Math.PI * 0.5}
		position-y={-0.001}
		>
			<planeGeometry />
			<meshStandardMaterial color="white" />
		</mesh>
	  </group> */}
    </>
  );
};
