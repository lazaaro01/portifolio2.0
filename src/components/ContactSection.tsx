import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Linkedin, Github, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lazaro13.vascon@gmail.com",
      href: "lazaro13.vascon@gmail.com"
    },
  
    {
      icon: MapPin,
      label: "Localização",
      value: "Fortaleza, CE - Brasil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/l%C3%A1zaro-vasconcelos-87a968287/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/lazaaro01",
      color: "hover:text-gray-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/lazaaro___/"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="bg-gradient-accent bg-clip-text text-transparent">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato comigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-accent p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 border rounded-lg hover:shadow-glow transition-all duration-300 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-none shadow-soft bg-gradient-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Vamos construir algo incrível juntos!</h4>
                <p className="text-muted-foreground mb-4">
                  Seja para um projeto freelance, oportunidade de emprego ou apenas para trocar ideias sobre tecnologia.
                </p>
                <Button className="btn-hero w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email Direto
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Sobre o que você gostaria de conversar?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-me mais sobre seu projeto ou ideia..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="btn-hero w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Pronto para começar seu próximo projeto?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Estou disponível para projetos freelance e oportunidades de trabalho em tempo integral. 
            Vamos criar algo extraordinário juntos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Contratar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-hero"
              asChild
            >
              <a
                href="/Currículo - Lázaro Vasconcelos Costa.pdf"
                download
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;