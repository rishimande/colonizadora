import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: { singular: "Categoria", plural: "Categorias" },
  admin: { useAsTitle: "title" },
  fields: [
    { name: "title", label: "Nome", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
  ],
};
