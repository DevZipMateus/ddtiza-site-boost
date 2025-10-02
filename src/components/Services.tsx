import { Bug, Rat, Bird, Droplets, TreePine, Waves, Bed, Droplet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: "Dedetização",
      description: "Eliminação eficaz de insetos e pragas com produtos de alta qualidade e efeito prolongado.",
    },
    {
      icon: Rat,
      title: "Desratização",
      description: "Controle profissional de roedores com métodos seguros e eficientes.",
    },
    {
      icon: Bird,
      title: "Desalojamento de morcegos",
      description: "Remoção segura e humanitária de morcegos conforme normas ambientais.",
    },
    {
      icon: Droplets,
      title: "Sanitização",
      description: "Higienização completa de ambientes com produtos certificados.",
    },
    {
      icon: TreePine,
      title: "Descupinização",
      description: "Tratamento especializado contra cupins com garantia de resultado.",
    },
    {
      icon: Waves,
      title: "Limpeza de caixas d'água",
      description: "Limpeza e higienização profissional para água sempre limpa e segura.",
    },
    {
      icon: Bed,
      title: "Higienização de colchões e estofados",
      description: "Limpeza profunda eliminando ácaros, bactérias e odores.",
    },
    {
      icon: Droplet,
      title: "Limpeza de piscinas",
      description: "Manutenção completa para piscinas sempre limpas e cristalinas.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em controle de pragas e limpeza profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
