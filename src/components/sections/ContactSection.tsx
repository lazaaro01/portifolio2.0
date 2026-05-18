import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "lazaro13.vascon@gmail.com", href: "mailto:lazaro13.vascon@gmail.com" },
  { icon: MapPin, label: "Localização", value: "Fortaleza, CE - Brasil", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/l%C3%A1zaro-vasconcelos-87a968287/" },
  { icon: Github, name: "GitHub", href: "https://github.com/lazaaro01" },
  { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/lazaaro___/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
              <h3 className="text-xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground">Nome</label>
                    <Input id="name" placeholder="Seu nome" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-muted-foreground">Assunto</label>
                  <Input id="subject" placeholder="Sobre o que gostaria de conversar?" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">Mensagem</label>
                  <Textarea id="message" placeholder="Conte-me mais sobre seu projeto..." className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-[1.02]">
                  <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>
              <motion.div {...stagger} className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <a href={info.href} className="text-white hover:text-primary transition-colors text-sm font-medium">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Redes Sociais</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <h4 className="text-lg font-bold text-white mb-2">Pronto para começar seu próximo projeto?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Estou disponível para projetos freelance e oportunidades de trabalho em tempo integral.
              </p>
              <div className="flex gap-3">
                <Button size="sm" className="rounded-xl bg-primary hover:bg-primary/90 text-white text-sm" asChild>
                  <a href="mailto:lazaro13.vascon@gmail.com">Contratar Agora</a>
                </Button>
                <Button size="sm" variant="outline" className="rounded-xl border-white/10 bg-white/5 text-white text-sm hover:bg-white/10" asChild>
                  <a href="/Currículo - Lázaro Vasconcelos Costa.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
