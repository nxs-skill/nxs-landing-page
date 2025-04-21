import InfiniteCarousel from "./InfiniteCarousel";

export default function CoursesAndModules() {
  return(
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/src/assets/background-sections/background-home.svg')",
          backgroundColor: "#030812",
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 z-10 relative text-white flex flex-col md:flex-row justify-between items-center gap-4">
        <InfiniteCarousel />
      </div>
    </section>
  )
}