import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { inSphere } from 'maath/random/dist/maath-random.esm';

const StarField = () => {
  const ref = useRef<THREE.Points>(null);
  const points = useMemo(() => inSphere(new Float32Array(5000), { radius: 1.2 }), []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y -= delta * 0.025;
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.0045}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const RaindropCanvas = () => (
  <div className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70 mix-blend-screen">
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <StarField />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);
