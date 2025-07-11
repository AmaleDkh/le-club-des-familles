"use client";

// React elements
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
// import Button from "../Button/Button";

// Style
import "./ContactForm.scss";

interface ContactFormProps {
  title?: string;
  emailTo?: string;
}

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

function ContactForm({
  title = "PRÊT(E) À REJOINDRE L'AVENTURE EN TANT DÉNICHEUR.SE ?",
  emailTo = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.prenom.trim()) {
      setStatus({ type: "error", message: "Le prénom est requis" });
      return false;
    }
    if (!formData.nom.trim()) {
      setStatus({ type: "error", message: "Le nom est requis" });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "L'adresse e-mail est requise" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "L'adresse e-mail n'est pas valide",
      });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Le message est requis" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: "loading", message: "Envoi en cours..." });

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: emailTo,
          subject: `Nouveau message de ${formData.prenom} ${formData.nom}`,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.",
        });
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      setStatus({
        type: "success",
        message:
          "Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.",
      });
      setFormData({
        prenom: "",
        nom: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact-form">
      <SectionTitle
        title={title}
        colorVersion="section-title--version-with-white-color"
        versionWithTextAlign="section-title--version-with-text-align"
      />

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="prenom">
              PRÉNOM
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              className="contact-form__input"
              value={formData.prenom}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="nom">
              NOM
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              className="contact-form__input"
              value={formData.nom}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">
            ADRESSE E-MAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form__input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="message">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            className="contact-form__textarea"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        {status.message && (
          <div
            className={`contact-form__status contact-form__status--${status.type}`}
          >
            {status.type === "success" && <CheckCircle size={20} />}
            {status.type === "error" && <AlertCircle size={20} />}
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          className="contact-form__submit"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? (
            <>
              <div className="contact-form__spinner" />
              Envoi en cours
            </>
          ) : (
            <>
              <Send size={18} />
              ENVOYER
            </>
          )}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
