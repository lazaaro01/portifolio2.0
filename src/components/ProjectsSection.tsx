import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Capigames — Jogo Interativo para o Parque Temático CapiValley",
      description: "Desevolvimento de jogo interativo e 100% offline para o parque temático CapiValley, com personagens e identidade visual totalmente personalizados. A aplicação foi feita com Electron e otimizada para rodar em monitores touch screen, garantindo uma experiência divertida e acessível para todas as idades — sem depender de conexão com a internet.",
      image: "/capivalley.jpg",
      technologies: ["Electron", "JavaScript", "HTML", "Bootstrap", "PWA"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Sistema Reação Fórmula 1",
      description: "Um jogo de reação inspirado na Fórmula 1, desenvolvido para a Claro. O projeto integra frontend React, backend Node.js e hardware Arduino para criar uma experiência de jogo imersiva.",
      image: "/claro.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "C++"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Controle Perto",
      description: "Sistema de controle de gastos pessoais onde o usuário pode registrar seus gastos e receitas, visualizar gráficos e estatísticas, e acompanhar seu orçamento.",
      image: "/controle.png",
      technologies: ["React", "TypeScript", "Node.js", "Supabase", "Chart.js"],
      github: "https://github.com/lazaaro01/Spending-Systems",
      live: "https://spending-systems.vercel.app/",
      featured: false
    },
    {
      title: "Tech Tools Hub",
      description: "O Tech Tools Hub é um portal centralizado para desenvolvedores que desejam acesso rápido a comandos de diversas ferramentas (Docker, Git, Kubernetes, etc.). O foco é na clareza, rapidez e utilidade prática, eliminando a necessidade de navegar por documentações extensas para tarefas simples.",
      image: "/tech.png",
      technologies: ["Next.js 15+", "React", "Tailwind CSS v4", "GroqIA",],
      github: "https://github.com/lazaaro01/Tech-Tools-Hub",
      live: "https://tech-tools-hub.vercel.app/",
      featured: false
    },
    {
      title: "Notion Pessoal",
      description: "Aplicativo pessoal construído para ser o seu Notion pessoal. Nele, você pode registrar seu humor diário, fazer anotações, armazenar links importantes, adicionar músicas que te fazem bem, registrar livros que leu e escrever uma avaliação sobre cada um deles.",
      image: "/layout.png",
      technologies: ["React", "TypeScript", "Three.js", "PWA"],
      github: "https://github.com/lazaaro01/App-Pessoal",
      live: "https://app-pessoal.vercel.app/",
      featured: false
    },
    {
      title: "Driblus - Agendamento Esportivo",
      description: "Desevolvimento de aplicação web ultilizando Java, Spring Boot e React. Integração de APIs e banco de dados para criação de soluções completas e escalabilidade em nuvem com AWS.",
      image: "/driblus.png",
      technologies: ["React", "Node.js", "PostgreSQL", "PWA", "AWS"],
      github: "#",
      live: "https://driblus.com.br/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-hero">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Portfólio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Projetos em <span className="text-transparent bg-clip-text bg-gradient-accent">Destaque</span></h3>
        </div>

        {/* Featured Projects - Large Cards */}
        <div className="grid gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="flex-1 w-full relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/20 to-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-60 transition duration-700"></div>
                
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition duration-500"></div>
                  
                  {/* Overlay buttons on mobile or hover */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Button className="flex-1 rounded-xl bg-white text-black hover:bg-white/90 font-bold" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="rounded-xl border-white/20 bg-black/50 backdrop-blur-md text-white hover:bg-white/10" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider mb-6">
                  Projeto em Destaque
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-primary-light transition-colors">{project.title}</h4>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="hidden lg:flex gap-4">
                  <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Explorar Projeto <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 px-8" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Código <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects - Bento Grid */}
        <div className="pt-20 border-t border-white/5">
          <h3 className="text-2xl font-bold text-white mb-10">Outras Explorações</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 flex flex-col h-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors">{project.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 rounded-xl border-white/10 bg-white/5 text-white text-xs" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Demo</a>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl border-white/10 bg-white/5 text-white" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                       <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
          <div className="relative z-10">
            <h4 className="text-3xl font-bold text-white mb-4">Tem um projeto em mente?</h4>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Estou sempre em busca de desafios complexos e colaborações impactantes. Vamos transformar sua ideia em realidade.
            </p>
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 font-extrabold px-12 h-14" asChild>
              <a href="#contact">Vamos Conversar</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
