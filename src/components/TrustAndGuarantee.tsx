import React from 'react';
import { ShieldCheck, Ruler, Award, CheckCircle2 } from 'lucide-react';

export const TrustAndGuarantee: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Planta Propia',
      subtitle: 'Sin intermediarios',
      desc: 'Diseño, corte y ensamble con personal directo de JF Arquidiseños en Barranquilla.'
    },
    {
      icon: Award,
      title: 'Tableros RH',
      subtitle: 'Anti-humedad marina',
      desc: 'Materiales hidrófugos resistentes al calor y la humedad costera para máxima durabilidad.'
    },
    {
      icon: Ruler,
      title: 'Tolerancia 0 mm',
      subtitle: 'Nivelación láser',
      desc: 'Planimetría digital y nivelación láser para un encaje milimétrico en tus paredes.'
    },
    {
      icon: CheckCircle2,
      title: 'Garantía 5 Años',
      subtitle: 'Escrita y formal',
      desc: 'Respaldo formal en estructura más garantía de por vida en herrajes mecánicos Blum.'
    }
  ];

  return (
    <section id="respaldo" className="py-14 sm:py-20 bg-white relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-xs uppercase tracking-[0.22em] text-[#C8A97E] font-semibold mb-1">
            Respaldo & Calidad
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight">
            Garantía y compromiso en cada proyecto
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 font-light">
            Ebanistería contemporánea ejecutada con rigor técnico y respaldo por escrito en Barranquilla.
          </p>
        </div>

        {/* 2 columns on mobile, 4 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-3.5 sm:p-6 bg-neutral-50/70 border border-neutral-200 hover:border-[#C8A97E] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 border border-neutral-300 bg-white flex items-center justify-center text-[#C8A97E] mb-2.5 sm:mb-4 shadow-2xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-base font-semibold text-neutral-900 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#C8A97E] font-medium mb-1.5">
                    {p.subtitle}
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
