import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from "../../assets/Courses-images/imagem.svg";
import Image1 from "../../assets/Courses-images/imagem (1).svg";
import Image2 from "../../assets/Courses-images/imagem (2).svg";
import Image3 from "../../assets/Courses-images/imagem (3).svg";
import Image4 from "../../assets/Courses-images/imagem (4).svg";import Image5 from "../../assets/Courses-images/imagem (5).svg";import Image6 from "../../assets/Courses-images/imagem (6).svg";
import fire from "../../assets/icons/fogo.svg";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  users: string;
}

const InfiniteCarousel = () => {
  const cards: CardData[] = [
    {
      id: 1,
      title: 'Linguagem corporal',
      description: 'Aprenda a ler sinais e se expressar com mais impacto.',
      imageUrl: Image,
      tag: "Comunicação",
      users: "+ de mil alunos"
    },
    {
      id: 2,
      title: 'Palestras e Oratória',
      description: 'Colabore de verdade, com comunicação e alinhamento.',
      imageUrl: Image1,
      tag: "Apresentação",
      users: "+ de mil alunos"
    },
    {
      id: 3,
      title: 'Liderança e gestão de pessoas',
      description: 'Inspire, organize e guie com empatia e estratégia.',
      imageUrl: Image2,
      tag: "Trabalho em equipe",
      users: "+ de mil alunos"
    },
    {
      id: 4,
      title: 'Vendas e Persuasão',
      description: 'Técnicas práticas pra vender ideias (e produtos) com autenticidade.',
      imageUrl: Image3,
      tag: "Comunicação",
      users: "+ de mil alunos"
    },
    {
      id: 5,
      title: 'Rapport',
      description: 'Conquiste empatia e confiança em qualquer conversa.',
      imageUrl: Image4,
      tag: "Comunicação",
      users: "+ de mil alunos"
    },
    {
      id: 6,
      title: 'A Ciência do Sono',
      description: 'Durma melhor, pense melhor, viva melhor.',
      imageUrl: Image5,
      tag: "Psicologia pessoal",
      users: "+ de mil alunos"
    },
    {
      id: 7,
      title: 'Controle Emocional',
      description: 'Lide com pressão, críticas e frustrações com equilíbrio.',
      imageUrl: Image6,
      tag: "Psicologia pessoal",
      users: "+ de mil alunos"
    },
  ];

  const duplicatedCards = [...cards, ...cards, ...cards];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max"
          animate={{
            x: ['0%', '-66.666%'], 
          }}
          transition={{
            duration: 90, 
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedCards.map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className="w-[350px] flex-shrink-0"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="border-[1px] p-6 border-gray-800 bg-[#31D9FE]/85 rounded-lg overflow-hidden shadow-sm mx-2 flex justify-center">
                <h5 className='font-semibold text-xl'>{card.tag}</h5>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max"
          animate={{
            x: ['0%', '-66.666%'],
          }}
          transition={{
            duration: 90,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedCards.map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className="w-[350px] flex-shrink-0"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="border-[1px] p-6 border-gray-800 bg-gray-900/60 rounded-lg overflow-hidden shadow-sm mx-2">
                <div className="h-48 flex flex-col items-center justify-center rounded-xl relative">
                  <span className='bg-[#31D9FE]/85 px-6 py-1 rounded-lg -mb-3 z-10'>
                    <p className='text-lg font-semibold'>{card.tag}</p>
                  </span>
                  <img 
                    src={card.imageUrl} 
                    alt={card.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 flex flex-col items-center">
                  <h3 className="font-medium text-lg mb-2 text-white">{card.title}</h3>
                  <hr className='w-full border-gray-500/40 mb-2' />
                  <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                  <span className='flex items-center gap-2 bg-[#31D9FE]/85 rounded-full px-4 py-1'>
                    <img src={fire} alt="Ícone de fogo" className="w-4 h-4" />
                    <p className="text-sm font-medium">{card.users}</p>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;