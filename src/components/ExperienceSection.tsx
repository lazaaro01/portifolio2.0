import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Fullstack Developer Pleno",
      location: "Remoto",
      company: "Sollydus Tecnologia",
      period: "Out 2025 - Atual",
      type: "Remoto",
      description: [
        "Desenvolvimento de um SaaS para automatizar processos de negócios para empresas",
        "Implementação de funcionalidades front-end e back-end",
        "Mentoria técnica, code reviews e apoio no crescimento do time",
        "Serviços cloud utilizando AWS S3, Lambda, ELB, RDS, Cluster, Redis",
      ],
      technologies: ["React", "Tailwind CSS","TypeScript", "Node.js", "AWS","S3", "ELB", "RDS","Lambda", "Docker", "PostgreSQL", "Redis"]
    },
    {
      title: "Fullstack Developer",
      company: "RobDev",
      location: "Fortaleza, CE",
      period: "Jan 2025 - Out 2025",
      type: "Híbrido",
      description: [
        "Desenvolvimento de aplicações web modernas usando React, TypeScript e Node.js",
        "Implementação de arquiteturas escaláveis e microsserviços",
        "Desenvolvimento de jogos para eventos corporativos",
        "Otimização de performance e experiência do usuário"
      ],
      technologies: ["React", "Tailwind CSS","TypeScript", "Node.js", "PostgreSQL", "PWA", "ElectronJs",]
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
        "Colaboração em metodologias ágeis (Scrum)"
      ],
      technologies: ["React", "Tailwind.js", "Java Spring Boot", "AWS", "WordPress"]
    },
    {
      title: "Desenvolvedor Junior",
      company: "Software House",
      location: "Fortaleza, CE",
      period: "Jan 2021 - Maio 2021",
      type: "Presencial",
      description: [
        "Desenvolvimento de funcionalidades em projetos web",
        "Manutenção e correção de bugs em aplicações existentes",
        "Participação em code reviews e pair programming",
        "Aprendizado contínuo de tecnologias modernas"
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência & <span className="bg-gradient-accent bg-clip-text text-transparent">Formação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minha jornada profissional e acadêmica no mundo da tecnologia
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Experiência Profissional</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                      <p className="text-lg font-medium text-primary mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gradient-card">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;