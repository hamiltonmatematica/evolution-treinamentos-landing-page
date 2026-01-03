
import React from 'react';
import { Smartphone } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface WhatsAppButtonProps {
  text: string;
  fullWidth?: boolean;
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, fullWidth = false, customMessage }) => {
  const whatsappUrl = customMessage
    ? `https://wa.me/557193446927?text=${encodeURIComponent(customMessage)}`
    : WHATSAPP_LINK;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 ${fullWidth ? 'w-full' : ''}`}
    >
      <Smartphone className="w-5 h-5" />
      {text}
    </a>
  );
};
