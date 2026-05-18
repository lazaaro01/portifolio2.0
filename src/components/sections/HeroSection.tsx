import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Disponível para novos desafios
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6">
          Lázaro <span className="text-gradient">Vasconcelos</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          Desenvolvedor Fullstack Pleno
        </motion.p>

        <motion.p {...fadeUp(0.25)} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Arquitetando sistemas escaláveis e de alta performance com React, Node.js e Cloud.
          <span className="block text-white/60 text-sm mt-2">3+ anos transformando ideias em soluções digitais robustas.</span>
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105" asChild>
            <a href="#projects">
              Ver Projetos <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold backdrop-blur-sm transition-all hover:scale-105" asChild>
            <a href="/Currículo - Lázaro Vasconcelos Costa.pdf" download>
              <FileDown className="mr-2 h-5 w-5" /> Baixar CV
            </a>
          </Button>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="mt-16 flex justify-center gap-8 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="text-white font-bold text-2xl">3+</div>
            <div className="text-xs uppercase tracking-wider">Anos de Experiência</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-white font-bold text-2xl">10+</div>
            <div className="text-xs uppercase tracking-wider">Sistemas em Produção</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-white font-bold text-2xl">Fullstack</div>
            <div className="text-xs uppercase tracking-wider">Especialista</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
