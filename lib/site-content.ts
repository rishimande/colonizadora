export type ProjectCard = {
  title: string;
  summary: string;
  image: string;
  accent: "lime" | "teal";
  href?: string;
};

export const siteContent = {
  phone: "(66) 3545-6500",
  whatsappURL: "https://wa.me/556635456500",
  social: {
    facebook: "https://www.facebook.com/ColonizadoraFeliz",
    youtube: "https://www.youtube.com/@colonizadorafeliz6349",
    instagram: "https://instagram.com/colinizadorafeliz/",
  },
  hero: {
    title: "Bem-vindo(a)!",
    lead: "Se você busca as melhores opções para construir, morar ou investir, encontrou o lugar certo.",
    story:
      "Há mais de 40 anos, a Colonizadora Feliz tem um papel central na história de Sorriso-MT. Um legado de inovação, qualidade e bem-estar construído em cada projeto e em cada história da qual fazemos parte. Já fizemos muito — e vamos fazer muito mais. Com você e por você.",
  },
  projects: [
    {
      title: "Arboreto Ecoville",
      summary: "Alguns lugares são feitos para morar. Outros, para marcar presença.",
      image: "/assets/arboreto.webp",
      accent: "lime",
      href: "https://colonizadorafeliz.com.br/arboreto-one-page/",
    },
    {
      title: "Lucca Residencial",
      summary: "O seu apartamento ideal, pronto para morar.",
      image: "/assets/lucca.webp",
      accent: "teal",
      href: "https://colonizadorafeliz.com.br/LUCCA-one-page/",
    },
    {
      title: "Claudino Francio",
      summary: "Loteamento comercial e industrial. O endereço certo para seu negócio.",
      image: "/assets/newClaudinoFrancio.jpeg",
      accent: "lime",
      href: "https://colonizadorafeliz.com.br/claudino-one-page/",
    },
  ] satisfies ProjectCard[],
  video: {
    title: "Assista ao vídeo",
    body: "Conheça nossa história, nossos projetos e o impacto que geramos todos os dias.",
    poster: "/assets/video-preview.webp",
    url: "https://www.youtube.com/watch?v=1Oo-VIN0UaY",
  },
  cta: {
    title: "Aqui você encontra os melhores projetos e as melhores condições.",
    label: "Fale com um de nossos especialistas",
  },
};
