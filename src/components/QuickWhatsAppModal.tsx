import React, { useState, useEffect } from 'react';
import { X, MessageSquare, MapPin } from 'lucide-react';

export interface ConsultItem {
  title: string;
  category?: string;
  image?: string;
  location?: string;
}

interface QuickWhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ConsultItem | null;
}

export const QuickWhatsAppModal: React.FC<QuickWhatsAppModalProps> = ({
  isOpen,
  onClose,
  item
}) => {
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [details, setDetails] = useState('');

  // Load remembered info if user previously typed it
  useEffect(() => {
    try {
      const savedName = localStorage.getItem('jf_client_name');
      const savedSector = localStorage.getItem('jf_client_sector');
      if (savedName) setName(savedName);
      if (savedSector) setSector(savedSector);
    } catch {
      // ignore local storage restrictions if any
    }
  }, []);

  if (!isOpen || !item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !sector.trim()) return;

    try {
      localStorage.setItem('jf_client_name', name.trim());
      localStorage.setItem('jf_client_sector', sector.trim());
    } catch {
      // ignore
    }

    const lines = [
      '¡Hola, JF Arquidiseños Barranquilla! Deseo solicitar información y agendar la toma de medidas para este diseño:',
      '',
      `📌 *Diseño de interés:* ${item.title}${item.category ? ` (${item.category})` : ''}${item.location ? ` — ${item.location}` : ''}`,
      `👤 *Nombre:* ${name.trim()}`,
      `📍 *Sector en Barranquilla:* ${sector.trim()}`
    ];

    if (details.trim()) {
      lines.push(`📝 *Detalles o medidas aproximadas:* ${details.trim()}`);
    }

    lines.push('');
    lines.push('🤝 *Objetivo:* Deseo coordinar la asesoría técnica y toma de medidas sin costo en mi espacio.');

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/573001933834?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-md w-full p-6 sm:p-8 space-y-5 relative shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 p-1.5 cursor-pointer transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Selected Design Preview Header */}
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#C8A97E] font-semibold mb-1">
            Solicitud Directa a WhatsApp
          </div>
          <h3 className="text-xl font-light text-neutral-900 tracking-tight">
            Pedir este diseño
          </h3>
        </div>

        {/* Preview Card */}
        <div className="flex items-center gap-3.5 p-3 bg-neutral-50 border border-neutral-200">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 object-cover shrink-0 border border-neutral-200"
            />
          )}
          <div className="min-w-0">
            <h4 className="text-xs font-semibold text-neutral-900 truncate">
              {item.title}
            </h4>
            <p className="text-[11px] text-neutral-500 truncate mt-0.5">
              {item.category} {item.location ? `· ${item.location}` : ''}
            </p>
          </div>
        </div>

        {/* Fast Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Tu Nombre *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Gabriel Bovea"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-[#C8A97E] focus:outline-none"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Sector / Barrio en Barranquilla *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Alto Prado, Riomar, Villa Campestre, El Golf"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-[#C8A97E] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Detalles o medidas aproximadas (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ej. Medidas aprox 3m, busco colores claros..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-[#C8A97E] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#111112] hover:bg-[#C8A97E] text-white hover:text-[#111112] font-semibold text-xs uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#C8A97E] group-hover:text-[#111112]" />
              <span>Continuar a WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-neutral-400 mt-2">
              Se abrirá tu chat directo con JF Arquidiseños (300 193 3834).
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
