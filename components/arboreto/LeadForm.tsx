"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface LeadFormProps {
  idPrefix?: string;
  className?: string;
  sourceSection?: string;
}

export function LeadForm({
  idPrefix = "hero",
  className = "",
  sourceSection = "Hero",
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lgpdConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpdConsent) {
      setError("Por favor, confirme seu consentimento com a política de privacidade.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));

      const subject = encodeURIComponent("Agendamento de Visita - Arboreto Eco Ville");
      const body = encodeURIComponent(
        `Olá! Gostaria de saber mais sobre o Arboreto Eco Ville.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nOrigem: Landing Page Arboreto (${sourceSection})`
      );
      const mailtoUrl = `mailto:colfeliz_contratos@grupocfrancio.com.br?subject=${subject}&body=${body}`;

      setIsSuccess(true);

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);
    } catch {
      setError("Ocorreu um erro ao processar seus dados. Tente novamente ou envie um e-mail para colfeliz_contratos@grupocfrancio.com.br.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`arboreto-form-success ${className}`} role="status" aria-live="polite">
        <CheckCircle2 className="w-12 h-12 text-[#b4a06d] mb-4" />
        <h3 className="text-xl font-semibold text-white tracking-wide mb-2 uppercase">
          Solicitação Recebida!
        </h3>
        <p className="text-sm text-[#dfd7ce] leading-relaxed mb-6">
          Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe especializada
          entrará em contato com você para apresentar todos os detalhes exclusivos do Arboreto Eco Ville.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "", lgpdConsent: false });
          }}
          className="arboreto-form-btn-secondary"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <div className={`arboreto-form-card ${className}`}>
      <div className="arboreto-form-header">
        <p className="arboreto-form-title">
          Um estilo de vida incomparável
          <span className="block font-light">conheça e surpreenda-se</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} method="POST" className="arboreto-form">
        {error && (
          <div className="arboreto-form-error" role="alert">
            {error}
          </div>
        )}

        <div className="arboreto-form-group">
          <label htmlFor={`${idPrefix}-name`} className="arboreto-form-label">
            Nome
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            className="arboreto-form-input"
          />
        </div>

        <div className="arboreto-form-group">
          <label htmlFor={`${idPrefix}-email`} className="arboreto-form-label">
            E-mail
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={handleChange}
            className="arboreto-form-input"
          />
        </div>

        <div className="arboreto-form-group">
          <label htmlFor={`${idPrefix}-phone`} className="arboreto-form-label">
            Celular/WhatsApp
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="arboreto-form-input"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="arboreto-form-submit"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              VISITE E SURPREENDA-SE
            </span>
          )}
        </button>

        <div className="arboreto-form-checkbox-wrap">
          <input
            id={`${idPrefix}-lgpd`}
            name="lgpdConsent"
            type="checkbox"
            required
            checked={formData.lgpdConsent}
            onChange={handleChange}
            className="arboreto-form-checkbox"
          />
          <label htmlFor={`${idPrefix}-lgpd`} className="arboreto-form-checkbox-label">
            De acordo com a Lei Geral de Proteção de Dados, concordo em fornecer os dados acima para
            que a Colonizadora Feliz entre em contato comigo para apresentar produtos e serviços. Seu
            nome, e-mail e telefone serão usados com a finalidade de uma oportunidade de acordo com a
            nossa Política de Privacidade.
          </label>
        </div>
      </form>
    </div>
  );
}
