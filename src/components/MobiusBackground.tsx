import { useThree, Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Stars } from "@react-three/drei";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry.js";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function CameraRig() {
  const { camera } = useThree();

  useFrame(({ mouse }) => {
    camera.position.x = mouse.x * 0.5;
    camera.position.y = mouse.y * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function MobiusMesh() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  const mobiusFunc = (u: number, v: number, target: THREE.Vector3) => {
    u *= Math.PI * 2;
    v = v * 2 - 1;

    const a = 1;
    const x = (a + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
    const y = (a + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
    const z = (v / 2) * Math.sin(u / 2);

    target.set(x, y, z);
  };

  const geometry = new ParametricGeometry(mobiusFunc, 100, 20);

  return (
    <mesh ref={ref} geometry={geometry}>
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
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Stars
          radius={100}         
          depth={50}            
          count={5000}          
          factor={4}           
          saturation={0}       
          fade                 
          speed={1}            
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={0.6} />
        <CameraRig />
        <MobiusMesh />
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