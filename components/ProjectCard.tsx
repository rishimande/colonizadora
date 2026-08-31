import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectCard as ProjectCardData } from "@/lib/site-content";

export function ProjectCard({ project, index }: { project: ProjectCardData; index: number }) {
  const isExternal = Boolean(project.href?.startsWith("http"));

  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-image">
        <Image
          src={project.image}
          alt={`Imagem demonstrativa do empreendimento ${project.title}`}
          fill
          sizes="(max-width: 720px) 82vw, (max-width: 1100px) 44vw, 31vw"
          priority={index < 2}
        />
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <Link
          href={project.href || "#contato"}
          aria-label={`Saiba mais sobre ${project.title}`}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          Saiba mais <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
