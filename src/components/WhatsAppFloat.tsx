import React, { useState } from 'react';
import { MessageSquare, X, Bookmark } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';

interface WhatsAppFloatProps {
  savedCount?: number;
  onOpenSavedDrawer?: () => void;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  savedCount = 0,
  onOpenSavedDrawer
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  const handleOpenWhatsApp = () => {
    const defaultMsg = encodeURIComponent(
      'Hola JF Arquidiseños Barranquilla, deseo consultar sobre un proyecto de mobiliario a la medida y coordinar toma de medidas.'
    );
    window.open(`https://wa.me/573001933834?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* If user has saved items, show floating tab */}
      {savedCount > 0 && onOpenSavedDrawer && (
        <button
          onClick={onOpenSavedDrawer}
          className="flex items-center gap-2 px-4 py-2.5 bg-white text-neutral-900 border border-neutral-300 shadow-xl text-xs font-semibold uppercase tracking-wider hover:border-[#C8A97E] transition-all cursor-pointer animate-in fade-in"
        >
          <Bookmark className="w-4 h-4 text-[#C8A97E]" />
          <span>Ver {savedCount} {savedCount === 1 ? 'idea guardada' : 'ideas guardadas'}</span>
        </button>
      )}

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="flex items-center gap-2.5 px-5 py-3.5 bg-[#111112] hover:bg-[#C8A97E] text-white hover:text-[#111112] shadow-2xl transition-all duration-300 font-semibold text-xs uppercase tracking-wider cursor-pointer group active:scale-95 border border-neutral-800"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-4 h-4 text-[#C8A97E] group-hover:text-[#111112]" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
};
