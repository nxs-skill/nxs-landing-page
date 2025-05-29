"use client"

import { useEffect, useRef, useState } from "react"
import background from "../assets/background-sections/background-part-2-app.svg"
import user from "../assets/user-comment.jpg"

export function UserVision() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [reversePosition, setReversePosition] = useState(0)
  const maxScrollWidth = useRef(0)

  const testimonials = [
    {
      name: "Valmira Tenorio",
      rating: 5,
      content:
        "Ótimo APP com design e conteúdo ótimos. está me ajudando muito com minhas habilidades interpessoal. minhas SOFTSKILL. Parabéns aos desenvolvedores.",
      date: "19 de maio, 2025",
    },
    {
      name: "Thalles H",
      rating: 5,
      content:
        "Só qualidade: Boa interação, sistema de avaliações, de experiência e ranking, um ótimo aplicativo.",
      date: "1 de maio, 2025",
    },
    {
      name: "Balax",
      rating: 5,
      content:
        "Sensacional! um aplicativo com design muito bom e muito intuitivo",
      date: "24 de abril, 2025",
    },
    {
      name: "Eliézer De Jejus",
      rating: 5,
      content:
        "Top demais! Fizeram um ótimo aplicativo com o objetivo de ajudar seus usuários. Parabéns!",
      date: "24 de abril, 2025",
    },
    {
      name: "Ihan Nunes",
      rating: 5,
      content:
        "aplicativo sensacional, design interativo e dinâmico, fácil de usar",
      date: "23 de abril, 2025",
    },
    {
      name: "Will Andrew Nogueira da Silva",
      rating: 5,
      content:
        "parabéns a equipe, app super útil no quesito de atividades interpessoais",
      date: "24 de abril, 2025",
    },
    {
      name: "Lohanna Soares",
      rating: 5,
      content:
        "aplicativo muito bom, atendeu tudo que eu necessito recomendo muito",
      date: "27 de abril, 2025",
    },
    {
      name: "Isabelle Nogueira da Silva",
      rating: 5,
      content:
        "muito bom esse app, gostei bastante do design e também dá dinâmica do aplicativo, consigo me organizar nas minnas ideias. estudos",
      date: "26 de abril, 2025",
    },
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    const cardWidth = 320
    const gap = 24
    const totalWidth = (cardWidth + gap) * testimonials.length
    maxScrollWidth.current = totalWidth

    setReversePosition(totalWidth)

    const animate = () => {
      // carrossel de cima
      setScrollPosition((prev) => {
        if (prev >= maxScrollWidth.current) {
          return 0
        }
        return prev + 0.5
      })

      // carrossel de baixo 
      setReversePosition((prev) => {
        if (prev <= 0) {
          return maxScrollWidth.current
        }
        return prev - 0.5
      })
    }

    const animationId = setInterval(animate, 30)

    return () => {
      clearInterval(animationId)
    }
  }, [testimonials.length])

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: rating }).map((_, index) => (
      <svg key={index} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))
  }

  return (
    <section id="app" className="py-20 min-h-screen flex flex-col relative overflow-hidden bg-[#0a0a14]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "#030812",
        }}
      ></div>

      <div data-aos="fade-down" className="text-center mb-16 z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex justify-center items-baseline">
          <span className="text-[#35D9FD] hidden md:flex">★</span>
          <span className="ml-1 text-4xl font-bold md:text-5xl">
            O app na visão dos usuários
            <span className="text-[#35D9FD]">.</span>
          </span>
          
        </h2>
        <div className="w-full flex text-center justify-center">
          <p className="max-w-3xl text-[#d1d5db] font-['Inter',sans-serif]">
            Relatos de quem está evoluindo com a gente.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden mb-12 relative">
        <div className="absolute left-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-l from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>

        <div
          className="flex gap-6 py-4 w-full pl-6"
          style={{
            width: "max-content",
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              data-aos="fade-left"
              key={`top-${index}`}
              className="w-[320px] backdrop-blur-md bg-[#161625]/80 border border-[#2a2a3c] rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-[#35D9FD]/10 hover:border-[#35D9FD]/30"
            >
              <div className="flex items-center mb-4">
                <img
                  src={user || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3 border-2 border-[#35D9FD]/30"
                />
                <div>
                  <h3 className="font-semibold text-white font-['Poppins',sans-serif]">{testimonial.name}</h3>
                  <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-[#e0e0eb] text-sm flex-grow mb-4 font-['Inter',sans-serif] leading-relaxed">
                {testimonial.content}
              </p>
              <p className="text-[#9999aa] text-xs font-['Inter',sans-serif]">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden mb-12 relative">
        {/* gradiente de fade na esquerda  */}
        <div className="absolute left-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[20px] md:w-[50px] lg:w-[250px] z-10 bg-gradient-to-l from-[#0a0a14] via-[#0a0a14]/90 to-transparent pointer-events-none"></div>

        <div
          className="flex gap-6 py-4 w-full pl-6"
          style={{
            width: "max-content",
            transform: `translateX(-${reversePosition}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              data-aos="fade-right"
              key={`bottom-${index}`}
              className="w-[320px] backdrop-blur-md bg-[#161625]/80 border border-[#2a2a3c] rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-[#35D9FD]/10 hover:border-[#35D9FD]/30"
            >
              <div className="flex items-center mb-4">
                <img
                  src={user || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3 border-2 border-[#35D9FD]/30"
                />
                <div>
                  <h3 className="font-semibold text-white font-['Poppins',sans-serif]">{testimonial.name}</h3>
                  <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-[#e0e0eb] text-sm flex-grow mb-4 font-['Inter',sans-serif] leading-relaxed">
                {testimonial.content}
              </p>
              <p className="text-[#9999aa] text-xs font-['Inter',sans-serif]">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
