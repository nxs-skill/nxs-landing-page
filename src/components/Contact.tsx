"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { EnvelopeSimple, Phone, TiktokLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react"

export function Contact() {
  console.log("Contact component renderizado")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Formulário enviado com sucesso!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/src/assets/background-sections/background-contact.svg')" }}
      ></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <EnvelopeSimple className="inline-block mr-2 text-[#31D9FE]" size={32} />
            <span className="text-[#31D9FE]">Fale</span> com a gente.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glassmorphism rounded-lg shadow-lg p-8 border border-[#31D9FE]/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                    className="w-full bg-[#030812]/60 border-[#31D9FE]/30 text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem aqui..."
                  required
                  className="w-full min-h-[150px] bg-[#030812]/60 border-[#31D9FE]/30 text-white"
                />
              </div>

              <Button type="submit" className="w-full bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium">
                Enviar mensagem
              </Button>
            </form>
          </div>

          <div>
            <div className="glassmorphism rounded-lg shadow-lg p-8 mb-8 border border-[#31D9FE]/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de contato</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#31D9FE]/20 p-3 rounded-full mr-4">
                    <EnvelopeSimple size={24} className="text-[#31D9FE]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:contato@nexusskill.com" className="text-[#31D9FE] hover:underline">
                      contato@nexusskill.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#31D9FE]/20 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-[#31D9FE]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telefone</h4>
                    <a href="tel:+5592986206811" className="text-[#31D9FE] hover:underline">
                      (92) 98620-6811
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-lg shadow-lg p-8 mb-8 border border-[#31D9FE]/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Acesse nossas redes sociais</h3>
              <p className="text-gray-300 mb-4">
                Fique por dentro das novidades, conteúdos exclusivos e atualizações do app. Vem fazer parte da
                comunidade!
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-[#31D9FE]/20 p-3 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300 icon-hover"
                >
                  <TiktokLogo size={24} />
                </a>
                <a
                  href="#"
                  className="bg-[#31D9FE]/20 p-3 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300 icon-hover"
                >
                  <LinkedinLogo size={24} />
                </a>
                <a
                  href="#"
                  className="bg-[#31D9FE]/20 p-3 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300 icon-hover"
                >
                  <InstagramLogo size={24} />
                </a>
              </div>
            </div>

            <div className="glassmorphism rounded-lg shadow-lg p-8 border border-[#31D9FE]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Baixe o app</h3>
              <p className="text-gray-300 mb-6">
                Tudo isso na palma da sua mão. Baixe agora e comece sua jornada de evolução nas soft skills.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.trainerize.nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] px-8 py-3 rounded-md font-medium transition-all duration-300 inline-block"
              >
                Baixe agora
              </a>
              <div className="mt-4 text-xs text-gray-400">
                <a href="#" className="hover:text-[#31D9FE]">
                  Nossa política de privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
