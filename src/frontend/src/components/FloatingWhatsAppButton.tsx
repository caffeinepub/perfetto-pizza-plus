import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/919797957878', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 z-50 group hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      <span className="hidden sm:inline">Chat With Us on WhatsApp</span>
      <span className="sm:hidden">Chat</span>
    </button>
  );
}
