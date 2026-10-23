import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const { model, contact } = portfolioConfig;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Portfólio' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'trabalhos', label: 'Trabalhos' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 w-full px-5 py-5 md:px-10 md:py-7 flex items-start justify-between text-[#111111]">
      {/* 1. Nome profissional pequeno à esquerda */}
      <div className="w-1/4 min-w-[140px]">
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
          aria-label={`Página inicial de ${model.firstName} ${model.lastName}`}
        >
          <span className="block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase font-sans-clean">
            {model.firstName} {model.lastName}
          </span>
          <span className="block text-[10px] md:text-[11px] text-[#666666] tracking-[0.15em] uppercase font-light mt-0.5">
            {model.profession.split('&')[0].trim()}
          </span>
        </button>
      </div>

      {/* 2. Menu vertical compacto próximo ao centro-esquerdo (visível no desktop) */}
      <nav 
        aria-label="Navegação Principal"
        className="hidden md:flex flex-col space-y-1.5 w-1/4 text-xs tracking-[0.18em] uppercase font-sans-clean"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`text-left transition-all duration-300 cursor-pointer flex items-center space-x-2 w-fit py-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-black ${
                isActive
                  ? 'font-bold text-[#111111] translate-x-1'
                  : 'text-[#666666] hover:text-[#111111] hover:translate-x-0.5'
              }`}
            >
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-[#111111] scale-100 opacity-100' : 'bg-transparent scale-0 opacity-0'
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 3. Monograma discreto centralizado, dentro de um selo fino */}
      <div className="flex-1 flex justify-center items-center">
        <button
          onClick={() => handleLinkClick('hero')}
          className="group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
          aria-label="Início"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#111111]/30 group-hover:border-[#111111] flex items-center justify-center transition-all duration-300 bg-[#faf8f5]/80 backdrop-blur-xs">
            <span className="font-editorial text-xs md:text-sm tracking-[0.15em] font-medium text-[#111111]">
              {model.monogram}
            </span>
          </div>
        </button>
      </div>

      {/* 4. Link "Contato" à direita (posição inspirada na referência) */}
      <div className="w-1/4 flex justify-end items-start">
        {/* Desktop Contato button */}
        <button
          onClick={() => handleLinkClick('contato')}
          className="hidden md:inline-flex items-center space-x-1.5 text-xs md:text-sm tracking-[0.2em] uppercase font-sans-clean font-medium text-[#111111] hover:opacity-60 transition-opacity cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
        >
          <span>Contato</span>
          <span className="text-[10px] text-[#666666] group-hover:text-[#111111] transition-colors">(01)</span>
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-xs uppercase tracking-[0.2em] font-medium p-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#faf8f5] border-b border-[#111111]/10 px-6 py-6 shadow-xl flex flex-col space-y-4 animate-fadeIn z-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`text-left text-sm tracking-[0.2em] uppercase py-2 cursor-pointer ${
                activeSection === item.id ? 'font-bold text-[#111111]' : 'text-[#666666]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#111111]/10 flex flex-col space-y-2 text-xs text-[#666666] tracking-wider">
            <span>{contact.bookingEmail}</span>
            <span>{contact.instagram}</span>
          </div>
        </div>
      )}
    </header>
  );
};
