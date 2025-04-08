"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Envelope, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react"

type Member = {
  nome: string
  funcao: string
  imageSrc: string
  redes: {
    email: string
    linkedin: string
    instagram: string
  }
}

export function About() {
  console.log("About component renderizado")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState("next")
  const [currentPage, setCurrentPage] = useState(0)

  const members: Member[] = [
    {
      nome: "Davi Almeida",
      funcao: "CEO & Co-founder",
      imageSrc: "/src/assets/members/m1.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Carlos daniel",
      funcao: "CTO & Sócio & Co founder",
      imageSrc: "/src/assets/members/m2.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Marcos felipe",
      funcao: "Programador Full-stack & Co-founder",
      imageSrc: "/src/assets/members/m3.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Cecília costa",
      funcao: "Designer & Sócia",
      imageSrc: "/src/assets/members/m4.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Geovana barros",
      funcao: "Coordernadora administrativa",
      imageSrc: "/src/assets/members/m5.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Gabriel Soares",
      funcao: "Programador Full-stack",
      imageSrc: "/src/assets/members/m6.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Felipe Martins",
      funcao: "Programador Full-stack",
      imageSrc: "/src/assets/members/m7.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Thiago Sidrim",
      funcao: "Programador Full-stack",
      imageSrc: "/src/assets/members/m8.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
    {
      nome: "Pedro Bavaresco",
      funcao: "Programador Full-stack",
      imageSrc: "/src/assets/members/m9.png",
      redes: {
        email: "davialmeida@gmail.com",
        linkedin: "https://www.linkedin.com/in/thiago-sidrim-63b178216/",
        instagram: "https://www.instagram.com/starhyxx/",
      },
    },
  ]
  
  const totalPages = Math.ceil(members.length / 4)

  useEffect(() => {
    setCurrentPage(Math.floor(currentIndex / 4))
  }, [currentIndex])

  const nextSlide = () => {
    if (animating) return
    setAnimating(true)
    setDirection("next")
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === members.length - 4 ? 0 : prevIndex + 1))
      setAnimating(false)
    }, 300)
  }

  const prevSlide = () => {
    if (animating) return
    setAnimating(true)
    setDirection("prev")
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? members.length - 4 : prevIndex - 1))
      setAnimating(false)
    }, 300)
  }

  const goToPage = (pageIndex: number) => {
    if (animating) return
    setAnimating(true)
    setDirection(pageIndex > currentPage ? "next" : "prev")
    setTimeout(() => {
      setCurrentIndex(pageIndex * 4)
      setAnimating(false)
    }, 300)
  }

  const visibleMembers = members.slice(currentIndex, currentIndex + 4)

  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/src/assets/background-sections/background-about.svg')" }}
      ></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-[#31D9FE]">Conheça</span> os cérebros.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nada acontece sozinho. Esses são os nomes por trás das ideias, da execução e da entrega. Nosso time, nosso
            orgulho.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out ${
                animating
                  ? direction === "next"
                    ? "opacity-0 -translate-x-10"
                    : "opacity-0 translate-x-10"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {visibleMembers.map((member, index) => (
                <div
                  key={index}
                  className="member-card rounded-lg overflow-hidden shadow-lg border border-[#31D9FE]/20 
                  transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[#31D9FE]/20 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={member.imageSrc || "/placeholder.svg"}
                      alt={member.nome}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://via.placeholder.com/300x400?text=${encodeURIComponent(member.nome)}`
                      }}
                    />
                  </div>
                  <div className="p-4 text-center bg-[#030812] flex flex-col justify-between h-[140px]">
                    <div>
                      <h4 className="font-bold text-lg text-white">{member.nome}</h4>
                      <p className="text-[#31D9FE] text-sm">{member.funcao}</p>
                    </div>

                    <div className="flex justify-center space-x-3 mt-4">
                      <a
                        href={`mailto:${member.redes.email}`}
                        className="bg-[#31D9FE]/20 p-2 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300"
                        aria-label="Email"
                      >
                        <Envelope size={20} />
                      </a>
                      <a
                        href={member.redes.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#31D9FE]/20 p-2 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <InstagramLogo size={20} />
                      </a>
                      <a
                        href={member.redes.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#31D9FE]/20 p-2 rounded-full text-[#31D9FE] hover:bg-[#31D9FE]/30 transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <LinkedinLogo size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 glassmorphism rounded-full p-3 shadow-md z-10 
            text-white hover:bg-[#31D9FE]/40 transition-all duration-300 hidden md:block"
            onClick={prevSlide}
            disabled={animating}
            aria-label="Anterior"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 glassmorphism rounded-full p-3 shadow-md z-10 
            text-white hover:bg-[#31D9FE]/40 transition-all duration-300 hidden md:block"
            onClick={nextSlide}
            disabled={animating}
            aria-label="Próximo"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage ? "bg-[#31D9FE]" : "bg-gray-600 hover:bg-[#24B7D8]"
              }`}
              onClick={() => goToPage(index)}
              aria-label={`Página ${index + 1}`}
              aria-current={index === currentPage ? "page" : undefined}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="glassmorphism px-4 py-2 rounded-full">
            <span className="text-[#31D9FE] text-sm font-medium">Quem faz o nxs acontecer.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
