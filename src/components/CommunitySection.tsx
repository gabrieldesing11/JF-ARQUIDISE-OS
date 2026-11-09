import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';

export const CommunitySection: React.FC = () => {
  return (
    <section id="comunidad" className="py-14 sm:py-20 bg-white relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-xs uppercase tracking-[0.24em] text-[#C8A97E] mb-1 font-semibold">
            Redes Sociales
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight">
            Nuestra Comunidad
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 font-light">
            Encuéntranos en Instagram y TikTok para ver nuestros proyectos y novedades en Barranquilla.
          </p>
        </div>

        {/* Just 2 Clean Cards: Instagram and TikTok */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl">
          {/* Card 1: INSTAGRAM */}
          <a
            href={BRAND_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-8 bg-neutral-50/70 border border-neutral-200 hover:border-[#C8A97E] hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xs mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#C8A97E] transition-colors">
              Instagram
            </h3>
            
            <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5 mb-4 sm:mb-6">
              {BRAND_CONFIG.socials.instagramHandle}
            </p>

            <span className="w-full py-2.5 sm:py-3 px-3 bg-[#111112] group-hover:bg-[#C8A97E] text-white group-hover:text-[#111112] text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs">
              <span>Visitar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Card 2: TIKTOK */}
          <a
            href={BRAND_CONFIG.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-8 bg-neutral-50/70 border border-neutral-200 hover:border-[#111112] hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#010101] flex items-center justify-center text-white shadow-xs mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#C8A97E] transition-colors">
              TikTok
            </h3>
            
            <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5 mb-4 sm:mb-6">
              {BRAND_CONFIG.socials.tiktokHandle}
            </p>

            <span className="w-full py-2.5 sm:py-3 px-3 bg-[#111112] group-hover:bg-neutral-800 text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs">
              <span>Visitar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
