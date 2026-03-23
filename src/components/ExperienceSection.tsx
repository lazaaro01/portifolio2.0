import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Desenvolvedor Fullstack Pleno",
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
      title: "Desenvolvedor Fullstack",
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
      period: "Jan 2021 - Maio 2022",
      type: "Presencial",
      description: [
        "Desenvolvimento de funcionalidades em projetos web",
        "Manutenção e correção de bugs em aplicações existentes",
        "Participação em code reviews e pair programming",
        "Aprendizado contínuo de tecnologias modernas"
      ],
      technologies: ["NextJs", "React", "MySQL", "Vite", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-hero">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Trajetória</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Experiência <span className="text-transparent bg-clip-text bg-gradient-accent">Profissional</span></h3>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Date Side */}
                <div className={`flex-1 w-full text-right ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block px-4 py-2 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/10 text-primary-light font-bold text-sm mb-2">
                    {exp.period}
                  </div>
                  <div className="text-slate-400 flex items-center gap-2 justify-end">
                     {index % 2 === 0 ? (
                       <>
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                       </>
                     ) : (
                        <>
                        <span>{exp.location}</span>
                        <MapPin className="h-4 w-4" />
                        </>
                     )}
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-20"></div>

                {/* Content Side */}
                <div className="flex-1 w-full">
                  <div className="p-8 rounded-[2rem] bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors">{exp.title}</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary-light border-primary/20 rounded-lg">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="text-primary font-semibold mb-6">{exp.company}</div>
                      
                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-400 text-sm flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10 text-slate-300 border-none">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;