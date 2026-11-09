import React, { useState } from 'react';
import { PROJECTS } from '../data/brandData';
import { ProjectItem } from '../types';
import { Bookmark, Check, MessageSquare, MapPin, X, ArrowUpRight } from 'lucide-react';
import { SavedItem } from './ProjectSaverDrawer';
import { QuickWhatsAppModal, ConsultItem } from './QuickWhatsAppModal';

interface ProjectGalleryProps {
  onSaveItem: (item: SavedItem) => void;
  isItemSaved: (id: string) => boolean;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSaveItem, isItemSaved }) => {
  const [filter, setFilter] = useState<string>('todos');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [quickConsultItem, setQuickConsultItem] = useState<ConsultItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos (25)' },
    { id: 'Cocinas Integrales', label: 'Cocinas Integrales (5)' },
    { id: 'Closets & Vestidores', label: 'Closets & Vestidores (5)' },
    { id: 'Centros de Entretenimiento', label: 'Centros de TV (5)' },
    { id: 'Divisiones de Baño', label: 'Divisiones de Baño (5)' },
    { id: 'Puertas & Panelados', label: 'Puertas & Panelados (5)' }
  ];

  const filtered = filter === 'todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const handleConsultProjectOnWhatsApp = (project: ProjectItem) => {
    setQuickConsultItem({
      title: project.title,
      category: project.category,
      image: project.image,
      location: project.location
    });
  };

  return (
    <section id="proyectos" className="py-14 sm:py-20 bg-neutral-50/50 relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C8A97E] mb-2 font-semibold">
              <span>Portafolio Real</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
              25 Proyectos realizados en{' '}
              <span className="font-serif italic text-[#C8A97E]">Barranquilla</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md font-light leading-relaxed">
            Explora trabajos entregados en Alto Prado, Riomar, El Golf, Buenavista, Villa Campestre y Puerto Colombia. Guarda los que más te gusten para consultarlos juntos.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-neutral-200">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors whitespace-nowrap cursor-pointer ${
                filter === c.id
                  ? 'bg-[#111112] text-white font-semibold'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 25 Projects Grid: 2 columns on mobile, 3 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {filtered.map((item) => {
            const saved = isItemSaved(item.id);
            return (
              <div
                key={item.id}
                className="group bg-white border border-neutral-200 hover:border-[#C8A97E] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Box */}
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-neutral-100 cursor-pointer"
                  onClick={() => setActiveProject(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-98 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] uppercase tracking-wider text-neutral-900 font-semibold border border-neutral-200 shadow-xs max-w-[85%] truncate">
                    {item.category}
                  </div>

                  {/* Open Zoom Icon */}
                  <div className="hidden sm:flex absolute bottom-3 right-3 bg-white/90 text-neutral-900 p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-neutral-500 mb-1">
                      <span className="flex items-center gap-1 font-medium text-neutral-700 truncate max-w-[75%]">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C8A97E] shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </span>
                      <span className="font-mono text-neutral-400 text-[10px] sm:text-xs">{item.year}</span>
                    </div>

                    <h3
                      onClick={() => setActiveProject(item)}
                      className="text-xs sm:text-base font-semibold text-neutral-900 hover:text-[#C8A97E] transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {item.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  {/* Card Actions: Guardar + WhatsApp */}
                  <div className="pt-2 sm:pt-3 border-t border-neutral-100 flex items-center justify-between gap-1.5 sm:gap-2">
                    <button
                      onClick={() =>
                        onSaveItem({
                          id: item.id,
                          title: item.title,
                          category: item.category,
                          image: item.image,
                          location: item.location
                        })
                      }
                      className={`flex-1 py-1.5 sm:py-2 px-1.5 sm:px-3 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1 sm:gap-1.5 transition-colors cursor-pointer ${
                        saved
                          ? 'bg-neutral-100 text-neutral-900 border border-neutral-300'
                          : 'bg-neutral-50 hover:bg-[#C8A97E]/15 text-neutral-800 border border-neutral-200'
                      }`}
                    >
                      {saved ? (
                        <>
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">Guardada</span>
                        </>
                      ) : (
                        <>
                          <Bookmark className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C8A97E] shrink-0" />
                          <span className="truncate">Guardar</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleConsultProjectOnWhatsApp(item)}
                      className="py-1.5 sm:py-2 px-2 sm:px-3 bg-[#111112] hover:bg-[#C8A97E] text-white hover:text-[#111112] text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer shrink-0"
                      title="Consultar por WhatsApp"
                      aria-label={`Consultar ${item.title} por WhatsApp`}
                    >
                      <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C8A97E]" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Project Detail */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-white max-w-2xl w-full p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 p-1.5 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C8A97E] font-medium">
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>{activeProject.location}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>{activeProject.year}</span>
                </div>

                <h3 className="text-2xl font-light text-neutral-900">
                  {activeProject.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {activeProject.details}
                </p>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1.5 font-medium">
                    Materiales sugeridos:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.materials.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-800 border border-neutral-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-neutral-100">
                  <button
                    onClick={() => {
                      onSaveItem({
                        id: activeProject.id,
                        title: activeProject.title,
                        category: activeProject.category,
                        image: activeProject.image,
                        location: activeProject.location
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300"
                  >
                    {isItemSaved(activeProject.id) ? '✓ Guardada en mis ideas' : '+ Guardar esta idea'}
                  </button>

                  <button
                    onClick={() => {
                      const p = activeProject;
                      setActiveProject(null);
                      handleConsultProjectOnWhatsApp(p);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#111112] hover:bg-[#C8A97E] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Pedir este diseño por WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Modal to collect name and sector before redirecting to WhatsApp */}
        <QuickWhatsAppModal
          isOpen={!!quickConsultItem}
          onClose={() => setQuickConsultItem(null)}
          item={quickConsultItem}
        />
      </div>
    </section>
  );
};
