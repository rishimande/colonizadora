"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "todos" | "aereo" | "infra" | "logistica";
  categoryLabel: string;
  title: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "aerea-masterplan",
    src: "/claudino/gallery_aerea_masterplan.jpg",
    alt: "Vista aérea panorâmica do loteamento comercial e industrial Claudino Francio",
    category: "aereo",
    categoryLabel: "Vista Aérea & Masterplan",
    title: "Vista Aérea do Polo Industrial & Sorriso",
    caption:
      "Loteamento planejado estrategicamente posicionado junto ao maior polo agroindustrial do Brasil em Sorriso-MT.",
  },
  {
    id: "eixo-logistico",
    src: "/claudino/gallery_eixo_logistico.jpg",
    alt: "Eixo logístico e vista panorâmica ao longo da BR-163",
    category: "logistica",
    categoryLabel: "Logística & BR-163",
    title: "Eixo Estratégico da BR-163",
    caption:
      "Acesso direto e facilitado às principais rodovias de escoamento da produção nacional (BR-163 e MT-242).",
  },
  {
    id: "vias-asfalto",
    src: "/claudino/gallery_vias_asfalto.jpg",
    alt: "Vias amplas de até 20 metros com asfalto CBUQ e galpões empresariais",
    category: "infra",
    categoryLabel: "Infraestrutura & Vias",
    title: "Vias de até 20m com Asfalto CBUQ",
    caption:
      "Pavimentação de alta resistência projetada especialmente para o tráfego pesado de carretas, bitrens e rodotrens.",
  },
  {
    id: "lotes-comerciais",
    src: "/claudino/gallery_lotes_comerciais.jpg",
    alt: "Lotes comerciais e industriais de 1.000 m² a 2.500 m² prontos para construir",
    category: "infra",
    categoryLabel: "Infraestrutura & Vias",
    title: "Lotes de 1.000 m² a 2.500 m² Prontos",
    caption:
      "Terrenos planos com redes de água, energia, iluminação pública e drenagem pluvial totalmente concluídas.",
  },
  {
    id: "polo-empresarial",
    src: "/claudino/gallery_polo_empresarial.jpg",
    alt: "Polo empresarial consolidado com grandes indústrias e empresas instaladas",
    category: "aereo",
    categoryLabel: "Vista Aérea & Masterplan",
    title: "Polo Empresarial em Expansão",
    caption:
      "Ambiente de negócios favorável com empresas de grande porte já instaladas e alto potencial de valorização.",
  },
  {
    id: "panorama-geral",
    src: "/claudino/gallery_panorama_geral.jpg",
    alt: "Vista aérea panorâmica abrangente do município de Sorriso e loteamento Claudino",
    category: "logistica",
    categoryLabel: "Logística & BR-163",
    title: "Localização Privilegiada no Centro de Sorriso",
    caption:
      "Conexão rápida com o perímetro urbano e as zonas industriais consolidadas da Capital do Agronegócio.",
  },
  {
    id: "conexoes-viarias",
    src: "/claudino/gallery_conexoes_viarias.jpg",
    alt: "Conexões viárias estruturadas para o tráfego de cargas",
    category: "infra",
    categoryLabel: "Infraestrutura & Vias",
    title: "Conexões Viárias & Mobilidade",
    caption:
      "Trevo de acesso planejado e ruas sinalizadas que garantem segurança e agilidade no transporte de insumos.",
  },
];

const categoryFilters = [
  { key: "todos", label: "Todas as Fotos" },
  { key: "aereo", label: "Vista Aérea & Masterplan" },
  { key: "infra", label: "Infraestrutura & Vias" },
  { key: "logistica", label: "Logística & BR-163" },
] as const;

export function GalleryCarousel() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbnailRailRef = useRef<HTMLDivElement>(null);
  const lightboxThumbRailRef = useRef<HTMLDivElement>(null);

  // Filter items based on active tab
  const filteredItems =
    activeCategory === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const total = filteredItems.length;
  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const getSlide = (offset: number) => {
    return filteredItems[(currentIndex + offset + total) % total];
  };

  const prevItem = getSlide(-1);
  const nextItem = getSlide(1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, isLightboxOpen]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRailRef.current) {
      const activeThumb = thumbnailRailRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
    if (lightboxThumbRailRef.current) {
      const activeThumb = lightboxThumbRailRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  // Touch swipe handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div className="claudino-gallery-wrapper">
      {/* Category Filter Tabs */}
      <div className="claudino-gallery-filter-bar">
        {categoryFilters.map((cat) => {
          const count =
            cat.key === "todos"
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === cat.key).length;
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => handleCategoryChange(cat.key)}
              className={`claudino-gallery-filter-btn ${isActive ? "active" : ""}`}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
              <span className="claudino-gallery-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Main Viewport */}
      <div
        className="claudino-gallery-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Preview Slide (Desktop) */}
        {total > 1 && prevItem && (
          <div
            className="claudino-gallery-side-slide left"
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
            <div className="claudino-gallery-side-overlay" />
          </div>
        )}

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Foto anterior"
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
              sizes="(max-width: 1024px) 95vw, 920px"
              priority={currentIndex === 0}
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />

            {/* Gradient Overlay for Caption readability */}
            <div className="claudino-gallery-slide-gradient" />

            {/* Top Badges: Category & Counter */}
            <div className="claudino-gallery-top-meta">
              <span className="claudino-gallery-cat-pill">
                <Sparkles className="w-3.5 h-3.5" />
                {currentItem.categoryLabel}
              </span>
              <span className="claudino-gallery-counter-pill">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Bottom Caption Bar */}
            <div className="claudino-gallery-slide-info">
              <h3 className="claudino-gallery-slide-title">{currentItem.title}</h3>
              <p className="claudino-gallery-slide-desc">{currentItem.caption}</p>
            </div>

            {/* Zoom / Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Ampliar foto em alta resolução"
              className="claudino-gallery-zoom-btn"
              title="Clique para ver em tela cheia (Alta Resolução)"
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
          className="claudino-gallery-nav-btn next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Right Preview Slide (Desktop) */}
        {total > 1 && nextItem && (
          <div
            className="claudino-gallery-side-slide right"
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
            <div className="claudino-gallery-side-overlay" />
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="claudino-gallery-thumbs-container">
        <div className="claudino-gallery-thumbs-rail" ref={thumbnailRailRef}>
          {filteredItems.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para foto ${idx + 1}: ${item.title}`}
                className={`claudino-gallery-thumb-card ${isActive ? "active" : ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={110}
                  height={72}
                  className="object-cover w-full h-full"
                />
                <span className="claudino-gallery-thumb-overlay" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          className="claudino-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos em alta resolução"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Fechar visualização"
            className="claudino-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Lightbox Main Content */}
          <div
            className="claudino-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev/Next in Lightbox */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Foto anterior"
              className="claudino-lightbox-nav-btn prev"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative w-full h-[65vh] sm:h-[72vh]">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próxima foto"
              className="claudino-lightbox-nav-btn next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Lightbox Footer Bar */}
            <div className="claudino-lightbox-footer">
              <div className="claudino-lightbox-caption-group">
                <div className="flex items-center gap-2 mb-1 justify-center">
                  <span className="claudino-lightbox-badge">{currentItem.categoryLabel}</span>
                  <span className="text-white/60 text-xs">
                    Foto {currentIndex + 1} de {total}
                  </span>
                </div>
                <h4 className="claudino-lightbox-title">{currentItem.title}</h4>
                <p className="claudino-lightbox-caption">{currentItem.caption}</p>
              </div>

              {/* Lightbox Thumbnail Rail */}
              <div
                className="claudino-lightbox-thumbs-rail"
                ref={lightboxThumbRailRef}
              >
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Foto ${idx + 1}`}
                    className={`claudino-lightbox-thumb ${idx === currentIndex ? "active" : ""}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={80}
                      height={50}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
