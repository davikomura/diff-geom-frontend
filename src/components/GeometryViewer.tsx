import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

type Coordinates = {
  x: number[][];
  y: number[][];
  z: number[][];
};

type Props = {
  data: {
    coordinates: Coordinates;
  };
};

export function GeometryViewer({ data }: Props) {
  const { x, y, z } = data.coordinates;

  const positions = useMemo(() => {
    const result: number[] = [];

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x[i].length; j++) {
        const xi = x[i][j];
        const yi = y[i][j];
        const zi = z[i][j];

        if ([xi, yi, zi].some(Number.isNaN)) continue;

        result.push(xi, yi, zi);
      }
    }

    return result;
  }, [x, y, z]);

  return (
    <div className="h-[500px] md:h-[600px] bg-gray-900 rounded-2xl shadow-xl ring-1 ring-gray-800 overflow-hidden">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <OrbitControls enablePan={false} enableZoom={true} />
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(positions), 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#22d3ee"
            size={0.03}
            sizeAttenuation
          />
        </points>
      </Canvas>
    </div>
  );
}