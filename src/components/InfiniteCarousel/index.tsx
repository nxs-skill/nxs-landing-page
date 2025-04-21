import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const LinearInfiniteCarousel = () => {
  const cards: CardData[] = [
    {
      id: 1,
      title: 'Design Elegante',
      description: 'Soluções modernas para seu negócio',
      imageUrl: 'https://source.unsplash.com/random/400x300?minimal=1',
    },
    {
      id: 2,
      title: 'Performance',
      description: 'Desempenho excepcional em todos os dispositivos',
      imageUrl: 'https://source.unsplash.com/random/400x300?minimal=2',
    },
    {
      id: 3,
      title: 'Simplicidade',
      description: 'Interface limpa e intuitiva',
      imageUrl: 'https://source.unsplash.com/random/400x300?minimal=3',
    },
    {
      id: 4,
      title: 'Inovação',
      description: 'Tecnologia de ponta para suas necessidades',
      imageUrl: 'https://source.unsplash.com/random/400x300?minimal=4',
    },
    {
      id: 5,
      title: 'Confiabilidade',
      description: 'Soluções que você pode contar',
      imageUrl: 'https://source.unsplash.com/random/400x300?minimal=5',
    },
  ];

  return (
    <div className="w-full py-8">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        loop={true}
        speed={8000} // Velocidade linear constante (quanto maior, mais lento)
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="linear-swiper"
      >
        {[...cards, ...cards].map((card, index) => ( // Duplica cards para transição suave
          <SwiperSlide key={`${card.id}-${index}`} className="!w-[280px]">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-50 flex items-center justify-center">
                <img 
                  src={card.imageUrl} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LinearInfiniteCarousel;