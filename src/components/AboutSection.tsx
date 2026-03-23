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
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-hero">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-20">
          {/* Photo Section with refined styling */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/20 to-primary/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img
                  src="/eu.jpeg"
                  alt="Lázaro Vasconcelos"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              
              {/* Floating tech badge */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Fullstack Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Minha História</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Engenharia de Software com <span className="text-transparent bg-clip-text bg-gradient-accent">Propósito</span></h3>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Como Desenvolvedor Fullstack Pleno, minha missão vai além de escrever código: trata-se de arquitetar soluções robustas que impulsionam o crescimento de negócios e melhoram a vida das pessoas.
              </p>
              <p>
                Com mais de <span className="text-white font-medium">3 anos de trajetória</span>, consolidei expertise no ecossistema JavaScript/TypeScript, entregando desde aplicações SaaS complexas até integrações de hardware imersivas para grandes marcas como a <span className="text-white font-medium">Claro</span>.
              </p>
              <p>
                Acredito na tecnologia como ferramenta de transformação social. Minha experiência como mentor e professor na <span className="text-white font-medium">Solar Coca-Cola</span> me ensinou que o verdadeiro valor de um engenheiro está na sua capacidade de compartilhar conhecimento e elevar o time.
              </p>
              
              <div className="pt-6 mt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-5 text-lg">Principais Focos de Atuação</h4>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                    <span className="text-slate-300 text-sm">Desenvolvimento de APIs REST e microsserviços</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                    <span className="text-slate-300 text-sm">Arquitetura orientada a boas práticas (Clean Code, SOLID)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                    <span className="text-slate-300 text-sm">Modelagem e otimização de dados relacional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                    <span className="text-slate-300 text-sm">Containerização com Docker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                    <span className="text-slate-300 text-sm">Deploy e infraestrutura em AWS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                    <span className="text-slate-300 text-sm">Integração entre sistemas e CI/CD</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards - Bento Grid Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="p-8 rounded-[2rem] bg-white/[0.07] border border-white/10 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="h-7 w-7 text-primary-light" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;