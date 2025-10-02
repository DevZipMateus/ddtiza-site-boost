import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  const whatsappNumber = "5549991858657";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar informações.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transition-transform"
      aria-label="Fale conosco no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
    </a>
  );
};

export default WhatsAppButton;
