import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// Imagens
import screen1 from "../../assets/screens/Rectangle-1.png";
import screen2 from "../../assets/screens/Rectangle-2.png";
import screen3 from "../../assets/screens/Rectangle-3.png";
import screen4 from "../../assets/screens/Rectangle-4.png";
import screen5 from "../../assets/screens/Rectangle-5.png";


const MobileScreenCarousel = () => {
  const screens = [
    { src: "https://i.ibb.co/3yB6XHC5/Rectangle-1.png", name: "Tela 1" },
    { src: "https://i.ibb.co/BHx9TFzD/Rectangle-2.png", name: "Tela 2" },
    { src: "https://i.ibb.co/Kjx2Q95b/Rectangle-3.png", name: "Tela 3" },
    { src: "https://i.ibb.co/Gvy3Nh6q/Rectangle-4.png", name: "Tela 4" },
    { src: "https://i.ibb.co/nsZFLXG6/Rectangle-5.png", name: "Tela 5" },
  ];

  const screens2 = [
    { src: "https://i.ibb.co/Q3j40b6C/Rectangle-6.png", name: "Tela 6" },
    { src: "https://i.ibb.co/W4s9F7Zw/Rectangle-7.png", name: "Tela 7" },
    { src: "https://i.ibb.co/1Yn6v2Vn/Rectangle-8.png", name: "Tela 8" },
    { src: "https://i.ibb.co/fz5HWHS4/Rectangle-9.png", name: "Tela 9" },
    { src: "https://i.ibb.co/YKSWW9m/Rectangle-10.png", name: "Tela 10" },
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  const duplicatedScreens = [...screens, ...screens2];

  return (
    <div data-aos="fade-up" className="relative w-full h-full py-12 px-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {duplicatedScreens.map((screen, index) => {
          const relativeIndex = (index - activeIndex + duplicatedScreens.length) % duplicatedScreens.length;
          const isBehind = relativeIndex > 0 && relativeIndex < duplicatedScreens.length - 5;

          return (
            <SwiperSlide
              key={`${screen.name}-${index}`}
              className={`!w-[250px] !h-[500px] transition-opacity duration-500 ${
                isBehind && relativeIndex > 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="relative w-full h-full flex flex-col items-center">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={screen.src} 
                    alt={screen.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobileScreenCarousel;
