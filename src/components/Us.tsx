import logo from "../assets/logo-nxs.png";
import img1 from "../assets/us-images/image1.svg"; // Usada para a imagem maior no topo direito
import img2 from "../assets/us-images/image2.svg"; // Usada para a imagem inferior esquerda
import img3 from "../assets/us-images/image3.svg"; // Usada para a imagem inferior direita

export function Us() {
  console.log("Us component renderizado");
  return (
    <section id="us" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/src/assets/background-sections/background-problematic.svg')",
          backgroundColor: "#030812",
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex justify-center items-baseline">
            <span className="ml-1 text-4xl font-bold sm:text-5xl">Quem somos<span className="text-[#24B7D8]">?</span></span>
          </h2>
          <div className="w-full flex text-center justify-center">
            <p className="max-w-3xl text-[#d1d5db]">O que nos move vai muito além de tecnologia.</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mb-12">

            <div className="flex flex-col gap-6">

              <div className="rounded-lg p-4 flex flex-col justify-center">
                <p className="text-lg text-white leading-relaxed">
                  Somos um grupo de jovens e profissionais comprometidos com o desenvolvimento de habilidades
                  socioemocionais – as famosas soft skills – e com o impacto transformador que elas geram na vida pessoal
                  e profissional de qualquer pessoa.
                </p>
                <br />
                <p className="text-lg text-white leading-relaxed">
                  Já passamos por inseguranças, dificuldades para nos expressar, colaborar em equipe ou liderar com
                  confiança. Mas quando desenvolvemos essas competências, nossas vidas mudaram por completo – e
                  queremos te ajudar a viver essa mesma transformação.
                </p>
              </div>

 
              <div className="rounded-lg p-4 flex flex-col justify-center">
                <p className="text-lg text-white leading-relaxed">
                  Já passamos por inseguranças, dificuldades para nos expressar, colaborar em equipe ou liderar com
                  confiança. Mas quando desenvolvemos essas competências, nossas vidas mudaram por completo – e
                  queremos te ajudar a viver essa mesma transformação.
                </p>
              </div>

              <div className="rounded-lg p-4">
                <p className="text-lg text-[#24B7D8] font-semibold mb-2">Assim nasceu o Nexus-Skill:</p>
                <p className="text-lg text-white leading-relaxed">
                  um movimento que torna o crescimento pessoal mais acessível, prático e eficaz, conectando pessoas ao poder
                  das habilidades sociais que realmente fazem a diferença.
                </p>
                
              </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="rounded-lg overflow-hidden md:col-span-2">
                <img src={img1} alt="Imagem 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={img2} alt="Imagem 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={img3} alt="Imagem 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <img src={logo} alt="NXS Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}