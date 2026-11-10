import React from 'react';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 bg-white overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Location Kicker */}
        <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#C8A97E] mb-5 font-semibold">
          <span>Barranquilla, Colombia</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span className="text-neutral-600">Mobiliario a la Medida</span>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Big Title & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.12] text-balance">
              Diseñamos tu espacio con la precisión de la{' '}
              <span className="font-serif italic font-normal text-[#C8A97E]">
                buena arquitectura.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
              Diseño, fabricación e instalación de mobiliario hecho a la medida en Barranquilla. Explora nuestras 5 líneas de servicios o guarda tus proyectos favoritos para coordinar tu asesoría directa por WhatsApp.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#111112] hover:bg-[#C8A97E] hover:text-[#111112] transition-colors cursor-pointer shadow-sm"
              >
                <span>Ver Servicios & Proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/573001933834?text=%C2%A1Hola%2C%20JF%20Arquidise%C3%B1os%20Barranquilla!%20Deseo%20coordinar%20una%20asesor%C3%ADa%20y%20la%20toma%20de%20medidas%20para%20un%20proyecto%20de%20mobiliario%20a%20la%20medida."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-neutral-800 border border-neutral-300 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C8A97E]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200 max-w-lg">
              <div>
                <p className="text-sm font-semibold text-neutral-900">Planimetría 3D</p>
                <p className="text-xs text-neutral-500 mt-0.5">Levantamiento exacto</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Planta Propia</p>
                <p className="text-xs text-neutral-500 mt-0.5">Mecanizado CNC</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">5 Años Garantía</p>
                <p className="text-xs text-neutral-500 mt-0.5">Escrita y certificada</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
              <img
                src="/images/projects/cocina_1.jpg"
                alt="Cocina contemporánea diseñada por JF Arquidiseños en Barranquilla"
                className="w-full h-full object-cover object-center filter brightness-98 contrast-[1.02] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
                <span className="font-serif italic text-white/95 text-sm">
                  «Espacios que se diseñan a tu medida»
                </span>
                <span className="text-xs uppercase tracking-widest text-[#E2CDA7] font-semibold">
                  Alto Prado, Barranquilla
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
