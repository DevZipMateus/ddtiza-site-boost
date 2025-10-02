import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="bg-white p-4 rounded-lg inline-block mb-4">
              <img src={logo} alt="DDTIZA OESTE" className="h-20 w-auto" />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Controle de pragas profissional com garantia, assistência e preço justo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>(49) 99185-8657</li>
              <li>oesteddtiza@gmail.com</li>
              <li className="leading-relaxed">
                Avenida Anchieta, s/n<br />
                Centro, Anchieta/SC
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/70">
          <p>© {currentYear} DDTIZA OESTE. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">CNPJ: 42.178.666/0001-84</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
