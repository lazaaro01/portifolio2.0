import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";

const ArticlesSection = () => {
  const articles = [
    {
      title: "Como tomar decisões de arquitetura de software em equipe",
      description: "Recentemente venho participando de várias discussões sobre arquitetura de software, e percebi que muitos desenvolvedores têm dificuldades em tomar decisões de arquitetura em equipe. Neste artigo, discuto os pilares fundamentais da arquitetura de software moderna, abordando desde padrões de projeto até decisões de infraestrutura que impactam a escalabilidade.",
      date: "Março de 2026",
      service: "LinkedIn",
      tags: ["Arquitetura", "Software Design", "Backend"],
      link: "https://www.linkedin.com/posts/l%C3%A1zaro-vasconcelos-87a968287_recentemente-venho-participando-de-v%C3%A1rias-ugcPost-7439609686188007425-iygC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW7PN4B-s9o55QmCh1w6MgjBZ55piW-xCQ"
    }
  ];

  return (
    <section id="articles" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Thought Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Artigos & <span className="text-transparent bg-clip-text bg-gradient-accent">Publicações</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 group flex flex-col h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                  <div className="px-2 py-1 rounded bg-primary/10 text-primary-light border border-primary/20">
                    {article.service}
                  </div>
                  <span>{article.date}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-primary-light transition-colors leading-tight">
                  {article.title}
                </h4>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-8 line-clamp-4 flex-grow">
                  {article.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 group/btn h-12" asChild>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    Ler Artigo Completo
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <a 
            href="https://www.linkedin.com/in/lazaaro01/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium transition-colors group"
          >
            Ver todas as publicações no LinkedIn
            <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
