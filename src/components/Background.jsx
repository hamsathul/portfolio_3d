import { Sphere, useScroll } from "@react-three/drei"
import * as THREE from "three"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useFrame } from "@react-three/fiber"

export const Background = () => {

	const material = useRef();
	const color = useRef({
		color: "black",
	});

	const data = useScroll();

	const tl = useRef();

	useFrame(() => {
	tl.current.progress(data.scroll.current);
	material.current.color = new THREE.Color(color.current.color);
	});

	useEffect(() => {
		tl.current = gsap.timeline();
		tl.current.to(color.current, {
			color: '#gray',
		});
		tl.current.to(color.current, {
			color: '#gold',
		});
		tl.current.to(color.current, {
			color: '#green',
		});
		tl.current.to(color.current, {
			color: 'pink',
		});
		tl.current.to(color.current, {
			color: 'black',
		});

	}, []);

	return (
		<group>
			<Sphere scale={[30,30,30]}>
				<meshBasicMaterial 
				ref={material}
				side={THREE.BackSide}
				toneMapped={true}
				/>
			</Sphere>
		</group>
	)
}