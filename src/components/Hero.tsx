import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const whatsappNumber = "5549991858657";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in tracking-wide">
            DDTIZA OESTE
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/95 mb-8 font-light leading-relaxed">
            Controle de pragas profissional com garantia, assistência e preço justo desde 2021
          </h2>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center gap-3 text-white/95">
              <Shield className="w-8 h-8 flex-shrink-0" />
              <span className="text-lg">Garantia e assistência</span>
            </div>
            <div className="flex items-center gap-3 text-white/95">
              <Award className="w-8 h-8 flex-shrink-0" />
              <span className="text-lg">Laudo técnico</span>
            </div>
            <div className="flex items-center gap-3 text-white/95">
              <Clock className="w-8 h-8 flex-shrink-0" />
              <span className="text-lg">Atendimento rápido</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto"
            >
              Solicitar orçamento gratuito
            </Button>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg px-8 py-6 h-auto"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
