import { Download, Instagram, Linkedin, Mail } from 'lucide-react';
import mockup from "../assets/icons/mockups/nxs-on-device.svg";
import website from "../assets/icons/web-site.svg";
import bgHome from "../assets/background-sections/background-home.svg";
import logoExtended from "../assets/logo-extended.png";
import thunder from "../assets/icons/thunder.svg";

export function Home() {
  const redes_sociais = [
    {
      nome: "Instagram",
      link: "https://www.instagram.com/nxs.skill",
      icon: <Instagram className="h-5 w-5 text-white" />,
    },
    {
      nome: "Linkedin",
      link: "https://www.linkedin.com/company/equipe-nexus",
      icon: <Linkedin className="h-5 w-5 text-white" />,
    },
    {
      nome: "Email",
      link: "contato@nxshub.com.br",
      icon: <Mail className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 pb-10">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${bgHome})`,
          backgroundColor: "#030812",
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 z-10 relative text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left gap-4 w-full md:w-1/2">
          <span className="font-bold text-xl">Conheça o</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            <span className="sr-only">Nexus Skill</span>
            <img
              src={logoExtended}
              alt="NXS Extended Logo"
              className="h-16 md:h-20 w-auto object-contain max-w-full"
            />
          </h1>
          <span className="font-bold text-base sm:text-lg md:text-xl">App para desenvolvimento de soft skills (habilidade sociais)</span>
          <div className="bg-white/20 backdrop-blur-sm rounded-[10px] p-4 flex gap-3 items-center w-full sm:max-w-md">
            <img src={thunder} alt="Ícone de raio" className="w-6 h-6" />
            <p>
              Solução feita para <span className="text-[#31D9FE] font-bold">você</span>. E de graça!
            </p>
          </div>
          <a href="https://github.com/nxs-skill/nxs-landing-page/releases/download/Android/nxs-skill.apk" aria-label="Baixar o aplicativo NXS Skill para Android" className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 rounded-lg font-bold text-base sm:text-lg md:text-xl inline-flex sm:whitespace-nowrap items-center justify-center transition-all duration-300 text-white shadow-[0_0_10px_#24B7D8] hover:shadow-[0_0_15px_#24B7D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24B7D8] bg-[#24B7D8] bg-gradient-to-b from-[#24B7D8] to-[#24B7D8] hover:from-[#24B7D8]">
            <Download aria-hidden="true" className="w-6 h-6" />
            <span className="ml-2">Baixar app para Android</span>
          </a>
          <a href="https://skill.nxshub.com.br" target="_blank" rel="noopener noreferrer" aria-label="Acessar Nexus Skill via web" className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 rounded-lg font-bold text-base sm:text-lg md:text-xl inline-flex sm:whitespace-nowrap items-center justify-center transition-all duration-300 text-white shadow-[0_0_10px_#24B7D8] hover:shadow-[0_0_15px_#24B7D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24B7D8] bg-[#24B7D8] bg-gradient-to-b from-[#24B7D8] to-[#24B7D8] hover:from-[#24B7D8]">
            <img src={website} alt="Acessar via web" className="w-6 h-6" />
            <span className="ml-2 text-base sm:text-lg">Acesse o Nexus Skill via web!</span>
          </a>
          <div className='flex gap-3 flex-wrap'>
            {redes_sociais.map(({ icon, link, nome }) => {
              if (!link) return null;

              const href = nome === "Email" ? `mailto:${link}` : link;

              return (
                <a
                  key={nome}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={nome}
                >
                  <div className="w-9 h-9 flex justify-center items-center border-white border rounded-full transition-all duration-300 text-white shadow-[0_0_10px_#24B7D8] hover:shadow-[0_0_15px_#24B7D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24B7D8]">
                    {icon}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
          <img
            src={mockup}
            alt="NXS App Mockup"
            className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[500px] lg:max-w-[560px] mx-auto block h-auto"
          />
        </div>
      </div>
    </section>
  )
}
