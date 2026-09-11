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
    src: "/arboreto/gallery_1.jpg",
    alt: "Pórtico de Entrada e Portaria Monumental do Arboreto Eco Ville",
    caption: "Pórtico de Entrada com portaria 24 horas e guarita com 3 pistas",
  },
  {
    src: "/arboreto/gallery_2.jpg",
    alt: "Vista aérea das quadras esportivas e áreas de lazer ao entardecer",
    caption: "Complexo esportivo com quadras de tênis, areia e poliesportiva",
  },
  {
    src: "/arboreto/gallery_3.jpg",
    alt: "Lounge e área social noturna com espelho d'água",
    caption: "Lounge e espaços gourmet exclusivos de frente para o lago",
  },
  {
    src: "/arboreto/section3_architecture.jpg",
    alt: "Lago contemplativo com piers e quiosques integrados à natureza",
    caption: "Lago de 1 hectare e quiosques projetados por JA8 Arquitetura Viva",
  },
  {
    src: "/arboreto/cta_bottom_clean.jpg",
    alt: "Fachada arquitetônica e boulevard de acesso arborizado",
    caption: "Boulevard com cabeamento subterrâneo e iluminação em LED",
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
    <div className="arboreto-gallery-wrapper">
      <div className="arboreto-gallery-viewport">
        {/* Left Preview Slide */}
        <div
          className="arboreto-gallery-side-slide left"
          onClick={prevSlide}
          title="Ver imagem anterior"
        >
          <Image
            src={prevItem.src}
            alt={prevItem.alt}
            fill
            sizes="30vw"
            className="object-cover"
          />
          <div className="arboreto-gallery-side-overlay" />
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Imagem anterior"
          className="arboreto-gallery-nav-btn prev"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Active Main Slide */}
        <div className="arboreto-gallery-active-slide">
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
              className="arboreto-gallery-zoom-btn"
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
          className="arboreto-gallery-nav-btn next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Right Preview Slide */}
        <div
          className="arboreto-gallery-side-slide right"
          onClick={nextSlide}
          title="Ver próxima imagem"
        >
          <Image
            src={nextItem.src}
            alt={nextItem.alt}
            fill
            sizes="30vw"
            className="object-cover"
          />
          <div className="arboreto-gallery-side-overlay" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="arboreto-gallery-dots">
        {galleryItems.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para foto ${idx + 1}`}
            className={`arboreto-gallery-dot ${idx === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="arboreto-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem ampliada"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Fechar visualização"
            className="arboreto-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="arboreto-lightbox-content"
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
              <p className="arboreto-lightbox-caption">{currentItem.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
