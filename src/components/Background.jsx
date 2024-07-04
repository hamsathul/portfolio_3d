import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

const Star = ({ position, size, color }) => (
  <mesh position={position}>
    <sphereGeometry args={[size, 24, 24]} />
    <meshBasicMaterial color={color} transparent opacity={0.8} />
  </mesh>
);

export const Background = () => {
  const { viewport } = useThree();
  const group = useRef();
  const starField = useRef();
  const data = useScroll();
  const tl = useRef();

  const colorRef = useRef({
    color: "#050505",
    starColor: "#1a1a1a",
  });

  const starCount = 2000;
  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < starCount; i++) {
      const position = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).multiplyScalar(30);
      const size = Math.random() * 0.03 + 0.01;
      temp.push({ position, size });
    }
    return temp;
  }, []);

  useFrame(({ mouse, clock }) => {
    tl.current.progress(data.scroll.current);
    group.current.rotation.x = mouse.y * 0.1;
    group.current.rotation.y = mouse.x * 0.1;

    starField.current.children.forEach((star, i) => {
      const t = (clock.elapsedTime * 0.1 + i) % starCount / starCount;
      star.scale.setScalar(Math.sin(t * Math.PI) * 0.5 + 1);
      star.material.color.set(colorRef.current.starColor);
      star.material.opacity = Math.sin(t * Math.PI) * 0.3 + 0.5;
    });
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(colorRef.current, {
      color: '#080808',
      starColor: '#2a2a2a',
    });
    tl.current.to(colorRef.current, {
      color: '#0a0a0a',
      starColor: '#3a3a3a',
    });
    tl.current.to(colorRef.current, {
      color: '#0c0c0c',
      starColor: '#4a4a4a',
    });
    tl.current.to(colorRef.current, {
      color: '#0e0e0e',
      starColor: '#5a5a5a',
    });
    tl.current.to(colorRef.current, {
      color: '#101010',
      starColor: '#6a6a6a',
    });
  }, []);

  return (
    <group ref={group}>
      <mesh scale={[viewport.width * 2, viewport.height * 2, 1]}>
        <planeGeometry />
        <meshBasicMaterial color={colorRef.current.color} />
      </mesh>
      <group ref={starField}>
        {stars.map((props, i) => (
          <Star key={i} {...props} color={colorRef.current.starColor} />
        ))}
      </group>
    </group>
  );
};