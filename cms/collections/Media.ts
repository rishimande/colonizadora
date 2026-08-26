import path from "node:path";
import { fileURLToPath } from "node:url";
import type { CollectionConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "alt",
  },
  upload: {
    staticDir: path.resolve(dirname, "../../public/media"),
    imageSizes: [
      { name: "card", width: 900, height: 600, position: "centre" },
      { name: "hero", width: 1920, height: 1080, position: "centre" },
    ],
    focalPoint: true,
  },
  fields: [
    {
      name: "alt",
      label: "Texto alternativo",
      type: "text",
      required: true,
    },
    {
      name: "credit",
      label: "Crédito / origem",
      type: "text",
    },
    {
      name: "temporary",
      label: "Mídia temporária",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
