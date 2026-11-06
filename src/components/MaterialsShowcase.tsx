import React from 'react';
import { MATERIALS } from '../data/brandData';

export const MaterialsShowcase: React.FC = () => {
  const brandPalette = [
    { name: 'Blanco', hex: '#FFFFFF', usage: '46%', role: 'Descanso visual' },
    { name: 'Negro', hex: '#020203', usage: '24%', role: 'Estructura' },
    { name: 'Arena', hex: '#E2CDA7', usage: '12%', role: 'Acento cálido' },
    { name: 'Gris Oscuro', hex: '#57585A', usage: '8%', role: 'Equilibrio' },
    { name: 'Gris Medio', hex: '#888B90', usage: '6%', role: 'Líneas' },
    { name: 'Gris Claro', hex: '#CBC9CA', usage: '4%', role: 'Soporte' },
  ];

  return (
    <section id="materiales" className="py-24 bg-[#F3F3F4] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#B89355] mb-3 font-semibold">
              <span>Paleta Cromática & Materiales</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#0F0F11] tracking-tight">
              Materiales que{' '}
              <span className="font-serif italic text-[#B89355]">hablan por sí solos</span>
            </h2>
          </div>
          <p className="text-base text-[#52525B] max-w-md font-normal leading-relaxed">
            «La arena aporta calidez, los grises equilibrio y el negro profundidad. Cada aplicación debe sentirse precisa, exclusiva y confiable.»
          </p>
        </div>

        {/* Brand Palette Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {brandPalette.map((color) => (
            <div
              key={color.name}
              className="p-5 border border-neutral-200/90 bg-white shadow-xs flex flex-col justify-between h-36 group hover:border-[#B89355]/60 hover:shadow-sm transition-all rounded-xs"
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-7 h-7 border border-neutral-300 rounded-xs shadow-xs"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs font-mono font-bold text-[#B89355]">
                  {color.usage}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#18181B] uppercase tracking-wider">
                  {color.name}
                </p>
                <p className="text-xs text-[#71717A] mt-0.5">
                  {color.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Materials Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-neutral-200/90 bg-white p-2 shadow-xl rounded-xs">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/images/materials.jpg"
                  alt="Texturas y materiales de alta gama JF Arquidiseños Barranquilla"
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md">
                  <span className="font-serif italic text-[#B89355] block text-base font-medium">
                    «Elegancia sobria y tacto sensorial»
                  </span>
                  <span className="text-xs text-[#52525B] mt-1 block">
                    Muestras físicas disponibles en la visita técnica
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className="p-6 bg-white border border-neutral-200/90 shadow-xs hover:border-[#B89355]/50 transition-all rounded-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-semibold text-[#18181B]">
                    {mat.name}
                  </h4>
                  <span
                    className="w-3.5 h-3.5 border border-neutral-300"
                    style={{ backgroundColor: mat.colorHex }}
                  />
                </div>
                <p className="text-sm text-[#52525B] leading-relaxed mb-4 font-normal">
                  {mat.description}
                </p>
                <div className="space-y-1.5 pt-3 border-t border-neutral-100 text-xs text-[#71717A]">
                  {mat.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#B89355] font-bold">·</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
