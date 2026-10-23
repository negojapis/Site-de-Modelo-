import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const { model } = portfolioConfig;

  return (
    <footer className="w-full bg-[#121212] text-[#888888] py-14 px-5 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Monograma e Nome */}
        <div className="flex items-center space-x-4">
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
            <span className="font-editorial text-xs text-white tracking-widest">{model.monogram}</span>
          </div>
          <div>
            <span className="block text-xs font-semibold text-white tracking-[0.2em] uppercase font-sans-clean">
              {model.firstName} {model.lastName}
            </span>
            <span className="block text-[10px] tracking-[0.15em] uppercase text-[#666666]">
              {model.profession}
            </span>
          </div>
        </div>

        {/* Fusos Horários Editoriais */}
        <div className="hidden lg:flex items-center space-x-8 text-[10px] tracking-[0.2em] uppercase font-mono text-[#777777]">
          <span>PARIS [CET]</span>
          <span>•</span>
          <span>MILANO [CET]</span>
          <span>•</span>
          <span>SÃO PAULO [BRT]</span>
          <span>•</span>
          <span>NEW YORK [EDT]</span>
        </div>

        {/* Voltar ao topo */}
        <div className="flex items-center space-x-6">
          <button
            onClick={onBackToTop}
            className="text-xs uppercase tracking-[0.2em] font-sans-clean text-white hover:text-[#cccccc] transition-colors cursor-pointer flex items-center space-x-2"
          >
            <span>Voltar ao Início</span>
            <span>↑</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.15em] uppercase text-[#555555]">
        <span>© {new Date().getFullYear()} {model.firstName} {model.lastName}. Todos os direitos reservados.</span>
        <span className="mt-2 sm:mt-0">
          Site desenvolvido por{' '}
          <a
            href="https://mastim-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-white transition-colors underline-offset-4 hover:underline font-medium"
          >
            mastim.vision
          </a>
        </span>
      </div>
    </footer>
  );
};
