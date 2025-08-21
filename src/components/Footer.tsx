import {
  EnvelopeSimple,
  Phone, FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo
} from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer id="contact" data-aos="fade-up" className="bg-[#030812] text-white border-t border-[#31D9FE]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#31D9FE]">Nexus-Skill</h3>
            <p className="text-gray-400 mb-4">
              Transformando o aprendizado em uma jornada envolvente e eficiente para o desenvolvimento de habilidades
              profissionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <FacebookLogo size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <InstagramLogo size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <TiktokLogo size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                <LinkedinLogo size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#problematic" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Problemática
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Solução
                </a>
              </li>
              <li>
                <a href="#app" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  App
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <EnvelopeSimple size={20} className="text-[#31D9FE] mr-2 mt-1" />
                <a
                  href="mailto:contato@nxshub.com.br"
                  className="text-gray-400 hover:text-[#31D9FE] transition-colors"
                >
                  contato@nxshub.com.br
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-[#31D9FE] mr-2 mt-1" />
                <a href="tel:+5592986206811" className="text-gray-400 hover:text-[#31D9FE] transition-colors">
                  (92) 98620-6811
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexus-Skill. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
