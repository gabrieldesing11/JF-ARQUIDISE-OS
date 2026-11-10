import React, { useState } from 'react';
import { Send, Phone, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { BRAND_CONFIG, SERVICES } from '../data/brandData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('cocinas');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const selectedServiceName = SERVICES.find(s => s.id === service)?.title || service;

    const lines = [
      '¡Hola, JF Arquidiseños Barranquilla! Deseo agendar una visita técnica para toma de medidas en mi espacio:',
      '',
      `👤 *Nombre:* ${name.trim()}`,
      `📱 *Teléfono de contacto:* ${phone.trim()}`,
      `🗂️ *Línea de interés:* ${selectedServiceName}`
    ];

    if (location.trim()) {
      lines.push(`📍 *Sector en Barranquilla:* ${location.trim()}`);
    }

    if (message.trim()) {
      lines.push(`📝 *Detalles o medidas aproximadas:* ${message.trim()}`);
    }

    lines.push('');
    lines.push('🤝 *Objetivo:* Coordinar una asesoría y la toma de medidas.');

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/573001933834?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-14 sm:py-20 bg-white relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs uppercase tracking-[0.24em] text-[#C8A97E] mb-2 font-semibold">
            Contacto Directo · Barranquilla
          </div>
          <h2 className="text-2xl sm:text-4xl font-light text-neutral-900 tracking-tight">
            Agenda tu visita técnica{' '}
            <span className="font-serif italic text-[#C8A97E]">sin costo ni compromiso</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light">
            Escríbenos directamente o déjanos tus datos para coordinar el levantamiento de medidas en tu hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Sede Info (Left) */}
          <div className="lg:col-span-5 p-5 sm:p-8 bg-neutral-50 border border-neutral-200 space-y-5 sm:space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 pb-3 border-b border-neutral-200">
              Sede & Showroom Barranquilla
            </h3>

            <div className="space-y-4 text-sm text-neutral-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-900">{BRAND_CONFIG.showroomAddress}</p>
                  <p className="text-xs text-neutral-500">{BRAND_CONFIG.coverage}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+573001933834"
                    className="font-medium text-neutral-900 hover:text-[#C8A97E] font-mono"
                  >
                    {BRAND_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-neutral-500">Línea directa y llamadas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://wa.me/573001933834"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-900 hover:text-[#C8A97E]"
                  >
                    WhatsApp Asesor: 300 193 3834
                  </a>
                  <p className="text-xs text-neutral-500">Respuesta ágil en menos de 2 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-900">Lunes a Viernes: 8:00 AM – 6:00 PM</p>
                  <p className="text-xs text-neutral-500">Sábados: 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form without email (Right) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-5 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900">
                  ¡Mensaje Enviado a WhatsApp!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Gracias <strong>{name}</strong>. Tu solicitud se ha transferido a nuestro canal de WhatsApp para atenderte de inmediato.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-900 underline"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wider mb-1">
                    Contacto Rápido
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Déjanos tu nombre y número para coordinar la toma de medidas en tu sector.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Gabriel Bovea"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 focus:border-[#C8A97E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 300 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 focus:border-[#C8A97E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Línea de Interés
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 focus:border-[#C8A97E] focus:outline-none cursor-pointer"
                    >
                      <option value="cocinas">Cocinas Integrales</option>
                      <option value="closets">Closets & Vestidores</option>
                      <option value="entretenimiento">Centros de Entretenimiento</option>
                      <option value="banos">Divisiones de Baño</option>
                      <option value="puertas">Puertas & Panelados</option>
                      <option value="integral">Proyecto Completo para Hogar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Sector en Barranquilla (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Alto Prado, Riomar, Villa Campestre"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 focus:border-[#C8A97E] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Detalles o Medidas Aprox.
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Cuéntanos brevemente qué buscas para tu espacio..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 focus:border-[#C8A97E] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#111112] hover:bg-[#C8A97E] hover:text-[#111112] transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Consulta Directa a WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
