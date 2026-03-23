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

const categories = [
    {
        title: "Frontend",
        techs: [
            "React", "Next.js", "TypeScript", "Tailwind CSS", 
            "Redux", "Zustand", "Context API", "React Router", 
            "Auth (JWT/OAuth)", "Axios/Fetch", "Hooks", "Vite"
        ]
    },
    {
        title: "Backend",
        techs: [
            "Node.js", "Express", "Fastify", "Spring Boot", 
            "Go", "GraphQL", "REST APIs", "Microsserviços", 
            "JWT/Sessions", "TypeORM/Prisma", "Testes (Jest/Vitest)", "WebSockets"
        ]
    },
    {
        title: "Database, Cloud & DevOps",
        techs: [
            "PostgreSQL", "MongoDB", "Redis", "AWS (S3, EC2, Lambda, RDS)", 
            "Docker", "CI/CD (GitHub Actions)", "Terraform", "Linux", "Git"
        ]
    }
];

const TechSection = () => {
    return (
        <section id="tech" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Stack Tecnológica</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Expertise que gera <span className="text-transparent bg-clip-text bg-gradient-accent">Valor</span></h3>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
                    {/* 3D Visual Side */}
                    <div className="h-[400px] md:h-[500px] relative cursor-grab active:cursor-grabbing bg-white/[0.07] backdrop-blur-sm rounded-[3rem] border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
                            <ambientLight intensity={1} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <IconCloud radius={3.2} />
                            <OrbitControls
                                enableZoom={false}
                                autoRotate
                                autoRotateSpeed={2.0}
                                enablePan={false}
                            />
                        </Canvas>
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/40 pointer-events-none">
                            Interaja com a nuvem 3D
                        </div>
                    </div>

                    {/* Categorized Content Side */}
                    <div className="space-y-8">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 group">
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-px bg-primary/50"></span>
                                    {cat.title}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {cat.techs.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-4 py-2 rounded-xl bg-white/[0.07] border border-white/10 text-slate-300 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        </section>
    );
};

export default TechSection;
