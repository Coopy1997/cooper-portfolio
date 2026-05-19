'use client';

import { Grid, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';

function WavePlane({ mouseRef }) {
  const meshRef = useRef(null);
  const geometryArgs = useMemo(() => [9, 6, 90, 60], []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const { position } = meshRef.current.geometry.attributes;
    const time = clock.elapsedTime;
    const pointer = mouseRef.current;

    for (let i = 0; i < position.count; i += 1) {
      const x = position.getX(i);
      const y = position.getY(i);
      const distance = Math.sqrt((x - pointer.x * 2) ** 2 + (y + pointer.y * 1.4) ** 2);
      const wave = Math.sin(distance * 2.2 - time * 1.7) * 0.11;
      const ripple = Math.cos(x * 1.4 + time * 0.9) * 0.035;
      position.setZ(i, wave + ripple);
    }

    position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
    meshRef.current.rotation.z = pointer.x * 0.055 + Math.sin(time * 0.18) * 0.012;
    meshRef.current.rotation.x = -Math.PI / 2.65 + pointer.y * 0.045;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.65, 0, 0]} position={[0, -1.05, -0.4]}>
      <planeGeometry args={geometryArgs} />
      <meshStandardMaterial color="#ff4b13" emissive="#661600" emissiveIntensity={0.22} wireframe transparent opacity={0.46} />
    </mesh>
  );
}

function DataBeams({ mouseRef }) {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const pointer = mouseRef.current;
    groupRef.current.rotation.y = pointer.x * 0.16;
    groupRef.current.rotation.x = -pointer.y * 0.08;
    groupRef.current.position.x = Math.sin(clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {[-2.8, -1.4, 0, 1.4, 2.8].map((x, index) => (
        <mesh key={x} position={[x, -0.55 + index * 0.08, -1.8]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.025, 2.2 + index * 0.3, 0.025]} />
          <meshBasicMaterial color={index % 2 ? '#d9ff38' : '#ffb08a'} transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingLabels() {
  return (
    <group position={[0.25, 0.92, -0.3]}>
      <Grid
        args={[4.2, 2.2]}
        cellSize={0.28}
        cellThickness={0.6}
        cellColor="#ffb08a"
        sectionSize={1.12}
        sectionThickness={1.15}
        sectionColor="#ff4b13"
        fadeDistance={5}
        fadeStrength={1.2}
        infiniteGrid={false}
      />
    </group>
  );
}

export default function ThreeShowcase() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -((event.clientY / window.innerHeight) * 2 - 1),
      };
    };

    window.addEventListener('pointermove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMouseMove);
  }, []);

  return (
    <div className="three-showcase three-showcase-grid" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.25, 6.2], fov: 48 }}
        dpr={[1, 1.2]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#070300']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 5, 4]} intensity={1.2} color="#fff3df" />
        <pointLight position={[0, 2, 3]} intensity={2.6} color="#ff4b13" />
        <Stars radius={9} depth={5} count={320} factor={1.8} saturation={0} fade speed={0.2} />
        <DataBeams mouseRef={mouseRef} />
        <FloatingLabels />
        <WavePlane mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
