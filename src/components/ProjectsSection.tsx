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
      title: "Sistema Reação F1",
      description: "Um jogo de reação inspirado na Fórmula 1, desenvolvido para a Claro. O projeto integra frontend React, backend Node.js e hardware Arduino para criar uma experiência de jogo imersiva.",
      image: "/claro.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "C++"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "MovieExplorer",
      description: "Este é um projeto simples de busca de filmes e séries usando a API OMDb. A aplicação permite que o usuário digite o nome de um filme ou série e visualize os resultados com o título, ano de lançamento, cartaz e uma breve sinopse. O projeto foi desenvolvido utilizando React e Tailwind CSS para a estilização.",
      image: "/desktop-layout.png",
      technologies: ["React", "Tailwind CSS", "OMDB API", "Axios"],
      github: "https://github.com/lazaaro01/MovieExplorer",
      live: "https://movie-explorer-coral.vercel.app/",
      featured: false
    },
    {
      title: "Tech Tools Hub",
      description: "Um catálogo prático de comandos e atalhos para desenvolvedores.",
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="bg-gradient-accent bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e destacados
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Projetos em Destaque</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group border-none shadow-soft hover:shadow-hero transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="btn-hero flex-1">
                        <Eye className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="btn-outline-hero">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gradient-card text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Outros Projetos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group border-none shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-gradient-card">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gradient-card">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interessado em ver mais do meu trabalho?</p>
          <Button size="lg" className="btn-hero" asChild>
            <a
              href="https://github.com/lazaaro01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
