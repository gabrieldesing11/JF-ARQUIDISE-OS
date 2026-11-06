import React from 'react';
import { WORKFLOW_STEPS } from '../data/brandData';

interface ProcessProps {
  onOpenSchedule: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenSchedule }) => {
  return (
    <section id="proceso" className="py-24 bg-[#F3F3F4] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#B89355] mb-3 font-semibold">
              <span>Metodología de Trabajo</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#0F0F11] tracking-tight">
              De la idea al montaje:{' '}
              <span className="font-serif italic text-[#B89355]">un proceso sin fisuras</span>
            </h2>
          </div>
          <p className="text-base text-[#52525B] max-w-md font-normal leading-relaxed">
            Eliminamos la incertidumbre en tu remodelación en Barranquilla con etapas claras y plazos de entrega formales.
          </p>
        </div>

        {/* 4-Step Sequential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-8 bg-white border border-neutral-200/90 shadow-xs hover:border-[#B89355]/60 hover:shadow-md flex flex-col justify-between transition-all duration-300 group rounded-xs"
            >
              <div>
                <span className="text-3xl font-mono font-medium text-[#B89355] tabular-nums block mb-6">
                  {item.step}
                </span>

                <h3 className="text-lg font-semibold text-[#18181B] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#52525B] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner below process */}
        <div className="mt-12 p-8 sm:p-10 bg-white border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xs">
          <div>
            <h4 className="text-xl font-semibold text-[#18181B]">
              ¿Listo para dar el primer paso con tu espacio?
            </h4>
            <p className="text-sm text-[#52525B] mt-1 font-normal">
              Agendamos una visita técnica para levantamiento arquitectónico sin costo en Barranquilla y municipios vecinos.
            </p>
          </div>
          <button
            onClick={onOpenSchedule}
            className="px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#18181B] hover:bg-[#B89355] transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Agendar Visita de Medidas
          </button>
        </div>
      </div>
    </section>
  );
};
