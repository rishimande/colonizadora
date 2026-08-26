import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Colonizadora Feliz | Construir, morar e investir em Sorriso-MT",
    template: "%s | Colonizadora Feliz",
  },
  description:
    "Há mais de 40 anos criando projetos e oportunidades para construir, morar e investir em Sorriso-MT.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Colonizadora Feliz",
    description: "O lugar certo para construir, morar e investir.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Colonizadora Feliz — o lugar certo para construir, morar e investir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colonizadora Feliz",
    description: "O lugar certo para construir, morar e investir.",
    images: ["/og.png"],
  },
};

export default function FrontendLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
