"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/claudino/gallery_1.jpg",
    alt: "Avenida principal e infraestrutura viária do Claudino Francio",
    caption: "Avenida principal e vias de até 20 metros de largura com asfalto em CBUQ",
  },
  {
    src: "/claudino/gallery_2.jpg",
    alt: "Vista aérea panorâmica do loteamento empresarial Claudino Francio",
    caption: "Lotes empresariais amplos de 1.000 m² a 2.500 m² com excelente topografia",
  },
  {
    src: "/claudino/gallery_3.jpg",
    alt: "Infraestrutura viária planejada para tráfego pesado de cargas",
    caption: "Estrutura viária projetada especialmente para o tráfego de carretas e bitrens",
  },
  {
    src: "/claudino/gallery_4.jpg",
    alt: "Empreendimentos e galpões industriais já instalados na região",
    caption: "Polo comercial e industrial consolidado ao lado da BR-163 e MT-242",
  },
  {
    src: "/claudino/gallery_5.jpg",
    alt: "Perspectiva conceitual de galpões e centros de distribuição modernos",
    caption: "Projetado para indústrias, centros logísticos e distribuidoras de grande porte",
  },
  {
    src: "/claudino/gallery_6.jpg",
    alt: "Boulevard empresarial com redes subterrâneas e sinalização completa",
    caption: "Redes completas de iluminação em LED, água tratada, drenagem e esgotamento",
  },
];

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const getSlide = (offset: number) => {
    const len = galleryItems.length;
    return galleryItems[(currentIndex + offset + len) % len];
  };

  const prevItem = getSlide(-1);
  const currentItem = galleryItems[currentIndex];
  const nextItem = getSlide(1);

  return (
    <div className="claudino-gallery-wrapper">
      <div className="claudino-gallery-viewport">
        {/* Left Preview Slide */}
        <div
          className="claudino-gallery-side-slide left"
          onClick={prevSlide}
          title="Ver imagem anterior"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              prevSlide();
            }
          }}
        >
          <Image
            src={prevItem.src}
            alt={prevItem.alt}
            fill
            sizes="30vw"
            className="object-cover"
          />
          <div className="claudino-gallery-side-overlay" />
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Imagem anterior"
          className="claudino-gallery-nav-btn prev"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Active Main Slide */}
        <div className="claudino-gallery-active-slide">
          <div className="relative w-full h-full group">
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 870px"
              priority={currentIndex === 0}
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Ampliar imagem"
              className="claudino-gallery-zoom-btn"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próxima imagem"
          className="claudino-gallery-nav-btn next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Right Preview Slide */}
        <div
          className="claudino-gallery-side-slide right"
          onClick={nextSlide}
          title="Ver próxima imagem"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              nextSlide();
            }
          }}
        >
          <Image
            src={nextItem.src}
            alt={nextItem.alt}
            fill
            sizes="30vw"
            className="object-cover"
          />
          <div className="claudino-gallery-side-overlay" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="claudino-gallery-dots">
        {galleryItems.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para foto ${idx + 1}`}
            className={`claudino-gallery-dot ${idx === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="claudino-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem ampliada"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Fechar visualização"
            className="claudino-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="claudino-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>
            {currentItem.caption && (
              <p className="claudino-lightbox-caption">{currentItem.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
