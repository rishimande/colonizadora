import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Configurações do site",
  fields: [
    { name: "phone", label: "Telefone", type: "text", defaultValue: "(66) 3545-6500" },
    { name: "whatsappURL", label: "Link do WhatsApp", type: "text" },
    { name: "address", label: "Endereço", type: "textarea" },
    { name: "openingHours", label: "Horários de atendimento", type: "textarea" },
    {
      name: "social",
      type: "group",
      fields: [
        { name: "facebook", type: "text" },
        { name: "youtube", type: "text" },
        { name: "instagram", type: "text" },
      ],
    },
  ],
};
