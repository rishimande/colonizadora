import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Artigo", plural: "Blog" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishedAt", "updatedAt"],
  },
  versions: { drafts: true },
  fields: [
    { name: "title", label: "Título", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "excerpt", label: "Resumo", type: "textarea", required: true },
    { name: "featuredImage", label: "Imagem de capa", type: "upload", relationTo: "media" },
    { name: "content", label: "Conteúdo", type: "richText", required: true },
    { name: "categories", label: "Categorias", type: "relationship", relationTo: "categories", hasMany: true },
    { name: "publishedAt", label: "Data de publicação", type: "date" },
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
