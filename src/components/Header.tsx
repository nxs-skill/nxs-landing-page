"use client"

import { useState, useEffect } from "react"
import { List, X } from "@phosphor-icons/react"
import { Button } from "../ui/button"
import logoNxs from "../assets/logo-nxs.png"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll("section[id]")
      let currentSection = "home"

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionHeight = section.clientHeight
        const halfViewport = window.innerHeight / 2

        if (sectionTop <= halfViewport && sectionTop + sectionHeight > halfViewport) {
          currentSection = section.getAttribute("id") || "home"
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#problematic", text: "Problemática" },
    { href: "#solution", text: "Solução" },
    { href: "#app", text: "App" },
    { href: "#about", text: "Sobre" },
    { href: "#contact", text: "Contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-500 ${scrolled ? "bg-[#030812]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" aria-label="Ir para Home" className="text-2xl font-bold text-[#31D9FE] inline-flex items-center">
            <img
              src={logoNxs}
              alt="Logotipo NXS"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-3 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-white font-medium transition-colors duration-200 hover:text-[#31D9FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31D9FE] ${activeSection === link.href.substring(1) ? "text-[#31D9FE] after:scale-x-100" : ""} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#31D9FE] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com/nxs-skill/nxs-landing-page/releases/download/Android/nxs-skill.apk" aria-label="Baixar o aplicativo NXS Skill para Android" className="hidden md:block">
            <Button className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium transition-colors">Baixar app</Button>
          </a>
          <a href="https://skill.nxshub.com.br" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium transition-colors">Acessar Web</Button>
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31D9FE] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* menu p celular */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"} bg-[#030812]/95 backdrop-blur-md shadow-lg`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-white font-medium hover:text-[#31D9FE] transition-colors py-2 ${activeSection === link.href.substring(1) ? "text-[#31D9FE]" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <a href="https://github.com/nxs-skill/nxs-landing-page/releases/download/Android/nxs-skill.apk" aria-label="Baixar o aplicativo NXS Skill para Android">
            <Button className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium w-full transition-colors">Baixar app para Android</Button>
          </a>
          <a href="https://skill.nxshub.com.br" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#31D9FE] hover:bg-[#24B7D8] text-[#030812] font-medium w-full transition-colors">Acessar Web</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
