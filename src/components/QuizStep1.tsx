
import React, { useState, useEffect } from 'react';
import { MapPin, Heart, Users } from 'lucide-react';

interface QuizStep1Props {
  onNext: () => void;
}

const QuizStep1: React.FC<QuizStep1Props> = ({ onNext }) => {
  const [userCity, setUserCity] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');

  useEffect(() => {
    // Detectar cidade do usuário via geolocalização
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=YOUR_API_KEY`
            );
            const data = await response.json();
            if (data.results && data.results[0]) {
              const city = data.results[0].components.city || 
                          data.results[0].components.town || 
                          data.results[0].components.village || 
                          'sua cidade';
              setUserCity(city);
            }
          } catch (error) {
            setUserCity('sua cidade');
          }
        },
        () => {
          setUserCity('sua cidade');
        }
      );
    } else {
      setUserCity('sua cidade');
    }
  }, []);

  const handleAgeSelect = (age: string) => {
    setSelectedAge(age);
  };

  const handleNext = () => {
    if (selectedAge) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border-4 border-red-600 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 p-4 rounded-full">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-black mb-4">
            Acesso ao{' '}
            <span className="text-red-600 font-bold">
              GRUPO SECRETO DE {userCity.toUpperCase()}
            </span>
          </h1>
          
          <div className="flex items-center justify-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-2 text-red-600" />
            <span>Localização detectada: {userCity}</span>
          </div>
          
          <p className="text-gray-700 text-sm">
            Para garantir que você é maior de idade e está na nossa região de atendimento
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-black text-center mb-4">
            Qual sua faixa etária?
          </h3>
          
          {['18-25', '26-35', '36-45', '45+'].map((age) => (
            <button
              key={age}
              onClick={() => handleAgeSelect(age)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 font-semibold ${
                selectedAge === age
                  ? 'bg-red-600 text-white border-red-600 shadow-lg'
                  : 'bg-white text-black border-gray-300 hover:border-red-600 hover:shadow-md'
              }`}
            >
              {age} anos
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAge}
          className={`w-full p-4 rounded-xl font-bold text-lg transition-all duration-300 ${
            selectedAge
              ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continuar <Heart className="inline w-5 h-5 ml-2" />
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Conteúdo exclusivo para maiores de 18 anos
        </p>
      </div>
    </div>
  );
};

export default QuizStep1;
