"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Empresa", href: "#empresa" },
  { label: "Empreendimentos", href: "#empreendimentos" },
  { label: "Nossa história", href: "#historia" },
  { label: "Contato", href: "#contato" },
];

type HeaderProps = {
  phone: string;
  whatsappURL: string;
};

export function Header({ phone, whatsappURL }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header" aria-label="Cabeçalho principal">
      <Link className="brand-shell" href="#inicio" aria-label="Colonizadora Feliz — início">
        <Image
          className="brand-logo"
          src="/assets/colonizadora-feliz-logo.png"
          alt="Colonizadora Feliz"
          width={620}
          height={260}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="whatsapp-pill" href={whatsappURL} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />
        <span>{phone}</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav
        className={`mobile-nav${open ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Navegação móvel"
      >
        {navItems.map((item, index) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>
            {item.label}
          </Link>
        ))}
        <a className="mobile-whatsapp" href={whatsappURL} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" /> WhatsApp
        </a>
      </nav>
    </header>
  );
}
