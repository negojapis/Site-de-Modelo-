import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorksGallery } from './components/WorksGallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WorkModal } from './components/WorkModal';
import { portfolioConfig, EditorialWork } from './config/portfolioConfig';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedWork, setSelectedWork] = useState<EditorialWork | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Intersection Observer para destacar o item ativo do menu conforme o usuário rola a página
  useEffect(() => {
    const sectionIds = ['hero', 'sobre', 'trabalhos', 'contato'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#111111] selection:bg-[#111111] selection:text-[#faf8f5] flex flex-col justify-start">
      {/* Moldura Externa Escura da Referência Desktop */}
      <div className="w-full px-0 sm:px-3 md:px-5 lg:px-8 xl:px-12 pt-0 sm:pt-4 md:pt-6">
        {/* Superfície Clara com Cantos Superiores Arredondados */}
        <main className="w-full bg-[#faf8f5] rounded-none sm:rounded-t-[28px] md:rounded-t-[36px] lg:rounded-t-[44px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300">
          
          {/* Cabeçalho Editorial com 4 Áreas */}
          <Header
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />

          {/* Hero Principal com Tipografia Monumental e Recorte Central */}
          <Hero
            onExploreClick={() => scrollToSection('trabalhos')}
          />

          {/* Galeria de Trabalhos Recentes */}
          <WorksGallery
            onSelectWork={(work) => setSelectedWork(work)}
          />

          {/* Sobre a Modelo & Ficha Técnica */}
          <About />

          {/* Contato & Booking Direto */}
          <Contact />
        </main>
      </div>

      {/* Rodapé Editorial de Alta Costura */}
      <Footer onBackToTop={() => scrollToSection('hero')} />

      {/* Modal Acessível por Teclado para Ampliação das Fotografias */}
      <WorkModal
        work={selectedWork}
        works={portfolioConfig.works}
        onClose={() => setSelectedWork(null)}
        onSelectWork={(work) => setSelectedWork(work)}
      />
    </div>
  );
};

export default App;
