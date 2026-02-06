import { Button } from "@/components/ui/button";
import { Code, Mail } from "lucide-react";
import Scene3D from "@/components/Scene3D";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating animated elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-secondary-light text-lg mb-4 fade-in-up">
              Olá, eu sou
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in-up glow-text">
              Lázaro Vasconcelos
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary mb-8 fade-in-up">
              Desenvolvedor Fullstack
            </h2>
          
          </div>

          {/* Elemento 3D Interativo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Scene3D />
              
              {/* Efeito de brilho ao redor */}
              <div className="absolute inset-0 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl"></div>
              
              {/* Elementos decorativos animados */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary-light rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-secondary-dark rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;