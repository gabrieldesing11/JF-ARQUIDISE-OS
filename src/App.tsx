import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectGallery } from './components/ProjectGallery';
import { TrustAndGuarantee } from './components/TrustAndGuarantee';
import { CommunitySection } from './components/CommunitySection';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ProjectSaverDrawer, SavedItem } from './components/ProjectSaverDrawer';

export default function App() {
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  const handleToggleSaveItem = (item: SavedItem) => {
    setSavedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isItemSaved = (id: string) => {
    return savedItems.some((i) => i.id === id);
  };

  const handleRemoveItem = (id: string) => {
    setSavedItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearAll = () => {
    setSavedItems([]);
  };

  return (
    <div className="min-h-screen bg-white text-[#111112] font-sans antialiased selection:bg-[#E2CDA7] selection:text-[#111112] flex flex-col">
      {/* 1. Header Navigation */}
      <Navbar
        savedCount={savedItems.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
        onOpenQuickContact={() => {
          const el = document.getElementById('contacto');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {/* 2. Hero Section: Clean, direct, architectural */}
        <Hero />

        {/* 3. Servicios: Protagonismo principal inmediato para encontrar lo que buscan */}
        <Services
          onSaveItem={handleToggleSaveItem}
          isItemSaved={isItemSaved}
        />

        {/* 4. Portafolio de 25 Proyectos en Barranquilla: Inspiración visual y guardado directo */}
        <ProjectGallery
          onSaveItem={handleToggleSaveItem}
          isItemSaved={isItemSaved}
        />

        {/* 5. Segundo Plano: Respaldo, Calidad & Garantía (Sin saturar) */}
        <TrustAndGuarantee />

        {/* 6. Comunidad: Redes Sociales (Instagram & TikTok) */}
        <CommunitySection />

        {/* 7. Preguntas Frecuentes (FAQ) */}
        <FAQ />

        {/* 7. Contacto Rápido & Showroom en Barranquilla (Sin correos ni encuestas extensas) */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)} />

      {/* 9. Drawer de Ideas Guardadas & Envío Directo a WhatsApp */}
      <ProjectSaverDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedItems={savedItems}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
      />

      {/* 10. Botón Flotante de WhatsApp Sincronizado */}
      <WhatsAppFloat
        savedCount={savedItems.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
      />
    </div>
  );
}
