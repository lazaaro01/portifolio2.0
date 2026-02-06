import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSpring, SiNodedotjs,
    SiPostgresql, SiDocker, SiAmazons3, SiPrisma, SiGithubactions,
    SiMongodb, SiFirebase, SiAmazonrds, SiGit, SiGithub, SiJavascript,
    SiElectron, SiExpress, SiFastify, SiGraphql, SiSupabase, SiTerraform,
    SiGo, SiGin, SiLaravel, SiPhp, SiVite
} from "react-icons/si";

// Lista de tecnologias com seus respectivos ícones e cores
const techs = [
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { icon: SiExpress, color: "#ffffff", name: "Express" },
    { icon: SiSpring, color: "#47A248", name: "Srping" },
    { icon: SiFastify, color: "#000000ff", name: "Fastify" },
    { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiPrisma, color: "#2D3748", name: "Prisma" },
    { icon: SiDocker, color: "#2496ED", name: "Docker" },
    { icon: SiGithubactions, color: "#2088FF", name: "CI/CD" },
    { icon: SiGit, color: "#F05032", name: "Git" },
    { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { icon: SiGraphql, color: "#E10098", name: "GraphQL" },
    { icon: SiGo, color: "#00ADD8", name: "Go" },
    { icon: SiGin, color: "#00ADD8", name: "Gin" },
    { icon: SiTerraform, color: "#350080ff", name: "Terraform" },
];

function IconItem({ position, tech }: { position: THREE.Vector3, tech: typeof techs[0] }) {
    const [hovered, setHovered] = useState(false);

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Html transform occlude distanceFactor={10} style={{ pointerEvents: 'none' }}>
                    <div
                        className="flex flex-col items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={{
                            transform: hovered ? 'scale(1.5)' : 'scale(1)',
                            filter: hovered ? `drop-shadow(0 0 20px ${tech.color})` : 'none',
                        }}
                    >
                        <tech.icon
                            className="text-2xl md:text-3xl lg:text-4xl"
                            style={{ color: tech.color }}
                        />
                    </div>
                </Html>
            </Float>
        </group>
    );
}

function IconCloud({ radius }: { radius: number }) {
    const count = techs.length;
    // Distribuir os ícones de forma homogênea na esfera (Algoritmo de Fibonacci Sphere)
    const positions = useMemo(() => {
        const pos = [];
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            pos.push(new THREE.Vector3().setFromSphericalCoords(radius, phi, theta));
        }
        return pos;
    }, [count, radius]);

    return (
        <group>
            {techs.map((tech, i) => (
                <IconItem
                    key={i}
                    position={positions[i]}
                    tech={tech}
                />
            ))}
        </group>
    );
}

const TechSection = () => {
    return (
        <section id="tech" className="py-20 bg-background relative overflow-hidden h-[700px] flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4 relative z-10 pointer-events-none">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Tecnologias & <span className="bg-gradient-accent bg-clip-text text-transparent">Ferramentas</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Arraste para girar e interaja com os ícones.
                </p>
            </div>

            <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <IconCloud radius={3.5} />

                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={3.0}
                        enablePan={false}
                    />
                </Canvas>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
};

export default TechSection;
