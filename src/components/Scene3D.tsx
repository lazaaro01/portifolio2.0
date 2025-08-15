import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GeometricShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      // Rotação suave automática
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      
      // Movimento flutuante
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.3}
      >
        {/* Forma geométrica principal - Icosaedro */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshPhongMaterial
            color="#00BFFF"
            shininess={100}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Wireframe overlay */}
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.25, 0]} />
          <meshBasicMaterial
            color="#87CEEB"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Elementos decorativos */}
        <mesh position={[1.8, 0.5, 0.5]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhongMaterial color="#00CED1" emissive="#004d66" />
        </mesh>

        <mesh position={[-1.5, -0.8, 0.3]}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshPhongMaterial color="#1E90FF" emissive="#002244" />
        </mesh>

        <mesh position={[0.8, -1.2, -0.8]}>
          <octahedronGeometry args={[0.12]} />
          <meshPhongMaterial color="#4169E1" emissive="#001133" />
        </mesh>
      </Float>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Iluminação */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color="#ffffff"
        />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#00BFFF"
        />

        {/* Controles suaves (opcional, para interação) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />

        {/* Componente 3D */}
        <GeometricShape />
      </Canvas>
    </div>
  );
};

export default Scene3D;