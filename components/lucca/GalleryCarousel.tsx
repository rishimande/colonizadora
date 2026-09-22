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
  category: "todos" | "decorado" | "lazer" | "fitness" | "festas" | "fachada";
  categoryLabel: string;
  title: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  // Apartamento Decorado
  {
    id: "living-jantar",
    src: "/lucca/gallery_living_jantar.jpg",
    alt: "Living e sala de jantar integrados do Lucca Residencial",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Living & Jantar Integrados",
    caption:
      "Planta inteligente de 97,19 m² com living ampliado, iluminação linear em LED e acabamento premium.",
  },
  {
    id: "sala-tv",
    src: "/lucca/gallery_sala_tv.jpg",
    alt: "Sala de TV e home theater decorada do Lucca Residencial",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Sala de TV & Estar Aconchegante",
    caption:
      "Ambiente de estar com painel em marcenaria nobre, nichos iluminados e integração com a sala de jantar.",
  },
  {
    id: "varanda-gourmet",
    src: "/lucca/gallery_varanda_gourmet.jpg",
    alt: "Varanda gourmet privativa com churrasqueira do Lucca Residencial",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Varanda Gourmet Privativa",
    caption:
      "Varanda gourmet ampla com churrasqueira a carvão, bancada de apoio e vista aberta para a Villa Romana.",
  },
  {
    id: "cozinha",
    src: "/lucca/gallery_cozinha.jpg",
    alt: "Cozinha planejada com armários e cristaleira iluminada",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Cozinha Planejada Moderna",
    caption:
      "Cozinha funcional com bancada em granito, armários sob medida e cristaleira com iluminação de destaque.",
  },
  {
    id: "suite-master",
    src: "/lucca/gallery_suite_master.jpg",
    alt: "Suíte máster decorada com cabeceira estofada",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Suíte Máster Casal",
    caption:
      "Suíte máster ampla com cabeceira estofada, iluminação pendente e climatização para o máximo conforto.",
  },
  {
    id: "suite-detalhe",
    src: "/lucca/gallery_suite_detalhe.jpg",
    alt: "Detalhes de acabamento e iluminação da suíte máster",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Detalhes de Acabamento da Suíte",
    caption:
      "Ambiente sofisticado com painéis amadeirados, luz indireta e marcenaria de alto padrão.",
  },
  {
    id: "banheiro-suite",
    src: "/lucca/gallery_banheiro_suite.jpg",
    alt: "Banheiro da suíte com bancada em granito e espelho",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Banheiro da Suíte",
    caption:
      "Bancada em granito nobre, armário planejado sob a pia, espelho bisotado e box em vidro temperado.",
  },
  {
    id: "quarto-casal",
    src: "/lucca/gallery_quarto_casal.jpg",
    alt: "Segundo dormitório casal decorado do Lucca",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Segundo Dormitório Aconchegante",
    caption:
      "Dormitório espaçoso com painel em madeira, bancada de apoio, persiana integrada e iluminação em sanca.",
  },
  {
    id: "quarto-solteiro",
    src: "/lucca/gallery_quarto_solteiro.jpg",
    alt: "Dormitório com bancada de estudos e armários planejados",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Dormitório / Home Office",
    caption:
      "Quarto com bancada de estudos planejada, armários embutidos de teto a chão e excelente aproveitamento de espaço.",
  },
  {
    id: "quarto-planejado",
    src: "/lucca/gallery_quarto_planejado.jpg",
    alt: "Dormitório planejado com armários e penteadeira",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Marcenaria Inteligente",
    caption:
      "Armários planejados com nichos decorativos, penteadeira integrada e projeto luminotécnico moderno.",
  },
  {
    id: "banheiro-social",
    src: "/lucca/gallery_banheiro_social.jpg",
    alt: "Banheiro social com espelho redondo e bancada em granito",
    category: "decorado",
    categoryLabel: "Apartamento Decorado",
    title: "Banheiro Social / Lavabo",
    caption:
      "Acabamento premium com espelho redondo decorativo, cuba de semiencaixe e revestimento sofisticado.",
  },

  // Lazer & Piscina
  {
    id: "piscina-pergolado",
    src: "/lucca/gallery_piscina_pergolado.jpg",
    alt: "Complexo aquático com piscina adulto de 15m e pergolado",
    category: "lazer",
    categoryLabel: "Lazer & Piscina",
    title: "Piscina Adulto com Solário",
    caption:
      "Piscina com raia de 15 metros, área rasa para descanso, solário amplo e pergolado contemporâneo.",
  },
  {
    id: "piscina-palmeiras",
    src: "/lucca/gallery_piscina_palmeiras.jpg",
    alt: "Piscina com paisagismo tropical e palmeiras",
    category: "lazer",
    categoryLabel: "Lazer & Piscina",
    title: "Paisagismo Tropical & Relaxamento",
    caption:
      "Área verde com palmeiras e jardins integrados ao solário para momentos de descanso ao sol.",
  },
  {
    id: "piscina-panoramica",
    src: "/lucca/gallery_piscina_panoramica.jpg",
    alt: "Vista panorâmica da piscina e arquitetura do Lucca",
    category: "lazer",
    categoryLabel: "Lazer & Piscina",
    title: "Arquitetura & Piscina Integradas",
    caption:
      "Design contemporâneo unindo áreas de lazer ao ar livre aos ambientes de convivência cobertos.",
  },
  {
    id: "piscina-lazer",
    src: "/lucca/gallery_piscina_lazer.jpg",
    alt: "Pavilhão de lazer e espreguiçadeiras à beira da piscina",
    category: "lazer",
    categoryLabel: "Lazer & Piscina",
    title: "Pavilhão de Lazer & Solário",
    caption:
      "Espreguiçadeiras confortáveis e acesso direto aos vestiários e espaços gourmet externos.",
  },
  {
    id: "lounge-piscina",
    src: "/lucca/gallery_lounge_piscina.jpg",
    alt: "Lounge gourmet coberto com vista direta para a piscina",
    category: "lazer",
    categoryLabel: "Lazer & Piscina",
    title: "Lounge Gourmet da Piscina",
    caption:
      "Área de convivência com mesas, poltronas confortáveis, TV e integração total com o deck da piscina.",
  },
  {
    id: "lounge-deck",
    src: "/lucca/gallery_lounge_deck.jpg",
    alt: "Espaço sob pergolado integrado à piscina",
    category: "lazer",
    categoryLabel: "Lazer & Piscina",
    title: "Pergolado & Convivência Externa",
    caption:
      "Ambiente arejado sob pérgola metálica perfeito para receber amigos e relaxar à beira d'água.",
  },

  // Fitness & Jogos
  {
    id: "academia",
    src: "/lucca/gallery_academia.jpg",
    alt: "Academia completa climatizada com equipamentos modernos",
    category: "fitness",
    categoryLabel: "Fitness & Jogos",
    title: "Academia Completa Climatizada",
    caption:
      "Espaço fitness equipado com esteiras, bicicletas ergométricas, rack de musculação e piso emborrachado.",
  },
  {
    id: "jogos",
    src: "/lucca/gallery_jogos.jpg",
    alt: "Sala de jogos com sinuca, pebolim e mesa de cartas",
    category: "fitness",
    categoryLabel: "Fitness & Jogos",
    title: "Sala de Jogos Completa",
    caption:
      "Mesa oficial de sinuca, pebolim, mesa redonda para jogos de cartas e ambiente totalmente climatizado.",
  },

  // Espaços Gourmet & Festas
  {
    id: "salao-festas",
    src: "/lucca/gallery_salao_festas.jpg",
    alt: "Salão de festas amplo mobiliado com móveis Todeschini",
    category: "festas",
    categoryLabel: "Espaços Gourmet & Festas",
    title: "Salão de Festas Climatizado",
    caption:
      "Espaço nobre mobiliado com móveis Todeschini, bancada em granito, mesas elegantes e climatização.",
  },
  {
    id: "espaco-gourmet",
    src: "/lucca/gallery_espaco_gourmet.jpg",
    alt: "Bancada gourmet em granito e churrasqueira",
    category: "festas",
    categoryLabel: "Espaços Gourmet & Festas",
    title: "Bancada Gourmet & Churrasqueira",
    caption:
      "Churrasqueira embutida, prateleiras suspensas em serralheria e banquetas altas para encontros gastronômicos.",
  },
  {
    id: "gourmet-tv",
    src: "/lucca/gallery_gourmet_tv.jpg",
    alt: "Espaço gourmet integrado com TV e climatização",
    category: "festas",
    categoryLabel: "Espaços Gourmet & Festas",
    title: "Espaço Gourmet com TV & Conforto",
    caption:
      "Cozinha de apoio com geladeira inox, painel de TV, mesa de 10 lugares e decoração contemporânea.",
  },

  // Fachada & Portaria
  {
    id: "portaria",
    src: "/lucca/gallery_portaria.jpg",
    alt: "Portaria 24 horas e fachada contemporânea do Lucca Residencial",
    category: "fachada",
    categoryLabel: "Fachada & Portaria",
    title: "Portaria 24h & Fachada Contemporânea",
    caption:
      "Segurança 24 horas com controle de acesso rigoroso, portaria monitorada e endereço nobre na Villa Romana.",
  },
];

const categoryFilters = [
  { key: "todos", label: "Todas as Fotos" },
  { key: "decorado", label: "Apartamento Decorado" },
  { key: "lazer", label: "Lazer & Piscina" },
  { key: "festas", label: "Gourmet & Festas" },
  { key: "fitness", label: "Fitness & Jogos" },
  { key: "fachada", label: "Fachada & Portaria" },
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
    <div className="lucca-gallery-wrapper">
      {/* Category Filter Tabs */}
      <div className="lucca-gallery-filter-bar">
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
              className={`lucca-gallery-filter-btn ${isActive ? "active" : ""}`}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
              <span className="lucca-gallery-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Main Viewport */}
      <div
        className="lucca-gallery-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Preview Slide (Desktop) */}
        {total > 1 && prevItem && (
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
        )}

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
              sizes="(max-width: 1024px) 95vw, 920px"
              priority={currentIndex === 0}
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />

            {/* Gradient Overlay for Caption readability */}
            <div className="lucca-gallery-slide-gradient" />

            {/* Top Badges: Category & Counter */}
            <div className="lucca-gallery-top-meta">
              <span className="lucca-gallery-cat-pill">
                <Sparkles className="w-3.5 h-3.5" />
                {currentItem.categoryLabel}
              </span>
              <span className="lucca-gallery-counter-pill">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Bottom Caption Bar */}
            <div className="lucca-gallery-slide-info">
              <h3 className="lucca-gallery-slide-title">{currentItem.title}</h3>
              <p className="lucca-gallery-slide-desc">{currentItem.caption}</p>
            </div>

            {/* Zoom / Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Ampliar foto em alta resolução"
              className="lucca-gallery-zoom-btn"
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
          className="lucca-gallery-nav-btn next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Right Preview Slide (Desktop) */}
        {total > 1 && nextItem && (
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
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="lucca-gallery-thumbs-container">
        <div className="lucca-gallery-thumbs-rail" ref={thumbnailRailRef}>
          {filteredItems.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para foto ${idx + 1}: ${item.title}`}
                className={`lucca-gallery-thumb-card ${isActive ? "active" : ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={110}
                  height={72}
                  className="object-cover w-full h-full"
                />
                <span className="lucca-gallery-thumb-overlay" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
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

          {/* Lightbox Main Content */}
          <div
            className="lucca-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev/Next in Lightbox */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Foto anterior"
              className="lucca-lightbox-nav-btn prev"
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
              className="lucca-lightbox-nav-btn next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Lightbox Footer Bar */}
            <div className="lucca-lightbox-footer">
              <div className="lucca-lightbox-caption-group">
                <div className="flex items-center gap-2 mb-1 justify-center">
                  <span className="lucca-lightbox-badge">{currentItem.categoryLabel}</span>
                  <span className="text-white/60 text-xs">
                    Foto {currentIndex + 1} de {total}
                  </span>
                </div>
                <h4 className="lucca-lightbox-title">{currentItem.title}</h4>
                <p className="lucca-lightbox-caption">{currentItem.caption}</p>
              </div>

              {/* Lightbox Thumbnail Rail */}
              <div
                className="lucca-lightbox-thumbs-rail"
                ref={lightboxThumbRailRef}
              >
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Foto ${idx + 1}`}
                    className={`lucca-lightbox-thumb ${idx === currentIndex ? "active" : ""}`}
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
