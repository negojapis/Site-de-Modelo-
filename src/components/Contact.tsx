import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

export const Contact: React.FC = () => {
  const { contact, model } = portfolioConfig;
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: '',
    projectType: 'Editorial',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.bookingEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', agency: '', email: '', projectType: 'Editorial', message: '' });
    }, 4000);
  };

  return (
    <section 
      id="contato"
      aria-labelledby="contact-heading"
      className="w-full py-20 md:py-32 px-5 md:px-12 lg:px-16 border-t border-[#111111]/10 bg-[#faf8f5]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Coluna Esquerda: Informações Diretas de Contato */}
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.25em] uppercase font-sans-clean text-[#777777] block mb-2">
              Contato & Agendamento
            </span>
            <h2 id="contact-heading" className="font-editorial text-4xl sm:text-5xl font-normal text-[#111111] tracking-tight">
              Booking Direto
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-[#555555] font-sans-clean leading-relaxed font-light">
              Para editoriais de moda, campanhas internacionais de alta costura, desfiles e lookbooks, entre em contato diretamente com a equipe de representação.
            </p>

            <div className="mt-10 space-y-6">
              {/* E-mail de Booking com botão de copiar */}
              <div className="border-b border-[#111111]/10 pb-5">
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#888888] block mb-1">
                  E-mail Profissional (Booking)
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${contact.bookingEmail}`}
                    className="text-base sm:text-lg font-medium text-[#111111] hover:underline underline-offset-4 font-sans-clean"
                  >
                    {contact.bookingEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] tracking-[0.15em] uppercase py-1 px-3 border border-[#111111]/30 hover:border-[#111111] rounded-full transition-colors cursor-pointer text-[#333333]"
                    aria-label="Copiar endereço de e-mail"
                  >
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>

              {/* Instagram */}
              <div className="border-b border-[#111111]/10 pb-5">
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#888888] block mb-1">
                  Instagram Oficial
                </span>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-medium text-[#111111] hover:underline underline-offset-4 font-sans-clean inline-flex items-center space-x-1"
                >
                  <span>{contact.instagram}</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>

              {/* Escritório & Representação */}
              <div className="border-b border-[#111111]/10 pb-5">
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#888888] block mb-1">
                  Mesa de Booking
                </span>
                <p className="text-xs sm:text-sm text-[#333333] font-sans-clean">
                  {contact.address}
                </p>
                <p className="text-xs text-[#666666] font-mono mt-1">
                  {contact.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Editorial Minimalista */}
          <div className="lg:col-span-7 bg-[#f2efe8]/70 p-8 sm:p-12 rounded-xl border border-[#111111]/10">
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-normal mb-2">
              Solicitação de Proposta
            </h3>
            <p className="text-xs text-[#666666] font-sans-clean mb-8">
              Preencha os detalhes do projeto editorial ou comercial para checagem de disponibilidade de agenda.
            </p>

            {formSent ? (
              <div className="p-6 bg-[#faf8f5] border border-[#111111] text-[#111111] rounded text-center animate-fadeIn">
                <span className="font-editorial text-2xl block mb-2">Mensagem Registrada</span>
                <p className="text-xs text-[#555555] font-sans-clean">
                  A equipe de representação de {model.firstName} {model.lastName} retornará dentro de 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#777777] font-sans-clean mb-1.5">
                      Seu Nome / Contato
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Sophie Laurent"
                      className="w-full bg-[#faf8f5] border border-[#111111]/20 px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111] rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#777777] font-sans-clean mb-1.5">
                      Revista / Marca / Agência
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.agency}
                      onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                      placeholder="Ex: Vogue Paris / Maison Atelier"
                      className="w-full bg-[#faf8f5] border border-[#111111]/20 px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111] rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#777777] font-sans-clean mb-1.5">
                      E-mail Institucional
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@empresa.com"
                      className="w-full bg-[#faf8f5] border border-[#111111]/20 px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111] rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#777777] font-sans-clean mb-1.5">
                      Tipo de Projeto
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#faf8f5] border border-[#111111]/20 px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111] rounded cursor-pointer"
                    >
                      <option value="Editorial">Ensaio Editorial / Capa</option>
                      <option value="Campanha">Campanha Internacional</option>
                      <option value="Runway">Desfile / Fashion Week</option>
                      <option value="Lookbook">Lookbook de Coleção</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#777777] font-sans-clean mb-1.5">
                    Datas Previstas & Descrição
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Informe localização, cronograma estimado e detalhes da produção..."
                    className="w-full bg-[#faf8f5] border border-[#111111]/20 px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111] rounded resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#111111] text-[#faf8f5] text-xs uppercase tracking-[0.25em] font-medium rounded hover:bg-[#333333] transition-colors cursor-pointer"
                >
                  Enviar Solicitação Editorial
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
