import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Users, Lightbulb } from "lucide-react";

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
      description: "3+ anos como Desenvolvedor Fullstack"
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

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="bg-gradient-accent bg-clip-text text-transparent">Mim</span>
          </h2>
        </div>

        {/* Photo + Text Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-none">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>

              {/* Photo container */}
              <div className="relative">
                <img
                  src="/eu.jpeg"
                  alt="Lázaro Vasconcelos - Desenvolvedor Fullstack"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-hero relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-xl opacity-50 blur-lg"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-md"></div>
              </div>

            </div>
          </div>

          {/* Journey Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Desenvolvedor fullstack,
              com experiência na construção e manutenção de aplicações web modernas,
              atuando desde a concepção até a entrega de soluções eficientes e escaláveis.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Atualmente atuo com React, TypeScript e Node.js,
              aplicando boas práticas de desenvolvimento, código limpo e arquiteturas bem estruturadas.
            </p>
            <p className="text-muted-foreground text-lg">
              Além do desenvolvimento, gosto de compartilhar conhecimento através de mentoria e contribuições
              para a comunidade tech. Também já atuei como professor de informática na Solar Coca-Cola,
              onde pude contribuir para a formação acadêmica e preparação profissional de alunos,
              utilizando a tecnologia como ferramenta para impulsionar carreiras.
            </p>
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-gradient-accent p-4 rounded-xl">
                    <item.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section >
  );
};

export default AboutSection;