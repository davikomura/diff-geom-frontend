import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Stars } from "@react-three/drei";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry.js";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMediaQuery } from "react-responsive";

function MobiusMesh({ detail }: { detail: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  const geometry = useMemo(() => {
    const mobiusFunc = (u: number, v: number, target: THREE.Vector3) => {
      u *= Math.PI * 2;
      v = v * 2 - 1;

      const a = 1;
      const x = (a + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
      const y = (a + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
      const z = (v / 2) * Math.sin(u / 2);

      target.set(x, y, z);
    };
    return new ParametricGeometry(mobiusFunc, detail, 20);
  }, [detail]);

  return (
    <mesh ref={ref} geometry={geometry} scale={0.9}>
      <meshStandardMaterial
        color="#facc15"
        emissive="#facc15"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export function MobiusBackground() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const cameraPosition = isMobile ? [0, 0, 7] : [0, 0, 5];
  const mobiusDetail = isMobile ? 60 : 100;
  const starCount = isMobile ? 10000 : 5000;

  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <Canvas camera={{ position: cameraPosition as [number, number, number], fov: 45 }}>
        <Stars
          radius={100}
          depth={50}
          count={starCount}
          factor={3}
          saturation={0}
          fade
          speed={1}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={0.6} />
        <MobiusMesh detail={mobiusDetail} />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            intensity={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
