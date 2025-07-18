"use client";

import React, { useState } from "react";
import SectionsHeader from "@/components/SectionsHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      } else {
        alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar. Verifique sua conexão e tente novamente.");
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

      <div className="flex flex-col flex-1 text-left ml-0 text-accent-foreground max-w-md w-full bg-card p-8 rounded-md mt-20">
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <Button
            type="submit"
            className="w-full md:w-fit cursor-pointer"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>

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
