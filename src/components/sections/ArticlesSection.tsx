import { motion } from "framer-motion";
import { ExternalLink, Calendar, BookOpen } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const articles = [
  {
    title: "Como tomar decisões de arquitetura de software em equipe",
    description:
      "Recentemente venho participando de várias discussões sobre arquitetura de software, e percebi que muitos desenvolvedores têm dificuldades em tomar decisões de arquitetura em equipe. Neste artigo, discuto os pilares fundamentais da arquitetura de software moderna, abordando desde padrões de projeto até decisões de infraestrutura que impactam a escalabilidade.",
    date: "Março de 2026",
    service: "LinkedIn",
    tags: ["Arquitetura", "Software Design", "Backend"],
    link: "https://www.linkedin.com/posts/l%C3%A1zaro-vasconcelos-87a968287_recentemente-venho-participando-de-v%C3%A1rias-ugcPost-7439609686188007425-iygC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW7PN4B-s9o55QmCh1w6MgjBZ55piW-xCQ",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Thought Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Artigos & <span className="text-gradient">Publicações</span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          {articles.map((article, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-primary/30 transition-all duration-500 card-hover"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-medium">
                  {article.service}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{article.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{article.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105"
              >
                Ler Artigo Completo <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/lazaaro01/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <BookOpen className="h-4 w-4" /> Ver todas as publicações no LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
