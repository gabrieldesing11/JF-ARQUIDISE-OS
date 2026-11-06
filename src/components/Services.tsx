import React, { useState } from 'react';
import { Eye, Bookmark, MessageSquare, Check } from 'lucide-react';
import { SERVICES } from '../data/brandData';
import { SavedItem } from './ProjectSaverDrawer';

interface ServicesProps {
  onSaveItem: (item: SavedItem) => void;
  isItemSaved: (id: string) => boolean;
}

export const Services: React.FC<ServicesProps> = ({ onSaveItem, isItemSaved }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('cocinas');
  const [viewModes, setViewModes] = useState<Record<string, 'photo' | 'blueprint'>>({
    cocinas: 'photo',
    closets: 'photo',
    entretenimiento: 'photo',
    banos: 'photo',
    puertas: 'photo'
  });

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  const toggleViewMode = (serviceId: string) => {
    setViewModes((prev) => ({
      ...prev,
      [serviceId]: prev[serviceId] === 'photo' ? 'blueprint' : 'photo'
    }));
  };

  const handleConsultWhatsApp = (serviceTitle: string) => {
    const text = `Hola JF Arquidiseños Barranquilla, estoy interesado en cotizar la línea de *${serviceTitle}* para mi hogar. ¿Podrían brindarme información y agendar una visita de toma de medidas?`;
    window.open(`https://wa.me/573001933834?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-white relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C8A97E] mb-2 font-semibold">
              <span>Líneas de Producción</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
              ¿Qué tipo de espacio{' '}
              <span className="font-serif italic text-[#C8A97E]">deseas transformar?</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md font-light leading-relaxed">
            Mobiliario a la medida fabricado con tableros hidrófugos RH resistentes al clima de Barranquilla y herrajes europeos con garantía vitalicia.
          </p>
        </div>

        {/* Line Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-neutral-100">
          {SERVICES.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#111112] text-white font-semibold shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/70'
                }`}
              >
                <span className={`font-mono text-xs ${isActive ? 'text-[#C8A97E]' : 'text-neutral-400'}`}>
                  {service.number}
                </span>
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-neutral-50/70 border border-neutral-200 p-6 sm:p-10">
          {/* Visual with Photo / Blueprint Toggle */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-neutral-200 bg-neutral-200 shadow-md">
              {viewModes[activeService.id] === 'photo' ? (
                <img
                  src={activeService.photoImg}
                  alt={activeService.title}
                  className="w-full h-full object-cover object-center filter brightness-98 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#F2F2F0] p-6 transition-opacity duration-300">
                  <img
                    src={activeService.blueprintImg}
                    alt={`Plano esquemático ${activeService.title}`}
                    className="max-h-full max-w-full object-contain filter contrast-125"
                  />
                </div>
              )}

              {/* View Switcher Button */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => toggleViewMode(activeService.id)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/95 text-neutral-900 backdrop-blur-md border border-neutral-300 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all cursor-pointer shadow-md"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>
                    {viewModes[activeService.id] === 'photo'
                      ? 'Ver Plano 2D'
                      : 'Ver Foto Real'}
                  </span>
                </button>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-neutral-900 bg-white/90 px-3 py-1 backdrop-blur-xs border border-neutral-200 font-medium">
                {viewModes[activeService.id] === 'photo' ? 'Proyecto Terminado' : 'Planimetría 2D'}
              </div>
            </div>
          </div>

          {/* Description & Action */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#C8A97E] mb-1 font-mono font-medium">
                Línea {activeService.number} · Barranquilla
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight">
                {activeService.title}
              </h3>

              <p className="font-serif italic text-[#C8A97E] text-lg mt-1 mb-3">
                «{activeService.tagline}»
              </p>

              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
                {activeService.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 pt-1">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 bg-[#C8A97E] rounded-none shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: Guardar en lista + Consultar WhatsApp */}
            <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  onSaveItem({
                    id: activeService.id,
                    title: activeService.title,
                    category: 'Línea de Servicio',
                    image: activeService.photoImg
                  })
                }
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer ${
                  isItemSaved(activeService.id)
                    ? 'bg-neutral-200 text-neutral-900 border border-neutral-300'
                    : 'bg-[#111112] hover:bg-[#C8A97E] text-white hover:text-[#111112] shadow-sm'
                }`}
              >
                {isItemSaved(activeService.id) ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Guardado en Mis Ideas</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Guardar esta Línea</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleConsultWhatsApp(activeService.title)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs uppercase tracking-[0.16em] font-medium text-neutral-800 bg-white border border-neutral-300 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C8A97E]" />
                <span>Consultar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
