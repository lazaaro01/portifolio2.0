import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Users, Lightbulb } from "lucide-react";
import  LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSpring, SiNodedotjs, SiPostgresql, SiDocker, SiAmazons3, SiPrisma, SiPwa, SiGithubactions, SiMongodb, SiFirebase, SiAmazonrds, SiSwagger, SiJest, SiGit, SiPostman, SiGithub, SiJavascript, SiElectron, SiExpress, SiFastify, SiGraphql } from "react-icons/si";
const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Graduando em Análise e Desenvolvimento de Sistemas"
    },
    {
      icon: Briefcase,
      title: "Experiência",
      description: "2+ anos como Desenvolvedor Fullstack"
    },
    {
      icon: Users,
      title: "Liderança",
      description: "Mentor e líder de equipes de desenvolvimento"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre explorando novas tecnologias e soluções"
    }
  ];

  const teachLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiElectron />, title: "Electron", href: "https://www.electronjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://www.nodejs.com"},
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiFastify />, title: "Fastify", href: "https://www.fastify.io" },
  { node: <SiSpring />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com"},
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com"},
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiAmazons3 />, title: "AWS S3", href: "https://aws.amazon.com/s3/" },
  { node: <SiAmazonrds />, title: "AWS RDS", href: "https://aws.amazon.com/rds/" },
  { node: <SiPwa />, title: "PWA", href: "https://web.dev/progressive-web-apps/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithubactions />, title: "CI/CD", href: "https://en.wikipedia.org/wiki/CI/CD" },
  { node: <SiJest />, title: "Jest", href: "https://jestjs.io" },
  { node: <SiSwagger />, title: "Swagger", href: "https://swagger.io" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="bg-gradient-accent bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor apaixonado por criar soluções digitais inovadoras e eficientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Sou um desenvolvedor fullstack apaixonado por tecnologia e inovação. 
              Com mais de 2 anos de experiência, especializo-me em criar aplicações 
              web modernas e eficientes que oferecem excelente experiência do usuário.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Tenho experiência sólida em desenvolvimento frontend com React, TypeScript 
              e frameworks modernos, bem como backend com Node.js, Java e bancos de dados. 
              Sempre busco as melhores práticas de desenvolvimento e arquitetura de software.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Além do desenvolvimento, gosto de compartilhar conhecimento através de 
              mentoria e contribuições para a comunidade tech.
            </p>
             <p className= "text-muted-foreground text-lg">
             Também já fui professor de informática, com foco na formação acadêmica e preparação para o mercado de trabalho, 
              trabalhando com a Solar Coca-Cola. Durante essa experiência, pude ensinar e orientar diversos alunos 
              a utilizarem a tecnologia de maneira eficaz para suas carreiras profissionais.
          </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-accent p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tecnologias & Ferramentas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {teachLogos.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gradient-card hover:shadow-glow transition-all duration-300"
              >
                {teachLogos[index].node} <span className="ml-2">{skill.title}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;