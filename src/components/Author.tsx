import React from 'react';
import { Heart, Briefcase, Users, Star } from 'lucide-react';

const Author = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC8741] to-[#d4743a] rounded-full transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-full h-full flex items-center justify-center">
                <div className="w-32 h-32 bg-[#EC8741] rounded-full flex items-center justify-center">
                  <Heart className="w-16 h-16 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Autora
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong className="text-[#EC8741]">Marcelina Jaime Furtado</strong> é uma mulher cristã, 
              líder, mãe e profissional que venceu desafios emocionais, espirituais e profissionais 
              com fé, coragem e conhecimento.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Através da sua jornada pessoal de superação, descobriu o poder transformador de dizer "não" 
              com propósito e fé. Hoje, partilha a sua experiência para inspirar outras mulheres a 
              quebrar barreiras e viver em liberdade emocional e espiritual.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#EC8741] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#EC8741]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fé</p>
                  <p className="text-sm text-gray-600">Cristã comprometida</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#EC8741] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#EC8741]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maternidade</p>
                  <p className="text-sm text-gray-600">Mãe dedicada</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#EC8741] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#EC8741]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Liderança</p>
                  <p className="text-sm text-gray-600">Profissional de sucesso</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#EC8741] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#EC8741]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Superação</p>
                  <p className="text-sm text-gray-600">História inspiradora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;