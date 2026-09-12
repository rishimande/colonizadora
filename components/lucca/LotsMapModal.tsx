"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin, MessageSquare } from "lucide-react";

export function LotsMapModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="lucca-cta-ribbon-section">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="lucca-cta-ribbon w-full group focus-visible:outline-2 focus-visible:outline-[#725628]"
          aria-label="Abrir mapa de localização e detalhes do Lucca Residencial"
        >
          <div className="lucca-cta-ribbon-inner">
            <div className="lucca-cta-ribbon-icon">
              <MapPin className="w-8 h-8 text-[#644c32] transition-transform group-hover:scale-110" />
            </div>
            <span className="lucca-cta-ribbon-text">
              CLIQUE AQUI E VEJA O<br className="sm:hidden" /> MAPA DE LOCALIZAÇÃO E DETALHES
            </span>
          </div>
        </button>
      </section>

      {isOpen && (
        <div
          className="lucca-lightbox-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mapa de Localização e Implantação Lucca Residencial"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar mapa"
            className="lucca-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="lucca-map-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lucca-map-modal-header">
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[#3b2d18]">
                  Localização Privilegiada & Entorno
                </h3>
                <p className="text-sm text-[#725235] mt-1">
                  Lucca Residencial — Bairro Villa Romana em Sorriso-MT
                </p>
              </div>
              <a
                href="https://wa.me/556635456500?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20as%20unidades%20dispon%C3%ADveis%20e%20valores%20do%20Lucca%20Residencial."
                target="_blank"
                rel="noreferrer"
                className="lucca-map-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar Unidades Disponíveis</span>
              </a>
            </div>

            <div className="lucca-map-modal-body">
              <div className="relative w-full h-[55vh] rounded-lg overflow-hidden border border-[#d8cdbf]">
                <Image
                  src="/lucca/location_map.jpg"
                  alt="Mapa de Localização e Entorno do Lucca Residencial no Bairro Villa Romana em Sorriso-MT"
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
                <div className="lucca-map-badge">
                  <MapPin className="w-4 h-4 text-[#725628]" />
                  <span>Bairro Villa Romana, Sorriso-MT</span>
                </div>
              </div>

              <div className="lucca-map-modal-footer">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-[#f7f2ea] rounded-lg border border-[#e5dcce]">
                    <span className="block text-2xl font-bold text-[#644c32]">97,19 m²</span>
                    <span className="text-xs uppercase tracking-wider text-[#725235]">
                      3 quartos sendo 1 suíte
                    </span>
                  </div>
                  <div className="p-3 bg-[#f7f2ea] rounded-lg border border-[#e5dcce]">
                    <span className="block text-2xl font-bold text-[#725628]">Villa Romana</span>
                    <span className="text-xs uppercase tracking-wider text-[#725235]">
                      A 2 quadras do Hospital
                    </span>
                  </div>
                  <div className="p-3 bg-[#f7f2ea] rounded-lg border border-[#e5dcce]">
                    <span className="block text-2xl font-bold text-[#644c32]">Pronto para Morar</span>
                    <span className="text-xs uppercase tracking-wider text-[#725235]">
                      Lazer completo e mobiliado
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
