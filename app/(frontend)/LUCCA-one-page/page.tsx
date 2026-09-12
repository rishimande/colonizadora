import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import "./lucca.css";

import { LeadForm } from "@/components/lucca/LeadForm";
import { GalleryCarousel } from "@/components/lucca/GalleryCarousel";
import { VideoModal } from "@/components/lucca/VideoModal";
import { LotsMapModal } from "@/components/lucca/LotsMapModal";

export const metadata: Metadata = {
  title: "Lucca Residencial | Colonizadora Feliz — Sorriso-MT",
  description:
    "Apartamentos amplos de 97,19 m² com 3 quartos (1 suíte), varanda gourmet e acabamento premium no Bairro Villa Romana em Sorriso-MT. Pronto para morar com lazer completo.",
  openGraph: {
    title: "Lucca Residencial | Colonizadora Feliz",
    description:
      "Apartamentos de 97,19 m² com 3 quartos sendo 1 suíte no nobre Bairro Villa Romana em Sorriso-MT. Pronto para morar.",
    images: [
      {
        url: "/lucca/hero_bg_clean.jpg",
        width: 1920,
        height: 1080,
        alt: "Lucca Residencial — Bairro Villa Romana em Sorriso-MT",
      },
    ],
  },
};

export default function LuccaPage() {
  const whatsappUrl =
    "https://wa.me/556635456500?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Lucca%20Residencial.";

  return (
    <main className="lucca-page">
      {/* 1. TOP PRIVACY BANNER */}
      <div className="lucca-topbar">
        <span>
          CONFIRA NOSSA{" "}
          <Link href="#privacidade" className="font-bold underline hover:opacity-80">
            POLÍTICA DE PRIVACIDADE AQUI
          </Link>
        </span>
      </div>

      {/* 2. HERO SECTION */}
      <section className="lucca-hero" id="topo">
        <div className="lucca-hero-overlay" />
        <div className="lucca-container">
          <div className="lucca-hero-content">
            <div className="lucca-hero-brand">
              <Image
                src="/lucca/logo_lucca.png"
                alt="Logo Lucca Residencial"
                width={331}
                height={101}
                priority
                className="lucca-hero-logo"
              />

              <div className="lucca-hero-headlines">
                <h1 className="lucca-hero-title">
                  Apartamentos de 97,19 m²
                </h1>
                <div className="lucca-hero-features">
                  <span>3 quartos sendo 1 suíte</span>
                  <div className="lucca-hero-features-divider" aria-hidden="true" />
                  <span>Acabamento Premium</span>
                </div>
              </div>

              <div className="lucca-hero-badge">
                <MapPin className="w-4 h-4 text-white" />
                <span>O COMEÇO DE UMA NOVA HISTÓRIA.</span>
              </div>
            </div>

            <LeadForm idPrefix="hero" sourceSection="Hero Topo" buttonText="AGENDE SUA VISITA" />
          </div>
        </div>
      </section>

      {/* 3. VIDEO SHOWCASE SECTION */}
      <section className="lucca-video-section" id="video">
        <div className="lucca-container">
          <VideoModal posterSrc="/lucca/video_thumb.jpg" />
        </div>
      </section>

      {/* 4. DIFERENCIAIS SECTION */}
      <section className="lucca-diferenciais-section" id="diferenciais">
        <div className="lucca-container">
          <div className="lucca-section-header-center">
            <h2 className="lucca-section-title">DIFERENCIAIS</h2>
            <div className="lucca-title-line" aria-hidden="true" />
          </div>

          <div className="lucca-diferenciais-grid">
            {/* Card 1: Planta Inteligente */}
            <div className="lucca-diferencial-card">
              <div className="lucca-diferencial-card-bg">
                <Image
                  src="/lucca/diferencial_1.jpg"
                  alt="Living decorado e planta inteligente do Lucca Residencial"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="lucca-diferencial-overlay" />
              <div className="lucca-diferencial-content">
                <h3 className="lucca-diferencial-heading">Planta Inteligente</h3>
                <div className="lucca-diferencial-divider" aria-hidden="true" />
                <ul className="lucca-diferencial-list">
                  <li>Apartamentos amplos de 97,19 m²</li>
                  <li>3 quartos sendo 1 suíte</li>
                  <li>Living ampliado *</li>
                </ul>
                <p className="lucca-diferencial-footnote">
                  *Ampliação ou mudança na planta sob análise
                </p>
              </div>
            </div>

            {/* Card 2: Funcionalidade */}
            <div className="lucca-diferencial-card">
              <div className="lucca-diferencial-card-bg">
                <Image
                  src="/lucca/diferencial_2.jpg"
                  alt="Varanda gourmet e funcionalidade do Lucca Residencial"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="lucca-diferencial-overlay" />
              <div className="lucca-diferencial-content">
                <h3 className="lucca-diferencial-heading">Funcionalidade</h3>
                <div className="lucca-diferencial-divider" aria-hidden="true" />
                <ul className="lucca-diferencial-list">
                  <li>Varanda gourmet com churrasqueira</li>
                  <li>2 vagas de garagem coberta para todas as unidades</li>
                  <li>Acesso separado para visitantes na área de lazer, sem passar por dentro do condomínio</li>
                  <li>Áreas de lazer já estão entregues e mobiliadas</li>
                  <li>Todos os móveis planejados das áreas comuns Todeschini</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Valorização */}
            <div className="lucca-diferencial-card">
              <div className="lucca-diferencial-card-bg">
                <Image
                  src="/lucca/diferencial_3.jpg"
                  alt="Bairro Villa Romana e valorização do Lucca Residencial"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="lucca-diferencial-overlay" />
              <div className="lucca-diferencial-content">
                <h3 className="lucca-diferencial-heading">Valorização</h3>
                <div className="lucca-diferencial-divider" aria-hidden="true" />
                <ul className="lucca-diferencial-list">
                  <li>
                    Bairro Villa Romana: região em constante valorização, ideal tanto para morar
                    quanto para investir com máxima segurança e liquidez.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARCERIA / CONCEPT SECTION */}
      <section className="lucca-parceria-section" id="conceito">
        <div className="lucca-parceria-overlay" />
        <div className="lucca-container">
          <div className="lucca-parceria-content">
            <h2 className="lucca-parceria-title">
              VIVA OS MELHORES
              <br />
              MOMENTOS EM UM
              <br />
              SÓ LUGAR.
            </h2>
            <p className="lucca-parceria-body">
              Desenvolvido em parceria entre a Conceito Incorporadora e a Colonizadora Feliz, o Lucca
              está localizado no bairro Vila Romana e reúne arquitetura contemporânea, conforto,
              qualidade de vida e valorização patrimonial. Um empreendimento planejado para quem
              deseja morar bem ou investir com segurança.
            </p>
          </div>
        </div>
      </section>

      {/* 6. INFRAESTRUTURA & GALLERY SECTION */}
      <section className="lucca-infra-section" id="infraestrutura">
        <div className="lucca-container">
          <div className="lucca-section-header-center">
            <h2 className="lucca-section-title dark">
              INFRAESTRUTURA COMPLETA
              <br />
              PARA O SEU BEM-ESTAR
            </h2>
            <div className="lucca-title-line dark" aria-hidden="true" />
          </div>

          <p className="lucca-infra-intro">
            No Lucca Residencial, cada detalhe foi planejado para oferecer mais conforto, praticidade
            e qualidade de vida. Com apartamentos de 97,19 m², 3 quartos, sendo 1 suíte, varanda com
            churrasqueira e acabamento premium, o empreendimento reúne funcionalidade e bem-estar em
            um só lugar. Além de uma completa área de lazer com piscina, academia, espaços gourmet,
            salão de jogos e playground, o Lucca está localizado a apenas 4 minutos do centro de Sorriso
            e a quatro quadras do Hospital Villa Romana, proporcionando mais conveniência e
            valorização para quem escolhe viver ou investir.
          </p>

          <GalleryCarousel />
        </div>
      </section>

      {/* 7. FICHA TÉCNICA SECTION */}
      <section className="lucca-specs-section" id="ficha-tecnica">
        <div className="lucca-specs-overlay" />
        <div className="lucca-container lucca-specs-content">
          <div className="lucca-section-header-center">
            <h2 className="lucca-section-title">FICHA TÉCNICA</h2>
            <div className="lucca-title-line" aria-hidden="true" />
          </div>

          <div className="lucca-specs-grid">
            {/* Col 1: Empreendimento */}
            <div>
              <h3 className="lucca-spec-col-title">EMPREENDIMENTO</h3>
              <ul className="lucca-spec-list">
                <li>Excelente localização no Villa Romana</li>
                <li>Todas as áreas comuns adaptadas para PNE’s</li>
                <li>2 vagas privativas por apartamento</li>
                <li>Elevador em todas as torres</li>
                <li>Todas as áreas comuns mobiliadas com móveis Todeschini</li>
                <li>Sala Coworking moderna</li>
                <li>Acesso separado para a área de lazer</li>
              </ul>
            </div>

            {/* Col 2: Segurança */}
            <div>
              <h3 className="lucca-spec-col-title">SEGURANÇA</h3>
              <ul className="lucca-spec-list">
                <li>Controle rigoroso de entrada e saída</li>
                <li>Guarita funcional 24 horas</li>
                <li>Controle de acesso por reconhecimento facial e digitais</li>
                <li>Muro alto com cerca elétrica perimetral</li>
                <li>Circuito fechado de câmeras HD</li>
              </ul>
            </div>

            {/* Col 3: Lazer */}
            <div>
              <h3 className="lucca-spec-col-title">LAZER</h3>
              <ul className="lucca-spec-list">
                <li>3 espaços gourmet exclusivos</li>
                <li>Sala de jogos completa</li>
                <li>Academia equipada</li>
                <li>Piscina infantil e adulta com raia de 15m</li>
                <li>Playground externo integrado</li>
                <li>2 bicicletários nas torres 3 e 4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCALIZAÇÃO SECTION */}
      <section className="lucca-location-section" id="localizacao">
        <div className="lucca-container">
          <div className="lucca-section-header-center">
            <h2 className="lucca-section-title dark">AQUI VOCÊ ESTÁ NO CENTRO DE TUDO</h2>
            <div className="lucca-title-line dark" aria-hidden="true" />
          </div>

          <p className="lucca-location-intro">
            No Villa Romana, um dos bairros mais consolidados de Sorriso, o Lucca coloca você perto do
            que realmente importa: apenas 2 quadras do Hospital Villa Romana, 1 quadra da Praça Villa
            Romana e a 2 minutos do Parque Ecológico Municipal. Tudo isso com mercados, padarias,
            academias, clínicas e diversos serviços no entorno.
          </p>

          <div className="lucca-map-card">
            <div className="relative w-full h-[360px] sm:h-[500px] md:h-[640px]">
              <Image
                src="/lucca/location_map.jpg"
                alt="Mapa de Localização do Lucca Residencial no Bairro Villa Romana em Sorriso-MT"
                fill
                sizes="(max-width: 1280px) 95vw, 1240px"
                className="object-cover"
              />
            </div>
          </div>

          <LotsMapModal />
        </div>
      </section>

      {/* 9. BOTTOM CONVERSION SECTION */}
      <section className="lucca-bottom-section" id="contato">
        <div className="lucca-bottom-overlay" />
        <div className="lucca-container">
          <div className="lucca-bottom-content">
            <div>
              <h2 className="lucca-bottom-cta-heading">
                QUER SABER
                <br />
                MAIS SOBRE ESSE
                <br />
                EMPREENDIMENTO?
              </h2>

              <p className="lucca-bottom-cta-sub">
                VIVA OS MELHORES MOMENTOS EM UM LUGAR COMPLETO
              </p>

              <div className="lucca-bottom-badge">
                PRONTO PARA MORAR | INFRAESTRUTURA COMPLETA
              </div>
            </div>

            <LeadForm idPrefix="footer" sourceSection="Rodapé Final" buttonText="AGENDE SUA VISITA" />
          </div>
        </div>
      </section>

      {/* 10. FOOTER COPYRIGHT */}
      <footer className="lucca-footer" id="privacidade">
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
        aria-label="Falar com a equipe no WhatsApp sobre o Lucca Residencial"
        className="lucca-floating-whatsapp"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </a>
    </main>
  );
}
