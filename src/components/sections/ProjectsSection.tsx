import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
  transition: { staggerChildren: 0.1 },
};

const projects = [
  {
    title: "Controle Perto",
    description: "Sistema de controle de gastos pessoais onde o usuário pode registrar seus gastos e receitas, visualizar gráficos e estatísticas, e acompanhar seu orçamento.",
    image: "/controle.png",
    technologies: ["React", "TypeScript", "Node.js", "Supabase", "Chart.js"],
    github: "https://github.com/lazaaro01/Spending-Systems",
    live: "https://spending-systems.vercel.app/",
  },
  {
    title: "Tech Tools Hub",
    description: "Portal centralizado para desenvolvedores que desejam acesso rápido a comandos de diversas ferramentas (Docker, Git, Kubernetes, etc.). Elimina a necessidade de navegar por documentações extensas para tarefas simples.",
    image: "/tech.png",
    technologies: ["Next.js 15+", "React", "Tailwind CSS v4", "GroqIA"],
    github: "https://github.com/lazaaro01/Tech-Tools-Hub",
    live: "https://tech-tools-hub.vercel.app/",
  },
  {
    title: "Notion Pessoal",
    description: "Aplicativo pessoal para registrar humor diário, fazer anotações, armazenar links importantes, adicionar músicas, registrar livros lidos e escrever avaliações sobre cada um deles.",
    image: "/layout.png",
    technologies: ["React", "TypeScript", "Three.js", "PWA"],
    github: "https://github.com/lazaaro01/App-Pessoal",
    live: "https://app-pessoal.vercel.app/",
  },
  {
    title: "Driblus — Agendamento Esportivo",
    description: "Desenvolvimento de aplicação web utilizando Java, Spring Boot e React. Integração de APIs e banco de dados para criação de soluções completas e escalabilidade em nuvem com AWS.",
    image: "/driblus.png",
    technologies: ["React", "Node.js", "PostgreSQL", "PWA", "AWS"],
    github: "#",
    live: "https://driblus.com.br/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="group rounded-2xl bg-white/[0.04] border border-white/[0.06] overflow-hidden hover:border-primary/30 transition-all duration-500 card-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-all hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105"
                  >
                    <Github className="h-4 w-4" /> Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/lazaaro01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" /> Ver todos no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
