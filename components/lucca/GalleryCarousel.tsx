"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/lucca/gallery_1.jpg",
    alt: "Living e sala de jantar integrados do Lucca Residencial",
    caption: "Living e sala de jantar amplos com acabamento premium e iluminação planejada",
  },
  {
    src: "/lucca/gallery_2.jpg",
    alt: "Varanda gourmet privativa com churrasqueira do Lucca Residencial",
    caption: "Varanda gourmet privativa com bancada de granito, churrasqueira e vista aberta",
  },
  {
    src: "/lucca/gallery_3.jpg",
    alt: "Complexo aquático e pavilhão de lazer do Lucca Residencial",
    caption: "Complexo aquático com piscina adulto de 15m, piscina infantil e academia integrada",
  },
  {
    src: "/lucca/gallery_4.jpg",
    alt: "Suíte máster decorada com iluminação de destaque do Lucca Residencial",
    caption: "Suíte máster confortável com acabamentos sofisticados e marcenaria planejada",
  },
  {
    src: "/lucca/gallery_5.jpg",
    alt: "Espaço gourmet climatizado integrado do Lucca Residencial",
    caption: "Espaços gourmet entregues mobiliados com móveis Todeschini e climatização",
  },
  {
    src: "/lucca/gallery_6.jpg",
    alt: "Cozinha moderna com móveis planejados do Lucca Residencial",
    caption: "Cozinha integrada com bancada em granito, cooktop e armários sob medida",
  },
  {
    src: "/lucca/gallery_7.jpg",
    alt: "Lounge gourmet integrado à piscina do Lucca Residencial",
    caption: "Área de convivência externa sob pergolado com acesso direto à piscina",
  },
  {
    src: "/lucca/gallery_8.jpg",
    alt: "Sala de TV e estar com nichos iluminados do Lucca Residencial",
    caption: "Sala de estar e home theater com painel de TV e nichos com luz indireta",
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
    <div className="lucca-gallery-wrapper">
      <div className="lucca-gallery-viewport">
        {/* Left Preview Slide */}
        <div
          className="lucca-gallery-side-slide left"
          onClick={prevSlide}
          title="Ver foto anterior"
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
          <div className="lucca-gallery-side-overlay" />
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Foto anterior"
          className="lucca-gallery-nav-btn prev"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Active Main Slide */}
        <div className="lucca-gallery-active-slide">
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
              aria-label="Ampliar foto"
              className="lucca-gallery-zoom-btn"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próxima foto"
          className="lucca-gallery-nav-btn next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Right Preview Slide */}
        <div
          className="lucca-gallery-side-slide right"
          onClick={nextSlide}
          title="Ver próxima foto"
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
          <div className="lucca-gallery-side-overlay" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="lucca-gallery-dots">
        {galleryItems.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para foto ${idx + 1}`}
            className={`lucca-gallery-dot ${idx === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="lucca-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos em alta resolução"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Fechar visualização"
            className="lucca-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="lucca-lightbox-content"
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
              <p className="lucca-lightbox-caption">{currentItem.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
