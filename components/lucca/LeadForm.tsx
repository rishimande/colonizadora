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
        `Olá! Gostaria de agendar uma visita e saber mais sobre o Lucca Residencial.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nOrigem: Landing Page Lucca (${sourceSection})`
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
      <div className={`lucca-form-success ${className}`} role="status" aria-live="polite">
        <CheckCircle2 className="w-12 h-12 text-[#bfa175] mb-4" />
        <h3 className="text-xl font-semibold text-white tracking-wide mb-2 uppercase">
          Solicitação Recebida!
        </h3>
        <p className="text-sm text-[#e6ded6] leading-relaxed mb-6">
          Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe especializada
          entrará em contato para agendar sua visita e apresentar todos os detalhes do Lucca Residencial.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "", lgpdConsent: false });
          }}
          className="lucca-form-btn-secondary"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <div className={`lucca-form-card ${className}`}>
      <div className="lucca-form-header">
        <p className="lucca-form-title">
          VIVA OS MELHORES MOMENTOS
          <span className="block font-normal">EM UM LUGAR COMPLETO.</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} method="POST" className="lucca-form">
        {error && (
          <div className="lucca-form-error" role="alert">
            {error}
          </div>
        )}

        <div className="lucca-form-group">
          <label htmlFor={`${idPrefix}-name`} className="lucca-form-label">
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
            className="lucca-form-input"
          />
        </div>

        <div className="lucca-form-group">
          <label htmlFor={`${idPrefix}-email`} className="lucca-form-label">
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
            className="lucca-form-input"
          />
        </div>

        <div className="lucca-form-group">
          <label htmlFor={`${idPrefix}-phone`} className="lucca-form-label">
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
            className="lucca-form-input"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="lucca-form-submit"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              {buttonText}
            </span>
          )}
        </button>

        <div className="lucca-form-checkbox-wrap">
          <input
            id={`${idPrefix}-lgpd`}
            name="lgpdConsent"
            type="checkbox"
            required
            checked={formData.lgpdConsent}
            onChange={handleChange}
            className="lucca-form-checkbox"
          />
          <label htmlFor={`${idPrefix}-lgpd`} className="lucca-form-checkbox-label">
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
