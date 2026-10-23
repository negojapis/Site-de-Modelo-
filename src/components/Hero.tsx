import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const { model, images } = portfolioConfig;

  return (
    <section 
      id="hero"
      aria-label="Apresentação Editorial"
      className="relative w-full h-[calc(100vh-5rem)] min-h-[580px] max-h-[960px] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Espaço superior para respiração e distanciamento do cabeçalho */}
      <div className="w-full pt-1 md:pt-3 text-center pointer-events-none z-10">
        <span className="inline-block text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#777777] font-sans-clean font-medium">
          Portfolio de Moda Editorial & Haute Couture
        </span>
      </div>

      {/* Camada 1: Linha 1 do Nome (JULIA / JANE) - Posicionada atrás da cabeça e óculos da modelo */}
      <div 
        className="absolute top-[13%] sm:top-[14%] md:top-[15%] left-0 w-full z-10 text-center pointer-events-none"
        aria-hidden="true"
      >
        <h1 className="font-editorial text-[#111111] uppercase font-normal tracking-[0.02em] leading-[0.78] text-[18vw] sm:text-[16vw] md:text-[14.5vw] lg:text-[13.5vw]">
          {model.displayLine1}
        </h1>
      </div>

      {/* Camada 2: Fotografia da Modelo com Recorte Transparente */}
      <div 
        className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end pointer-events-none h-[86%] sm:h-[90%] md:h-[94%] lg:h-[96%]"
      >
        <img
          src={images.heroCutout}
          alt={`Fotografia editorial de ${model.firstName} ${model.lastName}`}
          className="h-full w-auto max-w-none object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Camada 3: Linha 2 do Nome (MUTHEU) - Atravessa o peito e lapelas com Inversão Tipográfica (mix-blend-mode: difference) */}
      <div 
        className="absolute bottom-[14%] sm:bottom-[15%] md:bottom-[16%] left-0 w-full z-30 pointer-events-none text-center mix-blend-difference"
        aria-hidden="true"
      >
        <span className="font-editorial text-white uppercase font-normal tracking-[0.01em] leading-[0.78] block text-[18.5vw] sm:text-[16.5vw] md:text-[15vw] lg:text-[14vw]">
          {model.displayLine2}
        </span>
      </div>

      {/* Acessibilidade: Título Semântico completo para leitores de tela */}
      <div className="sr-only">
        <h1>{model.firstName} {model.lastName} — {model.profession}</h1>
        <p>{model.representation}</p>
      </div>

      {/* Detalhes editoriais nos cantos inferiores */}
      <div className="relative z-35 w-full px-5 md:px-10 pb-4 flex justify-between items-end pointer-events-auto text-[#111111]">
        <div className="hidden lg:flex flex-col text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#666666]">
          <span>Ensaio Monocromático</span>
          <span>Série Vanguarda '26</span>
        </div>

        {/* Indicador de rolagem editorial */}
        <button
          onClick={onExploreClick}
          className="mx-auto flex flex-col items-center group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
          aria-label="Rolar para os trabalhos"
        >
          <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-sans-clean text-[#666666] group-hover:text-[#111111] transition-colors mb-2">
            Ver Coleção
          </span>
          <div className="w-[1px] h-6 md:h-8 bg-[#111111]/30 group-hover:bg-[#111111] group-hover:h-10 transition-all duration-300" />
        </button>

        <div className="hidden lg:flex flex-col text-right text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#666666]">
          <span>{model.locations.join(' • ')}</span>
          <span>Alta Definição</span>
        </div>
      </div>
    </section>
  );
};
