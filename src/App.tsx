import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Problematic } from "./components/Problematic"
import { Solution } from "./components/Solution"
import { Features } from "./components/Features"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Us } from "./components/Us"

function App() {
  console.log("App component renderizado")
  return (
    <div className="min-h-screen bg-[#030812]">
      <Header />
      <main>
        <Home />
        <Problematic />
        <Solution />
        <Features />
        <Us />
        <About />
        <Contact />

      </main>
      <Footer />
    </div>
  )
}

export default App
