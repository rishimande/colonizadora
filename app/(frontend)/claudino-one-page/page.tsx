import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import "./claudino.css";

import { LeadForm } from "@/components/claudino/LeadForm";
import { GalleryCarousel } from "@/components/claudino/GalleryCarousel";
import { VideoModal } from "@/components/claudino/VideoModal";
import { LotsMapModal } from "@/components/claudino/LotsMapModal";

export const metadata: Metadata = {
  title: "Claudino Francio | Colonizadora Feliz — Sorriso-MT",
  description:
    "Loteamento Comercial e Industrial em Sorriso-MT. Lotes de 1.000 m² a 2.500 m² prontos para construir, com a melhor logística de Sorriso na BR-163 e MT-242.",
  openGraph: {
    title: "Claudino Francio | Colonizadora Feliz",
    description:
      "Loteamento Comercial e Industrial com localização estratégica em Sorriso-MT. Lotes de 1.000 m² a 2.500 m² prontos para construir.",
    images: [
      {
        url: "/claudino/hero_bg_clean.jpg",
        width: 1920,
        height: 1080,
        alt: "Claudino Francio — Loteamento Comercial e Industrial em Sorriso-MT",
      },
    ],
  },
};

export default function ClaudinoPage() {
  const whatsappUrl =
    "https://wa.me/556635456500?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Claudino%20Francio.";

  return (
    <main className="claudino-page">
      {/* 1. TOP PRIVACY BANNER */}
      <div className="claudino-topbar">
        <span>
          CONFIRA NOSSA{" "}
          <Link href="#privacidade" className="font-bold underline hover:opacity-80">
            POLÍTICA DE PRIVACIDADE AQUI
          </Link>
        </span>
      </div>

      {/* 2. HERO SECTION */}
      <section className="claudino-hero" id="topo">
        <div className="claudino-hero-overlay" />
        <div className="claudino-container">
          <div className="claudino-hero-content">
            <div className="claudino-hero-brand">
              <Image
                src="/claudino/logo_claudino.png"
                alt="Logo Claudino Francio - Loteamento Comercial e Industrial"
                width={560}
                height={165}
                priority
                className="claudino-hero-logo"
              />

              <div className="claudino-hero-headlines">
                <h1 className="claudino-hero-title">
                  Lotes de 1.000 m² a 2.500 m²
                </h1>
                <p className="claudino-hero-subtitle">
                  Prontos para construir
                </p>
              </div>

              <div className="claudino-hero-badge">
                <MapPin className="w-4 h-4 text-[#231f1d]" />
                <span>A melhor localização de Sorriso-MT</span>
              </div>
            </div>

            <LeadForm idPrefix="hero" sourceSection="Hero Topo" buttonText="AGENDE SUA VISITA" />
          </div>
        </div>
      </section>

      {/* 3. VIDEO SHOWCASE SECTION */}
      <section className="claudino-video-section" id="video">
        <div className="claudino-container">
          <VideoModal posterSrc="/claudino/video_thumb.jpg" />
        </div>
      </section>

      {/* 4. CONCEPT & LOGISTICS SECTION */}
      <section className="claudino-concept-section" id="conceito">
        <div className="claudino-concept-overlay" />
        <div className="claudino-concept-header">
          <h2 className="claudino-concept-title">
            SUA EMPRESA COM A MELHOR
            <br />
            LOGÍSTICA DE SORRISO
          </h2>
        </div>

        <div className="claudino-concept-footer-bar">
          <p className="claudino-concept-footer-text">
            O Claudino Francio foi planejado para oferecer estrutura, segurança e funcionalidade para
            negócios que precisam operar com eficiência no dia a dia.
          </p>
        </div>
      </section>

      {/* 5. INFRASTRUCTURE & GALLERY CAROUSEL SECTION */}
      <section className="claudino-infra-section" id="infraestrutura">
        <div className="claudino-container">
          <h2 className="claudino-section-title">
            INFRAESTRUTURA COMPLETA
            <br />
            PARA O SEU NEGÓCIO
          </h2>
          <div className="claudino-title-line" aria-hidden="true" />

          {/* 6 Feature Badges */}
          <div className="claudino-pills-grid">
            <div className="claudino-pill-card">
              <span>Asfalto em CBUQ com maior durabilidade e resistência</span>
            </div>

            <div className="claudino-pill-card">
              <span>Vias de até 20 metros de largura</span>
            </div>

            <div className="claudino-pill-card">
              <span>Estrutura preparada para tráfego de carga</span>
            </div>

            <div className="claudino-pill-card">
              <span>Ruas sinalizadas para mais segurança</span>
            </div>

            <div className="claudino-pill-card">
              <span>Lotes amplos de médio e grande porte</span>
            </div>

            <div className="claudino-pill-card">
              <span>Redes de iluminação, água e esgoto prontas</span>
            </div>
          </div>

          {/* Sliding Gallery Carousel */}
          <GalleryCarousel />
        </div>
      </section>

      {/* 6. INTERACTIVE MAP RIBBON */}
      <LotsMapModal />

      {/* 7. FICHA TÉCNICA SECTION */}
      <section className="claudino-specs-section" id="ficha-tecnica">
        <div className="claudino-specs-overlay" />
        <div className="claudino-container">
          <div className="claudino-specs-header">
            <h2 className="claudino-specs-title">FICHA TÉCNICA</h2>
            <div className="claudino-specs-line" aria-hidden="true" />
          </div>

          <div className="claudino-specs-grid">
            {/* Col 1: Empreendimento */}
            <div>
              <h3 className="claudino-spec-col-title">EMPREENDIMENTO</h3>
              <ul className="claudino-spec-list">
                <li>Loteamento empresarial planejado</li>
                <li>Lotes de 1.000 m² a 2.500 m²</li>
                <li>Possibilidade de unificação de lotes</li>
                <li>Infraestrutura completa</li>
                <li>Ruas amplas para veículos leves e pesados</li>
                <li>Excelente potencial de valorização</li>
              </ul>
            </div>

            {/* Col 2: Logística e Segurança */}
            <div>
              <h3 className="claudino-spec-col-title">LOGÍSTICA E SEGURANÇA</h3>
              <ul className="claudino-spec-list">
                <li>Localização estratégica em Sorriso</li>
                <li>Fácil acesso às principais rodovias da região</li>
                <li>Ideal para indústrias, centros de distribuição e empresas</li>
                <li>Maior eficiência no transporte de cargas</li>
                <li>Mobilidade facilitada para colaboradores e fornecedores</li>
                <li>Um endereço pensado para o crescimento dos negócios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCATION SECTION */}
      <section className="claudino-location-section" id="localizacao">
        <div className="claudino-container">
          <h2 className="claudino-section-title">AQUI VOCÊ ESTÁ NO CENTRO DE TUDO</h2>
          <div className="claudino-title-line" aria-hidden="true" />

          <p className="claudino-location-intro">
            O Claudino Francio reúne infraestrutura completa, localização privilegiada e excelente
            logística para empresas que buscam crescer com eficiência. Um loteamento empresarial planejado
            para impulsionar negócios, fortalecer investimentos e acompanhar o desenvolvimento de Sorriso.
          </p>

          <div className="claudino-map-card">
            <div className="relative w-full h-[360px] sm:h-[520px] md:h-[680px]">
              <Image
                src="/claudino/location_map.jpg"
                alt="Mapa e Localização Estratégica do Claudino Francio em Sorriso-MT"
                fill
                sizes="(max-width: 1280px) 95vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CONVERSION SECTION */}
      <section className="claudino-bottom-section" id="contato">
        <div className="claudino-bottom-overlay" />
        <div className="claudino-container">
          <div className="claudino-bottom-content">
            <div>
              <h2 className="claudino-bottom-cta-heading">
                QUER SABER
                <br />
                MAIS SOBRE ESSE
                <br />
                EMPREENDIMENTO?
              </h2>

              <p className="claudino-bottom-cta-sub">
                UM ENDEREÇO À ALTURA DO SEU NEGÓCIO
              </p>

              <div className="claudino-bottom-badge">
                LOCALIZAÇÃO PREMIUM | INFRAESTRUTURA COMPLETA
              </div>
            </div>

            <LeadForm idPrefix="footer" sourceSection="Rodapé Final" buttonText="CADASTRE-SE AQUI" />
          </div>
        </div>
      </section>

      {/* 10. FOOTER COPYRIGHT */}
      <footer className="claudino-footer" id="privacidade">
        <p>
          Colonizadora Feliz, há mais de 40 anos abrindo caminhos e desbravando destinos © todos os
          direitos reservados.
        </p>
      </footer>

      {/* 11. FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a equipe no WhatsApp sobre o Claudino Francio"
        className="claudino-floating-whatsapp"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </a>
    </main>
  );
}
