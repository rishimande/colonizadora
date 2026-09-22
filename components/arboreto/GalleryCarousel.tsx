"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Layers,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "todos" | "lazer" | "natureza" | "esportes" | "aereo";
  categoryLabel: string;
  title: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  // Vista Aérea & Masterplan
  {
    id: "aerea-sunset",
    src: "/arboreto/gallery_aerea_sunset.jpg",
    alt: "Vista aérea panorâmica do Arboreto Eco Ville ao pôr do sol",
    category: "aereo",
    categoryLabel: "Aéreo & Masterplan",
    title: "Vista Panorâmica ao Pôr do Sol",
    caption:
      "Vista aérea contemplando o lago central de 10.000m², bosque nativo e horizonte de Sorriso-MT.",
  },
  {
    id: "aerea-masterplan",
    src: "/arboreto/gallery_aerea_masterplan.jpg",
    alt: "Masterplan aéreo do Arboreto Eco Ville com lotes e infraestrutura",
    category: "aereo",
    categoryLabel: "Aéreo & Masterplan",
    title: "Masterplan & Urbanismo de Alto Padrão",
    caption:
      "369 mil m² de área total com traçado urbanístico moderno, ruas largas e cabeamento subterrâneo.",
  },
  {
    id: "aerea-parque",
    src: "/arboreto/gallery_aerea_parque.jpg",
    alt: "Vista aérea do complexo central do parque e lago do Arboreto",
    category: "aereo",
    categoryLabel: "Aéreo & Masterplan",
    title: "Parque Central & Lago Contemplativo",
    caption:
      "184 mil m² reservados para áreas de lazer, lago de 10.000 m² e áreas verdes integradas.",
  },
  {
    id: "aerea-bosque",
    src: "/arboreto/gallery_aerea_bosque.jpg",
    alt: "Vista aérea da reserva nativa e condomínio Arboreto Eco Ville",
    category: "aereo",
    categoryLabel: "Aéreo & Masterplan",
    title: "Reserva de Mata Nativa Preservada",
    caption:
      "Bosque privativo preservado com vegetação nativa permanente para o bem-estar dos moradores.",
  },
  {
    id: "portaria",
    src: "/arboreto/gallery_portaria.jpg",
    alt: "Portaria monumental e pórtico de entrada do Arboreto Eco Ville",
    category: "aereo",
    categoryLabel: "Aéreo & Masterplan",
    title: "Portaria Monumental & Segurança 24h",
    caption:
      "Guarita com 3 pistas de entrada, reconhecimento facial, patrulhamento tático 24 horas e acesso seguro.",
  },

  // Lazer & Clube
  {
    id: "restaurante-sunset",
    src: "/arboreto/gallery_restaurante_sunset.jpg",
    alt: "Restaurante e deck gourmet com vista para o lago ao pôr do sol",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Restaurante & Deck ao Entardecer",
    caption:
      "Deck gastronômico exclusivo para condôminos com vista espetacular para o espelho d'água.",
  },
  {
    id: "gourmet-garden",
    src: "/arboreto/gallery_gourmet_garden.jpg",
    alt: "Espaços gourmet e jardins iluminados no Arboreto Eco Ville",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Espaços Gourmet & Paisagismo JA8",
    caption:
      "2 espaços gourmet independentes de frente para o lago com iluminação cênica noturna.",
  },
  {
    id: "clubhouse-exterior",
    src: "/arboreto/gallery_clubhouse_exterior.jpg",
    alt: "Fachada contemporânea do Clubhouse e Salão de Festas",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Clubhouse de Arquitetura Contemporânea",
    caption:
      "Projetos assinados pelo renomado escritório Truvian Arquitetura e paisagismo por JA8 Arquitetura Viva.",
  },
  {
    id: "salao-festas",
    src: "/arboreto/gallery_salao_festas.jpg",
    alt: "Salão de festas decorado e adega climatizada do Arboreto",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Salão de Festas com Adega de Vinhos",
    caption:
      "Salão nobre para até 150 pessoas com adega de vinhos integrada, mobiliário premium e climatização total.",
  },
  {
    id: "salao-festas-dia",
    src: "/arboreto/gallery_salao_festas_dia.jpg",
    alt: "Ambiente interno do restaurante com mesas em madeira maciça",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Restaurante & Convivência",
    caption:
      "Ambientes amplos e acolhedores com iluminação natural, climatização e integração às áreas externas.",
  },
  {
    id: "espaco-gourmet",
    src: "/arboreto/gallery_espaco_gourmet.jpg",
    alt: "Espaço gourmet privativo com churrasqueira e mesa de jantar",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Espaço Gourmet Privativo",
    caption:
      "Equipado com churrasqueira gourmet, bancada para preparos e mesa ampla para encontros especiais.",
  },
  {
    id: "espaco-gourmet-ilha",
    src: "/arboreto/gallery_espaco_gourmet_ilha.jpg",
    alt: "Ilha gourmet com acabamento em mármore e banquetas",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Bancada Gourmet em Ilha",
    caption:
      "Bancada em mármore nobre com cooktop, adega e banquetas integradas ao lounge de refeições.",
  },
  {
    id: "jogos",
    src: "/arboreto/gallery_jogos.jpg",
    alt: "Sala de jogos completa com sinuca, pebolim e air hockey",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Sala de Jogos Completa",
    caption:
      "Mesa oficial de sinuca, pebolim, air hockey e lounge de convivência em ambiente climatizado.",
  },
  {
    id: "jogos-sinuca",
    src: "/arboreto/gallery_jogos_sinuca.jpg",
    alt: "Mesa de bilhar profissional com painel de arte personalizada",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Lounge de Bilhar Exclusivo",
    caption:
      "Design refinado com painéis em madeira ripada, iluminação pendente e lounge estofado.",
  },
  {
    id: "academia",
    src: "/arboreto/gallery_academia.jpg",
    alt: "Academia moderna climatizada com esteiras e vista para a piscina",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Academia Climatizada com Vista Panorâmica",
    caption:
      "Equipamentos modernos com vista direta para a piscina semiolímpica, lago e natureza exuberante.",
  },
  {
    id: "playground",
    src: "/arboreto/gallery_playground.jpg",
    alt: "Playground infantil seguro em gramado cercado",
    category: "lazer",
    categoryLabel: "Lazer & Clube",
    title: "Playground Infantil Integrado",
    caption:
      "Brinquedos modernos e piso seguro ao ar livre integrados à brinquedoteca e área verde.",
  },

  // Natureza, Piscina & Lago
  {
    id: "espelho-dagua",
    src: "/arboreto/gallery_espelho_dagua.jpg",
    alt: "Espelho d'água com lounge submerso e vista para a mata nativa",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Espelho d'Água & Lounge Contemplativo",
    caption:
      "Lounge com espreguiçadeiras e espelho d'água de borda infinita de frente para a reserva nativa.",
  },
  {
    id: "espelho-dagua-dia",
    src: "/arboreto/gallery_espelho_dagua_dia.jpg",
    alt: "Lounge com fogueira de chão rebaixada sobre o espelho d'água",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Lounge Rebaixado com Fire Pit",
    caption:
      "Área de convivência rebaixada com lareira ecológica cercada pela água e com vista panorâmica do lago.",
  },
  {
    id: "piscina-lago",
    src: "/arboreto/gallery_piscina_lago.jpg",
    alt: "Piscina semiolímpica coberta e aquecida com vista para o bosque",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Piscina Semiolímpica Aquecida",
    caption:
      "Piscina aquecida semiaberta com raia de natação, fechamento em vidro temperado e vista para a mata nativa.",
  },
  {
    id: "piscina-deck",
    src: "/arboreto/gallery_piscina_deck.jpg",
    alt: "Deck solário da piscina aquecida do Arboreto",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Solário & Deck da Piscina",
    caption:
      "Conforto térmico o ano todo em um ambiente projetado para saúde, natação e relaxamento.",
  },
  {
    id: "piscina-academia",
    src: "/arboreto/gallery_piscina_academia.jpg",
    alt: "Piscina com vista para a academia envidraçada",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Complexo Aquático & Fitness Integrado",
    caption:
      "Integração perfeita entre piscina aquecida, academia com equipamentos de ponta e vestiários.",
  },
  {
    id: "pier-lago",
    src: "/arboreto/gallery_pier_lago.jpg",
    alt: "Píer de madeira e quiosque sobre o lago de 10.000m²",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Píer de Contemplação no Lago",
    caption:
      "2 píers flutuantes sobre o lago de 10.000 m² para momentos únicos de tranquilidade junto à água.",
  },
  {
    id: "lago-noturno",
    src: "/arboreto/gallery_lago_noturno.jpg",
    alt: "Vista noturna do lago com píer iluminado e reflexos na água",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Vista Noturna Deslumbrante do Lago",
    caption:
      "Iluminação cênica que realça a beleza do lago e dos quiosques nas noites de Sorriso.",
  },
  {
    id: "bosque-pista",
    src: "/arboreto/gallery_bosque_pista.jpg",
    alt: "Pista de caminhada em meio à mata nativa",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Pista de Caminhada no Bosque",
    caption:
      "3 pistas arborizadas para caminhada e corrida imersas na vegetação nativa preservada.",
  },
  {
    id: "bosque-crepusculo",
    src: "/arboreto/gallery_bosque_crepusculo.jpg",
    alt: "Trilha iluminada no bosque com vista para o lago ao anoitecer",
    category: "natureza",
    categoryLabel: "Natureza & Lago",
    title: "Alameda Iluminada ao Entardecer",
    caption:
      "Trilhas com balizadores em LED que garantem segurança e atmosfera agradável para caminhadas.",
  },

  // Esportes
  {
    id: "esportes-quadras",
    src: "/arboreto/gallery_esportes_quadras.jpg",
    alt: "Complexo esportivo com quadras de tênis de saibro, areia e poliesportiva",
    category: "esportes",
    categoryLabel: "Esportes",
    title: "Complexo Esportivo Completo",
    caption:
      "4 quadras de tênis de saibro oficiais, 2 quadras de areia (beach tennis e futevôlei) e 1 quadra poliesportiva.",
  },
];

const categoryFilters = [
  { key: "todos", label: "Todas as Fotos" },
  { key: "lazer", label: "Lazer & Clube" },
  { key: "natureza", label: "Natureza & Lago" },
  { key: "esportes", label: "Esportes" },
  { key: "aereo", label: "Aéreo & Masterplan" },
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

  // Reset or adjust index when category changes
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
    <div className="arboreto-gallery-wrapper">
      {/* Category Filter Tabs */}
      <div className="arboreto-gallery-filter-bar">
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
              className={`arboreto-gallery-filter-btn ${isActive ? "active" : ""}`}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
              <span className="arboreto-gallery-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Main Viewport */}
      <div
        className="arboreto-gallery-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Preview Slide (Desktop) */}
        {total > 1 && prevItem && (
          <div
            className="arboreto-gallery-side-slide left"
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
            <div className="arboreto-gallery-side-overlay" />
          </div>
        )}

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Foto anterior"
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
              sizes="(max-width: 1024px) 95vw, 920px"
              priority={currentIndex === 0}
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />

            {/* Gradient Overlay for Caption readability */}
            <div className="arboreto-gallery-slide-gradient" />

            {/* Top Badges: Category & Counter */}
            <div className="arboreto-gallery-top-meta">
              <span className="arboreto-gallery-cat-pill">
                <Sparkles className="w-3.5 h-3.5" />
                {currentItem.categoryLabel}
              </span>
              <span className="arboreto-gallery-counter-pill">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Bottom Caption Bar */}
            <div className="arboreto-gallery-slide-info">
              <h3 className="arboreto-gallery-slide-title">{currentItem.title}</h3>
              <p className="arboreto-gallery-slide-desc">{currentItem.caption}</p>
            </div>

            {/* Zoom / Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Ampliar foto em alta resolução"
              className="arboreto-gallery-zoom-btn"
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
          className="arboreto-gallery-nav-btn next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Right Preview Slide (Desktop) */}
        {total > 1 && nextItem && (
          <div
            className="arboreto-gallery-side-slide right"
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
            <div className="arboreto-gallery-side-overlay" />
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="arboreto-gallery-thumbs-container">
        <div className="arboreto-gallery-thumbs-rail" ref={thumbnailRailRef}>
          {filteredItems.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para foto ${idx + 1}: ${item.title}`}
                className={`arboreto-gallery-thumb-card ${isActive ? "active" : ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={110}
                  height={72}
                  className="object-cover w-full h-full"
                />
                <span className="arboreto-gallery-thumb-overlay" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          className="arboreto-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos em alta resolução"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Fechar visualização"
            className="arboreto-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Lightbox Main Content */}
          <div
            className="arboreto-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev/Next in Lightbox */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Foto anterior"
              className="arboreto-lightbox-nav-btn prev"
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
              className="arboreto-lightbox-nav-btn next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Lightbox Footer Bar */}
            <div className="arboreto-lightbox-footer">
              <div className="arboreto-lightbox-caption-group">
                <div className="flex items-center gap-2 mb-1">
                  <span className="arboreto-lightbox-badge">{currentItem.categoryLabel}</span>
                  <span className="text-white/60 text-xs">
                    Foto {currentIndex + 1} de {total}
                  </span>
                </div>
                <h4 className="arboreto-lightbox-title">{currentItem.title}</h4>
                <p className="arboreto-lightbox-caption">{currentItem.caption}</p>
              </div>

              {/* Lightbox Thumbnail Rail */}
              <div
                className="arboreto-lightbox-thumbs-rail"
                ref={lightboxThumbRailRef}
              >
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Foto ${idx + 1}`}
                    className={`arboreto-lightbox-thumb ${idx === currentIndex ? "active" : ""}`}
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
