import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';
import * as easing from 'maath/easing';

export const Box = (props: ThreeElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!);
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  const clicked = useRef(false);
  const hovered = useRef(false);

  useFrame((state, delta) => {
    if (hovered.current) {
      easing.dampC(material.current.color, 'orange', 0.15, delta);
    } else {
      easing.dampC(material.current.color, 'hotpink', 0.15, delta);
    }

    if (clicked.current) {
      easing.dampE(ref.current.rotation, [0, 0, 0], 0.15, delta);
    } else {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => (clicked.current = !clicked.current)}
      onPointerOver={() => (hovered.current = true)}
      onPointerOut={() => (hovered.current = false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial ref={material} />
    </mesh>
  );
};
