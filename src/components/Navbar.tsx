import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Bookmark } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';

interface NavbarProps {
  savedCount: number;
  onOpenSavedDrawer: () => void;
  onOpenQuickContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSavedDrawer,
  onOpenQuickContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: '25 Proyectos', href: '#proyectos' },
    { name: 'Garantía & Proceso', href: '#respaldo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 py-3 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-neutral-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="JF Arquidiseños Barranquilla"
          >
            <img
              src="/brand/logo_black_transparent.png"
              alt="JF Arquidiseños"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#C8A97E] transition-colors duration-200 whitespace-nowrap py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Saved items trigger button */}
            <button
              onClick={onOpenSavedDrawer}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 transition-colors cursor-pointer border border-neutral-200"
              title="Ver ideas guardadas"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span className="hidden sm:inline">Mis Ideas</span>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.2 bg-[#111112] text-white text-[10px] font-bold rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/573001933834"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#111112] hover:bg-[#C8A97E] hover:text-[#111112] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-800 hover:text-neutral-900 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2 pt-2 text-sm uppercase tracking-[0.16em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-800 hover:text-[#C8A97E] py-2.5 border-b border-neutral-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSavedDrawer();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 border border-neutral-200 flex items-center justify-center gap-2"
            >
              <Bookmark className="w-4 h-4 text-[#C8A97E]" />
              <span>Mis Ideas Guardadas ({savedCount})</span>
            </button>

            <a
              href="https://wa.me/573001933834"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white bg-[#111112] hover:bg-[#C8A97E] flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
