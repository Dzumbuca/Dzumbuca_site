import React from 'react';
import { Download, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-16 lg:mb-0">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#EC8741] fill-current" />
              ))}
              <span className="ml-2 text-gray-600">Mais de 10.000 leitores transformados</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Descobre o poder do 
              <span className="text-[#EC8741]">NÃO</span> e transforma a tua história
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A história real de uma mulher que descobriu como a fé, a coragem e o autoconhecimento 
              podem quebrar barreiras emocionais e profissionais. Aprende a dizer "não" com propósito 
              e liberta-te para viver a vida que Deus preparou para ti.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
             <a href="https://pay.hotmart.com/P100840027Y?bid=1752751679477" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto bg-[#EC8741] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4743a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
    <Download className="w-5 h-5 mr-2" />
    Quero desbloquear o poder do NÃO
  </button>
</a>

            </div>
            
            <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500">
              <span>✓ Download imediato</span>
              <span>✓ Formato PDF e ePub</span>
              <span>✓ Garantia 30 dias</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC8741] to-[#d4743a] rounded-lg transform rotate-6 shadow-2xl"></div>
              <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden h-full">
                <img 
                  src="/Imagem WhatsApp 2025-07-14 às 06.10.02_e6d41957.jpg" 
                  alt="Capa do livro O Poder Infinito do Não por Marcelina Jaime Furtado"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;