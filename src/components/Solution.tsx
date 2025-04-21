import light from "../assets/icons/light.svg"
import logo from "../assets/logo-extended.png"
import blueLine from "../assets/Clip path group.svg"
import background from "../assets/background-sections/background-part-1-app.svg"
import LightDarkMode from "../assets/icons/dark-lightMode.svg"

import MobileScreenCarousel from "./MobileScreenCarousel"




export function Solution() {
  console.log("Solution component renderizado")
  return (
    <section id="solution" className="py-20 min-h-screen flex flex-col relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "#030812",
        }}
      ></div>
      <div className="flex flex-col w-full z-10">
        <div className="container mx-auto px-4 z-10 relative max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex justify-center w-full items-baseline">
              <img className="w-6 h-6 mr-1" src={light} alt="light-bulb" />
              <span className="text-4xl">Solução pode estar na palma da mão</span>
              <span className="text-[#31D9FE]">.</span>
            </h2>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-80 h-10 object-cover mb-8">
              <img className="w-full h-full mb-2 object-fill" src={logo} alt="logo" />
              <img src={blueLine} alt="blueLine" />
            </div>
          </div>
        </div>
      </div>
        <MobileScreenCarousel />
      <div className="w-full flex justify-center z-10">
        <div className="flex bg-[#272727] justify-center p-3 rounded-lg gap-1 opacity-100">
          <img src={LightDarkMode} alt={LightDarkMode} />
          <span>Modo escuro & claro</span>
        </div>
      </div>
    </section>
  )
}
