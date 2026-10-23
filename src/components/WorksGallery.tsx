import React, { useState } from 'react';
import { portfolioConfig, EditorialWork, CategoryTag } from '../config/portfolioConfig';

interface WorksGalleryProps {
  onSelectWork: (work: EditorialWork) => void;
}

export const WorksGallery: React.FC<WorksGalleryProps> = ({ onSelectWork }) => {
  const { works, categories } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<CategoryTag>('todos');

  // Filtragem dinâmica por categoria
  const filteredWorks = selectedCategory === 'todos'
    ? works
    : works.filter((w) => w.categoryTag === selectedCategory);

  // Contagem de itens por categoria
  const getCount = (catId: CategoryTag) => {
    if (catId === 'todos') return works.length;
    return works.filter((w) => w.categoryTag === catId).length;
  };

  return (
    <section 
      id="trabalhos"
      aria-labelledby="works-heading"
      className="w-full py-20 md:py-32 px-5 md:px-12 lg:px-16 border-t border-[#111111]/10 bg-[#faf8f5]"
    >
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
        <div>
          <span className="text-[11px] tracking-[0.25em] uppercase font-sans-clean text-[#777777] block mb-2">
            Acervo & Campanhas Editoriais
          </span>
          <h2 id="works-heading" className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight">
            Trabalhos & Ensaios
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-left md:text-right">
          <span className="text-xs text-[#777777] font-mono tracking-wider block">
            Mostrando {filteredWorks.length} de {works.length} produções
          </span>
          <p className="text-xs sm:text-sm text-[#444444] font-sans-clean mt-1 font-light">
            Lingerie, vestidos, biquíni e fotografia de moda conceitual.
          </p>
        </div>
      </div>

      {/* Barra de Filtros por Categoria com Pílulas Editoriais */}
      <nav 
        aria-label="Filtro de Ensaios" 
        className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none"
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = getCount(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-sans-clean transition-all duration-300 cursor-pointer flex items-center space-x-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-black ${
                isActive
                  ? 'bg-[#111111] text-[#faf8f5] shadow-sm font-medium scale-[1.02]'
                  : 'bg-[#f0ede6]/80 text-[#666666] hover:bg-[#e4e0d7] hover:text-[#111111]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-black/10 text-[#666666]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Grid Editorial com Variedade Visual (Cartões Verticais e Horizontais Amplos) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        {filteredWorks.map((work, index) => {
          const isWide = work.span?.includes('md:col-span-2');
          return (
            <article
              key={work.id}
              onClick={() => onSelectWork(work)}
              className={`group cursor-pointer flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg transition-transform duration-500 ${
                work.span || 'col-span-1'
              }`}
              tabIndex={0}
              role="button"
              aria-label={`Visualizar ensaio: ${work.title} - ${work.category}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectWork(work);
                }
              }}
            >
              {/* Imagem do Card com Proporção Adequada */}
              <div className={`relative overflow-hidden bg-[#ebe8e1] ${isWide ? 'aspect-[16/10] sm:aspect-[21/9]' : work.aspectRatio} rounded-sm shadow-xs`}>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay sutil com botão de expansão */}
                <div className="absolute inset-0 bg-[#000000]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-[#faf8f5]/95 backdrop-blur-xs text-[#111111] text-xs uppercase tracking-[0.2em] font-medium py-2.5 px-5 rounded-full shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Ampliar Ensaio
                  </span>
                </div>

                {/* Tag de Categoria e Numeração */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/95 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-sans-clean font-medium text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                    {work.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                    {work.year}
                  </span>
                </div>
              </div>

              {/* Informações da Obra */}
              <div className="mt-4 sm:mt-5 flex items-start justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#888888] block mb-1">
                    {work.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] group-hover:opacity-75 transition-opacity">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-sans-clean mt-1 font-light line-clamp-2 max-w-xl">
                    {work.description}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#111111]/20 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 ml-4">
                  <span className="text-xs uppercase tracking-[0.1em] font-sans-clean font-medium leading-none">
                    +
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
