import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.15 },
};

const experiences = [
  {
    title: "Desenvolvedor Fullstack Pleno",
    company: "Sollydus Tecnologia",
    location: "Remoto",
    period: "Out 2025 - Atual",
    type: "Remoto",
    description: [
      "Desenvolvimento de um SaaS para automatizar processos de negócios para empresas",
      "Implementação de funcionalidades front-end e back-end",
      "Mentoria técnica, code reviews e apoio no crescimento do time",
      "Serviços cloud utilizando AWS S3, Lambda, ELB, RDS, Cluster, Redis",
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"],
  },
  {
    title: "Desenvolvedor Fullstack",
    company: "RobDev",
    location: "Fortaleza, CE",
    period: "Jan 2025 - Out 2025",
    type: "Híbrido",
    description: [
      "Desenvolvimento de aplicações web modernas usando React, TypeScript e Node.js",
      "Implementação de arquiteturas escaláveis e microsserviços",
      "Desenvolvimento de jogos para eventos corporativos",
      "Otimização de performance e experiência do usuário",
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL", "PWA", "ElectronJs"],
  },
  {
    title: "Engenheiro de Software",
    company: "Startup Driblus",
    location: "Fortaleza, CE",
    period: "Jun 2024 - Abril 2025",
    type: "Híbrido",
    description: [
      "Criação de interfaces responsivas e acessíveis",
      "Implementação de arquiteturas escaláveis e microsserviços",
      "Implementação de testes automatizados",
      "Colaboração em metodologias ágeis (Scrum)",
    ],
    technologies: ["React", "Tailwind.js", "Java Spring Boot", "AWS", "WordPress"],
  },
  {
    title: "Desenvolvedor Junior",
    company: "Software House",
    location: "Fortaleza, CE",
    period: "Jan 2021 - Maio 2022",
    type: "Presencial",
    description: [
      "Desenvolvimento de funcionalidades em projetos web",
      "Manutenção e correção de bugs em aplicações existentes",
      "Participação em code reviews e pair programming",
      "Aprendizado contínuo de tecnologias modernas",
    ],
    technologies: ["NextJs", "React", "MySQL", "Vite", "Tailwind CSS"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Trajetória</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <motion.div {...stagger} className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div key={i} {...fadeUp} className="relative pl-14">
                <div className="absolute left-[11px] top-1.5 w-[17px] h-[17px] rounded-full bg-primary border-4 border-background z-10" />

                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-primary/30 transition-all duration-500 card-hover">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                      {exp.type}
                    </span>
                  </div>

                  <div className="text-primary font-semibold mb-3">{exp.company}</div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, d) => (
                      <li key={d} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
