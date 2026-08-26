import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Home",
  versions: { drafts: true },
  fields: [
    { name: "welcomeTitle", label: "Título", type: "text", defaultValue: "Bem-vindo(a)!" },
    { name: "welcomeLead", label: "Chamada", type: "textarea" },
    { name: "welcomeStory", label: "Texto institucional", type: "textarea" },
    { name: "featuredProjects", label: "Empreendimentos em destaque", type: "relationship", relationTo: "projects", hasMany: true },
    { name: "videoTitle", label: "Título do vídeo", type: "text" },
    { name: "videoDescription", label: "Descrição do vídeo", type: "textarea" },
    { name: "videoURL", label: "URL do vídeo", type: "text" },
    { name: "videoPoster", label: "Capa do vídeo", type: "upload", relationTo: "media" },
    { name: "ctaTitle", label: "Título da chamada final", type: "textarea" },
    { name: "ctaLabel", label: "Texto do botão", type: "text" },
  ],
};
