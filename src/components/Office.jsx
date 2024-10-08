
import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';
import { animate, useMotionValue } from 'framer-motion';
import { useFrame } from '@react-three/fiber';

export function Office(props) {
	return (
	  <React.Suspense fallback={null}>
		<OfficeContent {...props} />
	  </React.Suspense>
	);
  }
  

function OfficeContent(props) {
  const { section, wireFrame } = props;
  const { nodes, materials } = useGLTF('/models/scene.gltf');
  const texture = useTexture('/textures/baked.jpg');
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  const textureOpacity = useMotionValue(0);
  const textureGlassOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0, {
      duration: 0.8,
    });

    animate(textureGlassOpacity, section === 0 ? 0.42 : 0, {
      duration: 0.8,
    });
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = textureGlassOpacity.get();
  });

  useEffect(() => {
    textureMaterial.wireframe = wireFrame
  }, [wireFrame, textureMaterial]);

  return (
    <group {...props} dispose={null}>
      <group name="Desk" position={[-0.074, 0, -1.521]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh name="Plane001_Plane002_BlackWood001" geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_1" geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_2" geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_3" geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_4" geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry} material={textureMaterial} />
      </group>
      <group name="SM_ShelfSM_Shelf1" position={[-0.868, 1.694, -2.038]}>
        <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={textureMaterial} />
        <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={textureMaterial} />
      </group>
      <motion.group 
        scale={[0, 0, 0]}
        animate={{ scale: section === 0 ? 1 : 0 }}
        name="LavaLamp" position={[-1.302, 2.071, -1.986]}
      >
        <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={textureMaterial} />
      </motion.group>
      <motion.mesh 
        scale={[0, 0, 0]}
        animate={{ scale: section === 0 ? 1 : 0 }} 
        name="WawaRug" geometry={nodes.WawaRug.geometry} material={textureMaterial} position={[-0.281, 0.009, 0.765]} 
      />
      <motion.group 
        scale={[0, 0, 0]}
        animate={{ scale: section === 0 ? 1 : 0 }} 
        name="salameche" position={[-0.61, 2.044, -1.958]} rotation={[-Math.PI, 0.728, -Math.PI]}
      >
        <mesh name="mesh434900071" geometry={nodes.mesh434900071.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_1" geometry={nodes.mesh434900071_1.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_2" geometry={nodes.mesh434900071_2.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_3" geometry={nodes.mesh434900071_3.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_4" geometry={nodes.mesh434900071_4.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_5" geometry={nodes.mesh434900071_5.geometry} material={materials.mat11} />
      </motion.group>
      <group name="keyboard" position={[-0.04, 0.981, -1.316]} rotation={[0, -0.165, 0]} scale={[0.82, 1, 0.88]}>
        <mesh name="mesh425587018" geometry={nodes.mesh425587018.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_1" geometry={nodes.mesh425587018_1.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_2" geometry={nodes.mesh425587018_2.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_3" geometry={nodes.mesh425587018_3.geometry} material={textureMaterial} />
      </group>
      <motion.group 
        scale={[0, 0, 0]}
        animate={{ scale: section === 0 ? 1 : 0 }} 
        name="iMac" position={[0.454, 0.939, -1.723]} rotation={[Math.PI, -1.099, Math.PI]}
      >
        <mesh name="iMac_1" geometry={nodes.iMac_1.geometry} material={textureMaterial} />
        <mesh name="iMac_1_1" geometry={nodes.iMac_1_1.geometry} material={textureMaterial} />
        <mesh name="iMac_1_2" geometry={nodes.iMac_1_2.geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="Comp_Mouse" geometry={nodes.Comp_Mouse.geometry} material={textureMaterial} position={[-0.08, 0, 0.01]} />
      <group name="plant" position={[-0.78, 1.071, -1.61]}>
        <mesh name="mesh24448074" geometry={nodes.mesh24448074.geometry} material={textureMaterial} />
        <mesh name="mesh24448074_1" geometry={nodes.mesh24448074_1.geometry} material={textureMaterial} />
        <mesh name="mesh24448074_2" geometry={nodes.mesh24448074_2.geometry} material={textureMaterial} />
      </group>
      <motion.group 
        scale={[0, 0, 0]}
        animate={{ scale: section === 0 ? 1 : 0 }} 
        name="Houseplant_7" position={[-2.019, -0.042, -1.526]} rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh name="Houseplant_7_1" geometry={nodes.Houseplant_7_1.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_2" geometry={nodes.Houseplant_7_2.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_3" geometry={nodes.Houseplant_7_3.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0, 0, 0]}
        animate={{ scale: section === 0 ? 1 : 0 }} 
        name="palm_tree_01" position={[2.13, -0.081, -1.055]} rotation={[-Math.PI, 0.672, -Math.PI]}
      >
        <mesh name="palm_tree_01-Mesh" geometry={nodes['palm_tree_01-Mesh'].geometry} material={textureMaterial} />
        <mesh name="palm_tree_01-Mesh_1" geometry={nodes['palm_tree_01-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="palm_tree_01-Mesh_2" geometry={nodes['palm_tree_01-Mesh_2'].geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0, 0, 0]}
        animate={{ scale: section === 0 ? 1 : 0 }} 
        name="Chair" position={[-0.188, 0, -0.708]} rotation={[0, -0.376, 0]}
      >
        <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={textureMaterial} />
      <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={textureMaterial} />
      <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={textureMaterial} />
      <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={textureGlassMaterial} />
    </group>
  );
}

useGLTF.preload('/models/scene.gltf');
useTexture.preload('/textures/baked.jpg');
