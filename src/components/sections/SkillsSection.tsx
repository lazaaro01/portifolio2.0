import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiExpress, SiFastify, SiSpring, SiGo,
  SiPostgresql, SiMongodb, SiRedis, SiDocker,
  SiAmazonecs, SiAmazonrds, SiTerraform, SiPrisma,
  SiGraphql, SiFirebase, SiSupabase, SiGit, SiGithubactions,
} from "react-icons/si";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.08 },
};

const categories = [
  {
    title: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    list: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand", "Context API", "React Router", "Vite", "PWA"],
  },
  {
    title: "Backend",
    icon: SiNodedotjs,
    color: "#339933",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#fff" },
      { name: "Fastify", icon: SiFastify, color: "#fff" },
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
    list: ["Node.js", "Express", "Fastify", "Spring Boot", "Go", "GraphQL", "REST APIs", "Microsserviços", "JWT/Sessions", "TypeORM/Prisma", "Jest/Vitest", "WebSockets"],
  },
  {
    title: "Database, Cloud & DevOps",
    icon: SiDocker,
    color: "#2496ED",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonecs, color: "#FF9900" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
    ],
    list: ["PostgreSQL", "MongoDB", "Redis", "AWS (S3, EC2, Lambda, RDS)", "Docker", "CI/CD (GitHub Actions)", "Terraform", "Linux", "Git"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Stack Tecnológica</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Expertise que gera <span className="text-gradient">Valor</span>
          </h2>
        </motion.div>

        <motion.div {...stagger} className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              className="p-8 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-primary/30 transition-all duration-500 group card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <cat.icon className="h-6 w-6" style={{ color: cat.color }} />
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {cat.techs.map((tech, t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-xs text-muted-foreground hover:border-primary/30 transition-colors"
                  >
                    <tech.icon className="h-3.5 w-3.5" style={{ color: tech.color }} />
                    {tech.name}
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-xs text-muted-foreground mb-3">Também trabalho com:</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.list.map((tech, t) => (
                    <span key={t} className="text-[11px] text-white/40 hover:text-white/70 transition-colors">
                      {tech}{t < cat.list.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
