import React, { useEffect, useRef } from 'react';
import { EditorialWork } from '../config/portfolioConfig';

interface WorkModalProps {
  work: EditorialWork | null;
  works: EditorialWork[];
  onClose: () => void;
  onSelectWork: (work: EditorialWork) => void;
}

export const WorkModal: React.FC<WorkModalProps> = ({
  work,
  works,
  onClose,
  onSelectWork,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!work) return;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = works.findIndex((w) => w.id === work.id);
        const nextIndex = (currentIndex + 1) % works.length;
        onSelectWork(works[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = works.findIndex((w) => w.id === work.id);
        const prevIndex = (currentIndex - 1 + works.length) % works.length;
        onSelectWork(works[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [work, works, onClose, onSelectWork]);

  if (!work) return null;

  const currentIndex = works.findIndex((w) => w.id === work.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização de ${work.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0a0a0a]/92 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#faf8f5] text-[#111111] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagem Ampliada */}
        <div className="w-full lg:w-3/5 bg-[#121212] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="max-h-[60vh] lg:max-h-[80vh] w-auto object-contain mx-auto transition-transform duration-500"
          />
        </div>

        {/* Informações Editoriais */}
        <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10">
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans-clean text-[#777777]">
                {String(currentIndex + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')} • {work.category}
              </span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="text-xs uppercase tracking-[0.2em] font-medium py-1 px-3 border border-[#111111]/20 hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all cursor-pointer rounded-full"
                aria-label="Fechar visualização"
              >
                Fechar [ESC]
              </button>
            </div>

            <div className="mt-6">
              <span className="text-xs tracking-[0.2em] uppercase text-[#666666] font-sans-clean block mb-1">
                {work.year} — {work.subtitle}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-[#111111]">
                {work.title}
              </h3>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#444444] font-sans-clean leading-relaxed">
              {work.description}
            </p>

            <div className="mt-6 pt-6 border-t border-[#111111]/10">
              <h4 className="text-[10px] tracking-[0.2em] uppercase font-sans-clean font-semibold text-[#888888] mb-2">
                Créditos do Ensaio
              </h4>
              <p className="text-xs text-[#555555] font-sans-clean leading-relaxed italic">
                {work.credits}
              </p>
            </div>
          </div>

          {/* Navegação entre trabalhos */}
          <div className="mt-8 pt-4 border-t border-[#111111]/10 flex items-center justify-between">
            <button
              onClick={() => {
                const prev = (currentIndex - 1 + works.length) % works.length;
                onSelectWork(works[prev]);
              }}
              className="text-xs uppercase tracking-[0.15em] font-medium py-2 px-3 text-[#555555] hover:text-[#111111] transition-colors cursor-pointer"
            >
              ← Anterior
            </button>
            <span className="text-[11px] text-[#888888]">Navegue com [←] e [→]</span>
            <button
              onClick={() => {
                const next = (currentIndex + 1) % works.length;
                onSelectWork(works[next]);
              }}
              className="text-xs uppercase tracking-[0.15em] font-medium py-2 px-3 text-[#555555] hover:text-[#111111] transition-colors cursor-pointer"
            >
              Próximo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
