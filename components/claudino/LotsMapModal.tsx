"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin, MessageSquare } from "lucide-react";

export function LotsMapModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="claudino-cta-ribbon-section">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="claudino-cta-ribbon w-full group focus-visible:outline-2 focus-visible:outline-[#e5a339]"
          aria-label="Abrir mapa dos lotes e localização do Claudino Francio"
        >
          <div className="claudino-cta-ribbon-inner">
            <div className="claudino-cta-ribbon-icon">
              <MapPin className="w-8 h-8 text-[#231f1d] transition-transform group-hover:scale-110" />
            </div>
            <span className="claudino-cta-ribbon-text">
              CLIQUE AQUI E VEJA O<br className="sm:hidden" /> MAPA DE LOCALIZAÇÃO E LOTES
            </span>
          </div>
        </button>
      </section>

      {isOpen && (
        <div
          className="claudino-lightbox-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mapa de Localização e Lotes Claudino Francio"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar mapa dos lotes"
            className="claudino-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="claudino-map-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="claudino-map-modal-header">
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[#231f1d]">
                  Localização Estratégica & Mapa dos Lotes
                </h3>
                <p className="text-sm text-[#6b635b] mt-1">
                  Claudino Francio — Loteamento Comercial e Industrial em Sorriso-MT
                </p>
              </div>
              <a
                href="https://wa.me/556635456500?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20tabela%20de%20pre%C3%A7os%20e%20disponibilidade%20dos%20lotes%20do%20Claudino%20Francio."
                target="_blank"
                rel="noreferrer"
                className="claudino-map-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar Lotes Disponíveis</span>
              </a>
            </div>

            <div className="claudino-map-modal-body">
              <div className="relative w-full h-[55vh] rounded-lg overflow-hidden border border-[#d9cebf]">
                <Image
                  src="/claudino/location_map.jpg"
                  alt="Mapa de Localização e Implantação dos Lotes Claudino Francio"
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
                <div className="claudino-map-badge">
                  <MapPin className="w-4 h-4 text-[#be7b17]" />
                  <span>BR-163 & MT-242, Sorriso-MT</span>
                </div>
              </div>

              <div className="claudino-map-modal-footer">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-[#f7f2ea] rounded-lg border border-[#e5dcce]">
                    <span className="block text-2xl font-bold text-[#231f1d]">1.000 a 2.500 m²</span>
                    <span className="text-xs uppercase tracking-wider text-[#6b635b]">
                      Lotes amplos e unificáveis
                    </span>
                  </div>
                  <div className="p-3 bg-[#f7f2ea] rounded-lg border border-[#e5dcce]">
                    <span className="block text-2xl font-bold text-[#be7b17]">BR-163 & MT-242</span>
                    <span className="text-xs uppercase tracking-wider text-[#6b635b]">
                      Melhor logística de Sorriso
                    </span>
                  </div>
                  <div className="p-3 bg-[#f7f2ea] rounded-lg border border-[#e5dcce]">
                    <span className="block text-2xl font-bold text-[#231f1d]">Até 20 metros</span>
                    <span className="text-xs uppercase tracking-wider text-[#6b635b]">
                      Vias largas em asfalto CBUQ
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
