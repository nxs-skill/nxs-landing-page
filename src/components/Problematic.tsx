import light from "../assets/icons/light.svg"
import logo from "../assets/logo-extended.png"
import blueLine from "../assets/Clip path group.svg"
import background from "../assets/background-sections/background-problematic.svg"
import screen1 from "../assets/screens/Clip path group (1).svg"
import screen2 from "../assets/screens/Clip path group (2).svg"
import screen3 from "../assets/screens/Clip path group (3).svg"
import screen4 from "../assets/screens/Clip path group (4).svg"
import screen5 from "../assets/screens/Clip path group (5).svg"
import screen6 from "../assets/screens/Group.svg"
import screen7 from "../assets/screens/Clip path group (6).svg"
import screen8 from "../assets/screens/Clip path group (7).svg"
import LightDarkMode from "../assets/icons/dark-lightMode.svg"




export function Problematic() {
  console.log("Problematic component renderizado")
  return (
    <section id="problematic" className="py-20 min-h-screen flex flex-col relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
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
      <div className="w-full z-10 h-screen flex justify-center gap-6">
        <div className="flex items-center h-full">
          <img src={screen1} alt={screen1} />
        </div>
        <div className="flex flex-col justify-center h-full">
          <img className="pt-6" src={screen2} alt={screen2} />
          <div className="relative w-full h-2/6 rounded-xl overflow-hidden mt-2">
            <img
              className="w-full h-full object-cover"
              src={screen3}
              alt="screen"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="flex items-center h-full">
          <img src={screen4} alt={screen4} />
        </div>
        <div className="flex items-end h-full pb-16">
          <img src={screen5} alt={screen5} />
        </div>
        <div className="flex items-start h-full pt-16">
          <img src={screen6} alt={screen6} />
        </div>
        <div className="flex items-end h-full pb-16">
          <img src={screen7} alt={screen7} />
        </div>
        <div className="flex items-start h-full pt-16">
          <img src={screen8} alt={screen8} />
        </div>
      </div>
      <div className="w-full flex justify-center z-10">
        <button className="flex bg-[#272727] justify-center p-3 rounded-lg gap-1 opacity-100">
          <img src={LightDarkMode} alt={LightDarkMode} />
          <span>Modo escuro e claro</span>
        </button>
      </div>
    </section>
  )
}
