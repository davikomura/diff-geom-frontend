import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"
import { CornerCurvatureLegend } from "./CornerCurvatureLegend.tsx"

type Coordinates = {
  x: number[][]
  y: number[][]
  z: number[][]
}

type Props = {
  data: {
    coordinates: Coordinates
    curvature?: number[][]
    principal_curvatures?: {
      k1: number[][]
      k2: number[][]
    }
  }
}

export function GeometryViewer({ data }: Props) {
  const { x, y, z } = data.coordinates
  const curvature = data.curvature

  const { positions, colors } = useMemo(() => {
    const pos: number[] = []
    const cols: number[] = []

    let min = Infinity
    let max = -Infinity

    if (curvature) {
      for (let i = 0; i < curvature.length; i++) {
        for (let j = 0; j < curvature[i].length; j++) {
          const val = curvature[i][j]
          if (!isNaN(val)) {
            min = Math.min(min, val)
            max = Math.max(max, val)
          }
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x[i].length; j++) {
        const xi = x[i][j]
        const yi = y[i][j]
        const zi = z[i][j]

        if ([xi, yi, zi].some(Number.isNaN)) continue

        pos.push(xi, yi, zi)

        if (curvature) {
          const val = curvature[i][j]
          const t = (val - min) / (max - min)
          const color = new THREE.Color().setHSL(0.6 * (1 - t), 1.0, 0.55)
          cols.push(color.r, color.g, color.b)
        } else {
          cols.push(1, 1, 0.4)
        }
      }
    }

    return { positions: pos, colors: cols }
  }, [x, y, z, curvature])

  return (
    <div className="relative h-[500px] md:h-[600px] bg-black rounded-2xl shadow-2xl overflow-hidden">
      <Canvas camera={{ position: [4, 4, 4], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="white" />
        <Stars radius={50} depth={40} count={5000} factor={4} saturation={0} fade speed={1} />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          rotateSpeed={1}
          zoomSpeed={0.7}
          autoRotate
          autoRotateSpeed={1.3}
        />

        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(positions), 3]}
            />
            <bufferAttribute
              attach="attributes-color"
              args={[new Float32Array(colors), 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            sizeAttenuation
            vertexColors
            depthWrite={false}
            transparent
          />
        </points>
      </Canvas>
      {curvature && <CornerCurvatureLegend />}
    </div>
  )
}