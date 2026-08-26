import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: { singular: "Página", plural: "Páginas" },
  admin: { useAsTitle: "title" },
  versions: { drafts: true },
  fields: [
    { name: "title", label: "Título", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "eyebrow", label: "Sobretítulo", type: "text" },
    { name: "summary", label: "Resumo", type: "textarea" },
    { name: "content", label: "Conteúdo", type: "richText" },
    { name: "heroImage", label: "Imagem principal", type: "upload", relationTo: "media" },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "title", label: "Título SEO", type: "text" },
        { name: "description", label: "Descrição SEO", type: "textarea", maxLength: 160 },
      ],
    },
  ],
};
