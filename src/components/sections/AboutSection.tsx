import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Lightbulb, CheckCircle2 } from "lucide-react";

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

const highlights = [
  { icon: GraduationCap, title: "Formação", description: "Graduando em Análise e Desenvolvimento de Sistemas" },
  { icon: Briefcase, title: "Experiência", description: "3+ anos como Desenvolvedor Fullstack" },
  { icon: Users, title: "Liderança", description: "Mentor e líder de equipes de desenvolvimento" },
  { icon: Lightbulb, title: "Inovação", description: "Sempre explorando novas tecnologias e soluções" },
];

const focusAreas = [
  "Desenvolvimento de APIs REST e microsserviços",
  "Arquitetura orientada a boas práticas (Clean Code, SOLID)",
  "Modelagem e otimização de dados relacional",
  "Containerização com Docker",
  "Deploy e infraestrutura em AWS",
  "Integração entre sistemas e CI/CD",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Sobre Mim</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Engenharia de Software com <span className="text-gradient">Propósito</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center mb-20">
          <motion.div {...fadeUp} className="relative mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-blue-500/10 to-primary/20 rounded-full blur-2xl opacity-60" />
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <img src="/foto1.png" alt="Lázaro Vasconcelos" className="w-full h-full object-cover object-[55%_90%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium mb-2">
              Foco em Backend & Arquitetura
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Focado em <span className="text-white font-medium">backend</span>, arquitetura escalável e boas práticas de engenharia de software. Com experiência <span className="text-white font-medium">Full Stack</span>, atuando em projetos end-to-end.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sempre fui movido pela curiosidade de entender como os sistemas funcionam. Hoje transformo isso em código, APIs bem estruturadas e aplicações organizadas que resolvem problemas reais.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tenho experiência no desenvolvimento de aplicações web end-to-end, atuando desde a modelagem de bancos de dados e design de arquitetura, até a construção de interfaces modernas e performáticas. Meu foco está em criar sistemas <span className="text-white font-medium">escaláveis</span>, <span className="text-white font-medium">sustentáveis</span> e de fácil manutenção a longo prazo.
            </p>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6">Principais Focos de Atuação</h3>
          <motion.div {...stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                {...{
                  ...fadeUp,
                  transition: { ...fadeUp.transition, delay: i * 0.05 },
                }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{area}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div {...stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-primary/30 transition-all duration-500 group card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
