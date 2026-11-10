import React, { useState } from 'react';
import { X, Trash2, MessageSquare, Check, ArrowRight, Bookmark } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';

export interface SavedItem {
  id: string;
  title: string;
  category: string;
  image?: string;
  location?: string;
}

interface ProjectSaverDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: SavedItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

export const ProjectSaverDrawer: React.FC<ProjectSaverDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onClearAll
}) => {
  const [clientName, setClientName] = useState<string>('');
  const [clientLocation, setClientLocation] = useState<string>('Barranquilla');
  const [clientNotes, setClientNotes] = useState<string>('');

  if (!isOpen) return null;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      '¡Hola, JF Arquidiseños Barranquilla! Guardé las siguientes ideas en su sitio web y deseo consultar disponibilidad y agendar la toma de medidas:',
      ''
    ];

    if (savedItems.length > 0) {
      lines.push('📋 *Proyectos e ideas seleccionadas:*');
      savedItems.forEach((item, idx) => {
        lines.push(`${idx + 1}. *${item.title}* (${item.category}${item.location ? ` — ${item.location}` : ''})`);
      });
      lines.push('');
    } else {
      lines.push('📋 *Línea de interés:* Mobiliario arquitectónico a la medida para mi hogar.');
      lines.push('');
    }

    if (clientName.trim()) {
      lines.push(`👤 *Nombre:* ${clientName.trim()}`);
    }
    lines.push(`📍 *Sector o ciudad:* ${clientLocation.trim() || 'Barranquilla'}`);

    if (clientNotes.trim()) {
      lines.push(`📝 *Detalles del espacio o medidas:* ${clientNotes.trim()}`);
    }

    lines.push('');
    lines.push('🤝 *Objetivo:* Coordinar una asesoría y la toma de medidas.');

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/573001933834?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-neutral-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/60">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-5 h-5 text-[#C8A97E]" />
            <div>
              <h3 className="text-base font-semibold text-neutral-900">
                Mis Ideas Guardadas
              </h3>
              <p className="text-xs text-neutral-500">
                {savedItems.length === 0
                  ? 'Aún no has agregado proyectos'
                  : `${savedItems.length} ${savedItems.length === 1 ? 'diseño seleccionado' : 'diseños seleccionados'}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
            aria-label="Cerrar panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body: Items list + Form */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {savedItems.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 mx-auto flex items-center justify-center">
                <Bookmark className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-medium text-neutral-800">
                Tu lista está vacía
              </h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
                Navega por las secciones de Servicios o los 25 Proyectos y haz clic en <strong>«Guardar idea»</strong> para agregarlos aquí y consultarlos directamente por WhatsApp.
              </p>
              <button
                onClick={onClose}
                className="mt-2 text-xs uppercase tracking-wider font-semibold text-[#C8A97E] hover:text-neutral-900 transition-colors"
              >
                Explorar Servicios & Proyectos →
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Selección para cotizar:
                </span>
                <button
                  onClick={onClearAll}
                  className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
                >
                  Vaciar lista
                </button>
              </div>

              {savedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover shrink-0 border border-neutral-200"
                      />
                    )}
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-neutral-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-neutral-500 truncate">
                        {item.category} {item.location ? `· ${item.location}` : ''}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-neutral-400 hover:text-red-600 transition-colors shrink-0 cursor-pointer"
                    aria-label={`Eliminar ${item.title}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Form to submit details without email */}
          <form id="whatsapp-sender-form" onSubmit={handleSendToWhatsApp} className="pt-4 border-t border-neutral-200 space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900 block mb-1">
                Tus datos de contacto
              </span>
              <p className="text-xs text-neutral-500">
                Envía tus ideas directamente al asesor en WhatsApp.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Tu Nombre *
              </label>
              <input
                type="text"
                placeholder="Ej. Gabriel"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-none text-neutral-900 placeholder-neutral-400 focus:border-[#C8A97E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Sector en Barranquilla
              </label>
              <input
                type="text"
                placeholder="Ej. Alto Prado, Riomar, Villa Campestre"
                value={clientLocation}
                onChange={(e) => setClientLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-none text-neutral-900 placeholder-neutral-400 focus:border-[#C8A97E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Detalles del espacio o medidas aprox. (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ej. Apartamento nuevo, busco cocina de 3.5 metros y closet..."
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-none text-neutral-900 placeholder-neutral-400 focus:border-[#C8A97E] focus:outline-none"
              />
            </div>
          </form>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-2">
          <button
            type="submit"
            form="whatsapp-sender-form"
            className="w-full py-3.5 px-4 bg-[#111112] hover:bg-[#C8A97E] text-white hover:text-[#111112] font-semibold text-xs uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enviar Selección a WhatsApp</span>
          </button>
          <p className="text-[11px] text-center text-neutral-500">
            Atención directa al <strong>300 193 3834</strong> · Barranquilla
          </p>
        </div>
      </div>
    </div>
  );
};
