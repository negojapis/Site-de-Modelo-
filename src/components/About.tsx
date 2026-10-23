import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export const About: React.FC = () => {
  const { model, images } = portfolioConfig;

  return (
    <section 
      id="sobre"
      aria-labelledby="about-heading"
      className="w-full py-20 md:py-32 px-5 md:px-12 lg:px-16 border-t border-[#111111]/10 bg-[#faf8f5]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Seção Superior: Citação & Apresentação */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-[11px] tracking-[0.25em] uppercase font-sans-clean text-[#777777] block mb-2">
              Apresentação & Perfil
            </span>
            <h2 id="about-heading" className="font-editorial text-4xl sm:text-5xl font-normal text-[#111111] tracking-tight">
              Sobre a Modelo
            </h2>
            <div className="mt-6 pt-6 border-t border-[#111111]/10">
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#888888] block mb-1">
                Representação Global
              </span>
              <p className="text-xs sm:text-sm font-sans-clean text-[#222222] font-medium leading-relaxed">
                {model.representation}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {model.locations.map((loc) => (
                  <span
                    key={loc}
                    className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 border border-[#111111]/20 rounded-full font-mono text-[#555555]"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between">
            <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl italic text-[#111111] leading-snug tracking-tight font-light">
              "{model.quote}"
            </blockquote>

            <p className="mt-8 text-sm sm:text-base text-[#444444] font-sans-clean font-light leading-relaxed">
              {model.bio}
            </p>
          </div>
        </div>

        {/* Seção Inferior: Medidas Oficiais (Comp Card) & Fotografia de Apoio */}
        <div className="mt-20 pt-16 border-t border-[#111111]/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Tabela de Medidas (Comp Card Editorial) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs tracking-[0.25em] uppercase font-sans-clean text-[#111111] font-semibold">
                Ficha Técnica / Medidas
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#777777] font-mono">
                Padrão Internacional
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {model.measurements.map((m) => (
                <div key={m.label} className="border-b border-[#111111]/15 pb-4">
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-[#888888] font-sans-clean mb-1">
                    {m.label}
                  </span>
                  <span className="block text-base sm:text-lg font-medium text-[#111111] font-sans-clean tracking-tight">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#f0ede6]/60 rounded border border-[#111111]/10 text-xs text-[#666666] font-sans-clean leading-relaxed flex items-center justify-between">
              <span>Campos de medidas e dados editáveis através de arquivo de configuração centralizado.</span>
            </div>
          </div>

          {/* Fotografia de Apoio (Tailoring Close-up da mesma modelo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full bg-[#121212] rounded-sm overflow-hidden shadow-xl aspect-[3/4]">
              <img
                src={images.aboutPortrait}
                alt={`Retrato editorial de apoio de ${model.firstName} ${model.lastName}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/90 font-mono">
                {model.firstName} {model.lastName} • Perfil '26
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
