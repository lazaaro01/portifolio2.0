import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Desenvolvedor Fullstack Pleno",
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

  const education = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário Unifametro",
      period: "2024 - Cursando",
      description: "Formação focada em desenvolvimento web, banco de dados e arquitetura de software"
    },
    {
      title: "Certificação AWS Solutions Architect",
      institution: "Amazon Web Services",
      period: "2025",
      description: "Certificação em arquitetura de soluções na nuvem AWS"
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

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Formação & Certificações</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{edu.title}</h4>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mb-3">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;