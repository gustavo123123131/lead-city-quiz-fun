
import React from 'react';
import { Heart, MessageCircle, Star } from 'lucide-react';

interface QuizStep2Props {
  onBack: () => void;
}

const QuizStep2: React.FC<QuizStep2Props> = ({ onBack }) => {
  const handleWhatsAppAccess = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Vim através do quiz e quero acessar o grupo VIP 💋";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border-4 border-red-600 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 p-4 rounded-full">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-black mb-4">
            🎉 <span className="text-red-600">PARABÉNS!</span> 🎉
          </h1>
          
          <p className="text-gray-700 mb-6">
            Você foi <span className="font-bold text-red-600">aprovada</span> para acessar nosso grupo VIP exclusivo!
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8 border-2 border-gray-200">
          <h3 className="text-lg font-bold text-black mb-4 text-center">
            ✨ O que você vai encontrar:
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-700">
              <Heart className="w-5 h-5 text-red-600 mr-3" />
              <span>Conteúdo exclusivo diário</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <MessageCircle className="w-5 h-5 text-red-600 mr-3" />
              <span>Chat direto comigo</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Star className="w-5 h-5 text-red-600 mr-3" />
              <span>Fotos e vídeos sensuais</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleWhatsAppAccess}
          className="w-full bg-red-600 text-white p-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
        >
          Acessar Grupo VIP 💋
        </button>

        <button
          onClick={onBack}
          className="w-full bg-white text-red-600 p-3 rounded-xl font-semibold border-2 border-red-600 hover:bg-red-50 transition-all duration-300"
        >
          Voltar
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Acesso limitado - Entre agora antes que as vagas acabem!
        </p>
      </div>
    </div>
  );
};

export default QuizStep2;
