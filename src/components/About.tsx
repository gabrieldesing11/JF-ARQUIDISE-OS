import React from 'react';
import { BRAND_CONFIG } from '../data/brandData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Materiales Certificados',
      desc: 'Tableros hidrófugos RH de 18mm con alta resistencia al calor y la humedad de Barranquilla, complementados con herrajes europeos Blum.'
    },
    {
      title: 'Precisión Milimétrica',
      desc: 'Modelación tridimensional digital y mecanizado computarizado para un ensamble sin tolerancias visibles.'
    },
    {
      title: 'Diseño Funcional',
      desc: 'Aprovechamiento total de los espacios, alturas optimizadas y ergonomía pensada en tu día a día.'
    },
    {
      title: 'Exclusividad & Estilo',
      desc: 'Cada proyecto es una pieza única. Asesoramos en la combinación armónica de maderas, piedras sinterizadas, cristales e iluminación.'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-[#F3F3F4] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#B89355] mb-3 font-semibold">
              <span>Filosofía & Concepto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0F0F11] tracking-tight">
              Diseño integral bajo un{' '}
              <span className="font-serif italic text-[#B89355]">mismo estándar</span>
            </h2>
          </div>
          <p className="text-base text-[#52525B] max-w-md font-normal leading-relaxed">
            «JF Arquidiseños transforma espacios en Barranquilla con mobiliario hecho a la medida: se diseña, se fabrica y se instala bajo un mismo criterio de calidad.»
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Image of Craftsmanship */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-neutral-200/90 bg-white p-2 shadow-xl rounded-xs">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/images/craftsmanship.jpg"
                  alt="Fabricación de mobiliario arquitectónico en taller propio de JF Arquidiseños"
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B89355] font-bold mb-1">
                    100% Producción Propia
                  </p>
                  <p className="text-xs text-[#52525B] font-normal">
                    Control riguroso en cada corte y ensamble para garantizar acabados impecables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Clean Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-light text-[#0F0F11] leading-snug">
                El mobiliario debe ser una extensión natural de la{' '}
                <span className="font-serif italic text-[#B89355]">arquitectura de tu hogar</span>.
              </h3>
              <p className="text-[#52525B] font-normal leading-relaxed text-base">
                A diferencia de los muebles modulares convencionales, en JF Arquidiseños diseñamos cada pieza desde cero para tu residencia en Barranquilla o municipios aledaños. Cuidamos cada proporción, textura e iluminación para crear ambientes sobrios, elegantes y duraderos.
              </p>
            </div>

            {/* 4 Pillars - Clean & spacious, crisp white cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-6 bg-white border border-neutral-200/90 shadow-xs hover:border-[#B89355]/60 hover:shadow-sm transition-all duration-200">
                  <h4 className="text-base font-semibold text-[#18181B] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Values summary */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs uppercase tracking-[0.2em] text-[#52525B]">
              <span className="text-[#18181B] font-bold">Valores:</span>
              <span className="text-[#B89355] font-semibold">Calidad</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span className="text-[#B89355] font-semibold">Confianza</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span className="text-[#B89355] font-semibold">Funcionalidad</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span className="text-[#B89355] font-semibold">Exclusividad</span>
            </div>
          </div>
        </div>

        {/* Quantified Metrics - Clean & confident in pure white container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white border border-neutral-200/90 shadow-sm">
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#B89355] font-mono tabular-nums">+12</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold mt-1">Años de Trayectoria</p>
            <p className="text-xs text-[#71717A] mt-0.5">En carpintería arquitectónica</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#B89355] font-mono tabular-nums">+850</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold mt-1">Proyectos Instalados</p>
            <p className="text-xs text-[#71717A] mt-0.5">En Barranquilla y el Caribe</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#B89355] font-mono tabular-nums">5 Años</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold mt-1">Garantía Escrita</p>
            <p className="text-xs text-[#71717A] mt-0.5">Estructura + herrajes vitalicios</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#B89355] font-mono tabular-nums">0 mm</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#18181B] font-semibold mt-1">Tolerancia en Obra</p>
            <p className="text-xs text-[#71717A] mt-0.5">Nivelación láser milimétrica</p>
          </div>
        </div>
      </div>
    </section>
  );
};
