import { Rocket, Brain } from "lucide-react"

export default function Awards() {
  type Award = {
    badge: string;
    title: string;
    subtitle: string;
    year: string;
    comingSoon?: boolean;
    isSpecial?: boolean;
  };

  const awards: Award[] = [
    {
      badge: "Entre 20 mil startups",
      title: "Somos top 1000 no SEBRAE",
      subtitle: "2025 - Reconhecido entre as startups mais promissoras do Brasil pelo Sebrae.",
      year: "2025",
    },
    {
      badge: "Entre +5.000 startups inscritas",
      title: "Top 300 no ESX",
      subtitle: "2025 - Entre as 300 startups de maior destaque no Espírito Santo.",
      year: "2025",
    },
    {
      badge: "+10 mil participantes",
      title: "HackTown 2025",
      subtitle: "Participação em um dos maiores eventos de inovação e criatividade da América Latina.",
      year: "2025",
      isSpecial: true,
    },
    {
      badge: "+10 mil participantes e 200 palestrantes",
      title: "Digital Summit Experience",
      subtitle: "2025 - Apresentação no principal encontro de inovação e empreendedorismo do Brasil.",
      year: "2025",
    },
    {
      badge: "Em breve...",
      title: "Próxima Conquista",
      subtitle: "Estamos trabalhando em algo incrível que será revelado em breve.",
      year: "2025",
      comingSoon: true,
    },
    {
      badge: "Em breve...",
      title: "Próxima Conquista",
      subtitle: "Estamos trabalhando em algo incrível que será revelado em breve.",
      year: "2025",
      comingSoon: true,
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#030812] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-[#2ed9ff]" />
            <h2 className="text-5xl md:text-6xl font-bold text-white">Reconhecimentos & Conquistas</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Participamos dos principais eventos e conquistamos reconhecimentos que destacam a NxS no cenário de inovação
            do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`
                relative group cursor-pointer transition-all duration-500 hover:scale-105
                aspect-square
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

              <div className="relative h-full p-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="bg-[#2ed9ff] text-black px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap">
                  {award.badge}
                </div>

                <h3 className="text-[#2ed9ff] text-3xl md:text-4xl font-bold leading-tight">{award.title}</h3>

                <p
                  className="text-gray-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: award.subtitle.replace(/(\d{4})/g, '<span class="font-bold">$1</span>'),
                  }}
                />

                {award.isSpecial && (
                  <div className="mt-4">
                    <Brain className="w-12 h-12 text-[#2ed9ff] mx-auto" />
                  </div>
                )}

                {award.comingSoon && !award.isSpecial && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-[#2ed9ff] rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#2ed9ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-8 py-4">
            <Brain className="w-6 h-6 text-[#2ed9ff]" />
            <span className="text-[#2ed9ff] font-semibold text-lg">E isso é só o começo.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
