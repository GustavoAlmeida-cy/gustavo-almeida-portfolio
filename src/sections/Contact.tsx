"use client";

import React, { useState, useEffect } from "react";
import SectionsHeader from "@/components/SectionsHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

// Chave do reCAPTCHA obtida do .env (frontend precisa de NEXT_PUBLIC_)
const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY || "";

const Contact = () => {
  // Estado para dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estados para controle de sucesso, loading e verificação do captcha
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState<string | null>(null);

  // Referência para poder resetar o reCAPTCHA
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  // Estado que controla se o reCAPTCHA deve ser exibido com base no tamanho da tela
  const [showCaptcha, setShowCaptcha] = useState(true);

  // Detecta se está em mobile para esconder o CAPTCHA
  useEffect(() => {
    const handleResize = () => {
      setShowCaptcha(window.innerWidth >= 720); // tailwind 'sm' breakpoint
    };

    handleResize(); // verifica ao montar
    window.addEventListener("resize", handleResize); // verifica em resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Atualiza os dados conforme o usuário digita
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Valida se os campos foram preenchidos corretamente
  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim() !== "" &&
      emailRegex.test(formData.email) &&
      formData.message.trim() !== ""
    );
  };

  // Envia o formulário, após validação e captcha (se estiver habilitado)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    if (showCaptcha && !captchaVerified) {
      alert("Por favor, confirme o reCAPTCHA.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/mvgqglrd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setCaptchaVerified(null);
        recaptchaRef.current?.reset();
      } else {
        alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex sm:flex-row flex-col justify-center items-center px-6 py-20 mt-14 w-full overflow-hidden bg-background relative"
    >
      <SectionsHeader
        emoji="📬"
        title="Entre em Contato"
        top="top-0 md:top-15"
      />

      <div className="flex flex-col flex-1 text-left ml-0 text-accent-foreground max-w-md w-full bg-card p-8 rounded-md mt-20 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="my-4"
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu.email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="my-4"
            />
          </div>
          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="my-4"
            />
          </div>

          {/* reCAPTCHA do Google responsivo (visível apenas fora do mobile) */}
          {showCaptcha && (
            <div className="w-full flex justify-center my-4">
              <div className="transform scale-[0.85] sm:scale-[0.95] md:scale-100 origin-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={SITE_KEY}
                  onChange={(token) => setCaptchaVerified(token)}
                  onExpired={() => setCaptchaVerified(null)}
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full md:w-fit cursor-pointer mt-4"
            disabled={loading || (showCaptcha && !captchaVerified)}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>

          {/* Mensagem de sucesso */}
          {success && (
            <div className="flex items-center gap-2 text-green-600 text-sm mt-2">
              <CheckCircle className="h-4 w-4" />
              Mensagem enviada com sucesso!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
