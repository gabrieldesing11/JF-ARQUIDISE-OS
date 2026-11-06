import React from 'react';
import { ShieldCheck, Ruler, Award, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';

export const TrustAndGuarantee: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Planta Propia & Sin Intermediarios',
      desc: 'Diseño, corte y ensamble con personal directo de JF Arquidiseños en Barranquilla.'
    },
    {
      icon: Award,
      title: 'Tableros RH Anti-Humedad',
      desc: 'Materiales hidrófugos resistentes al calor y la humedad costera para máxima durabilidad.'
    },
    {
      icon: Ruler,
      title: 'Tolerancia Milimétrica',
      desc: 'Planimetría digital y nivelación láser para un encaje perfecto en tus paredes.'
    },
    {
      icon: CheckCircle2,
      title: '5 Años de Garantía Escrita',
      desc: 'Respaldo formal en estructura más garantía de por vida en herrajes mecánicos europeos Blum.'
    }
  ];

  return (
    <section id="respaldo" className="py-16 bg-white relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-[0.22em] text-[#C8A97E] font-semibold mb-1">
            Respaldo & Calidad
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight">
            Garantía y compromiso en cada proyecto
          </h2>
          <p className="text-sm text-neutral-600 mt-2 font-light">
            Ebanistería contemporánea ejecutada con rigor técnico y respaldo por escrito en Barranquilla.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all"
              >
                <div className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center text-[#C8A97E] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
