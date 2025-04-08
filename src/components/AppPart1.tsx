export function AppPart1() {
  console.log("AppPart1 component renderizado")
  return (
    <section id="solution" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/src/assets/background-sections/background-app-part-1.svg')",
          backgroundColor: "#030812",
        }}
      ></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-[#31D9FE]">Solution</span> Section
          </h2>
        </div>
      </div>
    </section>
  )
}
