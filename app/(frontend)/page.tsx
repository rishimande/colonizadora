import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MessageCircle,
} from "lucide-react";

import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoStory } from "@/components/VideoStory";
import { siteContent } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <Header phone={siteContent.phone} whatsappURL={siteContent.whatsappURL} />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="hero-heading">
            <p className="eyebrow eyebrow-light">Sorriso · Mato Grosso</p>
            <h1 id="hero-title">{siteContent.hero.title}</h1>
            <span className="title-rule" aria-hidden="true" />
            <p className="hero-lead">{siteContent.hero.lead}</p>
            <a className="hero-link" href="#empreendimentos">
              Conheça nossos projetos <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="hero-story" id="empresa">
            <p>{siteContent.hero.story}</p>
            <span className="since-mark">40<span>+</span></span>
          </div>
        </div>
      </section>

      <section className="projects-section" id="empreendimentos" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Onde a vida acontece</p>
              <h2 id="projects-title">Conheça alguns dos nossos produtos</h2>
            </div>
            <p>Projetos pensados para viver bem, investir com segurança e construir novas histórias.</p>
          </div>
          <div className="projects-grid">
            {siteContent.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <VideoStory
        title={siteContent.video.title}
        body={siteContent.video.body}
        poster={siteContent.video.poster}
        src={siteContent.video.url}
      />

      <section className="conversion shell" aria-labelledby="conversion-title">
        <Image
          src="/assets/aerial.webp"
          alt="Vista aérea demonstrativa de um loteamento em Sorriso"
          fill
          sizes="(max-width: 760px) 92vw, 88vw"
        />
        <div className="conversion-overlay" />
        <div className="conversion-content">
          <p className="eyebrow eyebrow-light">Seu próximo endereço</p>
          <h2 id="conversion-title">{siteContent.cta.title}</h2>
          <a href={siteContent.whatsappURL} target="_blank" rel="noreferrer">
            {siteContent.cta.label} <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="footer" id="contato">
        <div className="footer-panel shell">
          <a className="footer-contact" href={siteContent.whatsappURL} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            <span><small>Fale com a nossa equipe</small>{siteContent.phone}</span>
          </a>

          <div className="footer-social">
            <small>Siga-nos nas redes sociais</small>
            <div>
              <Link href={siteContent.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <span aria-hidden="true">f</span>
              </Link>
              <Link href={siteContent.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <span aria-hidden="true">yt</span>
              </Link>
              <Link href={siteContent.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <span aria-hidden="true">ig</span>
              </Link>
            </div>
          </div>

          <div className="footer-hours">
            <Clock3 aria-hidden="true" />
            <span>
              <small>Atendimento da loja</small>
              Segunda a sexta · 08h às 12h e 13h30 às 18h<br />
              Sábado · 08h às 11h
            </span>
          </div>
        </div>

        <div className="footer-bottom shell">
          <Image src="/assets/colonizadora-feliz-logo.png" alt="Colonizadora Feliz" width={240} height={101} />
          <p>© {new Date().getFullYear()} Colonizadora Feliz. Conteúdo demonstrativo sujeito à aprovação.</p>
        </div>
      </footer>
    </main>
  );
}
