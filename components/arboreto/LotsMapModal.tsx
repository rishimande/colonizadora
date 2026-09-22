"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MessageSquare } from "lucide-react";

export function LotsMapModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="arboreto-cta-ribbon-section">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="arboreto-cta-ribbon w-full group focus-visible:outline-2 focus-visible:outline-[#b4a06d]"
          aria-label="Abrir mapa dos lotes do Arboreto Eco Ville"
        >
          <div className="arboreto-cta-ribbon-inner">
            <div className="arboreto-cta-ribbon-icon">
              <Image
                src="/arboreto/ativo_1.png"
                alt="Ícone Mapa dos Lotes"
                width={54}
                height={49}
                className="w-10 h-9 md:w-12 md:h-11 transition-transform group-hover:scale-110"
              />
            </div>
            <span className="arboreto-cta-ribbon-text">
              CLIQUE AQUI E VEJA O<br className="sm:hidden" /> MAPA DOS LOTES
            </span>
          </div>
        </button>
      </section>

      {isOpen && (
        <div
          className="arboreto-lightbox-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mapa dos Lotes Arboreto Eco Ville"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar mapa dos lotes"
            className="arboreto-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="arboreto-map-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="arboreto-map-modal-header">
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[#372a17]">
                  Masterplan & Mapa dos Lotes
                </h3>
                <p className="text-sm text-[#6e593c] mt-1">
                  Arboreto Eco Ville — Terrenos exclusivos a partir de 525 m² em Sorriso-MT
                </p>
              </div>
              <a
                href="https://wa.me/556635456500?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20tabela%20de%20pre%C3%A7os%20e%20disponibilidade%20dos%20lotes%20do%20Arboreto."
                target="_blank"
                rel="noreferrer"
                className="arboreto-map-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar Lotes Disponíveis</span>
              </a>
            </div>

            <div className="arboreto-map-modal-body">
              <div className="relative w-full h-[55vh] md:h-[65vh] rounded-lg overflow-hidden border border-[#d6cbbe] bg-[#fdfcf9]">
                <Image
                  src="/arboreto/arboreto_masterplan.jpg"
                  alt="Masterplan e Mapa dos Lotes Arboreto Eco Ville"
                  fill
                  sizes="95vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="arboreto-map-modal-footer">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-[#f5f1ea] rounded-lg border border-[#e2d9ce]">
                    <span className="block text-2xl font-bold text-[#685034]">A partir de 525 m²</span>
                    <span className="text-xs uppercase tracking-wider text-[#7a644c]">
                      Lotes exclusivos
                    </span>
                  </div>
                  <div className="p-3 bg-[#f5f1ea] rounded-lg border border-[#e2d9ce]">
                    <span className="block text-2xl font-bold text-[#685034]">369 mil m²</span>
                    <span className="text-xs uppercase tracking-wider text-[#7a644c]">
                      Área total do empreendimento
                    </span>
                  </div>
                  <div className="p-3 bg-[#f5f1ea] rounded-lg border border-[#e2d9ce]">
                    <span className="block text-2xl font-bold text-[#685034]">184 mil m²</span>
                    <span className="text-xs uppercase tracking-wider text-[#7a644c]">
                      Área verde e lazer preservado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
