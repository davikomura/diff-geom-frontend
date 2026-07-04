import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Stars } from "@react-three/drei";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry.js";
import { useMediaQuery } from "react-responsive";

function MobiusMesh({ detail }: { detail: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.001; // Velocidade de rotação menor e mais elegante
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
    // detail de u e segment v reduzidos para otimizar vértices
    return new ParametricGeometry(mobiusFunc, detail, 12);
  }, [detail]);

  return (
    <mesh ref={ref} geometry={geometry} scale={0.9}>
      <meshBasicMaterial
        color="#eab308"
        wireframe
        transparent
        opacity={0.35} // Opacidade menor para um visual de fundo mais sutil e elegante
      />
    </mesh>
  );
}

export function MobiusBackground() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const cameraPosition = isMobile ? [0, 0, 7] : [0, 0, 5];
  // Detalhes geométricos reduzidos para aumentar drasticamente o FPS (reduz contagem de vértices em ~60%)
  const mobiusDetail = isMobile ? 30 : 60;
  // Corrige o bug lógico: mobile renderizava 10.000 e desktop 5.000. Reduzido para performance máxima.
  const starCount = isMobile ? 800 : 2500;

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas 
        camera={{ position: cameraPosition as [number, number, number], fov: 45 }}
        gl={{ antialias: false, powerPreference: "high-performance" }} // Otimizações extras de hardware
      >
        <Stars
          radius={100}
          depth={40}
          count={starCount}
          factor={2.5}
          saturation={0}
          fade
          speed={0.5} // Estrelas cintilando mais devagar reduzem processamento de vertex shaders
        />
        <MobiusMesh detail={mobiusDetail} />
      </Canvas>
    </div>
  );
}
export default MobiusBackground;
