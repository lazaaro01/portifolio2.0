import { Button } from "@/components/ui/button";
import { Code, Mail } from "lucide-react";
import Scene3D from "@/components/Scene3D";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay pointer-events-none opacity-50"></div>
      
      {/* Decorative refined elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Text Content */}
          <div className="text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponível para novos desafios
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Arquitetando <span className="text-transparent bg-clip-text bg-gradient-accent">Sistemas</span> Escaláveis e de Alta Performance
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Olá, eu sou <span className="text-white font-semibold">Lázaro Vasconcelos</span>. Desenvolvedor Fullstack Pleno com 3+ anos de experiência especializado em arquiteturas escaláveis com React, Node.js e Cloud.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105">
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold backdrop-blur-sm transition-all hover:scale-105">
                <Mail className="mr-2 h-5 w-5" /> Contato
              </Button>
            </div>
          </div>

          {/* Elemento 3D Interativo / Visual Destaque */}
          <div className="hidden lg:flex justify-end animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="relative">
              <div className="relative z-20 w-[450px] h-[450px] flex items-center justify-center">
                <Scene3D />
              </div>
              
              {/* Glassmorphism accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-20"></div>
              
              {/* Floating metrics - Mature indicators of value */}
              <div className="absolute top-0 right-0 p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl animate-float-slow">
                <div className="text-primary-light font-bold text-2xl">3+ Anos</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">Experiência</div>
              </div>

              <div className="absolute bottom-10 -left-10 p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl animate-float-slow" style={{ animationDelay: '2s' }}>
                <div className="text-secondary-light font-bold text-2xl">Fullstack</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">Especialista</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;