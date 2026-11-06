import React from 'react';
import { ShieldCheck, Ruler, CheckCircle2, Award, Clock, HeartHandshake } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Cero Subcontratación',
      desc: 'Desde el primer plano hasta el último ajuste en tu hogar en Barranquilla, todo lo ejecuta nuestro equipo directo. Control total sin intermediarios.',
    },
    {
      icon: Ruler,
      title: 'Tolerancia Milimétrica',
      desc: 'Levantamiento digital y corte CNC automatizado. Los muebles encajan exactamente a los plomos y desniveles reales de tus muros.',
    },
    {
      icon: Award,
      title: 'Materiales RH Certificados',
      desc: 'Tableros hidrófugos resistentes a la humedad y salitre del Caribe, evitando el abombamiento y garantizando máxima durabilidad.',
    },
    {
      icon: Clock,
      title: 'Cumplimiento de Tiempos',
      desc: 'Fecha de entrega fijada en contrato y comunicación continua con reportes de avance desde nuestra planta.',
    },
    {
      icon: HeartHandshake,
      title: 'Asesoría Personalizada',
      desc: 'Acompañamiento cercano de arquitectos y diseñadores para elegir la combinación idónea de texturas y presupuesto.',
    },
    {
      icon: CheckCircle2,
      title: 'Garantía Escrita 5 Años',
      desc: 'Certificado de garantía formal en estructura y montaje, más garantía vitalicia de fábrica en herrajes europeos Blum.',
    },
  ];

  return (
    <section className="py-24 bg-[#F3F3F4] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#B89355] mb-3 font-semibold">
            <span>Diferenciales de Marca</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#0F0F11] tracking-tight">
            La tranquilidad de un trabajo{' '}
            <span className="font-serif italic text-[#B89355]">bien ejecutado</span>
          </h2>
          <p className="text-base text-[#52525B] mt-3 font-normal leading-relaxed">
            Combinamos la disciplina de la arquitectura contemporánea con el rigor de la ebanistería de alta gama en Barranquilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white border border-neutral-200/90 shadow-xs hover:border-[#B89355]/60 hover:shadow-md transition-all duration-300 group rounded-xs"
              >
                <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center text-[#B89355] bg-neutral-50 mb-5 group-hover:bg-[#18181B] group-hover:text-[#C2A169] group-hover:border-[#18181B] transition-colors rounded-xs shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#18181B] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#52525B] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
