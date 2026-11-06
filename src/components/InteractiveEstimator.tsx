import React, { useState, useMemo } from 'react';
import { Calculator, MessageSquare } from 'lucide-react';
import { SERVICES, BRAND_CONFIG } from '../data/brandData';

interface EstimatorProps {
  initialServiceId?: string;
  onSuccessSchedule?: (data: any) => void;
}

export const InteractiveEstimator: React.FC<EstimatorProps> = ({ initialServiceId = 'cocinas' }) => {
  const [selectedService, setSelectedService] = useState<string>(initialServiceId);
  const [meters, setMeters] = useState<number>(3.5);
  const [tier, setTier] = useState<'esencial' | 'premium' | 'signature'>('premium');
  const [includeCountertop, setIncludeCountertop] = useState<boolean>(true);
  const [includeLed, setIncludeLed] = useState<boolean>(true);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string>('');

  const calculation = useMemo(() => {
    let baseRatePerMeter = 2100000;

    if (selectedService === 'cocinas') {
      baseRatePerMeter = tier === 'esencial' ? 2400000 : tier === 'premium' ? 3600000 : 5200000;
    } else if (selectedService === 'closets') {
      baseRatePerMeter = tier === 'esencial' ? 1800000 : tier === 'premium' ? 2900000 : 4300000;
    } else if (selectedService === 'entretenimiento') {
      baseRatePerMeter = tier === 'esencial' ? 1400000 : tier === 'premium' ? 2300000 : 3600000;
    } else if (selectedService === 'banos') {
      baseRatePerMeter = tier === 'esencial' ? 1200000 : tier === 'premium' ? 1900000 : 2800000;
    } else if (selectedService === 'puertas') {
      baseRatePerMeter = tier === 'esencial' ? 1600000 : tier === 'premium' ? 2500000 : 3900000;
    }

    let subtotal = baseRatePerMeter * meters;

    if (includeCountertop && (selectedService === 'cocinas' || selectedService === 'banos')) {
      subtotal += (tier === 'esencial' ? 650000 : tier === 'premium' ? 1200000 : 2100000) * meters;
    }

    if (includeLed) {
      subtotal += 450000;
    }

    const min = Math.round(subtotal * 0.95);
    const max = Math.round(subtotal * 1.15);

    return { min, max };
  }, [selectedService, meters, tier, includeCountertop, includeLed]);

  const formatCOP = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(num);
  };

  const getServiceName = () => {
    return SERVICES.find((s) => s.id === selectedService)?.title || 'Mobiliario';
  };

  const handleSendWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = getServiceName();
    const tierName = tier === 'esencial' ? 'Línea Esencial' : tier === 'premium' ? 'Línea Premium' : 'Línea Signature';
    
    setIsSubmitting(true);
    setFeedbackMsg('');

    try {
      // Register lead in backend so email and mobile notifications are dispatched immediately
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: customerName.trim() || 'Cliente Cotizador Web',
          phone: customerPhone.trim() || '+57 300 000 0000',
          service: serviceName,
          projectType: 'Estimación Calculador Web',
          location: 'Barranquilla',
          meters,
          tier: tierName,
          estimatedMin: calculation.min,
          estimatedMax: calculation.max,
          message: `Mesón de cuarzo: ${includeCountertop ? 'Sí' : 'No'} | LED empotrado: ${includeLed ? 'Sí' : 'No'}`
        })
      });
      setFeedbackMsg('¡Estimación registrada! Abriendo WhatsApp...');
    } catch (err) {
      console.warn('Could not register in backend:', err);
    } finally {
      setIsSubmitting(false);
    }

    const message = `Hola JF Arquidiseños Barranquilla, deseo cotizar:%0A%0A` +
      `*Línea:* ${serviceName}%0A` +
      `*Medida estimada:* ~${meters} metros lineales%0A` +
      `*Gama:* ${tierName}%0A` +
      `*Mesón de cuarzo:* ${includeCountertop ? 'Sí' : 'No'}%0A` +
      `*Iluminación LED:* ${includeLed ? 'Sí' : 'No'}%0A` +
      `*Presupuesto Estimado:* ${formatCOP(calculation.min)} - ${formatCOP(calculation.max)}%0A` +
      (customerName ? `*Nombre:* ${customerName}%0A` : '') +
      (customerPhone ? `*Teléfono:* ${customerPhone}%0A` : '') +
      `*Ubicación:* Barranquilla / Atlántico%0A` +
      `*Solicitud:* Quiero agendar una visita técnica de toma de medidas sin costo.`;

    window.open(`https://wa.me/573001933834?text=${message}`, '_blank');
  };

  return (
    <section id="cotizador" className="py-24 bg-[#F3F3F4] relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#B89355] mb-3 font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Presupuesto Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#0F0F11] tracking-tight">
            Calcula el valor de{' '}
            <span className="font-serif italic text-[#B89355]">tu nuevo espacio</span>
          </h2>
          <p className="text-base text-[#52525B] mt-3 font-normal leading-relaxed">
            Obtén un presupuesto preliminar para tu proyecto en Barranquilla con total claridad.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-white border border-neutral-200/90 p-8 sm:p-12 shadow-sm rounded-xs">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Line */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#18181B] mb-3 font-bold">
                1. Selecciona la línea
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`p-3.5 text-left border transition-all cursor-pointer rounded-xs ${
                      selectedService === s.id
                        ? 'border-[#B89355] bg-[#B89355]/10 text-[#18181B] font-semibold'
                        : 'border-neutral-200/90 bg-neutral-50/50 text-[#52525B] hover:border-neutral-300 hover:text-[#18181B]'
                    }`}
                  >
                    <span className="text-xs font-mono text-[#71717A] block">{s.number}</span>
                    <span className="text-sm block mt-1">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Dimension */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-[0.2em] text-[#18181B] font-bold">
                  2. Medida aproximada (Metros Lineales)
                </label>
                <span className="font-mono text-xl text-[#B89355] font-semibold tabular-nums">
                  {meters} m
                </span>
              </div>
              <input
                type="range"
                min="1.5"
                max="8.0"
                step="0.5"
                value={meters}
                onChange={(e) => setMeters(parseFloat(e.target.value))}
                className="w-full h-2 bg-neutral-200 accent-[#B89355] cursor-pointer"
              />
              <div className="flex justify-between text-xs text-[#71717A] mt-2">
                <span>1.5 m (Espacio compacto)</span>
                <span>4.0 m (Promedio estándar)</span>
                <span>8.0 m (Gran formato)</span>
              </div>
            </div>

            {/* 3. Tier */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#18181B] mb-3 font-bold">
                3. Gama de acabados
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTier('esencial')}
                  className={`p-4 text-left border transition-all cursor-pointer rounded-xs ${
                    tier === 'esencial'
                      ? 'border-[#B89355] bg-[#B89355]/10 text-[#18181B] font-medium'
                      : 'border-neutral-200/90 bg-neutral-50/50 text-[#52525B] hover:border-neutral-300'
                  }`}
                >
                  <span className="text-sm font-semibold uppercase block">Esencial</span>
                  <span className="text-xs text-[#71717A] block mt-1">
                    Melamina RH + Cierre suave
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setTier('premium')}
                  className={`p-4 text-left border transition-all cursor-pointer rounded-xs ${
                    tier === 'premium'
                      ? 'border-[#B89355] bg-[#B89355]/10 text-[#18181B] font-medium'
                      : 'border-neutral-200/90 bg-neutral-50/50 text-[#52525B] hover:border-neutral-300'
                  }`}
                >
                  <span className="text-sm font-semibold uppercase block text-[#B89355]">Premium</span>
                  <span className="text-xs text-[#71717A] block mt-1">
                    Sistemas Blum Austria
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setTier('signature')}
                  className={`p-4 text-left border transition-all cursor-pointer rounded-xs ${
                    tier === 'signature'
                      ? 'border-[#B89355] bg-[#B89355]/10 text-[#18181B] font-medium'
                      : 'border-neutral-200/90 bg-neutral-50/50 text-[#52525B] hover:border-neutral-300'
                  }`}
                >
                  <span className="text-sm font-semibold uppercase block">Signature</span>
                  <span className="text-xs text-[#71717A] block mt-1">
                    Maderas naturales y sinterizado
                  </span>
                </button>
              </div>
            </div>

            {/* Add-ons */}
            <div className="flex flex-wrap gap-8 pt-2">
              {(selectedService === 'cocinas' || selectedService === 'banos') && (
                <label className="flex items-center gap-3 cursor-pointer text-sm text-[#3F3F46] font-medium">
                  <input
                    type="checkbox"
                    checked={includeCountertop}
                    onChange={(e) => setIncludeCountertop(e.target.checked)}
                    className="w-4 h-4 accent-[#B89355] cursor-pointer"
                  />
                  <span>Incluir cubierta en cuarzo</span>
                </label>
              )}
              <label className="flex items-center gap-3 cursor-pointer text-sm text-[#3F3F46] font-medium">
                <input
                  type="checkbox"
                  checked={includeLed}
                  onChange={(e) => setIncludeLed(e.target.checked)}
                  className="w-4 h-4 accent-[#B89355] cursor-pointer"
                />
                <span>Incluir iluminación LED empotrada</span>
              </label>
            </div>
          </div>

          {/* Quotation Slip */}
          <div className="lg:col-span-5 bg-[#18181B] border border-neutral-800 p-8 space-y-6 shadow-xl rounded-xs text-white">
            <div className="border-b border-neutral-700/80 pb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C2A169] font-medium">
                Estimación de Inversión
              </p>
              <h3 className="text-base uppercase font-medium text-white tracking-wider mt-1">
                JF Arquidiseños · Barranquilla
              </h3>
            </div>

            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Línea:</span>
                <span className="font-medium text-white">{getServiceName()}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Dimensión:</span>
                <span className="font-mono text-white tabular-nums">~{meters} metros lineales</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Gama:</span>
                <span className="uppercase text-[#C2A169] font-semibold">{tier}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="text-neutral-400">Instalación en Barranquilla:</span>
                <span className="text-[#C2A169] font-medium">Incluida en sitio</span>
              </div>
            </div>

            {/* Total Box */}
            <div className="p-5 sm:p-6 bg-neutral-900 border border-neutral-800 text-center space-y-3 overflow-hidden rounded-xs">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
                Rango Estimado de Inversión
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center p-3 sm:p-4 bg-black/60 border border-neutral-800">
                <div className="text-center border-r border-neutral-800 pr-2">
                  <span className="block text-[11px] text-neutral-400 uppercase tracking-wider mb-1">
                    Mínimo
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-white font-mono tabular-nums tracking-tight block truncate">
                    {formatCOP(calculation.min)}
                  </span>
                </div>
                <div className="text-center pl-2">
                  <span className="block text-[11px] text-[#C2A169] uppercase tracking-wider mb-1">
                    Máximo
                  </span>
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-[#C2A169] font-mono tabular-nums tracking-tight block truncate">
                    {formatCOP(calculation.max)}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 font-light">
                *Valores estimados según metros y acabados seleccionados.
              </p>
            </div>

            {/* Send */}
            <form onSubmit={handleSendWhatsApp} className="space-y-3">
              <input
                type="text"
                placeholder="Tu nombre (opcional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:border-[#C2A169] focus:outline-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 text-xs uppercase tracking-[0.2em] font-semibold text-black bg-[#C2A169] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Estimación a WhatsApp</span>
              </button>
              {feedbackMsg && (
                <p className="text-xs text-center text-emerald-400 mt-2">{feedbackMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
