import React from 'react';
import { portfolioConfig, EditorialWork } from '../config/portfolioConfig';

interface WorksGalleryProps {
  onSelectWork: (work: EditorialWork) => void;
}

export const WorksGallery: React.FC<WorksGalleryProps> = ({ onSelectWork }) => {
  const { works } = portfolioConfig;

  return (
    <section 
      id="trabalhos"
      aria-labelledby="works-heading"
      className="w-full py-20 md:py-32 px-5 md:px-12 lg:px-16 border-t border-[#111111]/10 bg-[#faf8f5]"
    >
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
        <div>
          <span className="text-[11px] tracking-[0.25em] uppercase font-sans-clean text-[#777777] block mb-2">
            Seleção Editorial & Campanhas
          </span>
          <h2 id="works-heading" className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight">
            Trabalhos Recentes
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#666666] font-sans-clean max-w-xs uppercase tracking-[0.1em] leading-relaxed">
          Fotografia em preto e branco de alta fidelidade e composições de vanguarda.
        </p>
      </div>

      {/* Grid Editorial Asimétrico e Espaçoso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-20">
        {works.map((work, index) => {
          // Add rhythmic staggered offset to alternating columns on desktop
          const isEven = index % 2 === 1;
          return (
            <article
              key={work.id}
              onClick={() => onSelectWork(work)}
              className={`group cursor-pointer flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg transition-transform duration-500 ${
                isEven ? 'md:mt-16' : ''
              }`}
              tabIndex={0}
              role="button"
              aria-label={`Visualizar trabalho: ${work.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectWork(work);
                }
              }}
            >
              {/* Imagem Editorial */}
              <div className="relative overflow-hidden bg-[#ebe8e1] aspect-[3/4] rounded-sm">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-center filter grayscale group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay sutil com botão de expansão */}
                <div className="absolute inset-0 bg-[#000000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-[#faf8f5]/90 backdrop-blur-xs text-[#111111] text-xs uppercase tracking-[0.2em] font-medium py-2 px-4 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Ampliar Ensaio
                  </span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Informações da Obra */}
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#888888] block mb-1">
                    {work.category} • {work.year}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] group-hover:opacity-75 transition-opacity">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-sans-clean mt-1 font-light">
                    {work.subtitle}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.15em] font-sans-clean font-medium text-[#111111] group-hover:translate-x-1 transition-transform duration-300">
                  +
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
