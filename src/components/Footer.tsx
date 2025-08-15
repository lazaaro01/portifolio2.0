import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:seu.email@exemplo.com", label: "Email" }
  ];

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
              Seu Portfolio
            </h3>
            <p className="text-white/70">
              Desenvolvedor Fullstack apaixonado por criar soluções digitais inovadoras.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#home" className="text-white/70 hover:text-secondary transition-colors">
                Início
              </a>
              <a href="#about" className="text-white/70 hover:text-secondary transition-colors">
                Sobre
              </a>
              <a href="#experience" className="text-white/70 hover:text-secondary transition-colors">
                Experiência
              </a>
              <a href="#projects" className="text-white/70 hover:text-secondary transition-colors">
                Projetos
              </a>
              <a href="#contact" className="text-white/70 hover:text-secondary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 border border-white/20 rounded-lg hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/20" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/70 flex items-center justify-center gap-2">
            © {currentYear} Seu Nome. Feito com 
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            usando React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;