import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SERVICES, BRAND_CONFIG } from '../data/brandData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  projectTitleRef?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'cocinas',
  projectTitleRef = ''
}) => {
  const [service, setService] = useState<string>(preselectedService);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>(projectTitleRef ? `Referencia de proyecto: ${projectTitleRef}` : '');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
    if (projectTitleRef) {
      setNotes(`Referencia de proyecto: ${projectTitleRef}`);
    }
  }, [preselectedService, projectTitleRef]);

  if (!isOpen) return null;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Por favor completa tu nombre y número de teléfono.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const serviceTitle = SERVICES.find((s) => s.id === service)?.title || service;

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          service: serviceTitle,
          projectType: 'Modal Rápido Cotización',
          location: 'Barranquilla',
          message: notes.trim()
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al registrar solicitud.');
      }

      setIsSuccess(true);

      const msg = `Hola JF Arquidiseños Barranquilla, solicito cotización (Folio: *${data.folio}*):%0A%0A` +
        `*Cliente:* ${name}%0A` +
        `*WhatsApp:* ${phone}%0A` +
        `*Línea:* ${serviceTitle}%0A` +
        (notes ? `*Detalle:* ${notes}%0A` : '') +
        `*Ubicación:* Barranquilla / Atlántico%0A` +
        `*Objetivo:* Deseo coordinar toma de medidas sin costo.`;

      window.open(`https://wa.me/573001933834?text=${msg}`, '_blank');
    } catch (err: any) {
      console.error('QuoteModal error:', err);
      setErrorMsg(err.message || 'Error de conexión. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-neutral-200 max-w-lg w-full p-8 sm:p-10 space-y-6 shadow-2xl relative rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 border-2 border-[#B89355] text-[#B89355] mx-auto flex items-center justify-center rounded-xs">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-light text-[#0F0F11]">
              ¡Mensaje Preparado!
            </h3>
            <p className="text-sm text-[#52525B] font-normal leading-relaxed">
              Se ha generado el enlace directo a WhatsApp con tu asesor técnico de JF Arquidiseños Barranquilla.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-8 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#18181B] hover:bg-[#B89355] rounded-xs cursor-pointer shadow-xs"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#B89355] mb-1 font-mono font-bold">
                Barranquilla · Asesoría Directa
              </div>
              <h3 className="text-2xl font-light text-[#0F0F11]">
                Cotizar Proyecto a la Medida
              </h3>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#18181B] mb-1.5 font-bold">
                Línea de Interés
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-neutral-50/70 border border-neutral-300 text-[#18181B] focus:border-[#B89355] focus:bg-white focus:outline-none rounded-xs"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-white text-[#18181B]">
                    {s.title}
                  </option>
                ))}
                <option value="integral" className="bg-white text-[#18181B]">
                  Hogar Completo (Cocina + Closets + Muebles)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#18181B] mb-1.5 font-bold">
                Nombre Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-neutral-50/70 border border-neutral-300 text-[#18181B] placeholder-neutral-400 focus:border-[#B89355] focus:bg-white focus:outline-none rounded-xs"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#18181B] mb-1.5 font-bold">
                WhatsApp / Celular *
              </label>
              <input
                type="tel"
                required
                placeholder="300 193 3834"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-neutral-50/70 border border-neutral-300 text-[#18181B] placeholder-neutral-400 focus:border-[#B89355] focus:bg-white focus:outline-none rounded-xs"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#18181B] mb-1.5 font-bold">
                Detalles del Espacio
              </label>
              <textarea
                rows={2}
                placeholder="Sector en Barranquilla, medidas aproximadas..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-neutral-50/70 border border-neutral-300 text-[#18181B] placeholder-neutral-400 focus:border-[#B89355] focus:bg-white focus:outline-none rounded-xs"
              />
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-xs">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#18181B] hover:bg-[#B89355] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-xs"
            >
              <MessageSquare className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
              <span>{isSubmitting ? 'Registrando y Conectando...' : 'Enviar Solicitud a WhatsApp'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
