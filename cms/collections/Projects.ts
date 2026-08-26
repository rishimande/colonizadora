import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Empreendimento",
    plural: "Empreendimentos",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "order", "updatedAt"],
  },
  defaultSort: "order",
  fields: [
    { name: "title", label: "Nome", type: "text", required: true },
    { name: "slug", type: "text", unique: true, required: true, index: true },
    { name: "summary", label: "Resumo", type: "textarea", required: true },
    {
      name: "image",
      label: "Imagem de capa",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "available",
      options: [
        { label: "Disponível", value: "available" },
        { label: "Em breve", value: "coming-soon" },
        { label: "Concluído", value: "completed" },
      ],
    },
    { name: "externalURL", label: "URL da landing page", type: "text" },
    { name: "order", label: "Ordem", type: "number", defaultValue: 10 },
    { name: "featured", label: "Destaque na Home", type: "checkbox", defaultValue: true },
  ],
};
