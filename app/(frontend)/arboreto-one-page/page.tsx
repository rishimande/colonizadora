import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import "./arboreto.css";

import { LeadForm } from "@/components/arboreto/LeadForm";
import { GalleryCarousel } from "@/components/arboreto/GalleryCarousel";
import { VideoModal } from "@/components/arboreto/VideoModal";
import { LotsMapModal } from "@/components/arboreto/LotsMapModal";

export const metadata: Metadata = {
  title: "Arboreto Eco Ville | Colonizadora Feliz — Sorriso-MT",
  description:
    "Alguns lugares são feitos para morar, outros, para marcar presença. Conheça o Arboreto Eco Ville em Sorriso-MT. Terrenos exclusivos com lago de 10.000m², infraestrutura completa e natureza exuberante.",
  openGraph: {
    title: "Arboreto Eco Ville | Colonizadora Feliz",
    description:
      "Alguns lugares são feitos para morar, outros, para marcar presença. Terrenos exclusivos a partir de 525 m² em Sorriso-MT.",
    images: [
      {
        url: "/arboreto/hero_bg_clean.jpg",
        width: 1920,
        height: 1080,
        alt: "Arboreto Eco Ville — Sorriso-MT",
      },
    ],
  },
};

export default function ArboretoPage() {
  const whatsappUrl =
    "https://wa.me/556635456500?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Arboreto%20Eco%20Ville.";

  return (
    <main className="arboreto-page">
      {/* 1. TOP PRIVACY BANNER */}
      <div className="arboreto-topbar">
        <span>
          CONFIRA NOSSA{" "}
          <Link href="#privacidade" className="font-bold underline hover:opacity-80">
            POLÍTICA DE PRIVACIDADE AQUI
          </Link>
        </span>
      </div>

      {/* 2. HERO SECTION */}
      <section className="arboreto-hero" id="topo">
        <div className="arboreto-hero-overlay" />
        <div className="arboreto-container">
          <div className="arboreto-hero-content">
            <div className="arboreto-hero-brand">
              <Image
                src="/arboreto/logo_arboreto.png"
                alt="Logo Arboreto Eco Ville"
                width={492}
                height={395}
                priority
                className="arboreto-hero-logo"
              />
              <h1 className="arboreto-hero-tagline">
                ALGUNS <strong>LUGARES SÃO</strong>
                <br />
                FEITOS PARA MORAR, OUTROS,
                <br />
                PARA <strong>MARCAR PRESENÇA.</strong>
              </h1>
            </div>

            <LeadForm idPrefix="hero" sourceSection="Hero Topo" />
          </div>
        </div>
      </section>

      {/* 3. VIDEO SHOWCASE SECTION */}
      <section className="arboreto-video-section" id="video">
        <div className="arboreto-container">
          <VideoModal posterSrc="/arboreto/video_thumb.jpg" />
        </div>
      </section>

      {/* 4. CONCEPT & ARCHITECTURE SECTION */}
      <section className="arboreto-concept-section" id="conceito">
        <div className="arboreto-concept-overlay" />
        <div className="arboreto-container">
          <div className="arboreto-concept-header">
            <h2 className="arboreto-concept-title">
              LUXO, NATUREZA
              <br />
              E URBANIDADE EM
              <br />
              PERFEITA HARMONIA.
            </h2>

            <div className="arboreto-concept-divider" aria-hidden="true" />

            <p className="arboreto-concept-body">
              O Arboreto foi planejado para quem reconhece o valor de viver em um lugar raro. Aqui, o
              alto padrão aparece no equilíbrio entre privacidade, natureza e conveniência. Um lugar
              pronto para construir, pertencer e permanecer.
            </p>
          </div>

          <p className="arboreto-concept-footer">
            Projetos de paisagismo assinado pelo escritório JA8 Arquitetura Viva
          </p>
        </div>
      </section>

      {/* 5. NUMBERS / SOBRE O EMPREENDIMENTO */}
      <section className="arboreto-numbers-section" id="sobre">
        <div className="arboreto-container">
          <h2 className="arboreto-section-title">SOBRE O EMPREENDIMENTO</h2>
          <div className="arboreto-title-line" aria-hidden="true" />

          <div className="arboreto-numbers-grid">
            <div className="arboreto-number-stripe">
              <span>
                LOTES A PARTIR DE <strong>525 M²</strong>
              </span>
            </div>

            <div className="arboreto-number-stripe">
              <span>
                <strong>369 MIL M²</strong> DE ÁREA TOTAL
              </span>
            </div>

            <div className="arboreto-number-stripe">
              <span>
                <strong>184 MIL M²</strong> SÃO RESERVADOS PARA ÁREAS DE LAZER/COMUM E ÁREA VERDE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE LOTS MAP RIBBON */}
      <LotsMapModal />

      {/* 7. INFRASTRUCTURE & GALLERY SECTION */}
      <section className="arboreto-infra-section" id="infraestrutura">
        <div className="arboreto-container">
          <h2 className="arboreto-section-title">
            INFRAESTRUTURA COMPLETA
            <br />
            PARA O SEU BEM-ESTAR
          </h2>
          <div className="arboreto-title-line" aria-hidden="true" />

          <p className="arboreto-infra-intro">
            No Arboreto, a infraestrutura não aparece apenas como suporte. Ela faz parte da
            experiência de viver em um endereço exclusivo, onde segurança, conforto e natureza foram
            pensados para valorizar o dia a dia e o patrimônio de quem escolhe construir aqui. Áreas
            verdes, lago com 10.000m², circuito de caminhada e paisagismo se integram ao projeto para
            criar uma atmosfera mais reservada, sofisticada e conectada à natureza.
          </p>

          <GalleryCarousel />

          <p className="arboreto-gallery-credit">
            Projetos de arquitetura e interiores assinado pelo escritório Truvian Arquitetura
          </p>
        </div>
      </section>

      {/* 8. NATURE RIBBON */}
      <section className="arboreto-nature-ribbon" id="natureza">
        <div className="arboreto-container">
          <div className="arboreto-nature-content">
            <h2 className="arboreto-nature-title">
              VIVA CERCADO
              <br />
              PELA NATUREZA
            </h2>

            <div className="arboreto-nature-divider" aria-hidden="true" />

            <p className="arboreto-nature-body">
              Aqui, a natureza faz parte da rotina. Um bosque privativo, composto por uma reserva
              permanente de vegetação nativa, garante um cenário verde preservado para sempre. Somado ao
              lago contemplativo, às amplas áreas verdes e aos espaços ao ar livre, o empreendimento
              proporciona mais qualidade de vida, bem-estar e contato genuíno com a natureza.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FICHA TÉCNICA SECTION */}
      <section className="arboreto-specs-section" id="ficha-tecnica">
        <div className="arboreto-specs-overlay" />
        <div className="arboreto-container">
          <div className="arboreto-specs-header">
            <h2 className="arboreto-specs-title">FICHA TÉCNICA</h2>
            <div className="arboreto-specs-line" aria-hidden="true" />
          </div>

          <div className="arboreto-specs-grid">
            {/* Col 1: Empreendimento */}
            <div>
              <h3 className="arboreto-spec-col-title">EMPREENDIMENTO</h3>
              <ul className="arboreto-spec-list">
                <li>Excelente localização</li>
                <li>Ruas largas com fácil acesso</li>
                <li>Iluminação em LED</li>
                <li>Áreas comuns adaptadas para PNEs</li>
                <li>Wi-Fi com rede de fibra óptica</li>
                <li>Complexo administrativo e de serviços</li>
                <li>Estacionamento externo</li>
                <li>2 estacionamentos para as áreas comuns</li>
                <li>Cabeamento subterrâneo</li>
                <li>Estação de tratamento de esgotos exclusiva</li>
                <li>Irrigação automatizada para áreas de convivência e passeios</li>
                <li>Asfalto CBUQ de alto padrão</li>
                <li>Terrenos entregues com calçadas prontas e arborizadas</li>
              </ul>
            </div>

            {/* Col 2: Segurança */}
            <div>
              <h3 className="arboreto-spec-col-title">SEGURANÇA</h3>
              <ul className="arboreto-spec-list">
                <li>Guarita com 3 pistas de entrada</li>
                <li>Portaria 24 horas com porteiro</li>
                <li>Portaria de serviços independente</li>
                <li>Controle de entrada e saída rigoroso</li>
                <li>Controle de acesso por reconhecimento facial e digital</li>
                <li>Patrulhamento tático 24 horas</li>
                <li>143 câmeras de monitoramento HD</li>
                <li>Acesso administrativo para entregas</li>
              </ul>
            </div>

            {/* Col 3: Lazer 1 */}
            <div>
              <h3 className="arboreto-spec-col-title">LAZER EXCLUSIVO</h3>
              <ul className="arboreto-spec-list">
                <li>2 espaços gourmet de frente para o lago</li>
                <li>Salão de festas para até 150 pessoas</li>
                <li>Brinquedoteca climatizada</li>
                <li>Playground infantil integrado</li>
                <li>Sala de jogos completa</li>
                <li>Espaço jovem com videogame e computador</li>
                <li>Academia com equipamentos modernos</li>
                <li>Sala multiuso para atividades</li>
                <li>Piscina semiolímpica aquecida e semiaberta</li>
                <li>4 quadras de tênis oficiais</li>
              </ul>
            </div>

            {/* Col 4: Lazer 2 */}
            <div>
              <h3 className="arboreto-spec-col-title">BEM-ESTAR & ESPORTE</h3>
              <ul className="arboreto-spec-list">
                <li>1 quadra poliesportiva</li>
                <li>2 quadras de areia para beach tennis e futevôlei</li>
                <li>3 pistas de caminhada arborizadas</li>
                <li>Campo de futebol society</li>
                <li>Lago contemplativo de 1 hectare (10.000m²)</li>
                <li>2 Píers de contemplação sobre o lago</li>
                <li>Restaurante exclusivo para condôminos</li>
                <li>Mercado de autoatendimento 24 horas</li>
                <li>Lounge de convivência</li>
                <li>Praça de convivência integrada</li>
                <li>Bosque Privativo com mata nativa</li>
                <li>Vestiários completos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOCATION SECTION */}
      <section className="arboreto-location-section" id="localizacao">
        <div className="arboreto-container">
          <h2 className="arboreto-section-title">AQUI VOCÊ ESTÁ NO CENTRO DE TUDO</h2>
          <div className="arboreto-title-line" aria-hidden="true" />

          <p className="arboreto-location-intro">
            Uma região privilegiada de Sorriso, oferecendo fácil acesso aos principais pontos da
            cidade sem abrir mão da tranquilidade e do contato com a natureza. Um empreendimento
            planejado para proporcionar mais qualidade de vida, conveniência e valorização para o seu
            patrimônio.
          </p>

          <div className="arboreto-map-card">
            <div className="relative w-full h-[360px] sm:h-[500px] md:h-[640px]">
              <Image
                src="/arboreto/sorriso_map.jpg"
                alt="Mapa e Localização do Arboreto Eco Ville na Av. Blumenau em Sorriso-MT"
                fill
                sizes="(max-width: 1280px) 95vw, 1240px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CONVERSION SECTION */}
      <section className="arboreto-bottom-section" id="contato">
        <div className="arboreto-bottom-overlay" />
        <div className="arboreto-container">
          <div className="arboreto-bottom-content">
            <div>
              <h2 className="arboreto-bottom-cta-heading">
                QUER SABER
                <br />
                MAIS SOBRE ESSE
                <br />
                EMPREENDIMENTO?
              </h2>

              <p className="arboreto-bottom-cta-sub">
                UM ENDEREÇO À ALTURA DAS SUAS CONQUISTAS
              </p>

              <div className="arboreto-bottom-badge">
                LAZER EXCLUSIVO | INFRAESTRUTURA COMPLETA
              </div>
            </div>

            <LeadForm idPrefix="footer" sourceSection="Rodapé Final" />
          </div>
        </div>
      </section>

      {/* 12. FOOTER COPYRIGHT */}
      <footer className="arboreto-footer" id="privacidade">
        <p>
          Colonizadora Feliz, há mais de 40 anos abrindo caminhos e desbravando destinos © todos os
          direitos reservados.
        </p>
      </footer>

      {/* 13. FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a equipe no WhatsApp"
        className="arboreto-floating-whatsapp"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </a>
    </main>
  );
}
