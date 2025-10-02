import { CheckCircle2 } from "lucide-react";
import servicosImage from "@/assets/servicos-image.jpg";

const About = () => {
  const highlights = [
    "Atuando no mercado desde junho de 2021",
    "Prestação de serviço com garantia",
    "Assistência técnica completa",
    "Laudo técnico profissional",
    "Preços justos e competitivos",
    "Inseticidas de alta qualidade",
    "Segurança para você e sua família",
    "Efeito residual prolongado",
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre nós
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Empresa disponível no mercado desde junho de 2021, especializada em controle de pragas
              com os melhores inseticidas do mercado, oferecendo segurança aos clientes e efeito
              residual prolongado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div>
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={servicosImage}
                  alt="Serviços de controle de pragas DDTIZA OESTE"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
