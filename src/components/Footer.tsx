import React from 'react';
import { BRAND_CONFIG, SERVICES } from '../data/brandData';
import { ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenSavedDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSavedDrawer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111112] text-neutral-400 border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/brand/logo_white_transparent.png"
                alt="JF Arquidiseños Barranquilla"
                className="h-11 w-auto object-contain"
              />
            </a>

            <p className="font-serif italic text-base text-[#E2CDA7]">
              «Diseños que reflejan tu estilo»
            </p>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Mobiliario arquitectónico a la medida en Barranquilla. Diseñamos, fabricamos e instalamos cocinas integrales, closets, centros de entretenimiento, divisiones de baño y puertas.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-[#E2CDA7] hover:text-[#111112] transition-colors border border-neutral-700 font-medium"
                aria-label="Instagram de JF Arquidiseños"
              >
                <span>Instagram</span>
              </a>

              <a
                href={BRAND_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-[#E2CDA7] hover:text-[#111112] transition-colors border border-neutral-700 font-medium"
                aria-label="TikTok de JF Arquidiseños"
              >
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              Líneas de Servicios
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicios"
                    className="hover:text-[#E2CDA7] transition-colors flex items-center gap-2"
                  >
                    <span className="font-mono text-[#E2CDA7]">{s.number}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sede & Direct WhatsApp */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              Sede Barranquilla
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <p className="text-white font-medium">{BRAND_CONFIG.showroomAddress}</p>
              <p>{BRAND_CONFIG.coverage}</p>
              <p className="font-mono text-[#E2CDA7] text-sm pt-1">
                Línea Directa: {BRAND_CONFIG.phoneDisplay}
              </p>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/573001933834"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#111112] bg-[#E2CDA7] hover:bg-white transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hablar con un asesor</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.name} · Barranquilla, Colombia. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Demo Disclaimer */}
        <div className="mt-6 pt-4 border-t border-neutral-800/60 text-center">
          <p className="text-[11px] text-neutral-400 tracking-wide font-normal">
            Propuesta de diseño, no es el sitio oficial de JF Arquidiseños
          </p>
        </div>
      </div>
    </footer>
  );
};
