"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface LeadFormProps {
  idPrefix?: string;
  className?: string;
  sourceSection?: string;
  buttonText?: string;
}

export function LeadForm({
  idPrefix = "hero",
  className = "",
  sourceSection = "Hero",
  buttonText = "AGENDE SUA VISITA",
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
      await new Promise((resolve) => setTimeout(resolve, 600));

      const text = encodeURIComponent(
        `Olá! Gostaria de saber mais sobre o Claudino Francio - Loteamento Comercial e Industrial.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nOrigem: Landing Page Claudino Francio (${sourceSection})`
      );
      const whatsappUrl = `https://wa.me/556635456500?text=${text}`;

      setIsSuccess(true);

      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 1000);
    } catch {
      setError("Ocorreu um erro ao enviar seus dados. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`claudino-form-success ${className}`} role="status" aria-live="polite">
        <CheckCircle2 className="w-12 h-12 text-[#231f1d] mb-4" />
        <h3 className="text-xl font-semibold text-[#231f1d] tracking-wide mb-2 uppercase">
          Solicitação Recebida!
        </h3>
        <p className="text-sm text-[#3b2d18] leading-relaxed mb-6">
          Obrigado, <strong className="text-[#231f1d]">{formData.name}</strong>. Nossa equipe especializada
          entrará em contato com você para apresentar todos os detalhes exclusivos do Claudino Francio.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "", lgpdConsent: false });
          }}
          className="claudino-form-btn-secondary"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <div className={`claudino-form-card ${className}`}>
      <div className="claudino-form-header">
        <p className="claudino-form-title">
          UMA LOCALIZAÇÃO <strong>INCOMPARÁVEL</strong>
          <span className="block font-normal text-xs uppercase tracking-wider mt-1 opacity-90">
            CADASTRE-SE PARA SABER MAIS.
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} method="POST" className="claudino-form">
        <div className="claudino-form-group">
          <label htmlFor={`${idPrefix}-name`} className="claudino-form-label">
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
            className="claudino-form-input"
          />
        </div>

        <div className="claudino-form-group">
          <label htmlFor={`${idPrefix}-email`} className="claudino-form-label">
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
            className="claudino-form-input"
          />
        </div>

        <div className="claudino-form-group">
          <label htmlFor={`${idPrefix}-phone`} className="claudino-form-label">
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
            className="claudino-form-input"
          />
        </div>

        <div className="claudino-form-checkbox-wrapper">
          <input
            id={`${idPrefix}-lgpd`}
            name="lgpdConsent"
            type="checkbox"
            required
            checked={formData.lgpdConsent}
            onChange={handleChange}
            className="claudino-form-checkbox"
          />
          <label htmlFor={`${idPrefix}-lgpd`} className="claudino-form-checkbox-label">
            De acordo com a Lei Geral de Proteção de Dados, concordo em fornecer os dados acima para que a
            Colonizadora Feliz entre em contato comigo para apresentar produtos e serviços. Seu nome, e-mail e telefone
            serão usados com a finalidade de uma oportunidade de acordo com a nossa{" "}
            <a href="#privacidade" className="underline font-semibold hover:opacity-80">
              Política de Privacidade
            </a>
            .
          </label>
        </div>

        {error && (
          <p className="claudino-form-error" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="claudino-form-submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ENVIANDO...
            </>
          ) : (
            buttonText
          )}
        </button>
      </form>
    </div>
  );
}
