
import React, { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const [cidade, setCidade] = useState('São Paulo');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setCidade(data.city);
        }
      })
      .catch(() => {
        setCidade('São Paulo');
      });
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col bg-black">
      {/* Simple decorative elements */}
      <div className="absolute top-6 left-6">
        <Heart className="w-5 h-5 text-red-600 fill-current" />
      </div>
      <div className="absolute top-8 right-8">
        <Star className="w-4 h-4 text-red-600 fill-current" />
      </div>
      <div className="absolute bottom-16 left-8">
        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
      </div>

      {/* Cover Image */}
      <div className="relative h-28 md:h-32 overflow-hidden bg-black">
        <img 
          src="/lovable-uploads/4d5dabb8-adf3-46b6-932f-c07810c73ccd.png" 
          alt="Cover"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Profile Section */}
      <div className="relative -mt-10 px-4 pb-6">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 max-w-4xl mx-auto">
          
          {/* Profile Image */}
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden red-border bg-white simple-shadow">
              <img 
                src="/lovable-uploads/c1d7752d-66c7-4965-b47c-a14bd775f44e.png" 
                alt="Isabella"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator simples */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-600 rounded-full border-2 border-white">
              <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="font-playfair text-2xl md:text-3xl font-bold text-white">
                ISABELA
              </h1>
              <div className="flex gap-1">
                <Star className="w-4 h-4 text-red-600 fill-current" />
                <Star className="w-4 h-4 text-red-600 fill-current" />
                <Star className="w-4 h-4 text-red-600 fill-current" />
              </div>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Tenho 21 anos e sou de <span className="text-red-600 font-semibold">{cidade}</span>
            </p>
          </div>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mt-4">
          <div className="bg-gray-900 rounded-lg p-4 md:p-6 simple-shadow red-border relative">
            {/* Decorative elements simples */}
            <div className="absolute top-2 right-2 text-red-600/30">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            
            <h2 className="text-lg md:text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              PUTA CHEFE NÉ BEBÊ? A 01 🥇
            </h2>
            
            <div className="space-y-2 text-white text-sm md:text-base">
              <p className="leading-relaxed">
                Os vídeos contêm sexo explícito mostrando tudo, vídeo mamando, se masturbando e tudo mais que você pode imaginar! Aqui tem de tudo!!!
              </p>
              
              <div className="bg-red-600 text-white rounded-lg p-3 my-3">
                <p className="font-semibold text-center">
                  NOVINHA DO BUCETÃO 😍😋<br/>
                  BUCETINHA TÃO GOSTOSA E NOVINHA QUE NEM PARECE QUE JÁ FOI USADA!! 🔥😋 🔥
                </p>
              </div>
              
              <p className="leading-relaxed">
                AQUI TAMBÉM TEM MUITO CHAT PRIVADO COM FOTOS E VÍDEOS EXCLUSIVOS QUE MANDO PRA VOCÊ, COMO VOCÊ PEDIR 🍷😈📞
              </p>
              
              <p className="leading-relaxed">
                Conteúdo pesado MESMO, gosto de conversar no chat, aqui você vai ver de tudo e vai se apaixonar!
              </p>
              
              <div className="bg-black text-white rounded-lg p-3 my-3 border border-red-600">
                <p className="font-semibold text-center">
                  ME MANDA FOTO DO PAU QUE EU GOSTO MUITO 😈🍆📞
                </p>
              </div>
              
              <p className="leading-relaxed font-medium text-red-600">
                EU POSTO CONTEÚDO TODOS OS DIAS E FALO COM VOCÊ NO CHAT!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
