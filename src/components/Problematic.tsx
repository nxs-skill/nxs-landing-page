import background1 from "../assets/background-sections/background-problematic.svg";
import background2 from "../assets/background-sections/background-part-2-app.svg";
import empreendedorismo from "../assets/problematic-images/empreendedorismo.webp";
import escola from "../assets/problematic-images/escola.webp";
import trabalho from "../assets/problematic-images/trabalho.jpg";
import noticias from "../assets/problematic-images/noticias.png";
import arrow from "../assets/icons/arrow.svg";
import question from "../assets/icons/question.svg";


export function Problematic() {
  return (
    <section
      id="problematic"
      className="py-12 min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 z-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${background1})`,
          backgroundColor: "#030812",
          height: "100vh",
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="absolute inset-x-0 bottom-0 z-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundColor: "#030812",
          top: "100vh", 
          pointerEvents: "none",
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-5xl md:text-5xl font-bold mb-4">
              <div className="text-[#2ED9FF] flex gap-3 items-center">
                <img src={question} alt="Question Icon" className="w-10 h-10" />
                Problemática
              </div>
            </h2>
            <h3 className="text-lg md:text-xl text-white mt-2">
              Você já passou por isso?
            </h3>
          </div>

   
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
            <div className="bg-[#262626] rounded-lg p-4 flex md:flex-row items-center gap-6 md:items-start">
              <img
                src={trabalho}
                alt="Ambiente de trabalho"
                className="h-48 w-48 object-cover rounded-lg"
              />
              <div className="flex-1 text-lg">
                <h4 className="text-2xl font-bold text-[#2ED9FF] mb-3">
                  Ambiente de trabalho
                </h4>
                <ul className="space-y-2">
                  {[
                    "“Sou bom tecnicamente, mas travo na hora de liderar.” ou “Sempre sou interrompido ou ignorado.”",
                    "“Dou o meu melhor, mas ninguém reconhece.” ou “Tenho conhecimento, mas não sei liderar.”",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-white flex items-start gap-1"
                    >
                      <span className="text-[#31D9FE] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-4 flex md:flex-row items-center md:items-start md:ml-auto md:w-2/3">
              <div className="flex-1 text-lg">
                <h4 className="text-2xl font-bold text-[#2ED9FF] mb-3">
                  Liderança e empreendedorismo
                </h4>
                <ul className="space-y-2">
                  {[
                    "“Tenho bons profissionais, mas não sabem se comunicar.”",
                    "“Preciso de resultados, mas o time não se escuta.”",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-white flex items-start gap-1"
                    >
                      <span className="text-[#31D9FE] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={empreendedorismo}
                alt="Liderança e empreendedorismo"
                className="h-48 w-48 object-cover rounded-lg "
              />
            </div>

            <div className="bg-[#262626] rounded-lg p-4 flex md:flex-row items-center gap-6 md:items-start">
              <img
                src={escola}
                alt="Escola ou faculdade"
                className="h-48 w-48 object-cover rounded-lg"
              />
              <div className="flex-1 text-lg">
                <h4 className="text-2xl font-bold text-[#2ED9FF] mb-3">
                  Escola ou faculdade
                </h4>
                <ul className="space-y-2">
                  {[
                    "“Travo na hora de apresentar um trabalho.” ou “Fico nervoso só de pensar em falar em público.”",
                    "“Sinto que ninguém me escuta no grupo.” ou “Sinto vergonha de chegar com um grupo ou não sei o que falar.”",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-white flex items-start gap-1"
                    >
                      <span className="text-[#31D9FE] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        
          <div className=" mt-24 px-4">
            <p className="text-xl text-white mb-6">
              E adivinha? Tudo isso é falta de <span className="font-bold">soft skills</span>.
            </p>
            <h2 className="text-3xl font-bold text-[#FFFFFF]">
              <div className="flex items-center gap-2">
                <img src={arrow} alt="Arrow Icon" className="w-6 h-6" />
              <span className="text-[#ABABAB]"></span> Mas afinal, o que são soft skills?
              </div>
            </h2>
          </div>
        </div>

      
        <div className="relative z-10">
          <div className="p-8 mt-16 text-center text-white text-lg leading-relaxed ">
            <h2 className="text-4xl font-bold text-[#2ED9FF]">
              <span className="text-[#2ED9FF]">São habilidades comportamentais e emocionais</span> que influenciam tudo ao seu redor.
            </h2>
            <p className="mt-2">
              Elas impactam diretamente a forma como você se comunica, se relaciona com os outros e se posiciona no mundo. Ao
              <br></br>
              contrário das hard skills, são essas competências que fazem você ser ouvido, respeitado, promovido e valorizado.
            </p>
          </div>

          <div className="p-8 mt-8 text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-[#FFFFFF]">
              E a realidade mostra:
            </h2>
          </div>

    
          <div className="mt-8 flex justify-center">
            <img src={noticias} alt="Notícias sobre soft skills" className="hmax-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}